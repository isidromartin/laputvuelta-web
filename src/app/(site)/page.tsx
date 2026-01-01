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
    alt: "La Put* Vuelta — ambiente",
    eyebrow: "Live + activaciones",
    title: "La Put* Vuelta",
    subtitle:
      "Cada edición en una sala distinta. Directo en Kick, activaciones durante la noche y un cierre que se recuerda.",
  },
  {
    src: "/hero/slide-2.png",
    alt: "La Put* Vuelta — sala",
    eyebrow: "Ediciones",
    title: "Vol. / EP. / Sala",
    subtitle:
      "No repetimos fórmula. Cambian las activaciones, el timing y la energía. Tú solo entra a vivirla.",
  },
  {
    src: "/hero/slide-3.png",
    alt: "La Put* Vuelta — close up",
    eyebrow: "Comunidad",
    title: "Entra. Graba. Comparte.",
    subtitle:
      "Galería por evento, reels y highlights. Si estuviste, aquí queda. Si no, ya sabes lo que toca.",
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
          <div className="pointer-events-none absolute right-4 bottom-3 md:right-10 md:bottom-6 opacity-80">
            <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px]">
              <Image
                src="/devil-mark.png"
                alt="La Put* Vuelta"
                fill
                className="object-contain drop-shadow-[0_0_45px_rgba(255,40,60,0.20)]"
                priority
              />
            </div>
          </div>
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
          <Section
            title="Qué es"
            subtitle="Formato rápido, directo y con narrativa."
          >
            <p className="text-sm text-white/70">
              La Put* Vuelta es una fiesta itinerante: cambia la sala, cambian
              las activaciones y el ritmo de la noche. El directo sucede en Kick
              y lo mejor de cada edición se queda en la galería.
            </p>
          </Section>

          <Section
            title="Cómo funciona"
            subtitle="Todo claro: entradas, directo y momentos."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Entradas integradas (Fourvenues) desde la web.</li>
              <li>• Directo en Kick durante la noche.</li>
              <li>
                • Activaciones por franjas: aparecen si están configuradas.
              </li>
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
