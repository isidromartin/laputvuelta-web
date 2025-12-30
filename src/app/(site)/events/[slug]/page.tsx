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
          <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border border-white/20 bg-black" />
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-semibold text-white/90">
                {it.title ?? "Activación"}
              </p>
              {it.window ? (
                <p className="text-xs text-white/55">{it.window}</p>
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
    live?.kickUrlOverride || "https://kick.com/laputivuelta-oficial";
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
    <main className={`pt-8 pb-12 ${hasSticky ? "pb-28 md:pb-12" : ""}`}>
      <Container>
        {/* HERO con cartel */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
          {coverUrl ? (
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={coverUrl}
                alt={event.title ?? "Evento"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
          ) : (
            <div className="h-40 w-full bg-white/[0.02]" />
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

            <h1 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-white">
              {event.title ?? "Evento"}
            </h1>

            <p className="mt-2 text-sm md:text-base text-white/70">
              {formatDateTimeES(event.startAt)}
              {event.venue?.address ? ` · ${event.venue.address}` : ""}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {/* {tickets?.fourvenuesUrl ? (
                <ButtonLink
                  href={tickets.fourvenuesUrl}
                  external
                  variant="solid"
                >
                  Comprar entradas
                </ButtonLink>
              ) : (
                <ButtonLink href="/tickets" variant="solid">
                  Entradas
                </ButtonLink>
              )} */}

              {live ? (
                <a
                  href={kickUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full kick px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Abrir en Kick
                </a>
              ) : (
                <a
                  href="/live"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full kick px-5 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Abrir en Kick
                </a>
              )}

              {event.venue?.mapsUrl ? (
                <ButtonLink href={event.venue.mapsUrl} external variant="solid">
                  Cómo llegar
                </ButtonLink>
              ) : null}

              <ButtonLink href="/events">Ver todos</ButtonLink>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-white/55">Sala</p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              {event.venue?.name ?? "Por confirmar"}
            </p>
            <p className="mt-1 text-sm text-white/65">
              {event.venue?.city ?? ""}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-white/55">Fecha</p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              {formatDateES(event.startAt) || "Por confirmar"}
            </p>
            <p className="mt-1 text-sm text-white/65">
              {event.startAt
                ? new Date(event.startAt).toLocaleTimeString("es-ES", {
                    timeStyle: "short",
                  })
                : ""}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-white/55">Links</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <ButtonLink href="/gallery" variant="outline">
                Galería
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* SECCIONES (si existen) */}
        <div className="mt-10 space-y-6">
          {/* Entradas (si hay sección) */}
          {tickets?.fourvenuesUrl ? (
            <Section
              title={tickets.heading ?? "Entradas"}
              subtitle="Venta oficial vía Fourvenues."
              actions={
                <ButtonLink href={tickets.fourvenuesUrl} external>
                  Abrir en Fourvenues
                </ButtonLink>
              }
            >
              <div className="space-y-4">
                {/* EMBED del evento (si está configurado) */}
                <FourvenuesEmbedEvent
                  publicUrl={tickets.fourvenuesUrl}
                  title={`Entradas · ${event.title ?? "La Put* Vuelta"}`}
                />
              </div>
            </Section>
          ) : null}

          {/* Live (si hay sección)
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
                <ButtonLink href={kickUrl} external>
                  Abrir en Kick
                </ButtonLink>
              </div>
            </Section>
          ) : null} */}

          {/* Activaciones en formato timeline */}
          {activations?.items?.length ? (
            <Section
              title={activations.heading ?? "Activaciones"}
              subtitle="Horarios aproximados. Pueden variar."
            >
              <ActivationTimeline items={activations.items} />
            </Section>
          ) : null}

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
        <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-black/95 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid grid-cols-3 gap-2">
              {tickets?.fourvenuesUrl ? (
                <a
                  href={tickets.fourvenuesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Comprar
                </a>
              ) : (
                <Link
                  href="/tickets"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Entradas
                </Link>
              )}

              {live ? (
                <a
                  href={kickUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                >
                  Live
                </a>
              ) : (
                <Link
                  href="/live"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                >
                  Live
                </Link>
              )}

              {event.venue?.mapsUrl ? (
                <a
                  href={event.venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                >
                  Mapa
                </a>
              ) : (
                <Link
                  href="/venues"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
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
