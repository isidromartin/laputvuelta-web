import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/events", label: "Eventos" },
  { href: "/venues", label: "Salas" },
  { href: "/tickets", label: "Entradas" },
  { href: "/contact", label: "Contacto" },
  { href: "/gallery", label: "Galería" },
  { href: "/live", label: "Live" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="La Put* Vuelta"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/15 hover:bg-white/[0.03] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile simple (sin JS): botón que te lleva a eventos */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/events"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition"
          >
            Ver eventos
          </Link>
        </div>
      </div>
    </header>
  );
}
