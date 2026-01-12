// app/b2b/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Para salas | La Putivuelta",
  description:
    "Dossier B2B para salas: formato de evento llave en mano (marketing + operación + activación en puerta).",
  robots: { index: true, follow: true },
  openGraph: {
    title: "La Put* Vuelta para salas",
    description:
      "Formato de evento llave en mano para salas: marketing, activación y operación.",
    type: "website",
    url: "/b2b",
  },
};

const BRAND = {
  name: "La Put* Vuelta",
  pageTitle: "Para salas",
  accentLabel: "B2B",
  // Ajusta esto a tu número real (formato internacional recomendado)
  whatsappE164: "+34674873549",
  // Ajusta esto a tu email real
  email: "laput.vuelta@gmail.com",
  // Sube tu dossier a /public y pon aquí la ruta, o usa un enlace externo
  dossierUrl: "/docs/laputvuelta-dossier.pdf",
  // Opcional: media kit
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
    a: "Un formato de evento con marketing y operación integrados: preventa cuando aplique, activación con promotores/listas, y coordinación de puerta para maximizar afluencia y consumo.",
  },
  {
    q: "¿Qué necesitáis por parte de la sala?",
    a: "Fecha y condiciones claras, apoyo mínimo de comunicación (stories/1 post si encaja), coordinación de puerta/seguridad, y acceso al material audiovisual del local para creatividades si se desea.",
  },
  {
    q: "¿Trabajáis con fijo, porcentaje o híbrido?",
    a: "Nos adaptamos. Habitualmente trabajamos con tres modelos: fijo/garantía, porcentaje de puerta, o híbrido (mínimo + variable). En la propuesta se detalla qué incluye cada uno.",
  },
  {
    q: "¿Tenéis rider técnico?",
    a: "Sí. Incluimos un rider resumido en el dossier y compartimos el detalle (cabina, micro, timing) al cerrar fecha.",
  },
  {
    q: "¿Cuánto tardáis en activar una fecha?",
    a: "Idealmente 10–21 días para una activación completa. Si la fecha es urgente, se puede condensar con un plan de comunicación adaptado.",
  },
  {
    q: "¿Podéis aportar contenido y creatividades?",
    a: "Sí. Plantillas, copies y creatividades listas. Si la sala tiene branding propio, lo integramos sin problema.",
  },
];

const MODELS = [
  {
    title: "Modelo A — Fijo / Garantía",
    forWho: "Ideal si buscas reducir incertidumbre y asegurar un mínimo.",
    bullets: [
      "Condiciones cerradas desde el inicio",
      "Activación completa (creatividades + plan de difusión)",
      "Coordinación de puerta y reporting operativo",
    ],
  },
  {
    title: "Modelo B — % de Puerta",
    forWho: "Alineación total a performance.",
    bullets: [
      "Estructura variable según resultados",
      "Foco en tracción (listas/promotores + difusión)",
      "Cierre con métricas y propuesta de repetición",
    ],
  },
  {
    title: "Modelo C — Híbrido",
    forWho: "Equilibrio entre cobertura mínima y upside.",
    bullets: [
      "Mínimo de cobertura + variable",
      "Recomendado para nuevas plazas o primeras fechas",
      "Modelo preferente para construir recurrencia",
    ],
  },
];

