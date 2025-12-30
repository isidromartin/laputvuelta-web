import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";

export const revalidate = 60;

const query = groq`*[_type=="event"] | order(startAt desc){
  _id,
  title,
  "slug": slug.current,
  startAt,
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
      venue?: { name?: string; city?: string };
    }>
  >(query);

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Eventos
          </h1>
          <p className="text-white/70 max-w-2xl">
            La Put* Vuelta en distintas salas. Cada edición puede traer
            activaciones diferentes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => {
            const future = isFuture(e.startAt);
            return (
              <Link
                key={e._id}
                href={`/events/${e.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge>{future ? "Próximo" : "Pasado"}</Badge>
                  <p className="text-xs text-white/55">
                    {new Date(e.startAt).toLocaleDateString("es-ES", {
                      dateStyle: "medium",
                    })}
                  </p>
                </div>

                <h2 className="mt-3 text-base font-semibold text-white/90 group-hover:text-white transition">
                  {e.title}
                </h2>

                <p className="mt-2 text-sm text-white/65">
                  {e.venue?.name ?? "Sala por confirmar"}
                  {e.venue?.city ? ` · ${e.venue.city}` : ""}
                </p>

                <div className="mt-4 h-px w-full bg-white/10" />
                <p className="mt-3 text-xs text-white/55">
                  Entradas, live y activaciones dentro del evento.
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
