import type { Metadata } from "next";
import { TreatedImage } from "@library/components/TreatedImage";
import { ContactForm } from "@/components/site/ContactForm";
import { offices } from "@/lib/data";
import { linkContact } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta il network diritto&consulenza. Sedi a Bologna, Lecce e Milano — scrivici o chiamaci per una prima valutazione.",
};

export default function ContattiPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-kicker text-primary">Contatti</p>
        <h1 className="text-display mt-4 text-foreground">Parliamone.</h1>
        <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
          Contattaci ai recapiti delle nostre sedi o compila il modulo per essere ricontattato: la
          prima valutazione è senza impegno.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <ContactForm />

        <div className="space-y-8">
          {offices.map((o) => (
            <div key={o.city} className="flex gap-5">
              <div className="w-24 shrink-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
                  <TreatedImage src={o.image} alt={`Sede di ${o.city}`} treatment="duotone" fill />
                </div>
              </div>
              <div>
                <h2 className="font-display text-xl text-foreground">{o.city}</h2>
                <address className="mt-2 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
                  {o.addresses.map((a) => (
                    <div key={a}>{a}</div>
                  ))}
                  {o.phones.map((p) => (
                    <div key={p}>
                      <a
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className={`${linkContact} tabular-nums`}
                      >
                        {p}
                      </a>
                    </div>
                  ))}
                </address>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
