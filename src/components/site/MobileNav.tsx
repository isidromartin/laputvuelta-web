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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black px-4 py-2 text-sm text-white/90 hover:border-white/30 transition"
        aria-label="Abrir menú"
      >
        <IconMenu />
        Menú
      </button>

      {/* Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-[80] ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-200 ${
            open ? "opacity-80" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[86vw] max-w-sm transform transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="h-full bg-black border-l border-white/10 shadow-2xl">
            {/* Header drawer */}
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/85 hover:bg-white/[0.06] hover:border-white/20 hover:text-white active:scale-[0.99] transition">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-white">
                  La Put* Vuelta
                </p>
                {/* <p className="text-xs text-white/55">Navegación</p> */}
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

            <div className="px-5 pt-5">
              <Link
                href="/tickets"
                onClick={() => setOpen(false)}
                className="block w-full rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black hover:opacity-90 transition"
              >
                Comprar entradas
              </Link>
              {/* <p className="mt-2 text-xs text-white/55">
                Compra oficial vía Fourvenues.
              </p> */}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-5 py-5">
              <p className="text-xs text-white/55">
                {/* Live en Kick y activaciones durante la noche. */}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
