import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Shows | La Put* Vuelta",
  description:
    "Shows oficiales de La Put* Vuelta. Consulta las próximas fechas y salas donde estaremos presentando el show en vivo.",
};

const query = groq`*[_type=="event"] | order(startAt desc){
  _id,
  title,
  "slug": slug.current,
  startAt,
  coverImage,
  venue->{ name, city }
}`;

function isFuture(dateIso: string) {
  return new Date(dateIso).getTime() > Date.now();
}

export default async function EventsPage() {
  const events = await client.fetch<
    Array<{
      _id: string;
      title: string;
      slug: string;
      startAt: string;
      coverImage?: any;
      venue?: { name?: string; city?: string };
    }>
  >(query);

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Shows
          </h1>
          <p className="text-white/70 max-w-2xl">
            Aquí tienes donde y cuando puedes salir a dar una vuelta. Tranqui,
            tenemos muchas vueltas pendientes…
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => {
            const future = isFuture(e.startAt);

            const coverUrl = e.coverImage
              ? urlForImage(e.coverImage)
                  .width(900)
                  .height(1125)
                  .fit("crop")
                  .auto("format")
                  .url()
              : null;

            return (
              <Link
                key={e._id}
                href={`/events/${e.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 transition"
              >
                <div className="relative aspect-[4/5] w-full bg-black/40 border-b border-white/10">
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={`Cartel - ${e.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs text-white/45">Sin cartel</p>
                      </div>
                    </div>
                  )}

                  {/* gradient overlay para que quede premium */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 backdrop-blur-l bg-black/30 rounded-2xl px-3 py-1.5a">
                    <p>{future ? "Próximo" : "Pasado"}</p>
                    <p className="text-xs text-white/80">
                      {new Date(e.startAt).toLocaleDateString("es-ES", {
                        dateStyle: "medium",
                      })}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-base font-semibold text-white/90 group-hover:text-white transition">
                    {e.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/65">
                    {e.venue?.name ?? "Sala por confirmar"}
                    {e.venue?.city ? ` · ${e.venue.city}` : ""}
                  </p>

                  <p className="mt-3 text-xs text-white/55">
                    {new Date(e.startAt).toLocaleString("es-ES", {
                      dateStyle: "full",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
