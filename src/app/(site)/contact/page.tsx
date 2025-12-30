import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Contacto</Badge>
            <Badge>La Put* Vuelta</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Contacto
          </h1>

          <p className="text-white/70 max-w-2xl">
            Para colaboraciones, salas y partners. Respuesta por Instagram.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={site.urls.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 transition"
            >
              <p className="text-xs text-white/50">Instagram</p>
              <p className="mt-2 text-sm text-white/85">@laputvuelta.oficial</p>
              <p className="mt-1 text-xs text-white/55">
                DM para contacto rápido.
              </p>
            </a>

            <a
              href={site.urls.fourvenuesTeam}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 transition"
            >
              <p className="text-xs text-white/50">Entradas</p>
              <p className="mt-2 text-sm text-white/85">Fourvenues</p>
              <p className="mt-1 text-xs text-white/55">
                Página oficial del equipo.
              </p>
            </a>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Nota: esta web es informativa. Las ventas se realizan a través de
            plataformas oficiales.
          </p>
        </div>
      </Container>
    </main>
  );
}
