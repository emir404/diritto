/** Shared button/link styles — echo their two CTAs (steel-blue filled, terracotta outline). */

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--dl-accent)] px-6 py-3 text-sm font-medium text-[var(--dl-paper)] transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2";

export const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-brand-terracotta)] px-6 py-3 text-sm font-medium text-[var(--color-brand-terracotta)] transition-[transform,background-color,color] duration-150 ease-out hover:bg-[var(--color-brand-terracotta)] hover:text-[var(--dl-paper)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2";

/** Small uppercase eyebrow used above section titles. */
export const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--dl-accent)]";
