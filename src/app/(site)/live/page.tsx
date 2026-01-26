import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Live",
  description:
    "Directo oficial de La Put* Vuelta en Kick. Si el reproductor no carga, abre el live en una pestaña.",
};

const KICK_CHANNEL = "laputivuelta-oficial";
const KICK_URL = "https://kick.com/laputivuelta-oficial";
const KICK_PLAYER = `https://player.kick.com/${KICK_CHANNEL}`;
const KICK_CHAT = `https://kick.com/${KICK_CHANNEL}/chatroom`;

export default function LivePage() {
  return (
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-160px] top-[260px] h-[460px] w-[460px] rounded-full bg-[var(--primary)]/10 blur-[190px]" />
      </div>
      <div className="grain" /> */}

      <Container>
        {/* Header premium */}
        <Reveal className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,77,94,0.14),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.08),transparent_60%)]" />

          <div className="relative flex flex-col gap-4">
            {/* <div className="flex flex-wrap items-center gap-2">
              <Badge>Live</Badge>
              <Badge>Kick</Badge>
            </div> */}

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Directo oficial
                </p>
                <h1 className="mt-2 text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95 secondaryFont">
                  ALL IN LIVE
                </h1>
              </div>

              <span className="hidden md:block text-[var(--primary)] font-black text-6xl leading-none secondaryFont">
                04
              </span>
            </div>

            <p className="text-white/65 max-w-2xl leading-relaxed">
              Desde aquí, puedes ver todo lo que pasa en la fiesta, pero que no
              te dé FOMO.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={KICK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl kick px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Abrir en Kick
              </a>

              <a
                href="https://instagram.com/laputvuelta.oficial"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
              >
                Instagram
              </a>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              @{KICK_CHANNEL}
            </p>
          </div>
        </Reveal>

        {/* Embed */}
        <Stagger className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* Player */}

          <StaggerItem className="lg:col-span-8 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-[var(--primary)]/30 hover:bg-white/[0.06]">
            <span className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/14" />
            <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
              <p className="text-sm font-semibold text-white/90">Live</p>
              <p className="text-xs text-white/55">@{KICK_CHANNEL}</p>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                title="Kick Live Player"
                src={KICK_PLAYER}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            {/* 
            <div className="px-5 py-4 border-t border-white/10">
              <p className="text-xs text-white/55">
                Si el embed no carga, abre el directo en una pestaña.
              </p>
            </div> */}
          </StaggerItem>

          {/* Chat */}
          <StaggerItem className="lg:col-span-4 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-[var(--primary)]/30 hover:bg-white/[0.06]">
            <aside>
              <span className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/14" />
              <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
                <p className="text-sm font-semibold text-white/90">Chat</p>
                <p className="text-xs text-white/55">en vivo</p>
              </div>

              <div className="h-[520px] bg-black">
                <iframe
                  title="Kick Chat"
                  src={KICK_CHAT}
                  className="h-full w-full"
                  allow="fullscreen"
                />
              </div>
            </aside>
          </StaggerItem>
        </Stagger>

        {/* Info / Avisos */}
        <Stagger className="mt-6 grid gap-4 md:grid-cols-2">
          <StaggerItem className="glass rounded-3xl border border-white/10 p-6">
            <p className="text-lg font-semibold text-white/90 secondaryFont">
              ¿Cómo funciona?
            </p>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              La fiesta será retransmitida desde que entre la PRIMERA persona
              hasta que se vaya la ÚLTIMA para que no te pierdas NADA de lo que
              pasa en LA PUT*VUELTA.
            </p>
          </StaggerItem>

          <StaggerItem className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 transition hover:border-[var(--primary)]/30 hover:bg-white/[0.06]">
            <Link href="/tickets">
              <span className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/14" />
              <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

              <p className="relative text-lg font-semibold text-white/90 secondaryFont">
                Entradas
              </p>
              <p className="relative mt-2 text-sm text-white/65 leading-relaxed">
                Compra oficial siempre en Fourvenues.
              </p>

              <div className="relative mt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
                  Ir a calendario
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)] transition group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          </StaggerItem>
        </Stagger>
      </Container>
    </main>
  );
}
