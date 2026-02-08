import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CallToAction } from "@/components/site/CallToAction";
import { Section } from "@/components/site/Section";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { InfoCard } from "@/components/site/InfoCard";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { ScrollBasedVelocity } from "@/components/site/ScrollBasedVelocity";

import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

import slide1 from "@/../public/hero/slide-1.png";
import slide2 from "@/../public/hero/slide-2.png";
import slide3 from "@/../public/hero/slide-3.png";

export const metadata: Metadata = {
  title: "Inicio",
  description: "La Put* Vuelta - ¿Hace cuanto no sales a dar una vuelta?",
};

const slides = [
  {
    src: slide1,
    alt: "La Put* Vuelta",
    eyebrow: "",
    title: "LA PUT* VUELTA",
    subtitle:
      "Una fiesta pensada para los que nos gustan tener una historia que contar al día siguiente",
  },
  {
    src: slide2,
    alt: "La Put* Vuelta",
    eyebrow: "",
    title: "ALL IN LIVE",
    subtitle:
      "TODO lo que ocurra se emitirá en DIRECTO a través de nuestro canal de KICK. Por si no te quieres acordar de algo… ya sabes",
  },
  {
    src: slide3,
    alt: "La Put* Vuelta",
    eyebrow: "",
    title: "LA PUT* VUELTA SHOW",
    subtitle:
      "Durante la fiesta irán ocurriendo MOMENTOS ESPECIALES, algunos con SORPRESAS y REGALOS y otros con… ¿esperabas saberlo todo aquí?",
  },
];

const experienceHighlights = [
  {
    title: "Momentos sorpresa",
    description:
      "Shows, regalos y activaciones que hacen que cada edición sea distinta.",
    icon: "stars",
  },
  {
    title: "Música sin fricción",
    description:
      "Setlists que mezclan clásicos y bangers actuales para que no pares.",
    icon: "graphic_eq",
  },
  {
    title: "Comunidad + energía",
    description:
      "Una fiesta pensada para compartir, grabar y vivirlo con tu gente.",
    icon: "diversity_3",
  },
];

const testimonials = [
  {
    quote: "“No sé qué pasó, pero me levanté con ganas de repetirlo. 10/10.”",
    name: "Carla M.",
    city: "Madrid",
  },
  {
    quote: "“La mejor forma de empezar el finde. La energía es real.”",
    name: "Diego P.",
    city: "Barcelona",
  },
  {
    quote: "“Puro show, puro ritmo y cero postureo. Volvemos seguro.”",
    name: "Laura G.",
    city: "Valencia",
  },
];

const collageImages = [
  { src: slide1, alt: "La Put* Vuelta show", cta: true },
  { src: slide2, alt: "La Put* Vuelta live" },
  { src: slide3, alt: "La Put* Vuelta moments" },
];

function Dot() {
  return (
    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--primary)] shadow-[0_0_14px_rgba(255,77,94,0.35)]" />
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full ring-1 ring-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
      {children}
    </span>
  );
}

