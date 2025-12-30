import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const nav = [
  { href: "/events", label: "Eventos" },
  { href: "/venues", label: "Salas" },
  { href: "/gallery", label: "Galería" },
  { href: "/live", label: "Live" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={site.name}
            width={220}
            height={80}
            priority
            className="h-8 w-auto"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-white/80 hover:text-white transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.urls.fourvenuesTeam}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/85 hover:text-white hover:border-white/30 transition"
          >
            Entradas
          </a>
          <a
            href={site.urls.kick}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white text-black px-3 py-1.5 text-xs hover:opacity-90 transition"
          >
            Ver directo
          </a>
        </div>
      </div>

      {/* Navegación móvil */}
      <div className="md:hidden border-t border-white/10">
        <nav className="mx-auto max-w-6xl px-5 py-2 flex items-center justify-between text-xs">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-white/75 hover:text-white transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
