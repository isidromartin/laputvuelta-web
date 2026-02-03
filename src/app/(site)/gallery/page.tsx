import Link from "next/link";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Galería",
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
      className="card-hover group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-[var(--primary)]/30 hover:bg-white/[0.06]"
    >
      {/* Halo hover */}
      <span className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/14" />
      {/* Inner ring */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

      <div className="relative aspect-[4/5] w-full border-b border-white/10 bg-black/40">
        {coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt={e.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              Sin cartel
            </p>
          </div>
        )}

        {/* Overlays premium */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.14),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Bottom meta bar */}
        <div className="absolute left-4 right-4 bottom-4">
          <div className="glass flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-3 py-2">
            <div className="flex items-center gap-2">
              <span
                className={[
                  "h-2 w-2 rounded-full",
                  future
                    ? "bg-[var(--primary)] shadow-[0_0_14px_rgba(255,77,94,0.35)]"
                    : "bg-white/35",
                ].join(" ")}
              />
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
                {future ? "Próximo" : "Álbum"}
              </p>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/55">
              {formatDate(e.startAt)}
            </p>
          </div>
        </div>
      </div>

      <div className="relative p-5">
        <h3 className="text-base font-black uppercase tracking-[0.06em] text-white/90 group-hover:text-white transition line-clamp-2">
          {e.title}
        </h3>

        <p className="mt-2 text-sm text-white/60">
          {e.venue?.name ?? "Sala por confirmar"}
          {e.venue?.city ? ` · ${e.venue.city}` : ""}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
            Entrar al álbum
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)] transition group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function GalleryPage() {
  const events = await client.fetch<EventListItem[]>(query);

  const upcoming = events.filter((e) => isFuture(e.startAt));
  const past = events.filter((e) => !isFuture(e.startAt));

  const latestAlbums = past.slice(0, 6);
  // const restAlbums = past.slice(6);

  return (
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-160px] top-[260px] h-[460px] w-[460px] rounded-full bg-[var(--primary)]/10 blur-[190px]" />
      </div>
      <div className="grain" /> */}

      <Container>
        {/* Header premium */}
        <Reveal>
          <PageHeader
            eyebrow="Álbumes oficiales"
            title="Fotos por edición"
            description="No creo que quieras verte la cara después de todo lo que te bebiste aquel día, pero por si acaso: aquí tienes recuerdos de nuestros shows."
            index="03"
            actions={
              <>
                <ButtonLink
                  href="https://instagram.com/laputvuelta.oficial"
                  external
                  variant="outline"
                >
                  Ver Reels
                </ButtonLink>
                <ButtonLink href="/events" variant="outline">
                  Ver Shows
                </ButtonLink>
              </>
            }
          />
        </Reveal>

        {/* Últimos álbumes */}
        {latestAlbums.length ? (
          <Stagger className="mt-10">
            <Section
              title="Últimos álbumes"
              subtitle="Las últimas ediciones publicadas."
              actions={
                <ButtonLink
                  href="https://instagram.com/laputvuelta.oficial"
                  external
                >
                  Instagram
                </ButtonLink>
              }
            >
              <StaggerItem className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {latestAlbums.map((e) => (
                  <EventCard key={e._id} e={e} />
                ))}
              </StaggerItem>
            </Section>
          </Stagger>
        ) : (
          <div className="mt-10 glass rounded-3xl border border-white/10 p-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Sin álbumes
            </p>
            <p className="mt-3 text-white/70">
              Aún no hay fotos publicadas. Vuelve pronto.
            </p>
          </div>
        )}

        {/* Próximos */}
        {upcoming.length ? (
          <Stagger className="mt-8">
            <Section title="Próximos eventos" subtitle="Ediciones futuras.">
              <StaggerItem className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((e) => (
                  <EventCard key={e._id} e={e} />
                ))}
              </StaggerItem>
            </Section>
          </Stagger>
        ) : null}

        {/* Histórico (si lo quieres reactivar) */}
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
