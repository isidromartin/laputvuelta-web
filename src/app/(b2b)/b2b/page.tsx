// app/b2b/page.tsx
import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para salas",
  description:
    "Dossier B2B para salas y promotores: formato 360º llave en mano (show + streaming + activaciones + contenido) orientado a afluencia y consumo.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "La Put* Vuelta para salas",
    description:
      "Formato 360º llave en mano: show, streaming, activaciones y contenido. Enfoque: pista siempre activa + picos de consumo + visibilidad.",
    type: "website",
    url: "/b2b",
  },
};

type Contact = {
  name: string;
  role: string;
  phoneE164: string;
  display: string;
  primary?: boolean;
};

const BRAND = {
  name: "La Put* Vuelta",
  pageTitle: "Dossier para salas",
  accentLabel: "B2B",
  yearLabel: "2026",
  email: "laputvuelta@gmail.com",
  instagramHandle: "laputvueltaoficial",
  tiktokHandle: "laputvueltaoficial",
  dossierUrl: "/docs/laputvuelta-dossier.pdf",
  mediaKitUrl: "/docs/laputvuelta-media-kit.zip",
  streamingPlatform: "Kick",
};

const CONTACTS: Contact[] = [
  {
    name: "Julio",
    role: "Booking",
    phoneE164: "+34674873549",
    display: "674 87 35 49 (Julio)",
    primary: true,
  },
  {
    name: "Tomás",
    role: "Booking",
    phoneE164: "+34613863180",
    display: "613 86 31 80 (Tomás)",
  },
];

function waLink(phoneE164: string, message: string) {
  const text = encodeURIComponent(message);
  const phone = phoneE164.replace(/[^\d+]/g, "").replace("+", "");
  return `https://wa.me/${phone}?text=${text}`;
}

function igLink(handle: string) {
  return `https://instagram.com/${handle}`;
}

function ttLink(handle: string) {
  return `https://www.tiktok.com/@${handle}`;
}

const PRIMARY_MESSAGE =
  "Hola, soy de una sala/promotora y quiero info para reservar fecha de La Put* Vuelta. Te paso ciudad, sala, aforo aproximado y fechas propuestas:";

const VALUE_PROPOSITION = [
  {
    title: "Más horas de sala, más consumo",
    text: "Pista con ambiente toda la noche: narrativa + momentos programados + sorpresas. Menos ratos muertos y más gente con ganas de llegar hasta el cierre.",
  },
  {
    title: "Contenido premium para la sala",
    text: "Reels, fotos y vídeo (según pack) listos para publicar. Contenido pensado para que el evento “se vea grande” y eleve la imagen del club.",
  },
  {
    title: "Visibilidad más allá de la noche",
    text: "Contenido compartible y material viralizable. Impacto digital que trasciende el evento y refuerza la marca de la sala.",
  },
  {
    title: "Diferente a lo de siempre",
    text: "Identidad propia + show + interacción real. Una experiencia memorable que se traduce en repetición y conversación.",
  },
  {
    title: "Potencial de fidelización",
    text: "Formato repetible: puede convertirse en una noche insignia en tu programación, creando costumbre y recurrencia.",
  },
];

const OFFER = [
  {
    title: "Show (6 horas)",
    bullets: ["3 DJs premium", "1 presentador/a", "2 azafatas"],
    tag: "6h",
  },
  {
    title: "Streaming en vivo + producción técnica",
    bullets: [
      "Streaming en directo (según condiciones)",
      "Pantallas / visuales (si aplica)",
      "Timing, calidad y continuidad",
    ],
    tag: BRAND.streamingPlatform,
  },
  {
    title: "Dinámicas, juegos y retos",
    bullets: [
      "Ruptura de hielo + activación",
      "Picos de energía y consumo estratégicos",
      "Adaptación a normas y perfil de sala",
    ],
    tag: "Activación",
  },
  {
    title: "Contenido y visibilidad",
    bullets: [
      "Reels / clips en tiempo real (según pack)",
      "Aftermovie y fotos (según pack)",
      "Material listo para redes",
    ],
    tag: "RRSS",
  },
];

