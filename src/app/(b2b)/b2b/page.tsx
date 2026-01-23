// app/b2b/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/site/ContactForm";
import { Timeline } from "@/components/b2b/Timeline";

export const metadata: Metadata = {
  title: "Para salas",
  description:
    "Dossier B2B: formato 360º llave en mano (show + activación + contenido + streaming opcional) orientado a pista activa, picos de consumo y visibilidad.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "La Put* Vuelta para salas",
    description:
      "Formato 360º llave en mano: show, activación, contenido y streaming opcional. Enfoque: pista siempre activa + picos de consumo + visibilidad.",
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
  "Hola, soy de una sala/promotora y quiero reservar fecha para La Put* Vuelta. Te paso ciudad, sala, aforo aproximado y 2 fechas propuestas:";

const VALUE_PROPOSITION = [
  {
    title: "Más horas útiles de club (menos ratos muertos)",
    text: "No es “que la gente aparezca a las 3:00”. Construimos una narrativa desde el primer tema para que la pista se mantenga viva hasta el cierre.",
  },
  {
    title: "Picos programados de energía y consumo",
    text: "Momentos Putivuelta: activaciones, retos y sorpresas que empujan la noche cuando más interesa (sin romper el flujo del club).",
  },
  {
    title: "Contenido que se publica solo",
    text: "Material listo para RRSS: reels/clips, fotos y vídeo según alcance. El evento se ve grande, y la sala se queda con activos para comunicar después.",
  },
  {
    title: "Diferenciación real (no otra sesión más)",
    text: "Sello reconocible + show + interacción. Una experiencia que la gente comenta, graba y quiere repetir.",
  },
  {
    title: "Formato repetible = noche insignia",
    text: "Si encaja, se convierte en una fecha recurrente: fidelización y hábito del público. No dependes de “una noche suelta”.",
  },
];

const OFFER = [
  {
    title: "Show de ~6 horas (adaptable)",
    bullets: ["3 DJs premium", "1 presentador/a", "2 azafatas"],
    tag: "SHOW",
  },
  {
    title: "Activación dentro de la fiesta",
    bullets: [
      "Dinámicas y retos (call & response, equipos, sorpresas)",
      "Momentos Putivuelta (picos planificados)",
      "Adaptación a normas y perfil de sala",
    ],
    tag: "ACTIVACIÓN",
  },
  {
    title: "Contenido y cobertura",
    bullets: [
      "Clips/reels (según alcance)",
      "Aftermovie + fotos (según alcance)",
      "Entrega lista para publicar",
    ],
    tag: "RRSS",
  },
  {
    title: `Streaming opcional + técnica (${BRAND.streamingPlatform})`,
    bullets: [
      "Retransmisión si la operativa lo permite",
      "Calidad, timing y continuidad",
      "Visuales/pantallas si aplica",
    ],
    tag: "OPCIONAL",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Encaje + propuesta",
    text: "Revisamos ciudad, sala, aforo y fecha. Te devolvemos un plan recomendado (alcance + operativa) y presupuesto a medida.",
  },
  {
    n: "02",
    title: "Preproducción sin fricción",
    text: "Piezas y calendario coordinado. Alineamos timings, activaciones y puntos de grabación para que el evento salga “redondo”.",
  },
  {
    n: "03",
    title: "Ejecución + cierre con datos",
    text: "Pista activa, coordinación y control de momentos. Post-evento: conclusiones, entregables y propuesta de repetición.",
  },
];

const NIGHT_FLOW = [
  {
    title: "Inicio envolvente y warm-up",
    text: "Ambientación, bienvenida y primeras dinámicas.",
  },
  {
    title: "Subida de energía progresiva",
    text: "Interacción, sorpresas y conexión con la pista.",
  },
  {
    title: "Momentos Putivuelta",
    text: "Retos, juegos y picos estratégicos de consumo.",
  },
  {
    title: "Peak time: máxima intensidad",
    text: "Pista llena, show y energía en el punto álgido.",
  },
  {
    title: "Cierre épico y memorable",
    text: "Despedida con impacto para dejar huella.",
  },
  {
    title: "Pista siempre activa",
    text: "Momentos diseñados para sostener intensidad.",
  },
];

const GAMES_AND_CHALLENGES = [
  {
    title: "Retos exprés en pista",
    text: "Ruptura de hielo y activación rápida.",
  },
  {
    title: "Dinámicas por equipos",
    text: "Participación grupal y competición sana.",
  },
  {
    title: "Momentos call & response",
    text: "Interacción colectiva para elevar energía.",
  },
  {
    title: "Sorpresas programadas",
    text: "Intervenciones que generan viralidad.",
  },
  {
    title: "Seguridad y personalización",
    text: "Todo se pacta y ajusta a normas, flujo de puerta y perfil del local.",
  },
];

const CONTENT_BLOCK = [
  {
    title: "Reels/clips verticales",
    text: "Piezas rápidas para viralizar (según alcance y objetivos).",
  },
  {
    title: "Aftermovie profesional",
    text: "Resumen audiovisual con narrativa del evento (según alcance).",
  },
  {
    title: "Pack de fotos sociales",
    text: "Imágenes editadas para RRSS y comunicación del local (según alcance).",
  },
  {
    title: "Contenido en tiempo real",
    text: "Clips/stories durante la noche para amplificar mientras ocurre (según operativa).",
  },
  {
    title: "Entrega lista para publicar",
    text: "Sin fricción: te lo damos preparado para que impacte.",
  },
];

const TECH_REQUIREMENTS = [
  {
    title: "Cabina y sonido",
    text: "Setup estándar + micro + monitores (según sala).",
  },
  {
    title: "Espacios funcionales",
    text: "Zona para dinámicas, photocall y puntos de grabación.",
  },
  {
    title: "Operativa y logística",
    text: "Horarios, accesos, pruebas y contacto operativo definidos.",
  },
  {
    title: "Adaptabilidad total",
    text: "Ajustamos necesidades técnicas a condiciones reales del local.",
  },
];

const PACKS = [
  {
    title: "Pack Base",
    subtitle: "Putivuelta esencial",
    bullets: [
      "Show + activación principal",
      "Contenido esencial para redes (según alcance)",
      "Producción adaptada al local",
    ],
    whoFor: "Ideal para primer test o fecha valle con foco en afluencia.",
    tag: "Base",
  },
  {
    title: "Pack Pro",
    subtitle: "Más show y contenido",
    bullets: [
      "Más espectáculo y juegos programados",
      "Mayor producción audiovisual",
      "Piezas extra para reforzar difusión",
    ],
    whoFor: "Ideal para noches con objetivo de imagen + tracción fuerte.",
    tag: "Pro",
  },
  {
    title: "Pack Full Experience",
    subtitle: "Todo incluido",
    bullets: [
      "Puesta en escena/identidad más completa (según sala)",
      "Contenido premium y cobertura más amplia",
      "Activación completa para maximizar impacto",
    ],
    whoFor:
      "Ideal para fechas clave, aperturas, aniversarios o “noche insignia”.",
    tag: "Full",
  },
];

const EXTRAS = [
  "Personalización por ciudad, aforo y perfil musical",
  "Opcionales de streaming según operativa",
  "Refuerzo de creatividades y contenido según objetivo",
  "Ajustes de timings y momentos Putivuelta por sala",
];

const TEAM = [
  {
    name: "Villalobos",
    role: "DJ",
    img: "/b2b/team/villalobos.png",
    acc: "villalobospjulio",
    ig: "https://www.instagram.com/villalobospjulio/",
    sig: "+8k",
    stk: "+20k",
  },
  {
    name: "Tomi Demaio",
    role: "DJ",
    img: "/b2b/team/tomi-demaio.png",
    acc: "tomidemaio",
    ig: "https://www.instagram.com/tomidemaio/",
    sig: "+10k",
    stk: "+100k",
  },
  {
    name: "Lalo Sánchez",
    role: "DJ",
    img: "/b2b/team/lalo-sanchez.jpg",
    acc: "lalosl7",
    ig: "https://www.instagram.com/lalosl7/",
    sig: "+5k",
    stk: "",
  },
  {
    name: "Gonmarin",
    role: "DJ",
    img: "/b2b/team/gonmarin.jpg",
    acc: "gonmariin",
    ig: "https://www.instagram.com/gonmariin/",
    sig: "+3k",
    stk: "",
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

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es La Put* Vuelta?",
    a: "Un formato 360º: show + activación + contenido (y streaming opcional). Diseñado para mantener la pista activa y crear picos estratégicos de energía y consumo.",
  },
  {
    q: "¿Qué gana la sala?",
    a: "Más horas útiles de club (menos ratos muertos), diferenciación real en programación, contenido listo para redes y posibilidad de repetir como fecha fija si encaja.",
  },
  {
    q: "¿Qué necesitáis para hacerme una propuesta?",
    a: "Ciudad, sala, aforo aproximado, horario habitual y 2 fechas candidatas. Si me dices el objetivo principal (afluencia/barra/imagen), afino el pack recomendado.",
  },
  {
    q: "¿Trabajáis con fijo, porcentaje o híbrido?",
    a: "Se define en la propuesta según plaza, fecha y objetivos. Lo importante: alinear incentivo y asegurar que la noche salga rentable para la sala.",
  },
  {
    q: "¿Qué requisitos técnicos tenéis?",
    a: "Cabina/sonido estándar con micro, espacios funcionales para activación y grabación, y coordinación logística (accesos, pruebas, timings). Detalle completo cuando cerremos fecha.",
  },
  {
    q: "¿Cuánto tardáis en activar una fecha?",
    a: "Ideal: 10–21 días. Si es urgente, lo condensamos con un plan enfocado a tracción y ejecución.",
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
    "Propuesta B2B — La Put* Vuelta",
  )}&body=${encodeURIComponent(PRIMARY_MESSAGE)}`;

  return (
    <main
      id="top"
      className="relative min-h-screen bg-[color:var(--background-dark,#0b0b10)] text-white pt-24 pb-16 md:pt-28 md:pb-24"
    >
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
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="La Put* Vuelta"
              width={160}
              height={40}
              priority
              className="h-8 w-auto"
            />
            <span className="hidden md:inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/80">
              {BRAND.accentLabel}
            </span>
          </a>

          {/* Desktop: focus + dropdown */}
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
              Propuesta
            </a>

            <div className="relative">
              <details className="group">
                <summary className="list-none cursor-pointer hover:text-[var(--primary)] transition flex items-center gap-2">
                  <span>Más</span>
                  <span className="text-white/50 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>

                <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                  {[
                    { label: "Concepto", href: "#concepto" },
                    { label: "Qué ofrecemos", href: "#ofrecemos" },
                    { label: "Proceso", href: "#proceso" },
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
              className="sm:inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
            >
              Solicitar propuesta
            </a>
            {/* <a
              href={whatsappPrimaryHref}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[color:rgba(255,77,94,0.82)] text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-[1.02] neon-border"
            >
              <Image
                src="/whatsapp.png"
                alt="La Put* Vuelta"
                width={160}
                height={40}
                priority
                className="h-8 w-auto invert"
              />
            </a> */}
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

              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95 secondaryFont">
                {BRAND.name}
              </h1>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                Formato llave en mano para salas
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                Una experiencia donde{" "}
                <span className="text-white/85 font-semibold">TODO PASA</span>:
                música, show, activaciones y contenido. Diseñada para mejorar{" "}
                <span className="text-white/85">afluencia</span> y{" "}
                <span className="text-white/85">consumo</span> manteniendo la{" "}
                <span className="text-white/85">pista siempre activa</span>.
              </p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Sello propio
                </p>
                <p className="mt-2 text-lg text-white/80 italic secondaryFont">
                  ¿Hace cuánto no sales a dar una vuelta?
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Quiero propuesta para mi sala
                </a>

                <a
                  href={whatsappPrimaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="La Put* Vuelta"
                    width={160}
                    height={40}
                    priority
                    className="h-8 w-auto invert"
                  />
                </a>

                {/* <a
                  href={BRAND.dossierUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/75 hover:bg-white/[0.04] transition"
                >
                  Ver dossier (PDF)
                </a> */}
              </div>

              {/* Value chips */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <ValueChip k="Show" v="~6 horas · 3 DJs + presentador/a" />
                <ValueChip k="Activación" v="Momentos Putivuelta programados" />
                <ValueChip k="RRSS" v="Contenido listo (según alcance)" />
              </div>

              {/* Trust + urgency */}
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <MiniInfo
                  title="Respuesta rápida"
                  text="Te devolvemos propuesta y encaje operativo en 24–72h laborables."
                />
                <MiniInfo
                  title="Cero fricción"
                  text="Nos encargamos de estructura, momentos y coordinación. Tú pones el espacio."
                />
              </div>
            </div>
          </div>

          {/* SIDE CARD */}
          <aside className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Resumen B2B
                </p>
                <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-white/90 secondaryFont">
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
              <StatRow label="Foco" value="Pista activa + picos de consumo" />
              <StatRow
                label="Streaming"
                value={`Opcional (${BRAND.streamingPlatform})`}
              />
              <StatRow
                label="Entrega"
                value="Contenido listo + cierre operativo"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                Para proponerte un plan
              </p>
              <p className="mt-2 text-sm text-white/70">
                Envíanos ciudad, sala, aforo y 2 fechas. Te devolvemos un
                alcance recomendado (pack + operativa) y presupuesto a medida.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href={whatsappPrimaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="La Put* Vuelta"
                    width={160}
                    height={40}
                    priority
                    className="h-8 w-auto"
                  />
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
              {/* <a
                href={BRAND.dossierUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] hover:border-white/20 transition"
              >
                <p className="text-sm font-semibold text-white/90">
                  Dossier PDF
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Abrir en una pestaña
                </p>
              </a> */}

              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Checklist express
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {[
                    "Ciudad y sala",
                    "Aforo aproximado",
                    "Horario habitual",
                    "2 fechas candidatas",
                    "Objetivo (afluencia / barra / imagen)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
            Qué es
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
            El concepto
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-3xl">
            <span className="text-white/85 font-semibold">{BRAND.name}</span> es
            una fiesta donde{" "}
            <span className="text-white/85 font-semibold">TODO PASA</span>:
            música, show, activaciones y contenido grabado. Cada fecha se adapta
            a la sala, pero el objetivo es constante: pista viva, momentos
            memorables y una noche que se comenta.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <MiniInfo
              title="Identidad reconocible"
              text="Sello propio y narrativa de noche."
            />
            <MiniInfo
              title="Interacción real"
              text="DJs + presentador/a + dinámicas."
            />
            <MiniInfo
              title="Momentos sorpresa"
              text="Diseñados para subir energía y consumo."
            />
            <MiniInfo title="Viralidad" text="El club se ve grande en redes." />
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
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Propuesta de valor
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
              Esto es lo que cambia en tu sala
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              No prometemos humo. Diseñamos la noche para que la pista no se
              apague y el consumo tenga momentos claros.
            </p>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
          >
            Quiero propuesta
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
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                Producción
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
                ¿Qué incluye la experiencia?
              </h2>
              <p className="mt-3 text-sm text-white/65 max-w-2xl">
                Lo importante: no te “metemos” cosas por meter. Diseñamos
                alcance según objetivo y operativa real del local.
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                Operativa
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
                Cómo trabajamos (sin complicarte)
              </h2>
              <p className="mt-3 text-sm text-white/65 max-w-2xl">
                Flujo simple, replicable y pensado para dirección: claridad
                antes, control durante y cierre con datos.
              </p>
            </div>

            <a
              href="#contacto"
              className="mt-4 inline-flex w-fit rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition md:mt-0"
            >
              Enviar datos y fechas
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PROCESS.map((s) => (
              <Step key={s.n} n={s.n} title={s.title} text={s.text} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Resultado esperado
            </p>
            <p className="mt-2 text-sm text-white/70">
              Una noche con narrativa, momentos y ejecución que se notan: pista
              con ambiente, picos claros y contenido útil para repetir.
            </p>
          </div>
        </div>
      </section>

      <Timeline />

      {/* NOCHE */}
      <section
        id="noche"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl border border-white/10 p-7 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Estructura
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight text-white/90 secondaryFont">
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
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Activación
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight text-white/90 secondaryFont">
              Juegos y retos con el público
            </h2>
            <p className="mt-3 text-sm text-white/65">
              Activaciones que suben energía y crean contenido, siempre pactadas
              y adaptadas a la sala.
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
                Las dinámicas se cierran con antelación y se ajustan a
                seguridad, flujo de puerta y perfil del local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section
        id="contenido"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
            Contenido
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
            Contenido viral para tus redes
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Lo que se graba esa noche no se pierde: se convierte en piezas para
            amplificar antes/durante/después.
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
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Requerimientos técnicos orientativos
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

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
              <p className="text-sm font-semibold text-white/85">Importante</p>
              <p className="mt-2 text-sm text-white/70">
                El detalle completo se confirma al cerrar fecha, para adaptarlo
                a tu sala (sin exigir de más ni quedarnos cortos).
              </p>
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
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Packs
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
              Alcance por pack + personalización
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Los packs son niveles de alcance. El presupuesto es a medida según
              ciudad, aforo, fecha y objetivo.
            </p>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[color:rgba(255,77,94,0.82)] transition neon-border"
          >
            Pedir propuesta
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

                <h3 className="mt-2 text-base font-black uppercase tracking-[0.06em] text-white/90 secondaryFont">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/65">{p.subtitle}</p>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-sm font-semibold text-white/85">
                    ¿Para quién?
                  </p>
                  <p className="mt-1 text-sm text-white/70">{p.whoFor}</p>
                </div>

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
                    Presupuesto a medida
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Se define tras revisar sala, fecha, operativa y objetivos.
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
                    <Image
                      src="/whatsapp.png"
                      alt="La Put* Vuelta"
                      width={160}
                      height={40}
                      priority
                      className="h-6 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 glass rounded-3xl border border-white/10 p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
            Extras y ajustes
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

      {/* EQUIPO */}
      <section
        id="equipo"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
            Quién trabaja
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
            Equipo artístico
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Line-up con DJs de referencia. Se concreta por plaza y fecha al
            cerrar propuesta.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t) => (
              <a
                key={t.name}
                href={t.ig}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-black/20 p-6 hover:border-white/20 hover:bg-white/[0.03] transition block"
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

                  {/* Stats badge (top-right) */}
                  {(t.sig || t.stk) && (
                    <div className="absolute right-3 bottom-3">
                      <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-xl px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                        <div className="mt-1 flex items-center gap-3">
                          {t.sig ? (
                            <div className="flex items-center gap-1.5">
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                                <Image
                                  src="/instagram.png"
                                  alt="Instagram"
                                  width={16}
                                  height={16}
                                  className="h-3.5 w-3.5 invert opacity-90"
                                />
                              </span>

                              <span className="text-[11px] font-semibold text-white/90 tabular-nums">
                                {t.sig}
                              </span>
                            </div>
                          ) : null}

                          {t.stk ? (
                            <div className="flex items-center gap-1.5">
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                                <Image
                                  src="/tk.png"
                                  alt="TikTok"
                                  width={16}
                                  height={16}
                                  className="h-3.5 w-3.5 opacity-90"
                                />
                              </span>

                              <span className="text-[11px] font-semibold text-white/90 tabular-nums">
                                {t.stk}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="mt-4 text-sm font-semibold text-white/90">
                  {t.name} <span className="text-white/60">· </span>
                  <span className="text-[var(--primary)]">@{t.acc}</span>
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                  {t.role} · Abrir →
                </p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
            Con presencia en escenarios como:
          </p>
          <p className="mt-2 text-sm text-white/65">
            <strong>Starlite Fest</strong> (Marbella), <strong>Pelicano</strong>{" "}
            (A Coruña), <strong>Fitz</strong> (Madrid),{" "}
            <strong>Marchica</strong> (Formigal), <strong>Condado</strong>{" "}
            (Denia), <strong>Teatro Barceló</strong> (Madrid), Playa Canalla,
            Phiphi y Blu Puerto Sherry (Pto Sta Mª),{" "}
            <strong>Santos Club</strong> (Castellón),{" "}
            <strong>Bahia Sound</strong> (Cádiz), <strong>Santalia</strong>{" "}
            (Badajoz), <strong>Cocoa</strong> (Barcelona),{" "}
            <strong>Granada 10</strong> (Granada), <strong>Lust in Rio</strong>{" "}
            (Lisboa), <strong>WSNF</strong> (Andorra), <strong>Mute</strong>{" "}
            (Mar de Plata, ARG), <strong>Rocbar</strong> (Chicago, US),{" "}
            <strong>Mün</strong> (Cancún, MX)
          </p>
        </div>
      </section>

      {/* FILMMAKERS */}
      <section
        id="filmmakers"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
            Equipo audiovisual
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 secondaryFont">
            Filmmakers (contenido que se nota)
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Cobertura orientada a piezas útiles para RRSS y para elevar imagen
            de la sala.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FILMMAKERS.map((f) => (
              <a
                key={f.name}
                href={f.ig}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-black/20 p-7 hover:border-white/20 hover:bg-white/[0.03] transition block"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-black uppercase tracking-[0.06em] text-white/90">
                      {f.name} <span className="text-white/60">· </span>
                      <span className="text-[var(--primary)]">@{f.acc}</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {f.text}
                    </p>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                      Abrir →
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Bloque 1 */}
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                Experiencia en proyectos con artistas como:
              </p>
              <p className="mt-2 text-sm text-white/65">
                Anuel AA, Mora, Eladio Carrión, Omar Courtz…
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
                Además de festivales como:
              </p>
              <p className="mt-2 text-sm text-white/65">
                Arenal Sound, Bienvenida Fest, Daddytheparty, etc…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section id="faq" className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
              FAQ para dirección
            </h2>
            <p className="mt-3 text-sm text-white/65 max-w-2xl">
              Respuestas directas, sin letra pequeña aquí. El detalle va en la
              propuesta específica.
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
      </section> */}

      {/* CONTACTO */}
      <section
        id="contacto"
        className="mx-auto max-w-[1200px] px-6 mt-10 md:mt-14"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ContactForm />

          <div className="glass rounded-3xl border border-white/10 p-7 md:p-8 showing">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              Contacto y propuesta
            </p>
            <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white/90 secondaryFont">
              Si te encaja, cerremos fecha
            </h3>
            <p className="mt-3 text-sm text-white/65">
              Envíanos ciudad, sala, aforo y 2 fechas. Te devolvemos un plan
              recomendado y presupuesto a medida.
            </p>

            <div className="mt-6 grid gap-3">
              <div
                className={
                  CONTACTS.length > 1
                    ? "grid gap-3 sm:grid-cols-2"
                    : "grid gap-3"
                }
              >
                <ActionCard
                  title={`WhatsApp (${primaryContact.name})`}
                  text=" "
                  href={whatsappPrimaryHref}
                  primary
                />

                {CONTACTS.length > 1 ? (
                  <ActionCard
                    title={`WhatsApp (${CONTACTS[1].name})`}
                    text=""
                    href={whatsappSecondaryHref}
                    primary
                  />
                ) : null}
              </div>
              <ActionCard title="Email" text={BRAND.email} href={mailHref} />
              <div className="grid gap-3 sm:grid-cols-2">
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
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
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

            {/* <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                Tiempo de respuesta
              </p>
              <p className="text-sm font-semibold text-white/85">
                24–72h laborables
              </p>
            </div> */}

            {/* <div className="mt-5 text-xs text-[var(--primary)]">
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
            </div> */}
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-[var(--offwhite)] text-center">
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
          <Image
            src="/whatsapp.png"
            alt="La Put* Vuelta"
            width={160}
            height={40}
            priority
            className="h-8 w-auto invert"
          />
        </a>
      </div>
    </main>
  );
}

function ValueChip({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
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
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
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
          ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
          : "bg-black/20 text-white hover:bg-white/[0.04] hover:border-white/20",
      ].join(" ")}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p
        className={
          primary ? "mt-1 text-sm text-white/70" : "mt-1 text-sm text-white/60"
        }
      >
        {text}
      </p>
      <p
        className={
          primary
            ? "mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70"
            : "mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]"
        }
      >
        Abrir →
      </p>
    </a>
  );
}
