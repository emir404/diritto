"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav, areas } from "@/lib/data";
import { btnPrimary } from "@/lib/ui";

const persone = areas.filter((a) => a.segment === "persone");
const imprese = areas.filter((a) => a.segment === "imprese");

const linkCls = (active: boolean) =>
  `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    active ? "text-[var(--dl-accent)]" : "text-[var(--dl-ink-soft)] hover:text-[var(--dl-ink)]"
  }`;

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="diritto&consulenza — home"
      translate="no"
      className="inline-flex shrink-0 items-baseline gap-[1px] font-[family-name:var(--dl-font-display)] text-xl font-medium text-[var(--dl-ink)]"
    >
      diritto
      <span className="dl-amp text-2xl text-[var(--color-brand-blue)]">&amp;</span>
      consulenza
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the full-screen menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[color-mix(in_oklab,var(--dl-paper)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Wordmark onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigazione principale">
          <Link href="/" className={linkCls(isActive("/"))}>
            Home
          </Link>
          <Link href="/professionisti" className={linkCls(isActive("/professionisti"))}>
            Professionisti
          </Link>

          <div className="group relative">
            <Link
              href="/aree-attivita"
              className={`${linkCls(isActive("/aree-attivita"))} inline-flex items-center gap-1`}
            >
              Aree di attività
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 rounded-xl border border-border bg-[var(--dl-paper)] p-6 shadow-[0_12px_30px_-8px_rgba(36,29,25,0.22)]">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-terracotta)]">
                    Per le persone
                  </p>
                  <ul className="space-y-2">
                    {persone.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/aree-attivita#${a.slug}`}
                          className="block text-sm leading-snug text-[var(--dl-ink-soft)] transition-colors hover:text-[var(--dl-accent)]"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-blue)]">
                    Per le imprese
                  </p>
                  <ul className="space-y-2">
                    {imprese.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/aree-attivita#${a.slug}`}
                          className="block text-sm leading-snug text-[var(--dl-ink-soft)] transition-colors hover:text-[var(--dl-accent)]"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/news" className={linkCls(isActive("/news"))}>
            News
          </Link>
          <Link href="/contatti" className={linkCls(isActive("/contatti"))}>
            Contatti
          </Link>
        </nav>

        <Link href="/contatti" className={`hidden lg:inline-flex ${btnPrimary}`}>
          Contattaci
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          className="inline-flex size-10 items-center justify-center rounded-full text-[var(--dl-ink)] transition-colors hover:bg-[var(--dl-paper-soft)] active:scale-95 lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--dl-paper)] lg:hidden">
          <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-3.5">
            <Wordmark onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi menu"
              className="inline-flex size-10 items-center justify-center rounded-full text-[var(--dl-ink)] transition-colors hover:bg-[var(--dl-paper-soft)] active:scale-95"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex-1 overflow-y-auto px-6 py-6"
            aria-label="Navigazione mobile"
          >
            <div className="flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-border py-3.5 font-[family-name:var(--dl-font-display)] text-2xl ${
                    isActive(n.href) ? "text-[var(--dl-accent)]" : "text-[var(--dl-ink)]"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-terracotta)]">
                  Per le persone
                </p>
                <ul className="space-y-2.5">
                  {persone.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/aree-attivita#${a.slug}`}
                        onClick={() => setOpen(false)}
                        className="block text-sm leading-snug text-[var(--dl-ink-soft)]"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-blue)]">
                  Per le imprese
                </p>
                <ul className="space-y-2.5">
                  {imprese.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/aree-attivita#${a.slug}`}
                        onClick={() => setOpen(false)}
                        className="block text-sm leading-snug text-[var(--dl-ink-soft)]"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className={`mt-8 w-full ${btnPrimary}`}
            >
              Contattaci
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
