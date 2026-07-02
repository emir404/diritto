/** Shared button/link styles — warm terracotta CTA (client's own warm accent), steel-blue text links. */

/** Filled primary CTA — terracotta with a real hover (lift + soft shadow), not just a dim. */
export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-6 py-3 text-sm font-medium text-[var(--dl-paper)] shadow-sm transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--color-brand-terracotta)_90%,black)] hover:shadow-[0_12px_26px_-10px_rgba(159,88,62,0.6)] active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-terracotta)]";

export const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-brand-terracotta)] px-6 py-3 text-sm font-medium text-[var(--color-brand-terracotta)] transition-[transform,background-color,color] duration-200 ease-out hover:bg-[var(--color-brand-terracotta)] hover:text-[var(--dl-paper)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-terracotta)]";

/** Small uppercase eyebrow used above section titles. */
export const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--dl-accent)]";

/**
 * Tappable phone/contact link — a persistent underline so it reads as interactive
 * on touch devices (where there is no hover). Use for `tel:`/`mailto:` links.
 */
export const linkContact =
  "inline-flex items-center gap-1.5 text-[var(--dl-accent)] underline decoration-[color-mix(in_oklab,var(--dl-accent)_35%,transparent)] decoration-1 underline-offset-4 transition-colors hover:decoration-[var(--dl-accent)]";

/**
 * Lighter steel duotone for PORTRAITS (faces read too dark under the default
 * near-black duotone). Pass to TreatedImage/HexCell `shadow`/`highlight`.
 * City/landmark photos keep the default (darker) duotone.
 */
export const portraitDuo = { shadow: "#3a4552", highlight: "#cfd8dd" } as const;
