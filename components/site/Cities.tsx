import { TreatedImage } from "@library/components/TreatedImage";
import { offices } from "@/lib/data";

// Bologna → Lecce → Milano : medieval → Baroque → contemporary (the unspoken story, said)
const eras = ["medievale", "barocca", "contemporanea"];

/**
 * Cities — three large duotone landmark photographs in an editorial stagger,
 * naming the tradition↔modernity story. Replaces the small hex city cells.
 */
export function Cities() {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-10">
      {offices.map((o, i) => (
        <div key={o.city} className={i % 2 === 1 ? "sm:mt-16" : ""}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
            <TreatedImage
              src={o.image}
              alt={`${o.city} — ${o.landmark}`}
              treatment="duotone"
              fill
            />
          </div>
          <h3 className="mt-5 font-display text-2xl text-foreground">
            {o.city}{" "}
            <span className="italic text-brand-terracotta">— {eras[i]}</span>
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {o.landmark}
          </p>
          <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-muted-foreground">
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
      ))}
    </div>
  );
}