const NIGHT_FLOW = [
  {
    title: "Inicio envolvente y warm-up",
    text: "Ambientación, primeras dinámicas y bienvenida al público.",
  },
  {
    title: "Subida de energía progresiva",
    text: "Interacción, sorpresas y conexión con la pista.",
  },
  {
    title: "Momentos Putivuelta",
    text: "Retos, juegos y picos de consumo estratégicos.",
  },
  {
    title: "Peak time: máxima intensidad",
    text: "Pista llena, show y energía en su punto álgido.",
  },
  {
    title: "Cierre épico y memorable",
    text: "Despedida con impacto, dejando huella en la sala.",
  },
  {
    title: "Pista siempre activa",
    text: "Momentos diseñados para mantener la intensidad.",
  },
];

const GAMES_AND_CHALLENGES = [
  {
    title: "Retos exprés en pista",
    text: "Activaciones espontáneas para romper el hielo y animar.",
  },
  {
    title: "Dinámicas por equipos",
    text: "Competencias sanas que fomentan la participación grupal.",
  },
  {
    title: "Momentos call & response",
    text: "Interacción colectiva para elevar la energía del club.",
  },
  {
    title: "Sorpresas programadas",
    text: "Intervenciones inesperadas que generan viralidad.",
  },
  {
    title: "Seguridad y personalización",
    text: "Dinámicas adaptadas al perfil y normas de cada sala.",
  },
];

const FILMMAKERS = [
  {
    name: "Otherview",
    ig: "https://instagram.com/o1herview",
    img: "/b2b/team/otherview.jpg",
    acc: "o1herview",
    text: "Equipo audiovisual con experiencia en proyectos con artistas y festivales.",
  },
  {
    name: "Bau Creator",
    ig: "https://instagram.com/bau.creator",
    img: "/b2b/team/bau-creator.jpg",
    acc: "bau.creator",
    text: "Cobertura y narrativa visual pensada para maximizar contenido útil para redes.",
  },
];

const CONTENT_BLOCK = [
  {
    title: "Reels verticales listos para viralizar",
    text: "Pack de reels personalizados para el evento (cantidad a definir).",
  },
  {
    title: "Aftermovie profesional",
    text: "Resumen audiovisual de la noche (duración a definir).",
  },
  {
    title: "Pack de fotos sociales",
    text: "Imágenes editadas de alta calidad para RRSS (cantidad a definir).",
  },
  {
    title: "Clips en tiempo real y directos opcionales",
    text: "Material para stories/publicación durante la noche (según condiciones).",
  },
  {
    title: "Entrega de contenido listo para publicar",
    text: "Facilitamos la difusión y el impacto en redes de la sala.",
  },
];

const TECH_REQUIREMENTS = [
  {
    title: "Cabina y sonido",
    text: "Setup estándar, micro, entradas libres, monitores.",
  },
  {
    title: "Espacios funcionales",
    text: "Zona de dinámicas, photocall y puntos de grabación.",
  },
  {
    title: "Operativa y logística",
    text: "Horarios, accesos, pruebas y contacto de sala definidos.",
  },
  {
    title: "Adaptabilidad total",
    text: "Requisitos flexibles según condiciones del local.",
  },
];

const PACKS = [
  {
    title: "Pack Base",
    subtitle: "Putivuelta esencial",
    bullets: [
      "Experiencia básica + DJs + dinámicas",
      "Contenido esencial para redes (según acuerdo)",
      "Producción adaptada al local",
    ],
    priceHint: "Precio: a medida",
    tag: "Base",
  },
  {
    title: "Pack Pro",
    subtitle: "Más show y contenido",
    bullets: [
      "Más espectáculo y juegos",
      "Mayor producción audiovisual",
      "Piezas extra para reforzar difusión",
    ],
    priceHint: "Precio: a medida",
    tag: "Pro",
  },
  {
    title: "Pack Full Experience",
    subtitle: "Todo incluido",
    bullets: [
      "Decoración / puesta en escena completa (según sala)",
      "Contenido premium + experiencia integral",
      "Activación completa y máxima visibilidad",
    ],
    priceHint: "Precio: a medida",
    tag: "Full",
  },
];

