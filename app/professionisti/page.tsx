import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { TreatedImage } from "@library/components/TreatedImage";
import { Team } from "@/components/site/Team";
import { ContactCta } from "@/components/site/ContactCta";
import { lawyers, lawyerPhone } from "@/lib/data";
import { linkContact, portraitDuo } from "@/lib/ui";

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
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Il network diritto&amp;consulenza nasce dalla collaborazione di più professionisti: cinque
            avvocati che, con competenze ed esperienze diverse, assicurano un&rsquo;assistenza
            multidisciplinare e trasversale a privati e imprese, su tutto il territorio nazionale.
          </p>
        </div>
        <div className="mt-14">
          <Team showContact />
        </div>
      </section>

      <div className="border-t border-border">
        {lawyers.map((l, i) => {
          const phone = lawyerPhone(l);
          return (
            <section
              key={l.slug}
              id={l.slug}
              className={`scroll-mt-24 ${i % 2 === 1 ? "bg-muted" : ""}`}
            >
              <div className="mx-auto grid max-w-5xl items-start gap-10 px-6 py-16 sm:py-20 md:grid-cols-[300px_1fr] md:gap-14">
                <div className={`mx-auto w-56 md:w-full ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
                    <TreatedImage
                      src={l.image}
                      alt={`Avv. ${l.name}`}
                      treatment="duotone"
                      shadow={portraitDuo.shadow}
                      highlight={portraitDuo.highlight}
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

                  <div className="mt-6 max-w-prose space-y-3 leading-relaxed text-muted-foreground">
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

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    {phone && (
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className={`${linkContact} tabular-nums`}
                        aria-label={`Chiama Avv. ${l.name}`}
                      >
                        <Phone className="size-3.5" aria-hidden="true" />
                        {phone}
                      </a>
                    )}
                    {l.contact?.email && (
                      <a href={`mailto:${l.contact.email}`} className={linkContact}>
                        <Mail className="size-3.5" aria-hidden="true" />
                        {l.contact.email}
                      </a>
                    )}
                    {l.contact?.site && (
                      <a
                        href={l.contact.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkContact}
                      >
                        Sito personale ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ContactCta />
    </>
  );
}
