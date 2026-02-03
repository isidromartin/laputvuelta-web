import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { ContainerFull } from "@/components/site/ContainerFull";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CallToAction } from "@/components/site/CallToAction";
import { Section } from "@/components/site/Section";
import Link from "next/link";
import { HeroCarousel } from "@/components/site/HeroCarousel";
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
  { src: "/hero/slide-1.png", alt: "La Put* Vuelta show" },
  { src: "/hero/slide-2.png", alt: "La Put* Vuelta live" },
  { src: "/hero/slide-3.png", alt: "La Put* Vuelta moments" },
];

/** Helpers locales (ponlos debajo del componente o arriba del return) **/

function InfoCard({
  index,
  tag,
  title,
  subtitle,
  actions,
  children,
}: {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="glass card-hover group relative overflow-hidden rounded-3xl border border-white/10 p-1">
      {/* <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/20" /> */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[190px] hidden md:block" />
        <div className="absolute right-[-220px] top-[240px] h-[540px] w-[540px] rounded-full bg-[var(--primary)]/10 blur-[210px] hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
      </div>

      <div className="rounded-[22px] p-7 md:p-8">
        <Stagger className="flex flex-col">
          {/* 1) Index + Tag */}
          <StaggerItem>
            <div className="mb-5 flex items-end justify-between gap-4">
              <span className="text-[var(--primary)] font-black text-5xl leading-none">
                {index}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                {tag}
              </span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white/90 secondaryFont">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/65">{subtitle}</p>
              </div>
              {actions ? <div className="shrink-0">{actions}</div> : null}
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-6">{children}</div>
          </StaggerItem>
        </Stagger>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--primary)] shadow-[0_0_14px_rgba(255,77,94,0.35)]" />
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="relative pt-28 pb-20 md:pt-32 md:pb-28">
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-[180px]" />
        <div className="absolute right-[-120px] top-[240px] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[160px]" />
      </div>
      <div className="grain" /> */}

      <ContainerFull>
        {/* Hero */}
        <div className="relative">
          {/* Marco glass alrededor del carrusel */}
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.60)]">
            <HeroCarousel slides={slides} />

            {/* Overlay sutil para “neon night” */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/55" />

            {/* Watermark diablo */}
            {/* <div className="pointer-events-none absolute -right-6 -bottom-10 opacity-70 md:opacity-80">
              <div className="relative h-[180px] w-[180px] md:h-[260px] md:w-[260px]">
                <Image
                  src="/devil-mark.png"
                  alt="La Put* Vuelta"
                  fill
                  className="object-contain drop-shadow-[0_0_45px_rgba(255,77,94,0.18)]"
                  priority
                />
              </div>
            </div> */}

            {/* Borde neon sutil */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </div>
      </ContainerFull>

      <Container>
        <Reveal>
          <div className="mt-8 glass card-hover relative rounded-3xl border border-white/10 p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Accesos rápidos
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight secondaryFont">
                  Entradas, live y agenda en un clic
                </h2>
                <p className="mt-3 text-sm md:text-base text-white/60 max-w-2xl">
                  Diseñamos cada edición para que navegues sin fricción: compra
                  entradas, entra al directo o consulta próximas fechas en
                  segundos.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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

        {/* Info */}
        <Reveal>
          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
            <StaggerItem>
              <InfoCard
                index="01"
                tag="Fiesta + show + directo. Todo pasa."
                title="¿Qué es La Put* Vuelta?"
                subtitle=""
              >
                <p className="text-sm text-white/70 leading-relaxed">
                  LA PUT*VUELTA es una noche donde se juntan fiesta, narrativa y
                  momentos. Está pensada para quien quiere que pasen cosas, para
                  quien quiere una historia que contar al día siguiente.
                </p>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Cada edición se vive dentro… y también fuera: retransmisión en
                  directo para seguir la noche incluso desde casa. Pero la
                  pregunta sigue siendo:
                  <span className="text-white/85 font-semibold text-lg secondaryFont">
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
                subtitle=""
              >
                <ul className="mt-1 space-y-3 text-sm text-white/70">
                  <li className="flex gap-3">
                    <Dot />
                    <div>
                      <p className="text-white/85 font-semibold">Entradas</p>
                      <p className="text-white/60">
                        Venta oficial desde la web (Fourvenues).
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Dot />
                    <div>
                      <p className="text-white/85 font-semibold">Directo</p>
                      <p className="text-white/60">
                        Streaming durante la noche en Kick.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Dot />
                    <div>
                      <p className="text-white/85 font-semibold">
                        Activaciones
                      </p>
                      <p className="text-white/60">
                        Momentos, regalos y dinámicas (según edición).
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
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
                subtitle=""
                actions={
                  <div className="relative inline-flex">
                    <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/20 blur-xl" />
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
                  {/* Kick */}
                  <a
                    href="https://kick.com/laputvuelta-oficial"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] hover:border-[var(--primary)]/50 transition"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Image
                          src="/kick.png"
                          alt="Kick"
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain opacity-90 group-hover:opacity-100 transition fill-white"
                          priority={false}
                        />
                      </span>
                    </span>

                    <span className="text-sm text-white/55 group-hover:text-white/75 transition">
                      laputvuelta-oficial <span className="opacity-70">→</span>
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/laputvuelta.oficial"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] hover:border-[var(--primary)]/50 transition"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Image
                          src="/instagram.png"
                          alt="Instagram"
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain opacity-90 group-hover:opacity-100 transition invert"
                          priority={false}
                        />
                      </span>
                    </span>

                    <span className="text-sm text-white/55 group-hover:text-white/75 transition">
                      @laputvuelta.oficial <span className="opacity-70">→</span>
                    </span>
                  </a>

                  {/* Tickets */}
                  <Link
                    href="/tickets"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] hover:border-[var(--primary)]/50 transition"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                        {/* Icono simple para “tickets” sin librerías */}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="opacity-90 group-hover:opacity-100 transition"
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

                    <span className="text-sm text-white/55 group-hover:text-white/75 transition">
                      Ver calendario <span className="opacity-70">→</span>
                    </span>
                  </Link>
                </div>
              </InfoCard>
            </StaggerItem>
          </Stagger>
        </Reveal>

        {/* CTA final (conversion) */}
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
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[var(--primary)]/30 hover:bg-white/[0.06]"
                >
                  <div className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/14" />
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                      {item.icon}
                    </span>
                    <p className="text-base font-black uppercase tracking-[0.08em] text-white/90 secondaryFont">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section
            title="Testimonios reales"
            subtitle="Lo que nos dicen después de una vuelta."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="glass card-hover relative overflow-hidden rounded-3xl border border-white/10 p-5"
                >
                  <p className="text-sm text-white/70 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/45">
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
            <div className="grid gap-4 md:grid-cols-3">
              {collageImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* CTA final (conversion) */}
        <Reveal>
          <div className="mt-10 md:mt-12">
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
      </Container>
    </main>
  );
}
