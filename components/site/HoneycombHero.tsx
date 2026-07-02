import { HexCell } from "@library/components/HexCell";

/**
 * HoneycombHero — THE signature (the one bold moment; every other hexagon on the
 * site was retired for this). A sculptural cluster of cells tracing Italy NW→SE,
 * tuned to pop on the hero's deep-ink panel: recolored cells, an oversized "&"
 * focal cell, three large duotone city photos, staggered load, bleeds off-edge.
 */

type Cell = {
  c: number;
  r: number;
  color?: string;
  img?: string;
  alt?: string;
  amp?: boolean;
};

// hex geometry (container-query width units)
const W = 16.5;
const H = W / 0.866;
const ROW = 0.75 * H;
const OFF = W / 2;

const CELLS: Cell[] = [
  { c: 0, r: 0, img: "/images/TreTorri-Prearo.jpg", alt: "Milano — CityLife, le Tre Torri" },
  { c: 1, r: 0, color: "var(--color-brand-terracotta)" },
  { c: 0, r: 1, color: "var(--color-brand-sage)" },
  { c: 1, r: 1, img: "/images/Bologna.webp", alt: "Bologna — le Due Torri" },
  { c: 2, r: 1, color: "var(--color-brand-blush)" },
  { c: 1, r: 2, color: "var(--color-brand-blue)" },
  { c: 2, r: 2, color: "var(--color-brand-taupe)" },
  { c: 1, r: 3, amp: true, color: "var(--color-brand-terracotta)" },
  { c: 2, r: 3, color: "var(--color-brand-sage)" },
  { c: 3, r: 3, color: "var(--color-brand-blush)" },
  { c: 2, r: 4, img: "/images/Lecce.webp", alt: "Lecce — il barocco leccese" },
  { c: 3, r: 4, color: "var(--color-brand-blue)" },
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
            key={i}
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
              <HexCell src={cell.img} alt={cell.alt ?? ""} priority />
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
