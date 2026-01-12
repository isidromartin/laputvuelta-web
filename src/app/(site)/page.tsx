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
    <main className="py-10 md:py-12">
      <ContainerFull>
        {/* Hero */}
        <div className="relative">
          <HeroCarousel slides={slides} />

          {/* Marca grande (diablito/corazón) */}
          {/* <div className="pointer-events-none absolute right-4 bottom-3 md:right-10 md:bottom-6 opacity-80">
            <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px]">
              <Image
                src="/devil-mark.png"
                alt="La Put* Vuelta"
                fill
                className="object-contain drop-shadow-[0_0_45px_rgba(255,40,60,0.20)]"
                priority
              />
            </div>
          </div> */}
        </div>
      </ContainerFull>
      <Container>
        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>La Put* Vuelta</Badge>
            <Badge>Live en Kick</Badge>
            <Badge>Activaciones</Badge>
          </div>

          <div className="flex flex-wrap gap-3">
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
          <Section title="Qué es" subtitle="La fiesta que estabas esperando.">
            <p className="text-sm text-white/70">
              LA PUT*VUELTA es una fiesta dónde todo pasa. Una fiesta pensada
              para los que nos gustan que pasen cosas, para los que queremos una
              historia que contar.
              <br /> <br />
              Cada fiesta es diferente, retransmitida al 100% en directo hace
              que puedas seguir la fiesta hasta en el sofá de casa.
              <br />
              <br />
              Pero al fin y al cabo, ¿Hace cuánto no sales a dar una vuelta?
            </p>
          </Section>

          <Section
            title="Cómo funciona"
            subtitle="Todo claro: entradas, directo y momentos."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Entradas desde la web.</li>
              <li>• Directo en Kick durante la noche.</li>
              <li>• Activaciones y regalos.</li>
            </ul>
          </Section>

          <Section
            title="Dónde verlo"
            subtitle="Links oficiales."
            actions={
              <ButtonLink
                href="https://kick.com/laputvuelta-oficial"
                external
                variant="solid"
              >
                Ir a Kick
              </ButtonLink>
            }
          >
            <div className="space-y-2 text-sm text-white/70">
              <p>
                Kick: <span className="text-white/85">laputvuelta-oficial</span>
              </p>
              <p>
                Instagram:{" "}
                <span className="text-white/85">@laputvuelta.oficial</span>
              </p>
            </div>
          </Section>
        </div>
      </Container>
    </main>
  );
}
