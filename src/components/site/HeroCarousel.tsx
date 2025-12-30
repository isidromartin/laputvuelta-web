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
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  if (!count) return null;

  const active = safeSlides[index];

  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black">
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

        {/* Capa de contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/15" />

        {/* Glow (color) */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full bg-red-500/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-12 h-[420px] w-[420px] rounded-full bg-pink-500/14 blur-3xl" />
      </div>

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
        <div className="max-w-2xl">
          {active.eyebrow ? (
            <p className="text-xs font-semibold tracking-wide text-white/70">
              {active.eyebrow}
            </p>
          ) : null}
          {active.title ? (
            <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-white">
              {active.title}
            </h2>
          ) : null}
          {active.subtitle ? (
            <p className="mt-3 text-sm md:text-base text-white/70">
              {active.subtitle}
            </p>
          ) : null}
        </div>

        {/* Dots */}
        {count > 1 ? (
          <div className="mt-6 flex items-center gap-2">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={[
                  "h-2 rounded-full transition",
                  i === index
                    ? "w-8 bg-white/85"
                    : "w-2 bg-white/30 hover:bg-white/45",
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
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-black/35 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-black/55 hover:border-white/25 transition"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-black/35 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-black/55 hover:border-white/25 transition"
            aria-label="Siguiente"
          >
            →
          </button>
        </>
      ) : null}
    </div>
  );
}
