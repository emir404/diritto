import Link from "next/link";
import { TreatedImage } from "@library/components/TreatedImage";
import { lawyers } from "@/lib/data";

/**
 * Team — the network as five duotone portraits (steel-blue, one palette = harmony).
 * Editorial and disciplined: aligned grid, a terracotta hairline that grows on
 * hover, Fraunces names + small-caps roles. Replaces the hex-portrait honeycomb.
 */
export function Team() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
      {lawyers.map((l) => (
        <Link key={l.slug} href={`/professionisti#${l.slug}`} className="group block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
            <TreatedImage
              src={l.image}
              alt={`Avv. ${l.name}`}
              treatment="duotone"
              fill
              className="transition-transform duration-500 ease-out group-hover:scale-105 [&>img]:object-top"
            />
          </div>
          <div className="mt-4 h-px w-10 bg-[var(--color-brand-terracotta)] transition-[width] duration-300 ease-out group-hover:w-16" />
          <p className="mt-3 font-display text-lg leading-tight text-foreground">{l.name}</p>
          <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
            {l.role}
          </p>
          {l.founder && (
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-brand-terracotta">
              Socia fondatrice
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
