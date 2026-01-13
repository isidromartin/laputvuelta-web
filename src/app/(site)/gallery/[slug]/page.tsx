import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { listImagesByFolder, thumbUrl } from "@/lib/cloudinary";
import {
  GalleryGrid,
  type GalleryImage,
} from "@/components/gallery/GalleryGrid";

export const revalidate = 60;

const eventQuery = groq`*[_type=="event" && slug.current==$slug][0]{
  title,
  startAt,
  "slug": slug.current,
  venue->{ name, city }
}`;

function folderForEventSlug(slug: string) {
  // Convención Cloudinary
  return `laputvuelta/events/${slug}`;
}

function formatDateES(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("es-ES", { dateStyle: "long" });
}

export default async function GalleryEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = await client.fetch<{
    title?: string;
    startAt?: string;
    slug?: string;
    venue?: { name?: string; city?: string };
  }>(eventQuery, { slug });

  if (!event) return notFound();

  const folder = folderForEventSlug(slug);
  const images = await listImagesByFolder(folder, 90);

  const items: GalleryImage[] = images.map((img) => ({
    public_id: img.public_id,
    thumb: thumbUrl(img.public_id),
    full: img.secure_url,
    width: img.width,
    height: img.height,
    created_at: img.created_at,
  }));

  const venueText = event.venue?.name
    ? `${event.venue.name}${event.venue.city ? ` · ${event.venue.city}` : ""}`
    : "";

  return (
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-160px] top-[260px] h-[460px] w-[460px] rounded-full bg-[var(--primary)]/10 blur-[190px]" />
      </div>
      <div className="grain" />

      <Container>
        {/* Header premium */}
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,77,94,0.14),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.08),transparent_60%)]" />

          <div className="relative flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Galería</Badge>
              <Badge>Edición</Badge>
              {venueText ? <Badge>{venueText}</Badge> : null}
              {event.startAt ? (
                <Badge>{formatDateES(event.startAt)}</Badge>
              ) : null}
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                  Álbum oficial
                </p>
                <h1 className="mt-2 text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95">
                  {event.title ?? "Evento"}
                </h1>
              </div>

              <span className="hidden md:block text-[var(--primary)] font-black text-6xl opacity-20 leading-none">
                02
              </span>
            </div>

            <p className="text-white/65 max-w-2xl leading-relaxed">
              {items.length
                ? "Entra, revísalo todo y guarda lo que se pueda contar."
                : "Aún no hay fotos publicadas para este evento."}
            </p>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="glass rounded-2xl border border-white/10 px-4 py-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                  Fotos
                </p>
                <p className="mt-1 text-sm font-semibold text-white/90">
                  {items.length}
                </p>
              </div>

              {event.startAt ? (
                <div className="glass rounded-2xl border border-white/10 px-4 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                    Fecha
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {formatDateES(event.startAt)}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Galería */}
        <div className="mt-10">
          <Section
            title="Fotos"
            subtitle={
              items.length
                ? ""
                : "Aún no hay fotos publicadas para este evento."
            }
          >
            {items.length ? (
              <div className="relative">
                {/* halo suave alrededor de la sección */}
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[var(--primary)]/8 blur-3xl" />
                <GalleryGrid
                  title={event.title ?? "La Put* Vuelta"}
                  images={items}
                />
              </div>
            ) : (
              <div className="glass rounded-3xl border border-white/10 p-8 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                  Sin fotos
                </p>
                <p className="mt-3 text-white/70">
                  Aún no hay fotos publicadas para este evento. Vuelve pronto.
                </p>
              </div>
            )}
          </Section>
        </div>
      </Container>
    </main>
  );
}
