// src/app/(site)/venues/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Section } from "@/components/site/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salas | La Put* Vuelta",
  description:
    "Salas oficiales de La Put* Vuelta. Consulta la información de las distintas salas donde presentamos el show en vivo.",
};

export const revalidate = 60;

const venueQuery = groq`*[_type=="venue" && slug.current==$slug][0]{
  _id,
  name,
  city,
  address,
  mapsUrl
}`;

const eventsQuery = groq`*[_type=="event" && venue->slug.current==$slug] | order(startAt desc){
  _id,
  title,
  startAt,
  "slug": slug.current
}`;

type Venue = {
  _id: string;
  name: string;
  city?: string;
  address?: string;
  mapsUrl?: string;
};

type VenueEvent = {
  _id: string;
  title: string;
  startAt: string;
  slug: string;
};

function isFuture(dateIso: string) {
  return new Date(dateIso).getTime() > Date.now();
}

export default async function VenuePage({
  params,
}: {
  // En tu Next, params puede venir como Promise
  params: any;
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;

  if (!slug || typeof slug !== "string") return notFound();

  const venue = await client.fetch<Venue | null>(venueQuery, { slug });
  if (!venue) return notFound();

  const events = await client.fetch<VenueEvent[]>(eventsQuery, { slug });

  const upcoming = events
    .filter((e) => isFuture(e.startAt))
    .sort((a, b) => +new Date(a.startAt) - +new Date(b.startAt));
  const past = events.filter((e) => !isFuture(e.startAt));

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Sala</Badge>
            {venue.city ? <Badge>{venue.city}</Badge> : null}
            {venue.mapsUrl ? <Badge>Maps</Badge> : null}
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            {venue.name}
          </h1>

          <p className="text-white/70">
            {venue.address ? venue.address : "Dirección por confirmar"}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink href="/venues">Volver a salas</ButtonLink>
            <ButtonLink href="/events">Ver eventos</ButtonLink>
            {venue.mapsUrl ? (
              <ButtonLink href={venue.mapsUrl} external variant="solid">
                Cómo llegar
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <Section
            title="Próximos eventos"
            subtitle="Si no hay ninguno, significa que aún no está publicado."
          >
            {upcoming.length ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((e) => (
                  <Link
                    key={e._id}
                    href={`/events/${e.slug}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/25 transition"
                  >
                    <p className="text-sm font-semibold text-white/90">
                      {e.title}
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      {new Date(e.startAt).toLocaleString("es-ES", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/65">
                No hay próximos eventos publicados.
              </p>
            )}
          </Section>

          <Section
            title="Eventos pasados"
            subtitle="Histórico de ediciones en esta sala."
          >
            {past.length ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {past.map((e) => (
                  <Link
                    key={e._id}
                    href={`/events/${e.slug}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/25 transition"
                  >
                    <p className="text-sm font-semibold text-white/90">
                      {e.title}
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      {new Date(e.startAt).toLocaleString("es-ES", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/65">
                Todavía no hay eventos pasados en esta sala.
              </p>
            )}
          </Section>
        </div>
      </Container>
    </main>
  );
}
