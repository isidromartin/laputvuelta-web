import { site } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Ticket, Video } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 w-full overflow-hidden">
      {/* Divisores tipo editorial */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-260px] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[var(--primary)]/12 blur-[240px]" />
        <div className="absolute -left-48 bottom-[-320px] h-[640px] w-[640px] rounded-full bg-[var(--primary)]/9 blur-[260px]" />
        <div className="absolute -right-56 bottom-[-360px] h-[760px] w-[760px] rounded-full bg-[var(--primary)]/7 blur-[300px]" />
      </div>

      {/* Fondo sutil (band) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%,transparent_72%,rgba(255,255,255,0.02))]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-14 md:py-16">
        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={180}
                height={44}
                priority
                className="h-12 w-auto"
              />
            </Link>

            <p className="mt-5 text-xl md:text-[18px] leading-relaxed text-white/60 max-w-md secondaryFont">
              {site.copy.footerNote}
            </p>

            {/* CTA row: sobrio */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white/80 transition hover:text-white hover:bg-white/[0.07] hover:border-[var(--primary)]/35"
              >
                Contacto
                <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:opacity-100 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </Link>

              <a
                href={site.urls.fourvenuesTeam}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white/80 transition hover:text-white hover:bg-black/35 hover:border-[var(--primary)]/35"
              >
                Entradas
                <Ticket className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-black uppercase tracking-[0.34em] text-white/45">
              Navegación
            </p>

            <ul className="mt-5 space-y-3 text-[13px] md:text-[14px]">
              {[
                { href: "/", label: "Inicio" },
                { href: "/events", label: "Próximos eventos" },
                { href: "/gallery", label: "Galería" },
                { href: "/contact", label: "Reservas & contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition"
                  >
                    <span className="h-px w-7 bg-white/10 transition group-hover:bg-[var(--primary)]/55" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social (sin cards) */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-black uppercase tracking-[0.34em] text-white/45">
              Social
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={site.urls.instagram}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between text-white/70 hover:text-white transition"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/25">
                    <Instagram className="h-4 w-4 opacity-80" />
                  </span>
                  <span className="text-[14px] font-semibold">Instagram</span>
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-55 transition group-hover:opacity-100 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </a>

              <a
                href={site.urls.kick}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between text-white/70 hover:text-white transition"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/25">
                    <Video className="h-4 w-4 opacity-80" />
                  </span>
                  <span className="text-[14px] font-semibold">Kick</span>
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-55 transition group-hover:opacity-100 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </a>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-white/45 max-w-xs">
              Updates, contenido y entradas desde tus canales oficiales.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/45">
            <Link href="/privacidad" className="hover:text-white transition">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
            <Link href="/legal" className="hover:text-white transition">
              Aviso legal
            </Link>
          </div>

          <div className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/35">
            <span suppressHydrationWarning>
              © {year} {site.name}
            </span>
          </div>
        </div>

        {/* Micro-line (opcional) */}
        <p className="mt-7 text-center text-[11px] text-white/28">
          Crafted with detail. Powered by {site.name}.
        </p>
      </div>

      {/* Divider inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
}