function FullBleed({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      <HeroCarousel slides={slides} />

      <Container>
        <Reveal>
          <div className="mt-10 relative overflow-hidden py-10 md:py-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[220px]" />
              <div className="absolute -right-64 bottom-[-240px] h-[520px] w-[520px] rounded-full bg-[var(--primary)]/7 blur-[240px]" />
            </div>

            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] font-black uppercase tracking-[0.38em] text-[var(--primary)]/80">
                  Accesos rápidos
                </p>

                <h2 className="mt-3 secondaryFont text-[clamp(1.8rem,3.2vw,2.6rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
                  Entradas, live y agenda en un clic
                </h2>

                <p className="mt-4 max-w-2xl text-sm text-white/62 md:text-base">
                  Diseñamos cada edición para que navegues sin fricción: compra
                  entradas, entra al directo o consulta próximas fechas en
                  segundos.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>Live en Kick</Badge>
                  <Badge>Shows oficiales</Badge>
                  <Badge>Contenido exclusivo</Badge>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <ButtonLink href="/tickets" variant="solid">
                  Comprar entradas
                </ButtonLink>
                <ButtonLink href="/live">Ver directo</ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
            <StaggerItem>
              <InfoCard
                index="01"
                tag="Fiesta + show + directo. Todo pasa."
                title="¿Qué es La Put* Vuelta?"
              >
                <p className="text-sm leading-relaxed text-white/70">
                  LA PUT*VUELTA es una noche donde se juntan fiesta, narrativa y
                  momentos. Está pensada para quien quiere que pasen cosas, para
                  quien quiere una historia que contar al día siguiente.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Cada edición se vive dentro… y también fuera: retransmisión en
                  directo para seguir la noche incluso desde casa. Pero la
                  pregunta sigue siendo:
                  <span className="secondaryFont text-lg font-semibold text-white/85">
                    {" "}
                    ¿hace cuánto no sales a dar una vuelta?
                  </span>
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>Fiesta temática</Pill>
                  <Pill>Momento viral</Pill>
                  <Pill>Live en Kick</Pill>
                </div>
              </InfoCard>
            </StaggerItem>

            <StaggerItem>
              <InfoCard
                index="02"
                tag="Entradas, directo y activación sin líos."
                title="Cómo funciona"
              >
                <ul className="mt-1 space-y-3 text-sm text-white/70">
                  <li className="flex gap-3">
                    <Dot />
                    <div>
                      <p className="font-semibold text-white/85">Entradas</p>
                      <p className="text-white/60">
                        Venta oficial desde la web (Fourvenues).
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Dot />
                    <div>
                      <p className="font-semibold text-white/85">Directo</p>
                      <p className="text-white/60">
                        Streaming durante la noche en Kick.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Dot />
                    <div>
                      <p className="font-semibold text-white/85">
                        Activaciones
                      </p>
                      <p className="text-white/60">
                        Momentos, regalos y dinámicas (según edición).
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Operativa
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Coordinamos puerta, timing y comunicación con la sala para
                    maximizar afluencia y consumo.
                  </p>
                </div>
              </InfoCard>
            </StaggerItem>

            <StaggerItem>
              <InfoCard
                index="03"
                tag="Canales oficiales y acceso directo."
                title="Dónde verlo"
                actions={
                  <div className="relative inline-flex">
                    <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/25 blur-xl" />
                    <ButtonLink
                      href="https://kick.com/laputvuelta-oficial"
                      external
                      variant="solid"
                    >
                      Live
                    </ButtonLink>
                  </div>
                }
              >
                <div className="space-y-3 text-sm text-white/70">
                  <a
                    href="https://kick.com/laputvuelta-oficial"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-white/[0.02] px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/[0.04] hover:ring-[var(--primary)]/25"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-black/25 ring-1 ring-white/10">
                        <Image
                          src="/kick.png"
                          alt="Kick"
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain opacity-90 transition group-hover:opacity-100"
                          priority={false}
                        />
                      </span>
                    </span>

                    <span className="text-sm text-white/55 transition group-hover:text-white/75">
                      laputvuelta-oficial <span className="opacity-70">→</span>
                    </span>
                  </a>

                  <a
                    href="https://instagram.com/laputvuelta.oficial"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-white/[0.02] px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/[0.04] hover:ring-[var(--primary)]/25"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-black/25 ring-1 ring-white/10">
                        <Image
                          src="/instagram.png"
                          alt="Instagram"
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain opacity-90 transition group-hover:opacity-100 invert"
                          priority={false}
                        />
                      </span>
                    </span>

                    <span className="text-sm text-white/55 transition group-hover:text-white/75">
                      @laputvuelta.oficial <span className="opacity-70">→</span>
                    </span>
                  </a>

                  <Link
                    href="/tickets"
                    className="group flex items-center justify-between rounded-2xl bg-white/[0.02] px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/[0.04] hover:ring-[var(--primary)]/25"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-black/25 ring-1 ring-white/10">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="opacity-90 transition group-hover:opacity-100"
                        >
                          <path
                            d="M4 8h16v4a2 2 0 010 4v4H4v-4a2 2 0 010-4V8z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 8v12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="2 2"
                          />
                        </svg>
                      </span>
                    </span>

                    <span className="text-sm text-white/55 transition group-hover:text-white/75">
                      Ver calendario <span className="opacity-70">→</span>
                    </span>
                  </Link>
                </div>
              </InfoCard>
            </StaggerItem>
          </Stagger>
        </Reveal>

        <Reveal>
          <Section
            title="Lo que vas a vivir"
            subtitle="Diseñamos la noche para que pasen cosas. Esto es lo que siempre aparece en la vuelta."
            actions={
              <ButtonLink href="/tickets" variant="outline">
                Ver fechas
              </ButtonLink>
            }
          >
            <div className="grid gap-4 md:grid-cols-3">
              {experienceHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10 transition hover:bg-white/[0.04] hover:ring-[var(--primary)]/25"
                >
                  <div className="pointer-events-none absolute -inset-16 -z-10 rounded-[24px] bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/12" />

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl text-[var(--primary)]">
                      {item.icon}
                    </span>
                    <p className="secondaryFont text-base font-black uppercase tracking-[0.08em] text-white/90">
                      {item.title}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <FullBleed>
          <ScrollBasedVelocity baseVelocity={4} direction={1}>
            <AnnouncementBar
              items={[
                "Tickets disponibles en Fourvenues",
                "Live en Kick durante toda la noche",
                "Ep 3... próximamente",
              ]}
            />
          </ScrollBasedVelocity>
        </FullBleed>

        <Reveal>
          <Section
            title="Testimonios reales"
            subtitle="Lo que nos dicen después de una vuelta."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="relative overflow-hidden rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10"
                >
                  <p className="text-sm leading-relaxed text-white/70">
                    {testimonial.quote}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/45">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section
            title="Recuerdos recientes"
            subtitle="Un vistazo rápido a lo que se vive dentro."
            actions={
              <ButtonLink href="/gallery" variant="outline">
                Ver galería
              </ButtonLink>
            }
          >
            <div className="mb-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="glass relative overflow-hidden rounded-2xl border border-white/10 p-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--primary)]/20 blur-2xl" />
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/45">
                  La galería oficial
                </p>
                <p className="mt-3 text-sm text-white/70">
                  Entra a los álbumes de cada edición, guarda tus fotos y revive
                  los momentos más locos. Actualizamos cada show.
                </p>
              </div>

              <div className="glass flex flex-col justify-between rounded-2xl border border-white/10 p-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/45">
                    ¿Quieres salir?
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    Etiqueta @laputivuelta.oficial para aparecer en la galería.
                  </p>
                </div>
                <div className="mt-4">
                  <ButtonLink href="/gallery" variant="solid">
                    Entrar ahora
                  </ButtonLink>
                </div>
              </div>
            </div>
            {/* Collage */}
            <div className="grid gap-4 md:grid-cols-3">
              {collageImages.map((image, index) => {
                const Tile = (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      priority={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-white/[0.04]" />

                    {/* CTA only when needed */}
                    {image.cta ? (
                      <div className="absolute inset-x-4 bottom-4">
                        <div className="glass inline-flex items-center justify-between gap-3 rounded-xl border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 transition group-hover:border-[var(--primary)]/40">
                          Explorar{" "}
                          <span className="transition group-hover:translate-x-0.5">
                            →
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );

                // Si tiene cta, todo el tile es clickable (mejor).
                // Si no, lo dejamos como imagen estática.
                return image.cta ? (
                  <Link
                    key={`${image.alt}-${index}`}
                    href="/gallery"
                    className="group block"
                    aria-label="Explorar galería"
                  >
                    {Tile}
                  </Link>
                ) : (
                  <div key={`${image.alt}-${index}`} className="group">
                    {Tile}
                  </div>
                );
              })}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <div className="mt-10 md:mt-12 pb-20 md:pb-28">
            <CallToAction
              title="¿Listo para dar la vuelta?"
              description="Entra con entradas o asegura tu sitio con reserva. La noche se diseña para vivirse dentro."
              actions={
                <>
                  <div className="relative w-full md:w-auto">
                    <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/25 blur-xl" />
                    <ButtonLink href="/tickets" variant="solid">
                      Comprar entradas
                    </ButtonLink>
                  </div>
                  <ButtonLink href="/events">Ver próximos eventos</ButtonLink>
                </>
              }
            />
          </div>
        </Reveal>
        <div className="opacity-5">
          <FullBleed>
            <ScrollBasedVelocity baseVelocity={20} direction={1}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={44}
                priority
                className="h-12 w-auto"
              />
            </ScrollBasedVelocity>
          </FullBleed>
        </div>
      </Container>
    </main>
  );
}
