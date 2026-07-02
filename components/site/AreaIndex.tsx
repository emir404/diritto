import Link from "next/link";
import { areas, lawyers } from "@/lib/data";

const lawyerName: Record<string, string> = Object.fromEntries(
  lawyers.map((l) => [l.slug, l.name]),
);

function Group({ label, segment }: { label: string; segment: "persone" | "imprese" }) {
  const items = areas.filter((a) => a.segment === segment);
  return (
    <div>
      <p className="text-kicker mb-1 text-brand-terracotta">{label}</p>
      <ul className="border-b border-brand-terracotta/25">
        {items.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/aree-attivita#${a.slug}`}
              className="group flex items-baseline gap-4 border-t border-brand-terracotta/25 py-4"
            >
              <span
                className="hex-tick mt-1 shrink-0 text-base"
                style={{ color: a.color }}
                aria-hidden="true"
              />
              <span className="flex-1">
                <span className="font-display text-xl leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {a.title}
                </span>
                {a.lawyers && a.lawyers.length > 0 ? (
                  <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {a.lawyers.map((s) => `Avv. ${lawyerName[s]}`).join(" · ")}
                  </span>
                ) : null}
              </span>
              <span
                className="text-primary opacity-0 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** All 11 practice areas as a typographic two-column index (the de-hex win). */
export function AreaIndex() {
  return (
    <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
      <Group label="Per le persone" segment="persone" />
      <Group label="Per le imprese" segment="imprese" />
    </div>
  );
}
