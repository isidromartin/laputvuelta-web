import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live | La Put* Vuelta",
  description:
    "Directo oficial de La Put* Vuelta en Kick. Si el reproductor no carga, abre el live en una pestaña.",
};

const KICK_CHANNEL = "laputivuelta-oficial";
const KICK_URL = "https://kick.com/laputivuelta-oficial";

// Kick embed habitual: player + chat (dos iframes)
// Nota: algunos navegadores bloquean cookies/embeds; por eso dejamos fallback.
const KICK_PLAYER = `https://player.kick.com/${KICK_CHANNEL}`;
const KICK_CHAT = `https://kick.com/${KICK_CHANNEL}/chatroom`;

export default function LivePage() {
  return (
    <main className="py-12">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Live</Badge>
            <Badge>Kick</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            ALL IN LIVE
          </h1>

          <p className="text-white/70 max-w-2xl">
            Desde aquí, puedes ver todo lo que pasa en la fiesta, pero que no te
            de FOMO.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
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
        </div>

        {/* Embed */}
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* Player */}
          <section className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
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
          </section>

          {/* Chat */}
          <aside className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
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
        </div>

        {/* Info / Avisos */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm font-semibold text-white/90">Cómo funciona</p>
            <p className="mt-2 text-sm text-white/65">
              La fiesta será retransmitida desde que entre la primera persona
              hasta que se vaya la última para te pierdas nada de lo que pasa en
              LA PUT*VUELTA
            </p>
          </div>

          <Link
            href="/tickets"
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.03] hover:border-white/20 transition"
          >
            <p className="text-sm font-semibold text-white/90">Entradas</p>
            <p className="mt-2 text-sm text-white/65">
              Compra oficial siempre en Fourvenues.
            </p>
          </Link>
        </div>
      </Container>
    </main>
  );
}
