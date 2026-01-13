import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";

import { PartnersGrid } from "@/components/site/PartnersGrid";
import { FourvenuesEmbedEvent } from "@/components/site/FourvenuesEmbedEvent";

export const revalidate = 60;

type Venue = {
  name?: string;
  city?: string;
  address?: string;
  mapsUrl?: string;
};

type SectionTickets = {
  _type: "sectionTickets";
  heading?: string;
  fourvenuesUrl?: string;
  fourvenuesEmbedPath?: string;
  fourvenuesEmbedUrl?: string;
  embedMinHeight?: number;
};

type SectionLive = {
  _type: "sectionLive";
  heading?: string;
  kickUrlOverride?: string;
  autoplay?: boolean;
  muted?: boolean;
};

type SectionActivations = {
  _type: "sectionActivations";
  heading?: string;
  items?: Array<{
    title?: string;
    window?: string;
    location?: string;
    description?: string;
    secret?: boolean;
  }>;
};

type Partner = {
  _id: string;
  name: string;
  websiteUrl?: string;
  logo?: any;
};

type SectionPartners = {
  _type: "sectionPartners";
  heading?: string;
  includeGlobal?: boolean;
  partners?: Partner[];
};

type EventDoc = {
  title?: string;
  startAt?: string;
  coverImage?: any;
  venue?: Venue;
  sections?: Array<
    SectionTickets | SectionLive | SectionActivations | SectionPartners | any
  >;
};

