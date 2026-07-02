import { HexCell } from "@library/components/HexCell";
import { portraitDuo } from "@/lib/ui";

/**
 * HoneycombHero — THE signature (the one bold moment; every other hexagon on the
 * site was retired for this). A sculptural cluster tracing Italy NW→SE: the three
 * cities, the five professionals as duotone portraits (people brought forward, per
 * FEEL.md), an oversized "&" focal cell, and a few brand-color cells for warmth.
 */

type Cell = {
  c: number;
  r: number;
  color?: string;
  img?: string;
  alt?: string;
  /** a professional portrait → lighter duotone + face-biased crop */
  face?: boolean;
  amp?: boolean;
};

// hex geometry (container-query width units)
const W = 16.5;
const H = W / 0.866;
const ROW = 0.75 * H;
const OFF = W / 2;

const CELLS: Cell[] = [
  { c: 0, r: 0, img: "/images/TreTorri-Prearo.jpg", alt: "Milano" },
  { c: 1, r: 0, color: "var(--color-brand-terracotta)" },
  { c: 0, r: 1, img: "/images/Avv-Prearo.webp", alt: "Avv. Giovanni Prearo", face: true },
  { c: 1, r: 1, img: "/images/Bologna.webp", alt: "Bologna" },
  { c: 2, r: 1, img: "/images/Avv-Stamerra.webp", alt: "Avv. Valentina Stamerra", face: true },
  { c: 1, r: 2, color: "var(--color-brand-blue)" },
  { c: 2, r: 2, img: "/images/Avv-Esposito.webp", alt: "Avv. Valeria Esposito", face: true },
  { c: 1, r: 3, amp: true, color: "var(--color-brand-terracotta)" },
  { c: 2, r: 3, color: "var(--color-brand-sage)" },
  { c: 3, r: 3, img: "/images/AvvMannarini_new.webp", alt: "Avv. Beatrice Mannarini", face: true },
  { c: 2, r: 4, img: "/images/Lecce.webp", alt: "Lecce" },
  { c: 3, r: 4, img: "/images/Avv-Pisanello.webp", alt: "Avv. Alberto Pisanello", face: true },
  { c: 2, r: 5, color: "var(--color-brand-taupe)" },
  { c: 3, r: 5, color: "var(--color-brand-sage)" },
];

export function HoneycombHero() {
  return (
    <div className="@container relative aspect-square w-full">
      {CELLS.map((cell, i) => {
        const left = cell.c * W + (cell.r % 2) * OFF;
        const top = cell.r * ROW;
        const gap = W * 0.04; // hairline of paper between cells
        return (
          <div
            key={`${cell.c}-${cell.r}`}
            className={`dl-hex-pop absolute ${cell.amp ? "z-10" : ""}`}
            style={{
              left: `${left + gap / 2}cqw`,
              top: `${top + gap / 2}cqw`,
              width: `${W - gap}cqw`,
              filter: cell.amp
                ? "drop-shadow(0 -1.5px 0 rgba(255,255,255,0.28)) drop-shadow(0 22px 40px rgba(32,26,31,0.32))"
                : "drop-shadow(0 -1.5px 0 rgba(255,255,255,0.22)) drop-shadow(0 14px 26px rgba(32,26,31,0.17))",
              animationDelay: `${i * 55}ms`,
              transform: cell.amp ? "scale(1.16)" : undefined,
            }}
          >
            {cell.img ? (
              <HexCell
                src={cell.img}
                alt={cell.alt ?? ""}
                priority
                shadow={cell.face ? portraitDuo.shadow : undefined}
                highlight={cell.face ? portraitDuo.highlight : undefined}
                className={cell.face ? "[&_img]:object-[center_15%]" : ""}
              />
            ) : cell.amp ? (
              <HexCell color={cell.color}>
                <span
                  className="dl-amp text-[var(--dl-paper)]"
                  style={{ fontSize: `${W * 0.92}cqw` }}
                >
                  &amp;
                </span>
              </HexCell>
            ) : (
              <HexCell color={cell.color} />
            )}
          </div>
        );
      })}
    </div>
  );
}
