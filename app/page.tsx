/**
 * diritto&consulenza — home  (editorial redesign)
 * ============================================================================
 * DIRECTION — "spend your boldness in one place." The honeycomb is the single
 * hero signature (now carrying the five faces + three cities). Stats sit directly
 * under the hero; the practice areas become a persone/imprese fork; a light quote
 * band and a News teaser round it out. Only the closing band stays dark.
 * Keep: name/logo/&, palette anchors, verbatim Italian copy, real facts.
 * ============================================================================
 */
import Link from "next/link";
import { HoneycombHero } from "@/components/site/HoneycombHero";
import { Team } from "@/components/site/Team";
import { Cities } from "@/components/site/Cities";
import { ContactCta } from "@/components/site/ContactCta";
import { btnPrimary } from "@/lib/ui";
import { site, areas, news } from "@/lib/data";

const stats = [
  { n: "2009", l: "Network dal" },
  { n: "3", l: "Sedi in Italia" },
  { n: "11", l: "Aree di attività" },
  { n: "5", l: "Professionisti" },
];

const fork = [
  {
    label: "Per le persone",
    href: "/aree-attivita#per-le-persone",
    color: "var(--color-brand-terracotta)",
    areas: areas.filter((a) => a.segment === "persone"),
  },
  {
    label: "Per le imprese",
    href: "/aree-attivita#per-le-imprese",
    color: "var(--color-brand-blue)",
    areas: areas.filter((a) => a.segment === "imprese"),
  },
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
          <div className="pointer-events-none -mr-8 mt-6 w-[110%] lg:hidden">
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
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
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

      {/* ── STATS — directly under the hero ── */}
      <section className="border-y border-brand-terracotta/25 bg-[var(--dl-paper-soft)]">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl leading-none tracking-tight text-primary tabular-nums sm:text-5xl">
                  {s.n}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO (asymmetric) ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-kicker text-primary">Network diritto&amp;consulenza</p>
            <h2 className="text-display mt-4 text-foreground">
              Servizi legali approfonditi e trasversali.
            </h2>
          </div>
          <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:pt-2">
            {site.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION — light, de-emphasized; the three values shown in context ── */}
      <section className="bg-muted">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <blockquote className="font-display text-[clamp(1.35rem,1rem+1.8vw,2.2rem)] font-light italic leading-[1.32] text-foreground">
            &ldquo;Accompagniamo il Cliente in ogni passo, sostenendolo con{" "}
            <span className="font-normal not-italic text-brand-terracotta">empatia</span>,
            rassicurandolo con{" "}
            <span className="font-normal not-italic text-brand-terracotta">competenza</span> e
            operando con{" "}
            <span className="font-normal not-italic text-brand-terracotta">esperienza</span>.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── THE PEOPLE — duotone portraits ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Chi siamo</p>
          <h2 className="text-display mt-4 text-foreground">I professionisti del network</h2>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cinque professionisti con competenze ed esperienze diverse, che si affiancano su ogni
            fronte — dal diritto di famiglia e delle successioni alla tutela della proprietà
            intellettuale.
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

      {/* ── PRACTICE AREAS — the persone / imprese fork ── */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-kicker text-primary">Cosa facciamo</p>
            <h2 className="text-display mt-4 text-foreground">Le aree di attività</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
              Undici materie, per soggetti privati e imprese — ciascuna con un professionista di
              riferimento.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {fork.map((f) => (
              <Link
                key={f.label}
                href={f.href}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-background p-7 transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_rgba(36,29,25,0.28)] sm:p-8"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: f.color }}
                  aria-hidden="true"
                />
                <p className="text-kicker" style={{ color: f.color }}>
                  {f.label}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {f.areas.map((a) => (
                    <li
                      key={a.slug}
                      className="flex items-baseline gap-3 text-sm text-foreground"
                    >
                      <span
                        className="hex-tick mt-1 shrink-0 text-[0.6rem]"
                        style={{ color: f.color }}
                        aria-hidden="true"
                      />
                      {a.title}
                    </li>
                  ))}
                </ul>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: f.color }}
                >
                  Scopri di più
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS — latest legal-insight articles ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-kicker text-primary">Aggiornamenti</p>
            <h2 className="text-display mt-4 text-foreground">News</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
              Approfondimenti e note giuridiche a cura dei professionisti del network.
            </p>
          </div>
          <Link
            href="/news"
            className="hidden shrink-0 font-medium text-primary underline-offset-4 hover:underline sm:inline"
          >
            Tutte le news →
          </Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-3">
          {news.slice(0, 3).map((a) => (
            <a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-brand-terracotta/30 pt-5"
            >
              <time className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {a.date}
              </time>
              <h3 className="mt-2 font-display text-lg leading-snug text-foreground transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              {a.author && (
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Avv. {a.author}
                </p>
              )}
            </a>
          ))}
        </div>
        <Link
          href="/news"
          className="mt-10 inline-block font-medium text-primary underline-offset-4 hover:underline sm:hidden"
        >
          Tutte le news →
        </Link>
      </section>

      {/* ── THE THREE OFFICES ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Dove siamo</p>
          <h2 className="text-display mt-4 text-foreground">Le nostre sedi</h2>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Con diverse sedi in Italia, il network presta la propria attività su tutto il territorio
            nazionale.
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
