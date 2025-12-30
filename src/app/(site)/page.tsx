import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="relative">
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24 relative">
        <div className="max-w-3xl">
          <Image
            src="/logo.png"
            alt={site.name}
            width={1200}
            height={400}
            priority
            className="w-full h-auto"
          />

          <p className="mt-6 text-white/75 text-base md:text-lg">
            {site.copy.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.urls.fourvenuesTeam}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white text-black px-5 py-2 text-sm hover:opacity-90 transition"
            >
              Comprar entradas
            </a>
            <Link
              href="/events"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/85 hover:text-white hover:border-white/30 transition"
            >
              Ver eventos
            </Link>
            <a
              href={site.urls.kick}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/85 hover:text-white hover:border-white/30 transition"
            >
              Ver directo en Kick
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs text-white/50">Formato</p>
              <p className="mt-1 text-sm text-white/85">
                Directo + activaciones
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs text-white/50">Ubicación</p>
              <p className="mt-1 text-sm text-white/85">Salas distintas</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs text-white/50">Contenido</p>
              <p className="mt-1 text-sm text-white/85">Galería por evento</p>
            </div>
          </div>
        </div>
      </section>
      <script src="https://www.fourvenues.com/assets/iframe/team-la-putvuelta1/calendar@"></script>
      <iframe
        src="https://www.fourvenues.com/assets/iframe/team-la-putvuelta1/calendar@"
        title="Fourvenues Calendar"
        width="100%"
        height="300"
      ></iframe>
    </main>
  );
}
