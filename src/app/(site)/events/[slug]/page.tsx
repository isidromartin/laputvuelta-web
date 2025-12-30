import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";

export const revalidate = 60;

const query = groq`*[_type=="event" && slug.current==$slug][0]{
  title,
  startAt,
  sections[]{
    _type,
    heading,
    fourvenuesUrl,
    kickUrlOverride,
    autoplay,
    muted,
    items,
    partnerSlugs,
    includeGlobal
  },
  venue->{ name, city, mapsUrl }
}`;

function kickUsernameFromUrl(url: string) {
  try {
    const u = new URL(url);
    return u.pathname.replace("/", "");
  } catch {
    return "";
  }
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // NEXT: params es Promise en tu versión, hay que await
  const { slug } = await params;

  // GROQ: el parámetro se llama "slug" (sin $)
  const event = await client.fetch<any>(query, { slug });

  if (!event) return notFound();

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>La Put* Vuelta</Badge>
            {event.venue?.name ? (
              <Badge>
                {event.venue.name}
                {event.venue.city ? ` · ${event.venue.city}` : ""}
              </Badge>
            ) : null}
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            {event.title}
          </h1>

          <p className="text-white/70">
            {new Date(event.startAt).toLocaleString("es-ES", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            {event.venue?.mapsUrl ? (
              <ButtonLink href={event.venue.mapsUrl} external>
                Cómo llegar
              </ButtonLink>
            ) : null}
            <ButtonLink href="/events">Ver todos</ButtonLink>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {(event.sections ?? []).map((s: any, idx: number) => {
            if (s._type === "sectionTickets" && s.fourvenuesUrl) {
              return (
                <Section
                  key={idx}
                  title={s.heading ?? "Entradas"}
                  subtitle="Compra oficial vía Fourvenues."
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <ButtonLink href={s.fourvenuesUrl} external variant="solid">
                      Comprar entradas
                    </ButtonLink>
                    <ButtonLink href={s.fourvenuesUrl} external>
                      Abrir Fourvenues
                    </ButtonLink>
                  </div>
                </Section>
              );
            }

            if (s._type === "sectionLive") {
              const kickUrl =
                s.kickUrlOverride || "https://kick.com/laputivuelta-oficial";
              const username = kickUsernameFromUrl(kickUrl);
              const src = username
                ? `https://player.kick.com/${username}?autoplay=${
                    s.autoplay ? "true" : "false"
                  }&muted=${s.muted ? "true" : "false"}`
                : null;

              return (
                <Section
                  key={idx}
                  title={s.heading ?? "Live"}
                  subtitle="Directo en Kick (si hay emisión)."
                >
                  {src ? (
                    <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
                      <div className="aspect-video">
                        <iframe
                          src={src}
                          className="h-full w-full"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-white/65">
                      No hay embed disponible. Abre el canal directamente.
                    </p>
                  )}

                  <div className="mt-4">
                    <ButtonLink href={kickUrl} external>
                      Abrir en Kick
                    </ButtonLink>
                  </div>
                </Section>
              );
            }

            if (
              s._type === "sectionActivations" &&
              Array.isArray(s.items) &&
              s.items.length
            ) {
              return (
                <Section
                  key={idx}
                  title={s.heading ?? "Activaciones"}
                  subtitle="Horarios aproximados. Pueden variar."
                >
                  <div className="grid gap-3 md:grid-cols-2">
                    {s.items.map((it: any, i: number) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-sm font-semibold text-white/90">
                            {it.title}
                          </p>
                          <p className="text-xs text-white/55">
                            {it.window ?? ""}
                          </p>
                        </div>
                        {it.location ? (
                          <p className="mt-1 text-xs text-white/55">
                            {it.location}
                          </p>
                        ) : null}
                        {it.secret ? (
                          <p className="mt-2 text-sm text-white/60">
                            Sorpresa. Ya te enteras allí.
                          </p>
                        ) : it.description ? (
                          <p className="mt-2 text-sm text-white/75">
                            {it.description}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </Section>
              );
            }

            if (
              s._type === "sectionPartners" &&
              (s.partnerSlugs?.length ?? 0) > 0
            ) {
              return (
                <Section
                  key={idx}
                  title={s.heading ?? "Partners"}
                  subtitle="Colaboradores de esta edición."
                >
                  <div className="flex flex-wrap gap-2">
                    {s.partnerSlugs.map((p: string) => (
                      <Badge key={p}>{p}</Badge>
                    ))}
                  </div>
                </Section>
              );
            }

            return null;
          })}
        </div>
      </Container>
    </main>
  );
}
