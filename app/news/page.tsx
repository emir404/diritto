import type { Metadata } from "next";
import { ContactCta } from "@/components/site/ContactCta";
import { news } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description:
    "Approfondimenti e note giuridiche a cura dei professionisti del network diritto&consulenza: proprietà intellettuale, diritto di famiglia e successioni, immobiliare, impresa e altro.",
};

export default function NewsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Aggiornamenti</p>
          <h1 className="text-display mt-4 text-foreground">News</h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Approfondimenti e note giuridiche a cura dei professionisti del network. Gli articoli si
            aprono sul sito del network.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {news.map((a) => (
            <li key={a.title}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <time className="shrink-0 text-xs uppercase tracking-[0.14em] tabular-nums text-muted-foreground sm:w-24">
                  {a.date}
                </time>
                <div className="flex-1">
                  <h2 className="font-display text-lg leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {a.title}
                  </h2>
                  {a.author && (
                    <p className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      Avv. {a.author}
                    </p>
                  )}
                </div>
                <span
                  className="shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:self-center"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <ContactCta />
    </>
  );
}
