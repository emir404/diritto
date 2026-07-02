import type { Metadata } from "next";
import { TreatedImage } from "@library/components/TreatedImage";
import { ContactForm } from "@/components/site/ContactForm";
import { offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta il network diritto&consulenza. Sedi a Bologna, Lecce e Milano — scrivici o chiamaci per una prima valutazione.",
};

const eras = ["medievale", "barocca", "contemporanea"];

export default function ContattiPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-kicker text-primary">Contatti</p>
        <h1 className="text-display mt-4 text-foreground">Parliamone.</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Contattaci ai recapiti delle nostre sedi o compila il modulo per essere ricontattato: la
          prima valutazione è senza impegno.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <ContactForm />

        <div className="space-y-8">
          {offices.map((o, i) => (
            <div key={o.city} className="flex gap-5">
              <div className="w-24 shrink-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
                  <TreatedImage
                    src={o.image}
                    alt={`${o.city} — ${o.landmark}`}
                    treatment="duotone"
                    fill
                  />
                </div>
              </div>
              <div>
                <h2 className="font-display text-xl text-foreground">
                  {o.city}{" "}
                  <span className="text-base italic text-brand-terracotta">— {eras[i]}</span>
                </h2>
                <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {o.landmark}
                </p>
                <address className="mt-2 space-y-0.5 text-sm not-italic leading-relaxed text-muted-foreground">
                  {o.addresses.map((a) => (
                    <div key={a}>{a}</div>
                  ))}
                  {o.phones.map((p) => (
                    <div key={p}>
                      <a
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className="tabular-nums underline-offset-4 transition-colors hover:text-primary hover:underline"
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
