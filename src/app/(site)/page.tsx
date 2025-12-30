import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Section } from "@/components/site/Section";
import { HeroCarousel } from "@/components/site/HeroCarousel";

export const metadata: Metadata = {
  title: "La Put* Vuelta",
  description:
    "La Put* Vuelta: live en Kick, activaciones durante la noche y ediciones en distintas salas.",
};

const slides = [
  {
    src: "https://res.cloudinary.com/dlqacmx8q/image/upload/f_auto,q_auto,w_2000/laputvuelta/hero/slide-1.jpg",
    alt: "La Put* Vuelta — ambiente",
    eyebrow: "Live + activaciones",
    title: "La Put* Vuelta",
    subtitle:
      "Cada edición en una sala distinta. Directo en Kick, activaciones durante la noche y un cierre que se recuerda.",
  },
  {
    src: "https://res.cloudinary.com/dlqacmx8q/image/upload/f_auto,q_auto,w_2000/laputvuelta/hero/slide-2.jpg",
    alt: "La Put* Vuelta — sala",
    eyebrow: "Ediciones",
    title: "Vol. / EP. / Sala",
    subtitle:
      "No repetimos fórmula. Cambian las activaciones, el timing y la energía. Tú solo entra a vivirla.",
  },
  {
    src: "https://res.cloudinary.com/dlqacmx8q/image/upload/f_auto,q_auto,w_2000/laputvuelta/hero/slide-3.jpg",
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
      <Container>
        {/* Hero */}
        <div className="relative">
          <HeroCarousel slides={slides} />

          {/* Marca grande (diablito/corazón) */}
          <div className="pointer-events-none absolute -bottom-8 right-6 md:right-10 md:-bottom-10 opacity-80">
            {/* Pon aquí tu logo/mascota en /public/devil-mark.png (recomendado) */}
            <Image
              src="/devil-mark.png"
              alt="La Put* Vuelta"
              width={220}
              height={220}
              className="drop-shadow-[0_0_45px_rgba(255,40,60,0.20)]"
              priority
            />
          </div>
        </div>

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