const EXTRAS = [
  "Elementos adicionales según sala y necesidades",
  "Personalización por ciudad, aforo y requisitos",
  "Opcionales de contenido y streaming según operativa",
];

const TEAM = [
  {
    name: "Villalobos",
    role: "DJ",
    img: "/b2b/team/villalobos.png",
    acc: "villalobospjulio",
    ig: "https://www.instagram.com/villalobospjulio/",
  },
  {
    name: "Tomi Demaio",
    role: "DJ",
    img: "/b2b/team/tomi-demaio.png",
    acc: "tomidemaio",
    ig: "https://www.instagram.com/tomidemaio/",
  },
  {
    name: "Lalo Sánchez",
    role: "DJ",
    img: "/b2b/team/lalo-sanchez.jpg",
    acc: "lalosl7",
    ig: "https://www.instagram.com/lalosl7/",
  },
  {
    name: "Gonmarin",
    role: "DJ",
    img: "/b2b/team/gonmarin.jpg",
    acc: "gonmariin",
    ig: "https://www.instagram.com/gonmariin/",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es La Put* Vuelta?",
    a: "Una fiesta formato 360º: show + activaciones + contenido + (opcional) streaming en vivo. Diseñada para mantener la pista activa y maximizar afluencia y consumo.",
  },
  {
    q: "¿Qué aporta a la sala?",
    a: "Más horas útiles de club (menos ratos muertos), narrativa de noche con picos de energía/consumo, contenido premium para redes y diferenciación real en programación.",
  },
  {
    q: "¿Qué necesitáis por parte de la sala?",
    a: "Fecha y condiciones claras, coordinación con puerta/seguridad, espacios funcionales para activaciones y grabación, y un punto de contacto operativo.",
  },
  {
    q: "¿Trabajáis con fijo, porcentaje o híbrido?",
    a: "Sí. Podemos trabajar con fijo/garantía, % (puerta) o híbrido. Recomendamos el modelo en función de plaza, fecha y objetivo.",
  },
  {
    q: "¿Tenéis requisitos técnicos?",
    a: "Sí: cabina/sonido estándar, micro, espacios para dinámicas y grabación, y logística coordinada (horarios, accesos y pruebas).",
  },
  {
    q: "¿Cuánto tardáis en activar una fecha?",
    a: "Ideal: 10–21 días. Si es urgente, condensamos el plan con foco en tracción inmediata y ejecución.",
  },
];

