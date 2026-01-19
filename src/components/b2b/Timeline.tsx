import Image from "next/image";
import { TimelineStep } from "@/components/b2b/TimelineStep";
import { MobileTimelineItem } from "@/components/b2b/MobileTimelineItem";

export function Timeline() {
  return (
    <section
      id="proceso"
      className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
    >
      <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Operativa
            </p>

            <div className="mt-2 flex items-start gap-3">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 leading-[1.05] secondaryFont">
                ¿Cómo organizamos
                <br className="hidden sm:block" /> La Put*Vuelta?
              </h2>

              {/* Devil mark (opcional) */}
              {/* <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <Image
                  src="/devil-mark.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-6 w-6 opacity-90"
                />
              </span> */}
            </div>

            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Flujo claro, rápido y replicable: pre-fiesta → ejecución → entrega
              de contenido + conclusiones. Cero fricción para la sala.
            </p>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
          >
            Pedir propuesta
          </a>
        </div>

        {/* Desktop timeline */}
        <div className="mt-8 hidden md:block">
          <div className="relative rounded-3xl border border-white/10 bg-black/20 px-8 py-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.10),transparent_55%)]" />

            {/* line */}
            <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-white/10" />

            {/* phase labels */}
            <div className="absolute left-10 top-6 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--primary)]">
              Pre-fiesta
            </div>
            <div className="absolute right-36 top-6 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--primary)]">
              Día de la fiesta
            </div>
            <div className="absolute right-10 top-6 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--primary)]">
              Post-fiesta
            </div>

            <div className="relative grid grid-cols-6 gap-6 items-center">
              <TimelineStep
                title="Reunión inicial"
                subtitle="Detalles + presupuesto"
                note="Mín. 30 dias antes"
                icon="handshake"
                tone="muted"
              />
              <TimelineStep
                title="Visita al sitio"
                subtitle="Espacios + operativa"
                icon="pin"
                tone="muted"
              />
              <TimelineStep
                title="Propuesta"
                subtitle="Decoración + adaptación"
                icon="gift"
                tone="muted"
              />
              <TimelineStep
                title="Entrega reels"
                subtitle="Pre-fiesta"
                note="Timing a acordar"
                icon="film"
                tone="muted"
              />

              <TimelineStep
                title="Día del evento"
                subtitle="Show + activación"
                note="Ejecución"
                icon="clock"
                tone="primary"
              />

              <TimelineStep
                title="Entrega reels"
                subtitle="Post-fiesta"
                note="< 1 semana aprox."
                icon="post"
                tone="muted"
              />
            </div>
          </div>
        </div>

        {/* Mobile (vertical) */}
        <div className="mt-8 md:hidden">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="space-y-4">
              <MobileTimelineItem
                phase="Pre-fiesta"
                title="Reunión inicial"
                text="Detalles + presupuesto"
                note="Mín. 3 semanas antes"
                icon="handshake"
              />
              <MobileTimelineItem
                phase="Pre-fiesta"
                title="Visita al sitio"
                text="Espacios + operativa"
                icon="pin"
              />
              <MobileTimelineItem
                phase="Pre-fiesta"
                title="Propuesta"
                text="Decoración + adaptación"
                icon="gift"
              />
              <MobileTimelineItem
                phase="Pre-fiesta"
                title="Entrega reels"
                text="Pre-fiesta"
                note="Timing a acordar"
                icon="film"
              />
              <MobileTimelineItem
                phase="Día de la fiesta"
                title="Ejecución"
                text="Show + activación"
                note="Momento clave"
                icon="clock"
                primary
              />
              <MobileTimelineItem
                phase="Post-fiesta"
                title="Entrega reels"
                text="Post-fiesta"
                note="< 1 semana aprox."
                icon="post"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
