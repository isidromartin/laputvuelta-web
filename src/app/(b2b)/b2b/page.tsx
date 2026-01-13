// app/b2b/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Para salas | La Put* Vuelta",
  description:
    "Dossier B2B para salas: formato llave en mano (marketing + activación + operación) orientado a afluencia y consumo.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "La Put* Vuelta para salas",
    description:
      "Formato llave en mano para salas: marketing, activación y operación. Enfoque: afluencia + barra.",
    type: "website",
    url: "/b2b",
  },
};

const BRAND = {
  name: "La Put* Vuelta",
  pageTitle: "Dossier para salas",
  accentLabel: "B2B",
  whatsappE164: "+34674873549",
  email: "laput.vuelta@gmail.com",
  dossierUrl: "/docs/laputvuelta-dossier.pdf",
  mediaKitUrl: "/docs/laputvuelta-media-kit.zip",
};

function waLink(message: string) {
  const text = encodeURIComponent(message);
  const phone = BRAND.whatsappE164.replace(/[^\d+]/g, "");
  return `https://wa.me/${phone.replace("+", "")}?text=${text}`;
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué aporta a la sala?",
    a: "Un formato con marketing y operación integrados: comunicación coordinada, activación con listas/promotores (si aplica) y coordinación de puerta. Objetivo: afluencia + consumo.",
  },
  {
    q: "¿Qué necesitáis por parte de la sala?",
    a: "Fecha y condiciones claras, coordinación de puerta/seguridad y un mínimo de apoyo en comunicación (si encaja). Si hay material audiovisual del local, lo integramos en creatividades.",
  },
  {
    q: "¿Trabajáis con fijo, porcentaje o híbrido?",
    a: "Sí. Trabajamos con fijo/garantía, % de puerta o híbrido (mínimo + variable). Elegimos modelo según plaza, fecha y objetivos.",
  },
  {
    q: "¿Tenéis rider técnico?",
    a: "Sí. Compartimos rider resumido en el dossier y cerramos el detalle al confirmar fecha (cabina, micro, timing, etc.).",
  },
  {
    q: "¿Cuánto tardáis en activar una fecha?",
    a: "Ideal: 10–21 días. Si es urgente, podemos condensar con un plan de comunicación adaptado y foco en tracción inmediata.",
  },
  {
    q: "¿Podéis aportar contenido y creatividades?",
    a: "Sí. Creatividades, copies, plantillas y líneas de comunicación. Integramos el branding del local si es necesario.",
  },
];

const MODELS = [
  {
    title: "Modelo A — Fijo / Garantía",
    forWho: "Si quieres reducir incertidumbre y asegurar un mínimo.",
    bullets: [
      "Condiciones cerradas desde el inicio",
      "Activación completa (creatividades + plan de difusión)",
      "Coordinación de puerta y reporting operativo",
    ],
    tag: "Seguridad",
  },
  {
    title: "Modelo B — % de Puerta",
    forWho: "Alineación total a performance.",
    bullets: [
      "Estructura variable según resultados",
      "Foco en tracción (listas/promotores + difusión)",
      "Cierre con métricas y propuesta de repetición",
    ],
    tag: "Performance",
  },
  {
    title: "Modelo C — Híbrido",
    forWho: "Equilibrio entre cobertura mínima y upside.",
    bullets: [
      "Mínimo de cobertura + variable",
      "Recomendado para nuevas plazas o primeras fechas",
      "Modelo preferente para construir recurrencia",
    ],
    tag: "Equilibrio",
  },
];

