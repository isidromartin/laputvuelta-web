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
  { src: "/collage/img1.jpg", alt: "La Put* Vuelta show" },
  { src: "/hero/slide-2.png", alt: "La Put* Vuelta live" },
  { src: "/hero/slide-3.png", alt: "La Put* Vuelta moments" },
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
            <div className="relative">
              {/* Ambient halo + soft grid */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-[var(--primary)]/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="grid gap-4 md:grid-cols-12">
                {/* HERO */}
                <Link
                  href="/gallery"
                  className="group relative md:col-span-7 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl transition hover:border-white/20"
                  aria-label="Abrir galería completa"
                >
                  {/* gradient border (pseudo) */}
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />

                  <div className="relative aspect-[16/11]">
                    {collageImages[0] ? (
                      <Image
                        src={collageImages[0].src}
                        alt={collageImages[0].alt}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 58vw"
                        priority={false}
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center text-white/60">
                        Sin imágenes
                      </div>
                    )}

                    {/* overlays */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,77,94,0.22),transparent_58%),radial-gradient(circle_at_82%_82%,rgba(255,77,94,0.12),transparent_60%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* scanline sheen */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute -left-1/3 top-[-20%] h-[140%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-[1px]" />
                    </div>

                    {/* Top row: badges + index */}
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/85 backdrop-blur">
                          Reciente
                        </span>
                        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/60 backdrop-blur">
                          Oficial
                        </span>
                      </div>

                      <span className="text-[var(--primary)]/90 font-black text-3xl leading-none secondaryFont drop-shadow-[0_0_25px_rgba(255,77,94,0.25)]">
                        01
                      </span>
                    </div>

                    {/* Bottom copy */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">
                        La Put* Vuelta
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-white/95 secondaryFont">
                            Momentos del show
                          </p>
                          <p className="mt-1 text-sm text-white/70">
                            Entra, mira todo y guarda lo que se pueda contar.
                          </p>
                        </div>

                        <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[11px] font-semibold text-white/85 backdrop-blur">
                          Ver galería
                          <span className="inline-block translate-y-[1px]">
                            ↗
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-5 grid gap-4">
                  {/* TILE 02 */}
                  <Link
                    href="/gallery"
                    className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-xl transition hover:border-white/20"
                    aria-label="Ver más fotos"
                  >
                    <div className="relative aspect-[16/12]">
                      {collageImages[1] ? (
                        <Image
                          src={collageImages[1].src}
                          alt={collageImages[1].alt}
                          fill
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={false}
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-white/60">
                          Sin imagen
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />

                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/70 backdrop-blur">
                          Flash
                        </span>
                        <span className="text-white/75 font-black text-xl secondaryFont">
                          02
                        </span>
                      </div>

                      <div className="absolute bottom-0 p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">
                          Captura
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/90">
                          {collageImages[1]?.alt ?? "Momento"}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* TILE 03 */}
                  <Link
                    href="/gallery"
                    className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-xl transition hover:border-white/20"
                    aria-label="Explorar álbum"
                  >
                    <div className="relative aspect-[16/12]">
                      {collageImages[2] ? (
                        <Image
                          src={collageImages[2].src}
                          alt={collageImages[2].alt}
                          fill
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={false}
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-white/60">
                          Sin imagen
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />

                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/70 backdrop-blur">
                          Dentro
                        </span>
                        <span className="text-white/75 font-black text-xl secondaryFont">
                          03
                        </span>
                      </div>

                      <div className="absolute bottom-0 p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">
                          Pista
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/90">
                          {collageImages[2]?.alt ?? "Noche"}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* CTA GLASS */}
                  <div className="glass relative overflow-hidden rounded-[32px] border border-white/10 p-5">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,77,94,0.18),transparent_55%)]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">
                      Galería completa
                    </p>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      Todos los álbumes por evento. Descarga en grande,
                      compártelo y revívelo.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <ButtonLink href="/gallery">Entrar ahora</ButtonLink>
                      <span className="text-xs text-white/45">
                        Actualizado constantemente
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