const metaQuery = groq`*[_type=="event" && slug.current==$slug][0]{
  title,
  startAt,
  coverImage,
  venue->{ name, city },
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const event = await client.fetch<EventDoc>(metaQuery, { slug });

  if (!event?.title) {
    return {
      title: "Evento | La Put* Vuelta",
      description:
        "Detalles del evento de La Put* Vuelta: entradas, live y activaciones.",
    };
  }

  const venueText = event.venue?.name
    ? `${event.venue.name}${event.venue.city ? ` · ${event.venue.city}` : ""}`
    : "Sala por confirmar";

  const dateText = event.startAt
    ? new Date(event.startAt).toLocaleDateString("es-ES", { dateStyle: "long" })
    : "";

  const description = `Edición de La Put* Vuelta en ${venueText}${
    dateText ? ` (${dateText})` : ""
  }. Entradas oficiales, live y activaciones.`;

  const ogImage = event.coverImage
    ? urlForImage(event.coverImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;

  return {
    title: `${event.title} | La Put* Vuelta`,
    description,
    openGraph: {
      title: `${event.title} | La Put* Vuelta`,
      description,
      type: "website",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: event.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: `${event.title} | La Put* Vuelta`,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

const query = groq`*[_type=="event" && slug.current==$slug][0]{
  title,
  startAt,
  coverImage,
  venue->{ name, city, address, mapsUrl },
  sections[]{
    _type,
    heading,
    fourvenuesUrl,
    fourvenuesEmbedPath,
    fourvenuesEmbedUrl,
    embedMinHeight,
    kickUrlOverride,
    autoplay,
    muted,
    items,
    partners[]->{
      _id,
      name,
      websiteUrl,
      logo
    },
    includeGlobal
  }
}`;

function kickUsernameFromUrl(url: string) {
  try {
    const u = new URL(url);
    return u.pathname.replace("/", "");
  } catch {
    return "";
  }
}

function formatDateTimeES(iso?: string) {
  if (!iso) return "Fecha por confirmar";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "Fecha por confirmar";
  return d.toLocaleString("es-ES", { dateStyle: "full", timeStyle: "short" });
}

function formatDateES(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("es-ES", { dateStyle: "long" });
}

function formatTimeES(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("es-ES", { timeStyle: "short" });
}

function getSection<T extends { _type: string }>(
  sections: any[] | undefined,
  type: T["_type"]
): T | undefined {
  return (sections || []).find((s) => s?._type === type);
}

function ActivationTimeline({
  items,
}: {
  items: NonNullable<SectionActivations["items"]>;
}) {
  return (
    <ol className="relative border-l border-white/10 pl-6 space-y-4">
      {items.map((it, idx) => (
        <li key={idx} className="relative">
          <span className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border border-white/20 bg-black shadow-[0_0_16px_rgba(255,77,94,0.15)]" />
          <div className="glass group relative overflow-hidden rounded-2xl border border-white/10 p-4">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/16" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-black uppercase tracking-[0.06em] text-white/90">
                  {it.title ?? "Activación"}
                </p>
                {it.window ? (
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                    {it.window}
                  </p>
                ) : null}
              </div>

              {it.location ? (
                <p className="mt-1 text-xs text-white/55">{it.location}</p>
              ) : null}

              {it.secret ? (
                <p className="mt-2 text-sm text-white/70">
                  Sorpresa. Ya te enteras allí.
                </p>
              ) : it.description ? (
                <p className="mt-2 text-sm text-white/75">{it.description}</p>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = await client.fetch<EventDoc>(query, { slug });
  if (!event) return notFound();

  const tickets = getSection<SectionTickets>(event.sections, "sectionTickets");
  const live = getSection<SectionLive>(event.sections, "sectionLive");
  const activations = getSection<SectionActivations>(
    event.sections,
    "sectionActivations"
  );

  const kickUrl =
    live?.kickUrlOverride || "https://kick.com/laputvuelta-oficial";
  const kickUser = kickUsernameFromUrl(kickUrl);
  const kickPlayerSrc =
    kickUser && live
      ? `https://player.kick.com/${kickUser}?autoplay=${
          live.autoplay ? "true" : "false"
        }&muted=${live.muted ? "true" : "false"}`
      : null;

  const coverUrl = event.coverImage
    ? urlForImage(event.coverImage)
        .width(2200)
        .height(1200)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const hasSticky =
    Boolean(tickets?.fourvenuesUrl) ||
    Boolean(live) ||
    Boolean(event.venue?.mapsUrl);

  return (
    <main
      className={`relative pt-28 pb-16 md:pt-32 md:pb-24 ${
        hasSticky ? "pb-28 md:pb-24" : ""
      }`}
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-160px] top-[260px] h-[460px] w-[460px] rounded-full bg-[var(--primary)]/10 blur-[190px]" />
      </div>
      <div className="grain" />

      <Container>
        {/* HERO */}
        <section className="glass group relative overflow-hidden rounded-3xl border border-white/10">
          {/* watermark opcional (si tienes /devil-mark.png) */}
          <div className="pointer-events-none absolute -right-8 -bottom-10 opacity-60 hidden md:block">
            <div className="relative h-[220px] w-[220px]">
              <Image
                src="/devil-mark.png"
                alt=""
                fill
                className="object-contain drop-shadow-[0_0_45px_rgba(255,77,94,0.22)]"
                priority={false}
              />
            </div>
          </div>

          {coverUrl ? (
            <div className="relative aspect-[21/9] w-full border-b border-white/10 bg-black/40">
              <Image
                src={coverUrl}
                alt={event.title ?? "Evento"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.16),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            </div>
          ) : (
            <div className="h-40 w-full border-b border-white/10 bg-white/[0.02]" />
          )}

          <div className="relative p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>La Put* Vuelta</Badge>
              {event.venue?.name ? (
                <Badge>
                  {event.venue.name}
                  {event.venue.city ? ` · ${event.venue.city}` : ""}
                </Badge>
              ) : null}
              {event.startAt ? (
                <Badge>{formatDateES(event.startAt)}</Badge>
              ) : null}
            </div>

            <div className="mt-4 flex items-end justify-between gap-4">
              <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white/95">
                {event.title ?? "Evento"}
              </h1>
              <span className="hidden md:block text-[var(--primary)] font-black text-6xl opacity-20 leading-none">
                01
              </span>
            </div>

            <p className="mt-2 text-sm md:text-base text-white/65 leading-relaxed">
              {formatDateTimeES(event.startAt)}
              {event.venue?.address ? ` · ${event.venue.address}` : ""}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Comprar / Entradas */}
              {tickets?.fourvenuesUrl ? (
                <a
                  href={tickets.fourvenuesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)] hover:scale-[1.01] shadow-[0_0_30px_rgba(255,77,94,0.18)]"
                >
                  <span className="pointer-events-none absolute -inset-[2px] rounded-2xl border border-white/15" />
                  Comprar entradas
                </a>
              ) : (
                <ButtonLink href="/tickets" variant="solid">
                  Entradas
                </ButtonLink>
              )}

              {/* Kick */}
              {live ? (
                <a
                  href={kickUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white/90 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                >
                  Abrir en Kick
                </a>
              ) : (
                <Link
                  href="/live"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white/90 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                >
                  Abrir en Kick
                </Link>
              )}

              {/* Maps */}
              {event.venue?.mapsUrl ? (
                <a
                  href={event.venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white/90 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                >
                  Cómo llegar
                </a>
              ) : null}

              <ButtonLink href="/events" variant="outline">
                Ver todos
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-5">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--primary)]/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Sala
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.06em] text-white/90">
                {event.venue?.name ?? "Por confirmar"}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {event.venue?.city ?? ""}
              </p>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-5">
            <div className="pointer-events-none absolute -left-20 -bottom-16 h-56 w-56 rounded-full bg-[var(--primary)]/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Fecha
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.06em] text-white/90">
                {formatDateES(event.startAt) || "Por confirmar"}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {formatTimeES(event.startAt)}
              </p>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-5">
            <div className="pointer-events-none absolute -right-24 -bottom-20 h-64 w-64 rounded-full bg-[var(--primary)]/8 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Links
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ButtonLink href="/gallery" variant="outline">
                  Galería
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIONES */}
        <div className="mt-10 space-y-6">
          {/* Entradas */}
          {tickets?.fourvenuesUrl ? (
            <Section
              title={tickets.heading ?? "Entradas"}
              subtitle="Venta oficial vía Fourvenues."
              actions={
                <a
                  href={tickets.fourvenuesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35 hover:text-white"
                >
                  Abrir en Fourvenues
                </a>
              }
            >
              <div className="space-y-4">
                <FourvenuesEmbedEvent
                  publicUrl={tickets.fourvenuesUrl}
                  title={`Entradas · ${event.title ?? "La Put* Vuelta"}`}
                />
              </div>
            </Section>
          ) : null}

          {/* Live (si decides activarlo) */}
          {live ? (
            <Section
              title={live.heading ?? "Live"}
              subtitle="Directo en Kick (si hay emisión)."
            >
              {kickPlayerSrc ? (
                <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
                  <div className="aspect-video">
                    <iframe
                      src={kickPlayerSrc}
                      className="h-full w-full"
                      frameBorder="0"
                      scrolling="no"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm text-white/65">
                  No hay embed disponible ahora. Abre el canal directamente.
                </p>
              )}

              <div className="mt-4">
                <a
                  href={kickUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)] hover:scale-[1.01]"
                >
                  Abrir en Kick
                </a>
              </div>
            </Section>
          ) : null}

          {/* Activaciones */}
          {activations?.items?.length ? (
            <Section
              title={activations.heading ?? "Activaciones"}
              subtitle="Horarios aproximados. Pueden variar."
            >
              <ActivationTimeline items={activations.items} />
            </Section>
          ) : null}

          {/* Partners */}
          {(() => {
            const partnersSection = getSection<SectionPartners>(
              event.sections,
              "sectionPartners"
            );
            if (!partnersSection) return null;

            const includeGlobal = partnersSection.includeGlobal ?? false;
            const hasEventPartners =
              (partnersSection.partners?.length ?? 0) > 0;
            if (!includeGlobal && !hasEventPartners) return null;

            return (
              <Section
                title={partnersSection.heading ?? "Partners"}
                subtitle="Colaboradores de esta edición."
              >
                <PartnersGrid
                  partners={partnersSection.partners}
                  includeGlobal={includeGlobal}
                />
              </Section>
            );
          })()}
        </div>
      </Container>

      {/* STICKY CTA (móvil) */}
      {hasSticky ? (
        <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-black/90 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid grid-cols-3 gap-2">
              {tickets?.fourvenuesUrl ? (
                <a
                  href={tickets.fourvenuesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-3 py-3 text-sm font-black uppercase tracking-[0.10em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)]"
                >
                  Comprar
                </a>
              ) : (
                <Link
                  href="/tickets"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-3 py-3 text-sm font-black uppercase tracking-[0.10em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)]"
                >
                  Entradas
                </Link>
              )}

              {live ? (
                <a
                  href={kickUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-black uppercase tracking-[0.10em] text-white/90 transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35"
                >
                  Live
                </a>
              ) : (
                <Link
                  href="/live"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-black uppercase tracking-[0.10em] text-white/90 transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35"
                >
                  Live
                </Link>
              )}

              {event.venue?.mapsUrl ? (
                <a
                  href={event.venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-black uppercase tracking-[0.10em] text-white/90 transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35"
                >
                  Mapa
                </a>
              ) : (
                <Link
                  href="/venues"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-black uppercase tracking-[0.10em] text-white/90 transition hover:bg-white/[0.06] hover:border-[var(--primary)]/35"
                >
                  Salas
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