export default function B2BPage() {
  const primaryMessage =
    "Hola, soy de una sala y quiero información para reservar fecha de La Put* Vuelta. Te paso ciudad, sala, aforo aproximado y fechas propuestas:";
  const whatsappHref = waLink(primaryMessage);

  const mailHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    "Propuesta B2B — La Put* Vuelta"
  )}&body=${encodeURIComponent(primaryMessage)}`;

  return (
    <main className="relative min-h-screen bg-[color:var(--background-dark,#0b0b10)] text-white pt-24 pb-16 md:pt-28 md:pb-24">
      {/* Ambient + grain */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--primary)]/18 blur-[190px]" />
        <div className="absolute right-[-220px] top-[240px] h-[540px] w-[540px] rounded-full bg-[var(--primary)]/10 blur-[210px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
      </div>
      <div className="grain" />

      {/* Top bar (sticky) */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-center">
        <nav className="max-w-[1200px] w-full glass rounded-full px-6 py-3 flex items-center justify-between border border-white/10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/80">
              {BRAND.accentLabel}
            </span>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-white/95">
                {BRAND.name}
              </p>
              <p className="text-[11px] font-semibold text-white/55">
                {BRAND.pageTitle}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.35em] text-white/60">
            <a
              className="hover:text-[var(--primary)] transition"
              href="#modelo"
            >
              Modelos
            </a>
            <a className="hover:text-[var(--primary)] transition" href="#faq">
              FAQ
            </a>
            <a
              className="hover:text-[var(--primary)] transition"
              href="#contacto"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden sm:inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
            >
              Solicitar propuesta
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[color:rgba(255,77,94,0.82)] text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-[1.02] neon-border"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(255,77,94,0.14),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.08),transparent_60%)]" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_14px_rgba(255,77,94,0.35)]" />
                Booking / Dossier para salas
              </div>

              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95">
                {BRAND.name}
              </h1>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em] text-white/45">
                Formato llave en mano
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                Concepto, marketing, activación y coordinación operativa.
                Diseñado para mejorar{" "}
                <span className="text-white/85">afluencia</span> y{" "}
                <span className="text-white/85">consumo</span> sin complicarte
                la vida: proceso claro, ejecución replicable y reporting.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Solicitar propuesta
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                >
                  Hablar por WhatsApp
                </a>

                <a
                  href={BRAND.dossierUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/75 hover:bg-white/[0.04] transition"
                >
                  Ver dossier (PDF)
                </a>
              </div>

              {/* Value chips */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <ValueChip
                  k="Tracción"
                  v="Comunicación + empuje final 48–72h"
                />
                <ValueChip k="Operación" v="Puerta coordinada + timing" />
                <ValueChip k="Resultado" v="Afluencia y barra (reporting)" />
              </div>
            </div>
          </div>

          {/* SIDE CARD */}
          <aside className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                  Resumen B2B
                </p>
                <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-white/90">
                  Datos rápidos
                </h2>
              </div>

              <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
                2026
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <StatRow label="Público" value="Universitario + joven adulto" />
              <StatRow label="Formato" value="Noche temática / show party" />
              <StatRow label="Duración" value="4–6 horas (adaptable)" />
              <StatRow
                label="Entregables"
                value="Dossier + media kit + piezas"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Para enviarte propuesta
              </p>
              <p className="mt-2 text-sm text-white/70">
                Ciudad, sala, aforo aproximado y dos fechas posibles.
                Respondemos con modelo recomendado y condiciones.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  WhatsApp
                </a>
                <a
                  href={mailHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={BRAND.dossierUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] hover:border-white/20 transition"
              >
                <p className="text-sm font-semibold text-white/90">
                  Dossier PDF
                </p>
                <p className="mt-1 text-sm text-white/60">Ver en una pestaña</p>
              </a>

              <a
                href={BRAND.dossierUrl}
                download
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] hover:border-white/20 transition"
              >
                <p className="text-sm font-semibold text-white/90">
                  Descargar dossier
                </p>
                <p className="mt-1 text-sm text-white/60">
                  PDF (para dirección)
                </p>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14">
        <div className="grid gap-6 md:grid-cols-2">
          <SectionCard
            title="Qué aporta a tu sala"
            subtitle="Ideal para fechas valle o para consolidar una noche recurrente."
            items={[
              "Afluencia incremental con activación dirigida",
              "Mejora de consumo por dinámica y timing",
              "Preventa (si aplica) para reducir incertidumbre",
              "Creatividades + copies listos para la sala",
              "Coordinación de puerta, listas y reporting",
            ]}
          />

          <SectionCard
            title="Qué incluye el pack"
            subtitle="Nosotros ponemos el producto. Tú pones el espacio."
            items={[
              "Concepto + estructura musical + timing",
              "Plan de difusión coordinado con la sala",
              "Gestión de listas/promotores (si aplica)",
              "Guía operativa y coordinación el día del evento",
              "Cierre con conclusiones y propuesta de repetición",
            ]}
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14">
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Proceso
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
                Cómo trabajamos
              </h2>
              <p className="mt-3 text-sm text-white/65 max-w-2xl">
                Flujo simple y replicable para cerrar fechas con claridad,
                ejecutar sin fricción y decidir repetición con datos.
              </p>
            </div>

            <a
              href="#contacto"
              className="mt-4 inline-flex w-fit rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition md:mt-0"
            >
              Solicitar propuesta
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Step
              n="01"
              title="Fecha y condiciones"
              text="Modelo (fijo / % / híbrido) + objetivos + responsabilidades."
            />
            <Step
              n="02"
              title="Creatividades"
              text="Adaptamos piezas a la sala y coordinamos el calendario de comunicación."
            />
            <Step
              n="03"
              title="Activación"
              text="Listas/promotores (si aplica) + empuje final 48–72h + ajustes."
            />
            <Step
              n="04"
              title="Ejecución + cierre"
              text="Puerta coordinada, timing, incidencias y reporting para repetir."
            />
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section
        id="modelo"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Colaboración
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
              Modelos de colaboración
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Elegimos el modelo según plaza, fecha y objetivos
              (afluencia/barra). Te recomendamos el más coherente para el primer
              test.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[color:rgba(255,77,94,0.82)] transition neon-border"
          >
            Consultar condiciones
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {MODELS.map((m) => (
            <div
              key={m.title}
              className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.12),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                    {m.tag}
                  </p>
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_16px_rgba(255,77,94,0.35)]" />
                </div>

                <h3 className="mt-2 text-base font-black uppercase tracking-[0.06em] text-white/90">
                  {m.title}
                </h3>

                <p className="mt-3 text-sm text-white/65">{m.forWho}</p>

                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2">
                  <a
                    href="#contacto"
                    className="inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                  >
                    Pedir propuesta
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIAL */}
      <section className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14">
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Material
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
            Dossier y descargables
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Documento para dirección de sala con concepto, modelos, requisitos,
            referencias y condiciones. Media kit opcional para creatividades.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BRAND.dossierUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Ver dossier (PDF)
            </a>

            <a
              href={BRAND.dossierUrl}
              download
              className="rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
            >
              Descargar dossier
            </a>

            <a
              href={BRAND.mediaKitUrl}
              className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/75 hover:bg-white/[0.04] transition"
            >
              Media kit (opcional)
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <MiniInfo
              title="Incluye"
              text="Concepto, modelos, requisitos y flujo."
            />
            <MiniInfo title="Uso" text="Comparativa rápida para dirección." />
            <MiniInfo
              title="Siguiente"
              text="Cerramos fecha y lanzamos activación."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Preguntas frecuentes
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
              FAQ para salas
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Respuestas directas a lo que normalmente pregunta un venue al
              valorar una colaboración.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="glass group rounded-2xl border border-white/10 p-5 hover:border-white/20 transition"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-white/60 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contacto"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ContactForm />

          <div className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Contacto directo
            </p>
            <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white/90">
              Cerramos más rápido por aquí
            </h3>
            <p className="mt-3 text-sm text-white/65">
              Si prefieres ir al grano, estos canales suelen cerrar más rápido.
            </p>

            <div className="mt-6 grid gap-3">
              <ActionCard
                title="WhatsApp Booking"
                text="Ciudad + sala + aforo + 2 fechas"
                href={whatsappHref}
                primary
              />
              <ActionCard title="Email" text={BRAND.email} href={mailHref} />
              <ActionCard
                title="Dossier PDF"
                text="Ver / descargar"
                href={BRAND.dossierUrl}
              />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Checklist para propuesta
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {[
                  "Ciudad y nombre de sala",
                  "Aforo aproximado",
                  "Día/horario habitual",
                  "Dos fechas candidatas",
                  "Modelo preferido (fijo / % / híbrido)",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                Tiempo de respuesta
              </p>
              <p className="text-sm font-semibold text-white/85">
                24–72h laborables
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
          © {new Date().getFullYear()} {BRAND.name}. Sección B2B.
        </footer>
      </section>

      {/* Mobile floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="h-14 w-14 rounded-full bg-[var(--primary)] shadow-[0_0_30px_rgba(255,77,94,0.45)] border border-white/15 flex items-center justify-center font-black"
          aria-label="WhatsApp"
        >
          WA
        </a>
      </div>
    </main>
  );
}

function ValueChip({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
        {k}
      </p>
      <p className="mt-2 text-sm font-semibold text-white/85">{v}</p>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <p className="text-xs font-semibold text-white/55">{label}</p>
      <p className="text-sm font-semibold text-white/90 text-right">{value}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
        {n}
      </p>
      <p className="mt-2 text-sm font-semibold text-white/90">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
    </div>
  );
}

function SectionCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="glass rounded-3xl border border-white/10 p-7 md:p-8">
      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white/90">
        {title}
      </h2>
      <p className="mt-3 text-sm text-white/65">{subtitle}</p>
      <ul className="mt-6 space-y-2 text-sm text-white/80">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniInfo({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
        {title}
      </p>
      <p className="mt-2 text-sm font-semibold text-white/85">{text}</p>
    </div>
  );
}

function ActionCard({
  title,
  text,
  href,
  primary,
}: {
  title: string;
  text: string;
  href: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "rounded-2xl border border-white/10 p-5 transition block",
        primary
          ? "bg-white text-black hover:bg-white/90"
          : "bg-black/20 text-white hover:bg-white/[0.04] hover:border-white/20",
      ].join(" ")}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p
        className={
          primary ? "mt-1 text-sm text-black/70" : "mt-1 text-sm text-white/60"
        }
      >
        {text}
      </p>
      <p
        className={
          primary
            ? "mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-black/70"
            : "mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45"
        }
      >
        Abrir →
      </p>
    </a>
  );
}
