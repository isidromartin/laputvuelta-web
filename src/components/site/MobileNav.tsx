"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/components/site/nav";

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
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm text-white/90 hover:border-white/30 transition"
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
            <div className="h-full bg-black border-l border-white/10 shadow-2xl pb-[env(safe-area-inset-bottom)]">
              {/* Header drawer */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-white">
                    La Put* Vuelta
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black px-3 py-2 text-white/85 hover:text-white hover:border-white/30 transition"
                  aria-label="Cerrar menú"
                >
                  <IconClose />
                </button>
              </div>

              {/* Links */}
              <nav className="px-3 py-4">
                <ul className="space-y-2">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-white/85 hover:bg-white/[0.06] hover:text-white transition"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-white/45">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="px-5 pt-2">
                <Link
                  href="/tickets"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black hover:opacity-90 transition"
                >
                  Comprar entradas
                </Link>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
