"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export function HeroCarousel({
  slides,
  intervalMs = 6500,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const count = safeSlides.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  if (!count) return null;

  const active = safeSlides[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
      {/* Imagen */}
      <div className="relative h-[72vh] min-h-[520px] w-full">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Capa de contraste (más premium) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,94,0.18),transparent_45%),radial-gradient(circle_at_80%_45%,rgba(255,77,94,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

        {/* Film grain (si ya usas .grain global, quita este bloque) */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay [background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmRPFw2X6QKIsRRJuN-Rg_LFTRsSIQOizISLea9wuZ0TQUNVDUOdeuyEE9q2AhYQshTvr-Q5EXLyLjmhEbEQTluTUEgA4Lqj1na0OZNbIHFGri3ZOLA3ceCf-rpNwG-T5DUoeLGccBGzEQGvWjmGUP3ky1ULuyCcg0BjHgOdj30xPgX920Cp5_MixiyPj0FPRZcaXlUoikpIY9c3Q-HL1tcbOW2fDniFG5VlZImckaNLS0GQdsuYc1O23axRRvEO_A6lU630jZxEU')]" />

        {/* Glow */}
        <div className="pointer-events-none absolute -left-28 -top-28 h-[520px] w-[520px] rounded-full bg-[var(--primary)]/18 blur-[180px]" />
        <div className="pointer-events-none absolute -right-28 top-10 h-[560px] w-[560px] rounded-full bg-[var(--primary)]/12 blur-[200px]" />

        {/* Watermark devil (opcional) */}
        {/* <div className="pointer-events-none absolute -right-6 -bottom-10 opacity-70 md:opacity-80">
          <div className="relative h-[160px] w-[160px] md:h-[240px] md:w-[240px]">
            <Image
              src="/devil-mark.png"
              alt="La Put* Vuelta"
              fill
              className="object-contain drop-shadow-[0_0_45px_rgba(255,77,94,0.18)]"
              priority
            />
          </div>
        </div> */}
      </div>

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
        <div className="max-w-3xl">
          {active.eyebrow ? (
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">
              {active.eyebrow}
            </p>
          ) : null}

          {active.title ? (
            <h2 className="mt-3 text-3xl md:text-6xl font-black uppercase tracking-tight text-white">
              <span className="drop-shadow-[0_0_18px_rgba(255,77,94,0.12)]">
                {active.title}
              </span>
            </h2>
          ) : null}

          {active.subtitle ? (
            <p className="mt-4 text-sm md:text-lg text-white/65 leading-relaxed max-w-2xl">
              {active.subtitle}
            </p>
          ) : null}
        </div>

        {/* Dots (neon) */}
        {count > 1 ? (
          <div className="mt-6 flex items-center gap-2">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={[
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-10 bg-[var(--primary)] shadow-[0_0_16px_rgba(255,77,94,0.35)]"
                    : "w-2 bg-white/25 hover:bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Controles */}
      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-white/12 bg-black/35 p-2 backdrop-blur hover:bg-black/55 hover:border-[var(--primary)]/35 transition"
            aria-label="Anterior"
          >
            <span className="relative block h-6 w-6">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt=""
                fill
                className="object-contain invert brightness-0 scale-x-[-1]"
                sizes="24px"
                priority
              />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl border border-white/12 bg-black/35 p-2 backdrop-blur hover:bg-black/55 hover:border-[var(--primary)]/35 transition"
            aria-label="Siguiente"
          >
            <span className="relative block h-6 w-6">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt=""
                fill
                className="object-contain invert brightness-0"
                sizes="24px"
                priority
              />
            </span>
          </button>
        </>
      ) : null}

      {/* Borde interior sutil */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
    </div>
  );
}
