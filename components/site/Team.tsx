import Link from "next/link";
import { Phone } from "lucide-react";
import { TreatedImage } from "@library/components/TreatedImage";
import { lawyers, lawyerPhone } from "@/lib/data";
import { linkContact, portraitDuo } from "@/lib/ui";

/**
 * Team — the network as five duotone portraits (one lighter steel palette = harmony).
 * Editorial and disciplined: aligned grid, a terracotta hairline that grows on hover,
 * Fraunces names + a single consistent specialty line. `showContact` adds each
 * professional's callable number under the name (used on the professionals page).
 */
export function Team({ showContact = false }: { showContact?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
      {lawyers.map((l) => {
        const phone = showContact ? lawyerPhone(l) : undefined;
        return (
          <div key={l.slug} className="group">
            <Link href={`/professionisti#${l.slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10">
                <TreatedImage
                  src={l.image}
                  alt={`Avv. ${l.name}`}
                  treatment="duotone"
                  shadow={portraitDuo.shadow}
                  highlight={portraitDuo.highlight}
                  fill
                  className="transition-transform duration-500 ease-out group-hover:scale-105 [&>img]:object-top"
                />
              </div>
              <div className="mt-4 h-px w-10 bg-[var(--color-brand-terracotta)] transition-[width] duration-300 ease-out group-hover:w-16" />
              <p className="mt-3 font-display text-lg leading-tight text-foreground">{l.name}</p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
                {l.roleShort ?? l.role}
              </p>
            </Link>
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className={`${linkContact} mt-2 text-sm tabular-nums`}
                aria-label={`Chiama Avv. ${l.name}`}
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {phone}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
