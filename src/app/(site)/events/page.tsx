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
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-160px] top-[260px] h-[460px] w-[460px] rounded-full bg-[var(--primary)]/10 blur-[190px]" />
      </div>
      <div className="grain" />

      <Container>
        {/* Header */}
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,77,94,0.14),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.08),transparent_60%)]" />

          <div className="relative flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Shows</Badge>
              <Badge>La Put* Vuelta</Badge>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Agenda oficial
                </p>
                <h1 className="mt-2 text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95 secondaryFont">
                  Dónde y cuándo
                </h1>
              </div>

              <span className="hidden md:block text-[var(--primary)] font-black text-6xl leading-none secondaryFont">
                01
              </span>
            </div>

            <p className="text-white/65 max-w-2xl leading-relaxed">
              Aquí tienes dónde y cuándo puedes salir a dar una vuelta. Tranqui,
              tenemos muchas vueltas pendientes…
            </p>
          </div>
        </div>

        {/* Grid */}
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
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-[var(--primary)]/30 hover:bg-white/[0.06]"
              >
                {/* Halo hover */}
                <span className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-[var(--primary)]/0 blur-3xl transition group-hover:bg-[var(--primary)]/14" />
                {/* Inner ring */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

                <div className="relative aspect-[4/5] w-full bg-black/40 border-b border-white/10">
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={`Cartel - ${e.title}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                          Sin cartel
                        </p>
                      </div>
                    </div>
                  )}

                  {/* overlays premium */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.14),transparent_45%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top meta bar */}
                  <div className="absolute left-4 right-4 top-4">
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
                          {future ? "Próximo" : "Pasado"}
                        </p>
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/55">
                        {new Date(e.startAt).toLocaleDateString("es-ES", {
                          dateStyle: "medium",
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-5">
                  <h2 className="text-base font-black uppercase tracking-[0.06em] text-white/90 group-hover:text-white transition secondaryFont">
                    {e.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/60">
                    {e.venue?.name ?? "Sala por confirmar"}
                    {e.venue?.city ? ` · ${e.venue.city}` : ""}
                  </p>

                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                    {new Date(e.startAt).toLocaleString("es-ES", {
                      dateStyle: "full",
                      timeStyle: "short",
                    })}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
                      Ver detalle
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)] transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty state (por si no hay eventos) */}
        {events.length === 0 ? (
          <div className="mt-10 glass rounded-3xl border border-white/10 p-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Sin fechas
            </p>
            <p className="mt-3 text-white/70">
              Ahora mismo no hay shows publicados. Vuelve pronto.
            </p>
          </div>
        ) : null}
      </Container>
    </main>
  );
}
