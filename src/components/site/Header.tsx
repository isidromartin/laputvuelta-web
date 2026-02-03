"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/components/site/nav";
import { MobileNav } from "@/components/site/MobileNav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-40 px-4 sm:px-6 py-4 flex justify-center">
      <nav
        className="max-w-7xl w-full glass rounded-full px-5 sm:px-6 py-3 flex items-center justify-between border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        aria-label="Principal"
      >
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Inicio"
          >
            <Image
              src="/logo.png"
              alt="La Put* Vuelta"
              width={160}
              height={40}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
          {nav.map((item) => {
            const isHash = item.href.startsWith("#");

            // Solo marcamos "active" para rutas reales (no anchors)
            // const isActive = !isHash && pathname === item.href;
            const isActive =
              !isHash &&
              (pathname === item.href || pathname.startsWith(item.href + "/"));

            const className = [
              "transition-colors",
              isActive ? "text-[var(--primary)]" : "text-white/70",
              "hover:text-[var(--primary)]",
            ].join(" ");

            return isHash ? (
              <a key={item.href} href={item.href} className={className}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA + Mobile */}
        <div className="flex items-center gap-4">
          <Link
            href="/tickets"
            className="hidden md:inline-flex relative items-center justify-center bg-[var(--primary)] hover:bg-[color:rgba(255,77,94,0.85)] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.28em] transition-all transform hover:scale-[1.02] neon-border group secondaryFont"
          >
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            COMPRAR ENTRADAS
          </Link>

          <div className="md:hidden">
            <MobileNav nav={nav} />
          </div>
        </div>
      </nav>
    </header>
  );
}
