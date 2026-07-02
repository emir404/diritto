import type { CSSProperties, ReactNode } from "react";

/**
 * HexCell — the honeycomb primitive. A pointy-top hexagon holding either a
 * solid brand color or a duotone-treated image, with optional centered content
 * (a label, an icon, a glyph). Compose many into a honeycomb to re-express a
 * client's "network / cellular / interlocking" motif (per FEEL.md).
 *
 * Styles in treatments/hexagon.css. Server component; plain <img> by design
 * (the treatment needs a real element). Origin: dirittoeconsulenza.it (/create).
 */

type HexCellProps = {
  /** solid fill color when no `src` (e.g. a brand cell) */
  color?: string;
  /** image src → rendered duotone inside the cell */
  src?: string;
  alt?: string;
  /** duotone dark end — defaults to var(--dl-duo-shadow) */
  shadow?: string;
  /** duotone light end — defaults to var(--dl-duo-highlight) */
  highlight?: string;
  /** short label centered on the cell */
  label?: string;
  /** overrides `label` — free content centered in the cell */
  children?: ReactNode;
  /** above-the-fold image cell → eager + high fetch priority (default lazy) */
  priority?: boolean;
  className?: string;
};

export function HexCell({
  color,
  src,
  alt = "",
  shadow,
  highlight,
  label,
  children,
  priority = false,
  className = "",
}: HexCellProps) {
  return (
    <div
      className={`dl-hexcell dl-hex ${className}`}
      style={
        src
          ? ({ background: shadow ?? "var(--dl-duo-shadow, var(--dl-ink))" } as CSSProperties)
          : ({ background: color } as CSSProperties)
      }
    >
      {src && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="dl-hexcell-img"
            src={src}
            alt={alt}
            width={866}
            height={1000}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
          <span
            className="dl-hexcell-duo"
            aria-hidden="true"
            style={{ background: highlight ?? "var(--dl-duo-highlight, var(--dl-accent))" }}
          />
        </>
      )}
      {(children || label) && <span className="dl-hexcell-label">{children ?? label}</span>}
    </div>
  );
}
