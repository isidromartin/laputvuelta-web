import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { ContainerFull } from "@/components/site/ContainerFull";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Section } from "@/components/site/Section";
import { HeroCarousel } from "@/components/site/HeroCarousel";

export const metadata: Metadata = {
  title: "Inicio",
  description: "La Put* Vuelta - ¿Hace cuanto no sales a dar una vuelta?",
};

const slides = [
  {
    src: "/hero/slide-1.png",
    alt: "La Put* Vuelta",
    eyebrow: "",
    title: "LA PUT* VUELTA",
    subtitle:
      "Una fiesta pensada para los que nos gustan tener una historia que contar al día siguiente",
  },
  {
    src: "/hero/slide-2.png",
    alt: "La Put* Vuelta",
    eyebrow: "",
    title: "ALL IN LIVE",
    subtitle:
      "TODO lo que ocurra se emitirá en DIRECTO a través de nuestro canal de KICK. Por si no te quieres acordar de algo… ya sabes",
  },
  {
    src: "/hero/slide-3.png",
    alt: "La Put* Vuelta",
    eyebrow: "",
    title: "LA PUT* VUELTA SHOW",
    subtitle:
      "Durante la fiesta irán ocurriendo MOMENTOS ESPECIALES, algunos con SORPRESAS y REGALOS y otros con… ¿esperabas saberlo todo aquí?",
  },
];

export default function HomePage() {
  return (
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient: halo + grain (si ya lo tienes global, puedes eliminar estos 2 bloques) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-[180px]" />
        <div className="absolute right-[-120px] top-[240px] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[160px]" />
      </div>
      <div className="grain" />

      <ContainerFull>
        {/* Hero */}
        <div className="relative">
          {/* Marco glass alrededor del carrusel */}
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.60)]">
            <HeroCarousel slides={slides} />

            {/* Overlay sutil para “neon night” */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/55" />

            {/* Watermark diablo */}
            <div className="pointer-events-none absolute -right-6 -bottom-10 opacity-70 md:opacity-80">
              <div className="relative h-[180px] w-[180px] md:h-[260px] md:w-[260px]">
                <Image
                  src="/devil-mark.png"
                  alt="La Put* Vuelta"
                  fill
                  className="object-contain drop-shadow-[0_0_45px_rgba(255,77,94,0.18)]"
                  priority
                />
              </div>
            </div>

            {/* Borde neon sutil */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </div>
      </ContainerFull>

      <Container>
        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Badges (envueltas en glass) */}
          <div className="glass inline-flex w-fit flex-wrap items-center gap-2 rounded-2xl border border-white/10 px-4 py-3">
            <Badge>La Put* Vuelta</Badge>
            <Badge>Live en Kick</Badge>
            <Badge>Activaciones</Badge>
          </div>

          {/* Links (wrap en glass + neon hover) */}
          <div className="glass flex flex-wrap gap-3 rounded-2xl border border-white/10 p-3">
            <ButtonLink href="/tickets" variant="solid">
              Entradas
            </ButtonLink>
            <ButtonLink href="/live">Live</ButtonLink>
            <ButtonLink href="/events">Eventos</ButtonLink>
            <ButtonLink href="/gallery">Galería</ButtonLink>
          </div>
        </div>

        {/* Info */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Card 01 */}
          <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-1">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/20" />
            <div className="rounded-[22px] p-7 md:p-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <span className="text-[var(--primary)] font-black text-5xl opacity-20 leading-none">
                  01
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                  DOSSIER
                </span>
              </div>

              <Section
                title="¿Qué es la Put*vuelta?"
                subtitle="La fiesta que estabas esperando."
              >
                <p className="text-sm text-white/70 leading-relaxed">
                  LA PUT*VUELTA es una fiesta dónde todo pasa. Una fiesta
                  pensada para los que nos gustan que pasen cosas, para los que
                  queremos una historia que contar.
                  <br /> <br />
                  Cada fiesta es diferente, retransmitida al 100% en directo
                  hace que puedas seguir la fiesta hasta en el sofá de casa.
                  <br />
                  <br />
                  Pero al fin y al cabo, ¿Hace cuánto no sales a dar una vuelta?
                </p>
              </Section>
            </div>
          </div>

          {/* Card 02 */}
          <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-1">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/20" />
            <div className="rounded-[22px] p-7 md:p-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <span className="text-[var(--primary)] font-black text-5xl opacity-20 leading-none">
                  02
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                  FLOW
                </span>
              </div>

              <Section
                title="Cómo funciona"
                subtitle="Todo claro: entradas, directo y momentos."
              >
                <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
                  <li>• Entradas desde la web.</li>
                  <li>• Directo en Kick durante la noche.</li>
                  <li>• Activaciones y regalos.</li>
                </ul>
              </Section>
            </div>
          </div>

          {/* Card 03 */}
          <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-1">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/20" />
            <div className="rounded-[22px] p-7 md:p-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <span className="text-[var(--primary)] font-black text-5xl opacity-20 leading-none">
                  03
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                  LINKS
                </span>
              </div>

              <Section
                title="Dónde verlo"
                subtitle="Links oficiales."
                actions={
                  <div className="relative inline-flex">
                    {/* Glow wrapper para que el solid se vea más “neon” */}
                    <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/20 blur-xl" />
                    <ButtonLink
                      href="https://kick.com/laputvuelta-oficial"
                      external
                      variant="solid"
                    >
                      Ir a Kick
                    </ButtonLink>
                  </div>
                }
              >
                <div className="space-y-2 text-sm text-white/70">
                  <p>
                    Kick:{" "}
                    <span className="text-white/85">laputvuelta-oficial</span>
                  </p>
                  <p>
                    Instagram:{" "}
                    <span className="text-white/85">@laputvuelta.oficial</span>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </div>

        {/* CTA final (conversion) */}
        <div className="mt-10 md:mt-12">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,77,94,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(255,77,94,0.10),transparent_60%)]" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  ¿Listo para dar la vuelta?
                </h3>
                <p className="mt-2 text-sm md:text-base text-white/60 max-w-xl">
                  Entra con entradas o asegura tu sitio con reserva. La noche se
                  diseña para vivirse dentro.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/25 blur-xl" />
                  <ButtonLink href="/tickets" variant="solid">
                    Comprar entradas
                  </ButtonLink>
                </div>
                <ButtonLink href="/events">Ver próximos eventos</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
