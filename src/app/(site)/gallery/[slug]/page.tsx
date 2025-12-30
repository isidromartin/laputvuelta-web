import Image from "next/image";
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
  // Convención: tú subes a esta carpeta en Cloudinary
  return `laputvuelta/events/${slug}`;
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

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Galería</Badge>
            {event.venue?.name ? (
              <Badge>
                {event.venue.name}
                {event.venue.city ? ` · ${event.venue.city}` : ""}
              </Badge>
            ) : null}
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            {event.title ?? "Evento"}
          </h1>
        </div>

        <div className="mt-8">
          <Section
            title="Fotos"
            subtitle={
              images.length
                ? ""
                : "Aún no hay fotos publicadas para este evento."
            }
          >
            {items.length ? (
              <GalleryGrid
                title={event.title ?? "La Put* Vuelta"}
                images={items}
              />
            ) : (
              <p className="text-sm text-white/65">
                Aún no hay fotos publicadas para este evento.
              </p>
            )}
          </Section>
        </div>
      </Container>
    </main>
  );
}
