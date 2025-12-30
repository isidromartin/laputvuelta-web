import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";

export const revalidate = 60;

const TEAM_URL = "https://web.fourvenues.com/es/team-la-putvuelta1/";

export default function TicketsPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Entradas</Badge>
            <Badge>Fourvenues</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Comprar entradas
          </h1>

          <p className="text-white/70 max-w-2xl">
            Compra oficial vía Fourvenues. Si el embed no carga en tu
            dispositivo, usa el enlace externo.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black">
            <div className="h-[80vh] w-full">
              <iframe
                src={TEAM_URL}
                className="h-full w-full"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Si no se muestra correctamente, abre Fourvenues en una pestaña
            nueva.
          </p>

          <a
            href={TEAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-fit rounded-full border border-white/15 px-5 py-2 text-sm text-white/85 hover:text-white hover:border-white/30 transition"
          >
            Abrir Fourvenues →
          </a>
        </div>
      </Container>
    </main>
  );
}
