/**
 * diritto&consulenza — home  (editorial redesign)
 * ============================================================================
 * DIRECTION — "spend your boldness in one place." The honeycomb is the single
 * hero signature; every other section was de-hexed into editorial, high-contrast
 * treatments. Two deep-ink anchors (mission + closing) give the page contrast &
 * gravitas; large steel-blue duotone photography carries people & places; the
 * practice areas become a typographic index. Type: Fraunces display + Poppins.
 * Keep: name/logo/&, palette anchors, verbatim Italian copy, real facts.
 * ============================================================================
 */
import Link from "next/link";
import { HoneycombHero } from "@/components/site/HoneycombHero";
import { Team } from "@/components/site/Team";
import { AreaIndex } from "@/components/site/AreaIndex";
import { Cities } from "@/components/site/Cities";
import { ContactCta } from "@/components/site/ContactCta";
import { btnPrimary } from "@/lib/ui";
import { site } from "@/lib/data";

const stats = [
  { n: "2009", l: "Network dal" },
  { n: "3", l: "Sedi in Italia" },
  { n: "11", l: "Aree di attività" },
  { n: "5", l: "Professionisti" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO: the signature — an oversized honeycomb bleeding off the screen ── */}
      <section className="relative overflow-hidden">
        {/* desktop: big honeycomb bleeding off the top-right edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-7%] top-[-7%] hidden w-[56vw] max-w-[960px] lg:block"
        >
          <HoneycombHero />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* mobile: honeycomb up top, bleeding off the right edge */}
          <div className="pointer-events-none -mr-10 mt-6 w-[116%] lg:hidden">
            <HoneycombHero />
          </div>

          <div className="max-w-xl py-12 lg:flex lg:min-h-[88vh] lg:max-w-[47%] lg:flex-col lg:justify-center lg:py-0">
            <p className="text-kicker flex items-center gap-2.5 text-primary">
              <span className="hex-tick text-brand-terracotta" aria-hidden="true" />
              Bologna · Lecce · Milano — dal {site.since}
            </p>
            <h1 translate="no" className="text-hero mt-6 font-medium text-foreground">
              diritto<span className="dl-amp italic text-brand-blue">&amp;</span>
              <wbr />
              consulenza
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-brand-terracotta" aria-hidden="true" />
              <p className="font-display text-2xl italic text-primary sm:text-3xl">
                Network multidisciplinare
              </p>
            </div>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Una rete di specialisti attorno al tuo problema. In tutta Italia, con{" "}
              <span className="dl-marker">empatia</span> e{" "}
              <span className="dl-marker">competenza</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/contatti" className={btnPrimary}>
                Contatta i professionisti
              </Link>
              <Link
                href="/aree-attivita"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Le aree di attività →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO (asymmetric) + editorial static stats ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-kicker text-primary">Network diritto&amp;consulenza</p>
            <h2 className="text-display mt-4 text-foreground">
              Servizi legali approfonditi e trasversali.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground lg:pt-2">
            {site.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-brand-terracotta/30 pt-10 sm:mt-20 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl leading-none tracking-tight text-primary tabular-nums sm:text-6xl">
                {s.n}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION — deep-ink anchor + typographic triad ── */}
      <section className="section-dark dl-grain relative overflow-hidden">
        <span
          aria-hidden="true"
          className="dl-amp pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 select-none text-[24rem] leading-none lg:block"
          style={{ color: "color-mix(in oklab, var(--dl-paper) 5%, transparent)" }}
        >
          &amp;
        </span>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <blockquote className="font-display text-[clamp(1.6rem,1rem+2.4vw,2.9rem)] font-light italic leading-[1.28] text-[var(--dl-paper)]">
            &ldquo;Accompagniamo il Cliente in ogni passo, sostenendolo con empatia, rassicurandolo
            con competenza e operando con esperienza.&rdquo;
          </blockquote>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {site.values.map((w, i) => (
              <span key={w} className="inline-flex items-center gap-6">
                {i > 0 && <span className="hex-tick text-brand-terracotta" aria-hidden="true" />}
                <span className="font-display text-2xl italic text-[var(--dl-paper)] sm:text-3xl">
                  {w}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PEOPLE — duotone portraits ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Chi siamo</p>
          <h2 className="text-display mt-4 text-foreground">I professionisti del network</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Persone reali, con nome e responsabilità: cinque specialisti che si affiancano su ogni
            fronte, dal diritto di famiglia alla proprietà intellettuale.
          </p>
        </div>
        <div className="mt-14">
          <Team />
        </div>
        <div className="mt-12">
          <Link
            href="/professionisti"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Conosci tutti i professionisti →
          </Link>
        </div>
      </section>

      {/* ── PRACTICE AREAS — typographic index ── */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-kicker text-primary">Cosa facciamo</p>
            <h2 className="text-display mt-4 text-foreground">Le aree di attività</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Undici materie, per soggetti privati e imprese — ciascuna con un professionista di
              riferimento.
            </p>
          </div>
          <div className="mt-14">
            <AreaIndex />
          </div>
        </div>
      </section>

      {/* ── THE THREE CITIES — large duotone, tradition ↔ modernity ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Dove siamo</p>
          <h2 className="text-display mt-4 text-foreground">Una rete lunga l&rsquo;Italia</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Dalla Bologna medievale delle Due Torri al barocco leccese, fino alla Milano
            contemporanea delle Tre Torri: da Nord a Sud, la stessa cura.
          </p>
        </div>
        <div className="mt-16">
          <Cities />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
