import type { Metadata } from "next";
import Link from "next/link";
import { TreatedImage } from "@library/components/TreatedImage";
import { ContactCta } from "@/components/site/ContactCta";
import { areas, lawyers, type Segment } from "@/lib/data";
import { portraitDuo } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Aree di attività",
  description:
    "Le undici aree di attività del network diritto&consulenza, per soggetti privati e imprese: famiglia e successioni, malasanità, diritto bancario, proprietà intellettuale, impresa e altro.",
};

const lawyerBySlug: Record<string, (typeof lawyers)[number]> = Object.fromEntries(
  lawyers.map((l) => [l.slug, l]),
);

const groups: { segment: Segment; label: string; anchor: string; color: string }[] = [
  {
    segment: "persone",
    label: "Per le persone",
    anchor: "per-le-persone",
    color: "var(--color-brand-terracotta)",
  },
  {
    segment: "imprese",
    label: "Per le imprese",
    anchor: "per-le-imprese",
    color: "var(--color-brand-blue)",
  },
];

export default function AreePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Cosa facciamo</p>
          <h1 className="text-display mt-4 text-foreground">Le aree di attività</h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Undici materie, per soggetti privati e imprese — ciascuna con un professionista di
            riferimento.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {groups.map((g) => (
            <a
              key={g.anchor}
              href={`#${g.anchor}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[var(--dl-paper-soft)]"
            >
              <span className="hex-tick" style={{ color: g.color }} aria-hidden="true" />
              {g.label}
            </a>
          ))}
        </div>
      </section>

      {groups.map((g) => {
        const segAreas = areas.filter((a) => a.segment === g.segment);
        return (
          <section key={g.segment} id={g.anchor} className="scroll-mt-20 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
              <div className="flex items-center gap-3">
                <span
                  className="hex-tick text-lg"
                  style={{ color: g.color }}
                  aria-hidden="true"
                />
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">{g.label}</h2>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {segAreas.map((a) => (
                  <article
                    key={a.slug}
                    id={a.slug}
                    className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg border border-border bg-background p-6"
                  >
                    <span
                      className="-mx-6 -mt-6 mb-5 h-1"
                      style={{ backgroundColor: a.color }}
                      aria-hidden="true"
                    />
                    <div className="flex items-start gap-2.5">
                      <span
                        className="hex-tick mt-1.5 shrink-0"
                        style={{ color: a.color }}
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-lg leading-tight text-foreground">
                        {a.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {a.summary ??
                        `Il network presta consulenza e assistenza in materia di ${a.title.toLowerCase()}, in fase stragiudiziale e giudiziale.`}
                    </p>

                    {a.services && (
                      <ul className="mt-4 space-y-1.5">
                        {a.services.map((s) => (
                          <li key={s} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                            <span
                              className="hex-tick mt-1 shrink-0 text-[0.5rem]"
                              style={{ color: a.color }}
                              aria-hidden="true"
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}

                    {a.lawyers && a.lawyers.length > 0 && (
                      <div className="mt-auto border-t border-border pt-4">
                        <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                          {a.lawyers.length > 1 ? "Referenti" : "Referente"}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2.5">
                          {a.lawyers.map((slug) => {
                            const l = lawyerBySlug[slug];
                            if (!l) return null;
                            return (
                              <Link
                                key={slug}
                                href={`/professionisti#${slug}`}
                                className="group flex items-center gap-2"
                              >
                                <span className="relative size-8 shrink-0 overflow-hidden rounded-full outline outline-1 -outline-offset-1 outline-black/10">
                                  <TreatedImage
                                    src={l.image}
                                    alt={`Avv. ${l.name}`}
                                    treatment="duotone"
                                    shadow={portraitDuo.shadow}
                                    highlight={portraitDuo.highlight}
                                    fill
                                    className="[&>img]:object-top"
                                  />
                                </span>
                                <span className="text-xs font-medium text-foreground transition-colors group-hover:text-primary">
                                  Avv. {l.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <ContactCta />
    </>
  );
}
