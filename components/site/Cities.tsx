import { TreatedImage } from "@library/components/TreatedImage";
import { offices } from "@/lib/data";
import { linkContact } from "@/lib/ui";

/**
 * Sedi — the three offices, presented plainly and professionally: a duotone
 * photograph, the city, and its real addresses and lines. No landmark/tourism copy.
 */
export function Cities() {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-10">
      {offices.map((o, i) => (
        <div key={o.city} className={i % 2 === 1 ? "sm:mt-16" : ""}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
            <TreatedImage src={o.image} alt={`Sede di ${o.city}`} treatment="duotone" fill />
          </div>
          <h3 className="mt-5 font-display text-2xl text-foreground">{o.city}</h3>
          <address className="mt-2 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
            {o.addresses.map((a) => (
              <div key={a}>{a}</div>
            ))}
            {o.phones.map((p) => (
              <div key={p}>
                <a href={`tel:${p.replace(/\s+/g, "")}`} className={`${linkContact} tabular-nums`}>
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
