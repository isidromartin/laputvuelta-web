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

  return (
    <>
      {/* Trigger (glass + neon) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
        aria-label="Abrir menú"
      >
        <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[var(--primary)]/0 blur-xl transition group-hover:bg-[var(--primary)]/14" />
        <IconMenu />
        Menú
      </button>

      {/* Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-[80] ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Overlay (más premium: gradient + blur) */}
        <div
          className={`absolute inset-0 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          } bg-black/70 backdrop-blur-sm`}
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,94,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,77,94,0.10),transparent_60%)]" />
        </div>

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[86vw] max-w-sm transform transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="relative h-full border-l border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl">
            {/* halos */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--primary)]/14 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />

            {/* Header drawer */}
            <div className="relative px-4 pt-4">
              <div className="glass flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                <div className="flex flex-col">
                  <p className="text-sm font-black uppercase tracking-tight text-white">
                    <Link href="/" className="flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="La Put* Vuelta"
                        width={160}
                        height={40}
                        priority
                        className="h-8 w-auto"
                      />
                    </Link>
                  </p>
                  {/* <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                    Navegación
                  </p> */}
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="group relative inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-white/85 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                  aria-label="Cerrar menú"
                >
                  <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[var(--primary)]/0 blur-xl transition group-hover:bg-[var(--primary)]/14" />
                  <IconClose />
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="relative px-4 py-5">
              <ul className="space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur transition hover:bg-white/[0.06] hover:text-white hover:border-[var(--primary)]/30"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-white/35 transition group-hover:text-[var(--primary)]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="relative px-5 pt-1">
              <Link
                href="/tickets"
                onClick={() => setOpen(false)}
                className="relative block w-full rounded-2xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)] hover:scale-[1.01]"
              >
                <span className="pointer-events-none absolute -inset-[2px] rounded-2xl border border-white/15" />
                <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/25 blur-xl" />
                Comprar entradas
              </Link>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-5 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
                Viva el pecado
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
