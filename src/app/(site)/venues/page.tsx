import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";

export const revalidate = 60;

const query = groq`*[_type=="venue"] | order(city asc, name asc){
  _id,
  name,
  "slug": slug.current,
  city,
  address,
  mapsUrl,

  "eventsCount": count(*[_type=="event" && references(^._id)]),

  "nextEvent": *[_type=="event" && references(^._id) && startAt > now()]
    | order(startAt asc)[0]{
      title,
      startAt,
      "slug": slug.current
    }
}`;

type VenueCard = {
  _id: string;
  name: string;
  slug: string;
  city?: string;
  address?: string;
  mapsUrl?: string;
  eventsCount: number;
  nextEvent?: { title: string; startAt: string; slug: string } | null;
};

function groupByCity(items: VenueCard[]) {
  const map: Record<string, VenueCard[]> = {};
  for (const v of items) {
    const key = (v.city && v.city.trim()) || "Sin ciudad";
    map[key] = map[key] || [];
    map[key].push(v);
  }
  return map;
}

export default async function VenuesPage() {
  const venues = await client.fetch<VenueCard[]>(query);
  const grouped = groupByCity(venues);
  const cities = Object.keys(grouped).sort((a, b) => a.localeCompare(b, "es"));

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Salas</Badge>
            <Badge>{venues.length} total</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Salas
          </h1>

          <p className="text-white/70 max-w-2xl">
            La Put* Vuelta se mueve. Aquí tienes las salas donde hacemos
            ediciones, con su información y el próximo evento si ya está
            publicado.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink href="/events">Ver eventos</ButtonLink>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {cities.map((city) => (
            <section key={city} className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                  {city}
                </h2>
                <p className="text-xs text-white/50">
                  {grouped[city].length} sala(s)
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[city].map((v) => {
                  const nextDate = v.nextEvent?.startAt
                    ? new Date(v.nextEvent.startAt).toLocaleString("es-ES", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : null;

                  return (
                    <Link
                      key={v._id}
                      href={`/venues/${v.slug}`}
                      aria-label={`Abrir sala ${v.name}`}
                      className="relative group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 hover:bg-white/[0.03] transition"
                    >
                      {/* Contenido */}
                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge>{v.eventsCount} eventos</Badge>
                          {v.nextEvent ? <Badge>Próximo</Badge> : null}
                        </div>

                        {v.mapsUrl ? (
                          <Link
                            href={v.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-white/55 hover:text-white transition z-10"
                          >
                            Maps →
                          </Link>
                        ) : null}
                      </div>

                      <h3 className="relative mt-3 text-base font-semibold text-white/90 group-hover:text-white transition">
                        {v.name}
                      </h3>

                      <p className="relative mt-2 text-sm text-white/65">
                        {v.address ? v.address : "Dirección por confirmar"}
                      </p>

                      <div className="relative mt-4 h-px w-full bg-white/10" />

                      {v.nextEvent ? (
                        <div className="relative mt-3">
                          <p className="text-xs text-white/50">
                            Próximo evento
                          </p>
                          <p className="mt-1 text-sm text-white/85">
                            {v.nextEvent.title}
                          </p>
                          <p className="mt-1 text-xs text-white/55">
                            {nextDate}
                          </p>
                        </div>
                      ) : (
                        <p className="relative mt-3 text-xs text-white/55">
                          Próximo evento aún no publicado.
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
