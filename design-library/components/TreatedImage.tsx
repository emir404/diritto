import type { CSSProperties } from "react";

/**
 * TreatedImage — a photo re-expressed in the project's palette instead of
 * shown raw: duotone (shadow/highlight tint) or halftone (print dots).
 * The go-to for "show their office/space in a completely different way".
 * Styles in treatments/duotone.css. Server component; plain <img> by design.
 * Origin: library seed.
 */

type TreatedImageProps = {
  src: string;
  alt: string;
  treatment?: "duotone" | "halftone" | "none";
  /** dark end of the duotone — defaults to var(--dl-ink) */
  shadow?: string;
  /** light end of the duotone — defaults to var(--dl-accent) */
  highlight?: string;
  /** cover-fill a positioned, fixed-aspect parent instead of natural aspect */
  fill?: boolean;
  className?: string;
};

export function TreatedImage({
  src,
  alt,
  treatment = "duotone",
  shadow,
  highlight,
  fill = false,
  className = "",
}: TreatedImageProps) {
  const style = {
    ...(shadow ? { "--dl-duo-shadow": shadow } : {}),
    ...(highlight ? { "--dl-duo-highlight": highlight } : {}),
  } as CSSProperties;
  return (
    <span
      className={`dl-treated dl-treated-${treatment} ${fill ? "dl-treated-fill" : ""} ${className}`}
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </span>
  );
}
