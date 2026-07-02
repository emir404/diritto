# diritto&consulenza — design system   (source: inferred, 2026-07-02)

Built on the **Avvocato360** website builder ("sitebuilder1", AngularJS SPA). No published brand/style guide found — palette, type and motifs inferred from the rendered site (screenshots), the embedded theme data, and CDN assets. The theme is data-driven (`dati.generale.tema.colori.*`, `caratteri.*`), so exact hex/font tokens below are cross-checked against screenshots.

## Logo
- `assets/images/logo.svg` — horizontal wordmark: a blue "**&**" monogram (stylized ampersand, lowercase "dc" feel) in a soft rounded square, followed by the serif wordmark **diritto&consulenza** (all lowercase, ampersand-joined).
- `assets/images/logo-white.svg` — full white variant for dark/photo backgrounds (used in footer).
- `assets/images/favicon.svg` — "&" monogram mark only.
- Formats seen: SVG only (scalable). Wordmark is always lowercase; copyright renders it "Diritto&Consulenza".

## Colors
Warm, muted, humane palette — deliberately *not* the navy/gold law-firm cliché. Blush neutrals + dusty steel-blue lead, with terracotta, sage and warm-gray supporting. The multicolor set is unified by the hexagon motif (each hex a palette color).

| role | value | evidence |
|---|---|---|
| Page background — blush/rose | `#f4ebe9` | most-frequent hex in shell; hero + footer bg (screenshots home/persone) |
| Blush, lighter variant | `#ede6e4` | shell |
| Header / nav bar — dusty taupe-rose | `#c9b5af` | shell hex; top bar in all screenshots |
| **Primary — dusty steel blue** | `#608ba6` | shell hex; "diritto&consulenza" headline, blue content band, INVIA/form button, team-card name bars, section labels |
| **Secondary — terracotta / rust** | `#9f583e` | shell hex; section underline accent, outline-button border, footer bottom bar |
| Deep red accent | `#bc0c06` | shell hex; used in hexagon set / small accents |
| Sage / mint green | `#9fcfa5` | shell hex; "Contattaci" pill button, green hexagons |
| Warm gray | `#8e8683` | shell hex; italic pull-quote text, gray hexagon tile |
| White | `#ffffff` | content sections |
| Light gray | `#e6e6e6` | form-field fills/borders |

## Typography
Google Fonts loaded (from the shell's `fonts.googleapis.com` request): **Poppins**, **Montserrat**, **Merriweather** (100–900 + italics each), **Arizonia** (script); plus css2 loads of **Abhaya Libre** and **Sofia Sans Semi Condensed**.
- **Headings / wordmark / pull-quotes:** a refined **serif** (Merriweather / Abhaya Libre) — e.g. the hero "diritto&consulenza", page titles "Chi siamo" / "Assistenza alle persone", and the italic mission quote.
- **Body, navigation, buttons, form labels:** clean geometric **sans** (Poppins / Montserrat).
- **Section eyebrows:** small, letter-spaced, UPPERCASE sans in steel blue, sitting above a serif section title (e.g. "COME POSSIAMO AIUTARTI?").
- Arizonia (script) is loaded but not prominent in captured views — likely a decorative flourish only.

## Spacing & shape
- Airy, generous whitespace; interior pages open with a full-bleed gradient hero band, then centered, letter-spaced eyebrow + serif title intros.
- Alternating full-width **color bands** (blush ↔ steel-blue) to segment the long single-column homepage.
- Shape language is dominated by the **hexagon**; rectangular cards/inputs carry only a small border-radius. Buttons are slightly rounded to pill-ish.
- Container: standard centered content column (~1100–1200px) with full-width colored bands behind it.

## Imagery style
- **Hexagons are the signature device.** A honeycomb cluster of colored hexagons is arranged into the **outline of Italy** on the homepage hero — a literal metaphor for a specialist network covering the whole country. Hexagons recur as category tiles (persone/imprese) and as "macro-area" diagrams (`Stamerra-esagoni-*`), and the honeycomb reappears as a faint decorative background behind contact forms.
- **People:** real, warm **color** headshots of the 5 lawyers — posed, several in front of law-book shelves — each on a rectangular card with a steel-blue caption bar ("Avv. <Name>"). Approachable, not stiff/corporate-B&W.
- **Places:** office/city photos for Bologna, Lecce and Milano (Milano represented by the CityLife "Tre Torri" towers).
- **Interior heroes:** soft blue→cream gradient/watercolor bands with a faint "&" monogram watermark.
- **Practice areas & news:** warm-toned generic stock photography (hands, house, medical, finance, IP/design).

## Components observed
- **Header:** dusty-taupe sticky bar; logo left; horizontal nav with dropdowns (Chi siamo, Per le persone, Per le imprese); mint-green "Contattaci" pill top-right.
- **Buttons:** filled steel-blue with arrow ("INVIA →"), mint-green pill ("CONTATTACI"), terracotta *outline* button ("CONTATTA I PROFESSIONISTI").
- **Team card:** rectangular color photo + solid steel-blue caption bar, serif name in white.
- **Category tile:** large solid hexagon (palette color) + area title + "Scopri di più 🔍" link.
- **Content band:** full-width steel-blue section, white text, short terracotta underline under the heading.
- **Contact form:** stacked full-width light-gray inputs (Nome e cognome, E-mail, Numero di telefono, Città e provincia, Messaggio) + GDPR checkbox + steel-blue submit.
- **Footer:** blush bg, three office columns with blue serif city names; terracotta bottom bar with copyright + "Realizzato da Avvocato360".

## Brand anchors  (a rebuild must respect these)
- **Name styling:** lowercase, ampersand-joined **diritto&consulenza** (the "&" is the logo mark). Copyright form: "Diritto&Consulenza".
- **Logo set:** blue "&" monogram + serif wordmark (color + white SVG) and the "&" favicon.
- **Signature motif:** the **hexagon / honeycomb** system — above all the Italy-shaped hexagon cluster (the network-across-Italy metaphor).
- **Palette:** steel blue + terracotta + sage on blush neutrals.
- **Positioning line:** "**Network multidisciplinare**", est. **2009**, sedi **Bologna · Lecce · Milano**.
- **Voice/mission line:** "Accompagniamo il Cliente in ogni passo, sostenendolo con empatia, rassicurandolo con competenza e operando con esperienza."
