import type { Metadata } from "next";
import Link from "next/link";
import { AreaIndex } from "@/components/site/AreaIndex";
import { ContactCta } from "@/components/site/ContactCta";
import { areas, lawyers, type Segment } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aree di attività",
  description:
    "Le undici aree di attività del network diritto&consulenza, per soggetti privati e imprese: famiglia e successioni, malasanità, diritto bancario, proprietà intellettuale, impresa e altro.",
};

const lawyerBySlug: Record<string, (typeof lawyers)[number]> = Object.fromEntries(
  lawyers.map((l) => [l.slug, l]),
);

const groups: { segment: Segment; label: string }[] = [
  { segment: "persone", label: "Per le persone" },
  { segment: "imprese", label: "Per le imprese" },
];

export default function AreePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Cosa facciamo</p>
          <h1 className="text-display mt-4 text-foreground">Le aree di attività</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Undici materie, per soggetti privati e imprese — ciascuna con un professionista di
            riferimento. Scorri l&rsquo;indice o approfondisci qui sotto.
          </p>
        </div>
        <div className="mt-14">
          <AreaIndex />
        </div>
      </section>

      {groups.map(({ segment, label }, gi) => (
        <div key={segment} className={gi % 2 === 1 ? "bg-muted" : "border-t border-border"}>
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <p className="text-kicker text-brand-terracotta">{label}</p>
            <div className="mt-10 space-y-16">
              {areas
                .filter((a) => a.segment === segment)
                .map((a) => (
                  <article key={a.slug} id={a.slug} className="scroll-mt-24">
                    <div className="flex items-center gap-3">
                      <span className="hex-tick text-lg" style={{ color: a.color }} aria-hidden="true" />
                      <h2 className="font-display text-2xl text-foreground sm:text-3xl">{a.title}</h2>
                    </div>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      {a.summary ??
                        `Il network presta consulenza e assistenza in materia di ${a.title.toLowerCase()}, in fase stragiudiziale e giudiziale.`}
                    </p>

                    {a.services && (
                      <ul className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
                        {a.services.map((s) => (
                          <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                            <span
                              className="hex-tick mt-1 shrink-0 text-[0.6rem]"
                              style={{ color: a.color }}
                              aria-hidden="true"
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}

                    {a.lawyers && a.lawyers.length > 0 && (
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          Referenti:
                        </span>
                        {a.lawyers.map((slug) => (
                          <Link
                            key={slug}
                            href={`/professionisti#${slug}`}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground transition-colors hover:text-primary"
                          >
                            Avv. {lawyerBySlug[slug]?.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
            </div>
          </div>
        </div>
      ))}

      <ContactCta />
    </>
  );
}
