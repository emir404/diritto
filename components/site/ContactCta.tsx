import Link from "next/link";

/** Closing conversion band — the memorable last impression: dark, big, one goal. */
export function ContactCta() {
  return (
    <section className="section-dark dl-grain relative overflow-hidden">
      <span
        aria-hidden="true"
        className="dl-amp pointer-events-none absolute -bottom-24 -right-6 select-none text-[18rem] leading-none sm:text-[26rem]"
        style={{ color: "color-mix(in oklab, var(--dl-paper) 6%, transparent)" }}
      >
        &amp;
      </span>
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p className="text-kicker text-brand-sage">Come possiamo aiutarti?</p>
        <h2 className="text-display mt-4 text-[var(--dl-paper)]">Il primo passo è una domanda.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--dl-paper-dim)]">
          Contattaci ai recapiti delle nostre sedi o compila il modulo: ti ricontattiamo noi, senza
          impegno.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-7 py-3.5 text-sm font-medium text-[var(--dl-paper)] transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dl-paper)]"
          >
            Contatta i professionisti
          </Link>
          <span className="text-sm text-[var(--dl-paper-dim)]">oppure</span>
          <a
            href="tel:+390223177040"
            className="font-display text-xl text-[var(--dl-paper)] underline-offset-4 hover:underline"
          >
            <span className="tabular-nums">+39 02 23177040</span>
          </a>
        </div>
      </div>
    </section>
  );
}