export default function B2BPage() {
  const primaryMessage =
    "Hola, soy de una sala y quiero información para reservar fecha de La Put* Vuelta. Te cuento ciudad, sala y fecha propuesta:";
  const whatsappHref = waLink(primaryMessage);

  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_10%,rgba(59,130,246,0.28),transparent_45%),radial-gradient(900px_circle_at_80%_30%,rgba(16,185,129,0.22),transparent_45%),radial-gradient(900px_circle_at_50%_90%,rgba(99,102,241,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/25 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-semibold tracking-wide text-white/90">
              {BRAND.accentLabel}
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{BRAND.name}</div>
              <div className="text-xs text-white/70">{BRAND.pageTitle}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#contacto"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Solicitar propuesta
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Booking / Dossier para salas
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {BRAND.name} para salas
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Formato de evento llave en mano: concepto, marketing, activación y
              coordinación operativa. En 30 segundos: qué es, cómo funciona y
              cómo cerramos fecha.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#contacto"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Solicitar propuesta
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Hablar por WhatsApp
              </Link>
              <Link
                href={BRAND.dossierUrl}
                target="_blank"
                className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
              >
                Ver dossier (PDF)
              </Link>
            </div>

            {/* Value bullets */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  k: "Tracción",
                  v: "Promotores + listas + comunicación",
                },
                {
                  k: "Operación",
                  v: "Puerta coordinada y timing",
                },
                {
                  k: "Resultado",
                  v: "Foco en afluencia y barra",
                },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-xs font-semibold text-white/60">
                    {item.k}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/90">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white/60">
                  Datos rápidos
                </div>
                <div className="mt-1 text-lg font-semibold">Resumen B2B</div>
              </div>
              <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold text-white/75">
                2026
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <StatRow
                label="Perfil de público"
                value="Universitario + joven adulto"
              />
              <StatRow label="Formato" value="Fiesta temática / night event" />
              <StatRow label="Duración típica" value="4–6 horas (adaptable)" />
              <StatRow
                label="Material"
                value="Dossier + media kit + creatividades"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold text-white/60">
                Siguiente paso
              </div>
              <p className="mt-1 text-sm text-white/75">
                Envíanos ciudad, nombre de la sala, aforo aproximado y dos
                fechas posibles. Respondemos con propuesta y condiciones.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90"
                >
                  WhatsApp
                </Link>
                <Link
                  href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                    "Propuesta B2B — La Putivuelta"
                  )}&body=${encodeURIComponent(primaryMessage)}`}
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <SectionCard
            title="Qué aporta a tu sala"
            subtitle="Pensado para fechas valle o para consolidar una noche fija."
            items={[
              "Afluencia incremental con activación dirigida",
              "Mejora de consumo por dinámica y timing",
              "Preventa (si aplica) para reducir incertidumbre",
              "Creatividades y copies listos para la sala",
              "Coordinación operativa: puerta, listas y reporting",
            ]}
          />
          <SectionCard
            title="Qué incluye el pack"
            subtitle="Nos encargamos del producto, tú del espacio."
            items={[
              "Concepto + estructura musical + timing",
              "Plan de difusión (orgánico + colaboraciones)",
              "Gestión de promotores/listas (si aplica)",
              "Guía de operación y coordinación el día del evento",
              "Cierre con conclusiones y propuesta de repetición",
            ]}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Cómo trabajamos</h2>
              <p className="mt-2 text-sm text-white/70">
                Proceso simple y replicable para cerrar fechas con claridad.
              </p>
            </div>
            <Link
              href="#contacto"
              className="mt-4 inline-flex w-fit rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 md:mt-0"
            >
              Ver propuesta
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            <Step
              n="01"
              title="Fecha y condiciones"
              text="Definimos el modelo (fijo / % / híbrido) y el plan de activación."
            />
            <Step
              n="02"
              title="Creatividades"
              text="Adaptamos piezas a la sala y lanzamos comunicación coordinada."
            />
            <Step
              n="03"
              title="Activación"
              text="Listas/promotores (si aplica), contenidos y empuje final 48–72h."
            />
            <Step
              n="04"
              title="Ejecución + cierre"
              text="Puerta coordinada, timing de sala, y métricas para repetir."
            />
          </div>
        </div>
      </section>

      {/* Collaboration models */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold">Modelos de colaboración</h2>
            <p className="mt-2 text-sm text-white/70">
              Elegimos el modelo según plaza, fecha y objetivos
              (afluencia/barra).
            </p>
          </div>
          <Link
            href={whatsappHref}
            target="_blank"
            className="hidden rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 md:inline-flex"
          >
            Consultar condiciones
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {MODELS.map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm font-semibold">{m.title}</div>
              <div className="mt-2 text-sm text-white/70">{m.forWho}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Dossier / assets */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-xl font-semibold">Material</h2>
          <p className="mt-2 text-sm text-white/70">
            Dossier para dirección de sala y material descargable.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={BRAND.dossierUrl}
              target="_blank"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Ver dossier (PDF)
            </Link>
            <Link
              href={BRAND.dossierUrl}
              download
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Descargar dossier
            </Link>
            <Link
              href={BRAND.mediaKitUrl}
              className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
            >
              Media kit (opcional)
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <MiniInfo
              title="Incluye"
              text="Concepto, modelos, requisitos y casos."
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
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold">FAQ para salas</h2>
            <p className="mt-2 text-sm text-white/70">
              Respuestas directas a lo que normalmente pregunta un venue.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-white/60 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 pt-10 pb-16">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <ContactForm />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-lg font-semibold">Contacto directo</h3>
            <p className="mt-2 text-sm text-white/70">
              Si prefieres ir al grano, estos canales suelen cerrar más rápido.
            </p>

            <div className="mt-6 grid gap-3">
              <ActionCard
                title="WhatsApp Booking"
                text="Ciudad + sala + aforo + 2 fechas"
                href={whatsappHref}
                primary
              />
              <ActionCard
                title="Email"
                text={BRAND.email}
                href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                  "Propuesta B2B — La Putivuelta"
                )}&body=${encodeURIComponent(primaryMessage)}`}
              />
              <ActionCard
                title="Dossier PDF"
                text="Ver / descargar"
                href={BRAND.dossierUrl}
              />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-xs font-semibold text-white/60">
                Checklist para propuesta
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {[
                  "Ciudad y nombre de sala",
                  "Aforo aproximado",
                  "Día/horario habitual",
                  "Dos fechas candidatas",
                  "Modelo preferido (fijo / % / híbrido)",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
          © {new Date().getFullYear()} {BRAND.name}. Sección B2B.
        </footer>
      </section>
    </main>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-xs font-semibold text-white/55">{label}</div>
      <div className="text-sm font-semibold text-white/90 text-right">
        {value}
      </div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="text-xs font-semibold text-white/60">{n}</div>
      <div className="mt-2 text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{text}</div>
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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/80">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
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
      <div className="text-xs font-semibold text-white/60">{title}</div>
      <div className="mt-2 text-sm font-semibold text-white/90">{text}</div>
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
    <Link
      href={href}
      target="_blank"
      className={[
        "rounded-2xl border border-white/10 p-5 transition",
        primary
          ? "bg-white text-black hover:bg-white/90"
          : "bg-black/20 text-white hover:bg-white/5",
      ].join(" ")}
    >
      <div className="text-sm font-semibold">{title}</div>
      <div
        className={
          primary ? "mt-1 text-sm text-black/70" : "mt-1 text-sm text-white/70"
        }
      >
        {text}
      </div>
      <div
        className={
          primary
            ? "mt-3 text-xs font-semibold text-black/70"
            : "mt-3 text-xs font-semibold text-white/60"
        }
      >
        Abrir →
      </div>
    </Link>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs font-semibold text-white/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
      />
    </div>
  );
}
