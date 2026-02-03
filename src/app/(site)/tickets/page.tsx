import { Container } from "@/components/site/Container";
import { FourvenuesEmbed } from "@/components/site/FourvenuesEmbed";
import { PageHeader } from "@/components/site/PageHeader";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Calendario",
  description:
    "Próximos eventos de La Put* Vuelta. Consulta y compra entradas para nuestras presentaciones en vivo.",
};

export default function TicketsPage() {
  const publicUrl =
    process.env.NEXT_PUBLIC_FOURVENUES_PUBLIC_URL ||
    "https://web.fourvenues.com/es/team-la-putvuelta1/";

  const embedPath =
    process.env.NEXT_PUBLIC_FOURVENUES_EMBED_PATH || "team-la-putvuelta1";

  return (
    <main className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient: halo + grain (si ya lo tienes global, elimina estos bloques) */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="absolute right-[-140px] top-[260px] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[170px]" />
      </div>
      <div className="grain" /> */}

      <Container>
        {/* Header de página (dossier style) */}
        <Reveal>
          <PageHeader
            eyebrow="Calendario"
            title="Próximos eventos"
            description={
              <>
                Consulta las fechas disponibles y accede a{" "}
                <span className="text-white/85">entradas</span>,{" "}
                <span className="text-white/85">lista</span> y{" "}
                <span className="text-white/85">reservas</span> desde el
                calendario oficial.
              </>
            }
            index="02"
            actions={
              <>
                <a
                  href={publicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-[11px] md:text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)] hover:scale-[1.02]"
                >
                  <span className="pointer-events-none absolute -inset-[2px] rounded-full border border-white/15" />
                  <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[var(--primary)]/25 blur-xl" />
                  Abrir en Fourvenues
                </a>
                <a
                  href="#embed"
                  className="glass inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-2.5 text-[11px] md:text-sm font-bold uppercase tracking-[0.22em] text-white/80 transition hover:text-white hover:bg-white/[0.06]"
                >
                  Ver calendario aquí
                </a>
              </>
            }
          />
        </Reveal>

        {/* Embed */}
        <Reveal className="mt-10">
          <div id="embed">
            <div className="glass relative overflow-hidden rounded-3xl border border-white/10">
              {/* Top bar “widget frame” */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                    Fourvenues
                  </span>
                </div>

                <a
                  href={publicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45 hover:text-[var(--primary)] transition-colors"
                >
                  Abrir externo
                </a>
              </div>

              <div className="p-2 md:p-3">
                <FourvenuesEmbed
                  path={embedPath}
                  // publicUrl={publicUrl}
                  minHeight={860}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
