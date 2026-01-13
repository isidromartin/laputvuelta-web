"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/components/site/nav";
import Image from "next/image";

function IconMenu() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileNav({ nav }: { nav: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);

  // Bloquea scroll cuando está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Cierra con ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="glass inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition"
        aria-label="Abrir menú"
      >
        <IconMenu />
        Menú
      </button>

      {/* CLAVE: no renderizar nada cuando open=false */}
      {open ? (
        <div className="fixed inset-0 z-[80]">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-black/80"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <aside
            className="absolute right-0 top-0 h-[100dvh] w-[86vw] max-w-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
          >
            <div className="relative h-full bg-black border-l border-white/10 shadow-2xl pb-[env(safe-area-inset-bottom)]">
              {/* Ambient (decorativo, no afecta a layout) */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-[var(--primary)]/18 blur-[120px]" />
                <div className="absolute bottom-[-140px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[var(--primary)]/10 blur-[140px]" />
              </div>

              {/* Header drawer */}
              <div className="relative flex items-center justify-between px-4 py-4 border-b border-white/10">
                <div className="flex flex-col">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="La Put* Vuelta"
                      width={160}
                      height={40}
                      priority
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="glass inline-flex items-center justify-center rounded-full border border-white/10 px-3 py-2 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition"
                  aria-label="Cerrar menú"
                >
                  <IconClose />
                </button>
              </div>

              {/* Links */}
              <nav className="relative px-3 py-4">
                <ul className="space-y-2">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition"
                      >
                        <span className="uppercase tracking-widest text-[13px]">
                          {item.label}
                        </span>
                        <span className="text-[var(--primary)]/80 group-hover:text-[var(--primary)] transition">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <div className="relative px-5 pt-2">
                <Link
                  href="/tickets"
                  onClick={() => setOpen(false)}
                  className="relative block w-full rounded-2xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110 neon-border"
                >
                  Comprar entradas
                </Link>
              </div>

              {/* Footer mini */}
              <div className="relative mt-6 border-t border-white/10 px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
                  © {new Date().getFullYear()} La Put* Vuelta
                </p>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
