import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto oficial de La Put* Vuelta. Partners, salas, prensa o cualquier consulta: escríbenos desde aquí.",
};

export default function ContactPage() {
  return (
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-140px] top-[260px] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[170px]" />
      </div>
      <div className="grain" /> */}

      <Container>
        {/* Header */}
        <Reveal className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,77,94,0.14),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.08),transparent_60%)]" />

          <div className="relative flex flex-col gap-4">
            {/* <div className="flex flex-wrap items-center gap-2">
              <Badge>Contacto</Badge>
              <Badge>La Put* Vuelta</Badge>
            </div> */}

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Oficial
                </p>
                <h1 className="mt-2 text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95 secondaryFont">
                  Hablemos
                </h1>
              </div>

              <span className="hidden md:block text-[var(--primary)] font-black text-6xl leading-none secondaryFont">
                05
              </span>
            </div>

            <p className="text-white/65 max-w-2xl leading-relaxed">
              Partners, salas, prensa o cualquier idea canalla bien hecha.
              Escríbenos y te respondemos.
            </p>
          </div>
        </Reveal>

        {/* Body */}
        <Stagger className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Instagram */}
            <StaggerItem className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/16" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    photo_camera
                  </span>
                  <p className="text-lg md:text-xl font-black uppercase tracking-[0.18em] text-white/90 secondaryFont">
                    Instagram
                  </p>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Para cosas rápidas y urgentes, DM.
                </p>

                <a
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                  href="https://instagram.com/laputvuelta.oficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  @laputvuelta.oficial
                </a>
              </div>
            </StaggerItem>

            {/* Live */}
            <StaggerItem className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-6">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/16" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    live_tv
                  </span>
                  <p className="text-lg md:text-xl font-black uppercase tracking-[0.18em] text-white/90 secondaryFont">
                    Live (Kick)
                  </p>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Canal oficial en Kick.
                </p>

                <a
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                  href="https://kick.com/laputvuelta-oficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  kick.com/laputvuelta-oficial
                </a>

                <div className="mt-4">
                  <Link
                    href="/live"
                    className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55 hover:text-[var(--primary)] transition-colors"
                  >
                    Ver página Live →
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* Entradas */}
            <StaggerItem className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-6">
              <div className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/16" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    confirmation_number
                  </span>
                  <p className="text-lg md:text-xl font-black uppercase tracking-[0.18em] text-white/90 secondaryFont">
                    Entradas
                  </p>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Venta oficial y calendario de eventos.
                </p>
                <a
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                  href="/tickets"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver calendario
                </a>

                <div className="mt-4">
                  <Link
                    href="/tickets"
                    className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55 hover:text-[var(--primary)] transition-colors"
                  >
                    Ir a Entradas →
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Form */}
          <StaggerItem className="lg:col-span-7">
            <ContactForm />
          </StaggerItem>
        </Stagger>
      </Container>
    </main>
  );
}