export default function B2BPage() {
  const primaryContact = CONTACTS.find((c) => c.primary) ?? CONTACTS[0];
  const whatsappPrimaryHref = waLink(primaryContact.phoneE164, PRIMARY_MESSAGE);

  const whatsappSecondaryHref =
    CONTACTS.length > 1
      ? waLink(CONTACTS[1].phoneE164, PRIMARY_MESSAGE)
      : whatsappPrimaryHref;

  const mailHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    "Propuesta B2B — La Put* Vuelta"
  )}&body=${encodeURIComponent(PRIMARY_MESSAGE)}`;

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
        <nav className="max-w-[1200px] w-full glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between border border-white/10">
          {/* Brand */}
          <a href="/b2b" className="flex items-center gap-3 group">
            {/* <span className="hidden sm:inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/80">
              {BRAND.accentLabel}
            </span>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-white/95 group-hover:text-white transition">
                {BRAND.name}
              </p>
              <p className="text-[11px] font-semibold text-white/55">
                {BRAND.pageTitle}
              </p>
            </div> */}
            {/* <Link href="/" className="flex items-center gap-3"> */}
            <Image
              src="/logo.png"
              alt="La Put* Vuelta"
              width={160}
              height={40}
              priority
              className="h-8 w-auto"
            />
            {/* </Link> */}
          </a>

          {/* Desktop: reduce to 3 anchors + dropdown */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.35em] text-white/60">
            <a className="hover:text-[var(--primary)] transition" href="#valor">
              Valor
            </a>
            <a className="hover:text-[var(--primary)] transition" href="#packs">
              Packs
            </a>
            <a
              className="hover:text-[var(--primary)] transition"
              href="#contacto"
            >
              Contacto
            </a>

            <div className="relative">
              <details className="group">
                <summary className="list-none cursor-pointer hover:text-[var(--primary)] transition flex items-center gap-2">
                  <span>Más</span>
                  <span className="text-white/50 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>

                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                  {[
                    { label: "Concepto", href: "#concepto" },
                    { label: "Qué ofrecemos", href: "#ofrecemos" },
                    { label: "Noche", href: "#noche" },
                    { label: "Contenido", href: "#contenido" },
                    { label: "Equipo", href: "#equipo" },
                    { label: "FAQ", href: "#faq" },
                  ].map((x) => (
                    <a
                      key={x.href}
                      href={x.href}
                      className="block rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white hover:bg-white/[0.06] transition"
                    >
                      {x.label}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden sm:inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
            >
              Solicitar propuesta
            </a>
            <a
              href={whatsappPrimaryHref}
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
                Fiesta 360º · Show · Activación · Contenido
              </div>

              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95">
                {BRAND.name}
              </h1>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em] text-white/45">
                Formato 360º llave en mano
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                Una experiencia donde{" "}
                <span className="text-white/85 font-semibold">TODO PASA</span>:
                música, activaciones, show, decoración y contenido. Diseñada
                para mejorar <span className="text-white/85">afluencia</span> y{" "}
                <span className="text-white/85">consumo</span> manteniendo la{" "}
                <span className="text-white/85">pista siempre activa</span>.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/70">
                Sello propio:{" "}
                <span className="text-white/90 font-semibold italic">
                  ¿Hace cuánto no sales a dar una vuelta?
                </span>
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Solicitar propuesta
                </a>

                <a
                  href={whatsappPrimaryHref}
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
                <ValueChip k="Show" v="6 horas · 3 DJs + presentador/a" />
                <ValueChip k="Activación" v="Dinámicas, juegos y picos" />
                <ValueChip
                  k="Contenido"
                  v="Reels · fotos · aftermovie (pack)"
                />
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
                {BRAND.yearLabel}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <StatRow label="Formato" value="Fiesta 360º / show party" />
              <StatRow label="Duración" value="~6 horas (adaptable)" />
              <StatRow
                label="Producción"
                value={`Streaming + técnica (${BRAND.streamingPlatform})`}
              />
              <StatRow label="Entrega" value="Contenido listo + reporting" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Para enviarte propuesta
              </p>
              <p className="mt-2 text-sm text-white/70">
                Ciudad, sala, aforo aproximado y dos fechas posibles.
                Respondemos con modelo recomendado, requisitos y presupuesto por
                pack.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href={whatsappPrimaryHref}
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

              <a
                href={BRAND.mediaKitUrl}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] hover:border-white/20 transition"
              >
                <p className="text-sm font-semibold text-white/90">
                  Media kit (opcional)
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Creatividades y assets
                </p>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* CONCEPTO */}
      <section
        id="concepto"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Qué es
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
            El concepto
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-3xl">
            <span className="text-white/85 font-semibold">{BRAND.name}</span> es
            una fiesta donde{" "}
            <span className="text-white/85 font-semibold">TODO PASA</span>. Un
            formato pensado para los que nos gusta tener una historia que
            contar: música, activaciones, show, decoración adaptada a cada sala
            y contenido grabado para que quede recuerdo.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-3xl">
            Además, incorporamos interacción real (dinámicas/retos y momentos
            programados). Si la operativa lo permite, retransmitimos en directo
            para ampliar alcance y conversación.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <MiniInfo
              title="Identidad y sello reconocible"
              text="Fiesta temática única con narrativa propia."
            />
            <MiniInfo
              title="Interacción real"
              text="DJs, performances y dinámicas que conectan con el público."
            />
            <MiniInfo
              title="Momentos sorpresa"
              text="Diseñados para subir energía y consumo."
            />
            <MiniInfo
              title="Viralidad y redes"
              text="Contenido listo para potenciar la imagen de la sala."
            />
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section
        id="valor"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Propuesta de valor
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
              ¿Qué gana la sala?
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Más horas útiles de club, más consumo y más impacto digital. Un
              formato diferenciador con potencial de repetición.
            </p>
          </div>

          <a
            href={whatsappPrimaryHref}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[color:rgba(255,77,94,0.82)] transition neon-border"
          >
            Consultar condiciones
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {VALUE_PROPOSITION.map((x) => (
            <div
              key={x.title}
              className="glass rounded-3xl border border-white/10 p-7"
            >
              <p className="text-base font-black uppercase tracking-[0.06em] text-white/90">
                {x.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {x.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUÉ OFRECEMOS */}
      <section
        id="ofrecemos"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Producción
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
                ¿Qué ofrecemos?
              </h2>
              <p className="mt-3 text-sm text-white/65 max-w-2xl">
                Show de 6 horas + activación + contenido. Paquetes adaptables
                según sala, aforo y objetivos.
              </p>
            </div>

            <a
              href="#packs"
              className="mt-4 inline-flex w-fit rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition md:mt-0"
            >
              Ver packs
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {OFFER.map((o) => (
              <div
                key={o.title}
                className="rounded-3xl border border-white/10 bg-black/20 p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                    {o.tag}
                  </p>
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_16px_rgba(255,77,94,0.35)]" />
                </div>
                <h3 className="mt-2 text-base font-black uppercase tracking-[0.06em] text-white/90">
                  {o.title}
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {/* <div className="mt-6 flex gap-2">
                  <a
                    href="#contacto"
                    className="inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                  >
                    Pedir propuesta
                  </a>
                  <a
                    href={whatsappPrimaryHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    WhatsApp
                  </a>
                </div> */}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Step
              n="01"
              title="Fecha y condiciones"
              text="Modelo, objetivos, responsabilidades y encaje de sala."
            />
            <Step
              n="02"
              title="Creatividades"
              text="Adaptación de piezas y calendario de comunicación."
            />
            <Step
              n="03"
              title="Activación"
              text="Momentos programados + empuje final 48–72h."
            />
            <Step
              n="04"
              title="Ejecución + cierre"
              text="Puerta coordinada, timing, incidencias y reporting."
            />
          </div>
        </div>
      </section>

      {/* NOCHE */}
      <section
        id="noche"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Estructura
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight text-white/90">
              Así transcurre la noche
            </h2>
            <div className="mt-6 space-y-3">
              {NIGHT_FLOW.map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-sm font-semibold text-white/90">
                    {x.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Activación
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight text-white/90">
              Juegos y retos con el público
            </h2>
            <p className="mt-3 text-sm text-white/65">
              Dinámicas pensadas para elevar energía, crear momentos y generar
              contenido, siempre adaptadas a normas de sala.
            </p>

            <div className="mt-6 space-y-3">
              {GAMES_AND_CHALLENGES.map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-sm font-semibold text-white/90">
                    {x.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                Nota operativa
              </p>
              <p className="mt-2 text-sm text-white/70">
                Las dinámicas se pactan con antelación y se ajustan a seguridad,
                flujo de puerta y perfil del local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section
        id="equipo"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Quién trabaja
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
            Equipo
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Line-up con 4 de los mejores DJs nacionales.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t) => (
              <Link
                href={t.ig}
                key={t.name}
                className="rounded-3xl border border-white/10 bg-black/20 p-6"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 90vw"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                <p className="mt-4 text-sm font-semibold text-white/90">
                  {t.name} · @{t.acc}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                  {t.role}
                </p>
              </Link>
            ))}
          </div>

          {/* <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <p className="text-sm font-semibold text-white/85">Sello propio</p>
            <p className="mt-2 text-sm text-white/70 italic">
              ¿Hace cuánto no sales a dar una vuelta?
            </p>
          </div> */}
        </div>
      </section>

      {/* FILMMAKERS */}
      <section
        id="filmmakers"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
                Equipo audiovisual
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
                2 filmmakers de primer nivel
              </h2>
              <p className="mt-3 text-sm text-white/65 max-w-2xl">
                Cobertura diseñada para generar piezas útiles para redes y
                reforzar visibilidad de la sala.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FILMMAKERS.map((f) => (
              <Link
                href={f.ig}
                key={f.name}
                className="rounded-3xl border border-white/10 bg-black/20 p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                      priority={false}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-black uppercase tracking-[0.06em] text-white/90">
                      {f.name} · @{f.acc}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section
        id="contenido"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Contenido, requisitos y presupuesto
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
            Contenido viral para tus redes
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Piezas listas para publicar y mantener tracción antes, durante y
            después del evento.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {CONTENT_BLOCK.map((x) => (
              <div
                key={x.title}
                className="rounded-3xl border border-white/10 bg-black/20 p-7"
              >
                <p className="text-sm font-semibold text-white/90">{x.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {x.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Requerimientos técnicos mínimos
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {TECH_REQUIREMENTS.map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5"
                >
                  <p className="text-sm font-semibold text-white/90">
                    {x.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section
        id="packs"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Paquetes y presupuesto
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
              Packs y personalización
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Presupuesto ajustable por ciudad, aforo y requisitos. Te
              recomendamos el pack según objetivo (afluencia/barra/imagen).
            </p>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
          >
            Pedir presupuesto
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PACKS.map((p) => (
            <div
              key={p.title}
              className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.10),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                    {p.tag}
                  </p>
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_16px_rgba(255,77,94,0.35)]" />
                </div>

                <h3 className="mt-2 text-base font-black uppercase tracking-[0.06em] text-white/90">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/65">{p.subtitle}</p>

                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                  <p className="text-sm font-semibold text-white/85">
                    {p.priceHint}
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Se define tras revisar sala, fecha y operativa.
                  </p>
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href="#contacto"
                    className="inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                  >
                    Pedir propuesta
                  </a>
                  <a
                    href={whatsappPrimaryHref}
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

        <div className="mt-6 glass rounded-3xl border border-white/10 p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Extras
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {EXTRAS.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
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
              Respuestas directas a lo que normalmente se pregunta al valorar
              una colaboración.
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

      {/* CONTACTO */}
      <section
        id="contacto"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ContactForm />

          <div className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Condiciones, contacto y cierre
            </p>
            <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white/90">
              Cerramos más rápido por aquí
            </h3>
            <p className="mt-3 text-sm text-white/65">
              Para propuesta: ciudad + sala + aforo + dos fechas. Te devolvemos
              modelo recomendado, requisitos y pack.
            </p>

            <div className="mt-6 grid gap-3">
              <ActionCard
                title={`WhatsApp (${primaryContact.name})`}
                text="Ciudad + sala + aforo + 2 fechas"
                href={whatsappPrimaryHref}
                primary
              />
              {CONTACTS.length > 1 ? (
                <ActionCard
                  title={`WhatsApp (${CONTACTS[1].name})`}
                  text="Alternativa de contacto"
                  href={whatsappSecondaryHref}
                />
              ) : null}
              <ActionCard title="Email" text={BRAND.email} href={mailHref} />
              <ActionCard
                title="Instagram"
                text={`@${BRAND.instagramHandle}`}
                href={igLink(BRAND.instagramHandle)}
              />
              <ActionCard
                title="TikTok"
                text={`@${BRAND.tiktokHandle}`}
                href={ttLink(BRAND.tiktokHandle)}
              />
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
                  "Objetivo principal (afluencia / barra / imagen)",
                  "Preferencia de pack (Base / Pro / Full) si la tienes",
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

            <div className="mt-5 text-xs text-white/45">
              <p className="font-semibold text-white/60">Contactos</p>
              <ul className="mt-2 space-y-1">
                {CONTACTS.map((c) => (
                  <li key={c.phoneE164}>{c.display}</li>
                ))}
                <li>{BRAND.email}</li>
                <li>
                  @{BRAND.instagramHandle} · @{BRAND.tiktokHandle}
                </li>
              </ul>
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
          href={whatsappPrimaryHref}
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
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
        {n}
      </p>
      <p className="mt-2 text-sm font-semibold text-white/90">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
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
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("https://wa.me/");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
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
