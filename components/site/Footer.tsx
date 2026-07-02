import Link from "next/link";
import { offices, nav, site } from "@/lib/data";

/** Site footer — three offices, real contact data, brand "&" and credits. */
export function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Link
            href="/"
            translate="no"
            className="inline-flex items-baseline gap-0.5"
            aria-label="diritto&consulenza — home"
          >
            <span className="font-[family-name:var(--dl-font-display)] text-2xl font-medium text-[var(--dl-ink)]">
              diritto
            </span>
            <span className="dl-amp text-3xl text-[var(--color-brand-blue)]">&amp;</span>
            <span className="font-[family-name:var(--dl-font-display)] text-2xl font-medium text-[var(--dl-ink)]">
              consulenza
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--dl-ink-soft)]">
            Network multidisciplinare di professionisti. Dal {site.since}, su tutto il territorio
            nazionale.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[var(--dl-ink-soft)] underline-offset-4 transition-colors hover:text-[var(--dl-accent)] hover:underline"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city}>
              <h3 className="font-[family-name:var(--dl-font-display)] text-lg text-[var(--dl-accent)]">
                {o.city}
              </h3>
              <address className="mt-2 space-y-1 text-sm not-italic leading-relaxed text-[var(--dl-ink-soft)]">
                {o.addresses.map((a) => (
                  <div key={a}>{a}</div>
                ))}
                {o.phones.map((p) => (
                  <div key={p}>
                    <a
                      href={`tel:${p.replace(/\s+/g, "")}`}
                      className="tabular-nums underline-offset-4 transition-colors hover:text-[var(--dl-accent)] hover:underline"
                    >
                      {p}
                    </a>
                  </div>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[var(--color-brand-terracotta)] text-[var(--dl-paper)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.since}–2026 Diritto&amp;Consulenza — Tutti i diritti riservati.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span className="opacity-80">Privacy &amp; Cookie Policy</span>
            <span className="opacity-80">Codice deontologico</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
