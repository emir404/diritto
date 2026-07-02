"use client";

import { useEffect, useRef, useState } from "react";

/**
 * StatBlock — oversized stat with count-up on scroll into view.
 * Use for the numbers a client brags about (from WIKI.md proof points).
 * Respects prefers-reduced-motion (renders the final value immediately).
 * Client component. Origin: library seed.
 */

type StatBlockProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** count-up duration in ms */
  duration?: number;
  className?: string;
};

export function StatBlock({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 1400,
  className = "",
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Reduced motion: skip the count-up and show the final value. Runs once,
      // behind a media-query guard — not a cascading-render risk.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={className}>
      <div className="text-5xl font-semibold tracking-tight tabular-nums sm:text-7xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-[var(--dl-ink-soft)]">
        {label}
      </div>
    </div>
  );
}
