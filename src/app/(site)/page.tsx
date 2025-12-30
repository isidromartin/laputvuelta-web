import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";

export default function Home() {
  return (
    <main className="relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <section className="relative py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>La Put* Vuelta</Badge>
                <Badge>Live + Activaciones</Badge>
                <Badge>Distintas salas</Badge>
              </div>

              <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
                La Put* Vuelta, edición tras edición.
              </h1>

              <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl">
                Directo en Kick, activaciones durante la noche y una experiencia
                cuidada. Cada evento puede cambiar de sala y de dinámica, pero
                la esencia es siempre la misma.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={site.urls.fourvenuesTeam}
                  external
                  variant="solid"
                >
                  Comprar entradas
                </ButtonLink>
                <ButtonLink href="/events">Ver eventos</ButtonLink>
                <ButtonLink href={site.urls.kick} external>
                  Ver directo en Kick
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs text-white/50">Formato</p>
                  <p className="mt-2 text-sm text-white/85">
                    Directo + activaciones
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Momentos programados durante la noche.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs text-white/50">Salas</p>
                  <p className="mt-2 text-sm text-white/85">
                    Cada evento, un lugar
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Ediciones en discotecas distintas.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs text-white/50">Post</p>
                  <p className="mt-2 text-sm text-white/85">
                    Galería por evento
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Fotos y highlights tras cada edición.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white/90">
                    La Put* Vuelta
                  </p>
                  <Link
                    href="/events"
                    className="text-xs text-white/65 hover:text-white transition"
                  >
                    Ver eventos →
                  </Link>
                </div>

                <div className="mt-6">
                  <Image
                    src="/logo.png"
                    alt={site.name}
                    width={1200}
                    height={400}
                    priority
                    className="w-full h-auto select-none"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={site.urls.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 hover:border-white/25 transition"
                  >
                    <span className="text-sm text-white/85">Instagram</span>
                    <span className="text-xs text-white/55">
                      @laputvuelta.oficial
                    </span>
                  </a>

                  <a
                    href={site.urls.kick}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 hover:border-white/25 transition"
                  >
                    <span className="text-sm text-white/85">Kick</span>
                    <span className="text-xs text-white/55">Canal oficial</span>
                  </a>

                  <a
                    href={site.urls.fourvenuesTeam}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 hover:border-white/25 transition"
                  >
                    <span className="text-sm text-white/85">Fourvenues</span>
                    <span className="text-xs text-white/55">
                      Entradas oficiales
                    </span>
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/45 text-center">
                Síguenos en redes para no perderte nada.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
