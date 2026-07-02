import type { Metadata } from "next";
import { TreatedImage } from "@library/components/TreatedImage";
import { Team } from "@/components/site/Team";
import { ContactCta } from "@/components/site/ContactCta";
import { lawyers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Professionisti",
  description:
    "I cinque professionisti del network diritto&consulenza: Giovanni Prearo, Valentina Stamerra, Valeria Esposito, Beatrice Mannarini, Alberto Pisanello.",
};

export default function ProfessionistiPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-kicker text-primary">Chi siamo</p>
          <h1 className="text-display mt-4 text-foreground">I professionisti del network</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Persone reali, con nome e responsabilità. Cinque specialisti che, insieme, coprono le
            principali aree di interesse di privati e imprese — su tutto il territorio nazionale.
          </p>
        </div>
        <div className="mt-14">
          <Team />
        </div>
      </section>

      <div className="border-t border-border">
        {lawyers.map((l, i) => (
          <section key={l.slug} id={l.slug} className={`scroll-mt-24 ${i % 2 === 1 ? "bg-muted" : ""}`}>
            <div className="mx-auto grid max-w-5xl items-start gap-10 px-6 py-16 sm:py-20 md:grid-cols-[300px_1fr] md:gap-14">
              <div className={`mx-auto w-56 md:w-full ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
                  <TreatedImage
                    src={l.image}
                    alt={`Avv. ${l.name}`}
                    treatment="duotone"
                    fill
                    className="[&>img]:object-top"
                  />
                </div>
              </div>
              <div>
                <p className="text-kicker text-muted-foreground">Avv.</p>
                <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">{l.name}</h2>
                <div className="mt-3 h-px w-12 bg-[var(--color-brand-terracotta)]" />
                <p className="mt-3 text-primary">{l.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{l.cities}</p>
                {l.founder && (
                  <p className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.16em] text-brand-terracotta">
                    Socia fondatrice
                  </p>
                )}

                <div className="mt-6 space-y-3 leading-relaxed text-muted-foreground">
                  {l.bio.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {l.areas.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {l.contact && (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                    {l.contact.phone && (
                      <a
                        href={`tel:${l.contact.phone.replace(/\s+/g, "")}`}
                        className="tabular-nums text-primary underline-offset-4 hover:underline"
                      >
                        {l.contact.phone}
                      </a>
                    )}
                    {l.contact.email && (
                      <a
                        href={`mailto:${l.contact.email}`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {l.contact.email}
                      </a>
                    )}
                    {l.contact.site && (
                      <a
                        href={l.contact.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        Sito personale ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      <ContactCta />
    </>
  );
}
