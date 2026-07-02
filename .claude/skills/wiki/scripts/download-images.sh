#!/usr/bin/env bash
# Extract and download content images referenced by saved HTML files.
# Usage: download-images.sh <out-dir> <base-url> <html-file> [more.html ...]
# Sources: <img> src/srcset (any URL — proxies like /_next/image have no
# extension), og:image/twitter:image, plus any *.jpg/png/webp/avif URL.
# Caps: 20 files, 2MB each. Drops non-image payloads (mime-checked), tiny
# rasters (<5KB), tiny SVGs (<200B), and sprite/favicon/pixel URLs.
# Extensions are corrected from the real content type. Always exits 0.
set -u

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

outdir="${1:?usage: download-images.sh <out-dir> <base-url> <html...>}"
base="${2:?usage: download-images.sh <out-dir> <base-url> <html...>}"
shift 2
[ $# -ge 1 ] || { echo "[skip] no html files given"; exit 0; }

base="${base%/}"
mkdir -p "$outdir"
tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT

for f in "$@"; do
  [ -s "$f" ] || continue
  # <img> tags: src + largest srcset candidate (no extension requirement)
  grep -oE '<img[^>]+>' "$f" 2>/dev/null | grep -oE ' src="[^"]+"' | sed -E 's/^ src="//; s/"$//'
  grep -oE '<img[^>]+>' "$f" 2>/dev/null | grep -oE 'srcset="[^"]+"' | sed -E 's/^srcset="//; s/"$//' | \
    awk -F, '{print $NF}' | awk '{print $1}'
  # social preview images
  grep -oE '<meta[^>]+(og:image|twitter:image)[^>]+>' "$f" 2>/dev/null | \
    grep -oE 'content="[^"]+"' | sed -E 's/^content="//; s/"$//'
  # anything else that looks like an image file
  grep -oE '(src|content|href)="[^"]+"' "$f" 2>/dev/null | sed -E 's/^[a-z]+="//; s/"$//' | \
    grep -iE '\.(jpe?g|png|webp|avif)([?&#]|$)'
done | sed -E 's/&amp;/\&/g' | awk 'NF' | awk '!seen[$0]++' > "$tmp"

count=0
while IFS= read -r u; do
  [ "$count" -ge 20 ] && break
  case "$u" in
    data:*|blob:*) continue ;;
    //*) u="https:${u}" ;;
    http://*|https://*) ;;
    /*) u="${base}${u}" ;;
    *) u="${base}/${u}" ;;
  esac

  low=$(printf '%s' "$u" | tr 'A-Z' 'a-z')
  case "$low" in
    *favicon*|*sprite*|*pixel*|*badge*|*emoji*|*gravatar*|*apple-touch*) continue ;;
  esac

  # filename: decode %2F so proxy URLs (e.g. /_next/image?url=...) stay unique
  name=$(printf '%s' "$u" | sed -E 's/%2[Ff]/-/g; s/#.*$//' | awk -F/ '{print $NF}' | tr -cd 'A-Za-z0-9._-' | tail -c 80)
  [ -n "$name" ] || continue
  [ -e "$outdir/$name" ] && continue

  curl -sL --compressed -A "$UA" --connect-timeout 8 --max-time 25 \
    --max-filesize 2097152 -o "$outdir/$name" "$u" 2>/dev/null
  [ -s "$outdir/$name" ] || { rm -f "$outdir/$name"; continue; }

  size=$(wc -c < "$outdir/$name" | tr -d ' ')
  ctype=$(file -b --mime-type "$outdir/$name" 2>/dev/null || echo unknown)
  min=5120
  case "$ctype" in
    image/jpeg) ext=jpg ;;
    image/png) ext=png ;;
    image/webp) ext=webp ;;
    image/avif) ext=avif ;;
    image/gif) ext=gif ;;
    image/svg+xml) ext=svg; min=200 ;;
    text/xml|text/html)
      # SVGs sometimes sniff as xml/html — trust them only with a .svg name
      case "$low" in *.svg*) ext=svg; min=200 ;; *) rm -f "$outdir/$name"; continue ;; esac
      ;;
    *) rm -f "$outdir/$name"; continue ;;
  esac
  if [ "$size" -lt "$min" ]; then rm -f "$outdir/$name"; continue; fi

  case "$name" in
    *."$ext") ;;
    *)
      newname="${name%.*}.$ext"
      [ -e "$outdir/$newname" ] && newname="${name%.*}-$count.$ext"
      mv "$outdir/$name" "$outdir/$newname" && name="$newname"
      ;;
  esac

  count=$((count + 1))
  echo "[ok] $name ($size bytes) <- $u"
done < "$tmp"

echo "[done] $count image(s) -> $outdir"
