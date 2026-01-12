import Link from "next/link";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { Section } from "@/components/site/Section";
import { ButtonLink } from "@/components/site/ButtonLink";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Galería | La Put* Vuelta",
  description:
    "Fotos por evento de La Put* Vuelta. Entra en cada edición para ver el álbum.",
};

const query = groq`*[_type=="event"] | order(startAt desc){
  _id,
  title,
  startAt,
  "slug": slug.current,
  coverImage,
  venue->{ name, city }
}`;

type EventListItem = {
  _id: string;
  title: string;
  slug: string;
  startAt?: string;
  coverImage?: any;
  venue?: { name?: string; city?: string };
};

function isFuture(dateIso?: string) {
  if (!dateIso) return false;
  const t = new Date(dateIso).getTime();
  if (Number.isNaN(t)) return false;
  return t > Date.now();
}

function formatDate(dateIso?: string) {
  if (!dateIso) return "Fecha por confirmar";
  const d = new Date(dateIso);
  if (Number.isNaN(d.getTime())) return "Fecha por confirmar";
  return d.toLocaleDateString("es-ES", { dateStyle: "medium" });
}

function EventCard({ e }: { e: EventListItem }) {
  const coverUrl = e.coverImage
    ? urlForImage(e.coverImage)
        .width(1200)
        .height(1500)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const future = isFuture(e.startAt);

  return (
    <Link
      href={`/gallery/${e.slug}`}
      className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 transition"
    >
      <div className="relative aspect-[4/5] w-full bg-black/40 border-b border-white/10">
        {coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt={e.title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-xs text-white/35">
            Sin cartel
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
          <Badge>{future ? "Próximo" : "Álbum"}</Badge>
          <p className="text-xs text-white/70">{formatDate(e.startAt)}</p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition line-clamp-2">
          {e.title}
        </h3>

        <p className="mt-2 text-sm text-white/65">
          {e.venue?.name ?? "Sala por confirmar"}
          {e.venue?.city ? ` · ${e.venue.city}` : ""}
        </p>

        <p className="mt-3 text-xs text-white/55">Entrar al álbum →</p>
      </div>
    </Link>
  );
}

export default async function GalleryPage() {
  const events = await client.fetch<EventListItem[]>(query);

  const upcoming = events.filter((e) => isFuture(e.startAt));
  const past = events.filter((e) => !isFuture(e.startAt));

  const latestAlbums = past.slice(0, 6); // últimos 6 eventos pasados
  const restAlbums = past.slice(6);

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Galería</Badge>
            <Badge>Por evento</Badge>
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Álbumes
          </h1>

          <p className="text-white/70 max-w-2xl">
            No creo que quieras verte la cara después de todo lo que te bebiste
            aquel día, pero por si acaso, aquí tienes algún recuerdo de nuestros
            SHOWS.
          </p>
        </div>

        {latestAlbums.length ? (
          <div className="mt-10">
            <Section
              title="Últimos álbumes"
              subtitle="Las últimas ediciones publicadas."
              actions={
                <ButtonLink
                  href="https://instagram.com/laputvuelta.oficial"
                  external
                >
                  Ver Reels
                </ButtonLink>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {latestAlbums.map((e) => (
                  <EventCard key={e._id} e={e} />
                ))}
              </div>
            </Section>
          </div>
        ) : null}

        {upcoming.length ? (
          <div className="mt-8">
            <Section title="Próximos eventos" subtitle="">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((e) => (
                  <EventCard key={e._id} e={e} />
                ))}
              </div>
            </Section>
          </div>
        ) : null}

        {/* <div className="mt-8">
          <Section
            title="Histórico"
            subtitle={
              restAlbums.length
                ? "Ediciones anteriores."
                : "Aún no hay más álbumes publicados."
            }
          >
            {restAlbums.length ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {restAlbums.map((e) => (
                  <EventCard key={e._id} e={e} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/65">
                Cuando publiquemos más fotos, aparecerán aquí.
              </p>
            )}
          </Section>
        </div> */}
      </Container>
    </main>
  );
}
