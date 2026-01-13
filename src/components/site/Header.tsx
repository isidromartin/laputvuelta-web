import Link from "next/link";
import Image from "next/image";
import { nav } from "@/components/site/nav";
import { MobileNav } from "@/components/site/MobileNav";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-40 px-6 py-4 flex justify-center">
      <nav className="max-w-[1200px] w-full glass rounded-full px-6 py-3 flex items-center justify-between border border-white/10">
        {/* Brand */}
        <div className="flex items-center gap-2">
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
        </div>

        {/* Desktop nav (desde nav.ts) */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          {nav.map((item) => {
            // Para anchors tipo "#concepto": usamos <a>
            const isHash = item.href.startsWith("#");

            const className = "hover:text-[var(--primary)] transition-colors";

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
          {/* CTA: aquí idealmente deberías enlazar a /tickets o a Fourvenues */}
          <Link
            href="/tickets"
            className="relative flex items-center justify-center bg-[var(--primary)] hover:bg-[color:rgba(255,77,94,0.8)] text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 neon-border group"
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
