"use client";

import Image from "next/image";
import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function HeroCarousel({
  slides,
  intervalMs = 6500,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const safeSlides = useMemo(() => (slides ?? []).filter(Boolean), [slides]);
  const count = safeSlides.length;

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const reduceMotion = useReducedMotion();
  const mounted = useIsMounted();
  const timerRef = useRef<number | null>(null);

  const clampIndex = (i: number) => (!count ? 0 : (i + count) % count);
  const goTo = (i: number) => setIndex(clampIndex(i));
  const next = () => setIndex((i) => clampIndex(i + 1));
  const prev = () => setIndex((i) => clampIndex(i - 1));

  useEffect(() => {
    if (!mounted) return;
    const onVis = () => setIsVisible(document.visibilityState === "visible");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (count <= 1) return;
    if (reduceMotion) return;
    if (!isVisible) return;
    if (isHovering) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => clampIndex(i + 1));
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, count, intervalMs, isHovering, isVisible, reduceMotion]);

  useEffect(() => {
    if (!mounted) return;
    if (count <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, count]);

  if (!count) return null;
  const active = safeSlides[index];

  const swipeConfidenceThreshold = 9000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const Overlays = () => (
    <>
      {/* Contraste premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,77,94,0.22),transparent_42%),radial-gradient(circle_at_82%_44%,rgba(255,77,94,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_90%_at_50%_22%,transparent_18%,rgba(0,0,0,0.55)_68%,rgba(0,0,0,0.88)_100%)]" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay [background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmRPFw2X6QKIsRRJuN-Rg_LFTRsSIQOizISLea9wuZ0TQUNVDUOdeuyEE9q2AhYQshTvr-Q5EXLyLjmhEbEQTluTUEgA4Lqj1na0OZNbIHFGri3ZOLA3ceCf-rpNwG-T5DUoeLGccBGzEQGvWjmGUP3ky1ULuyCcg0BjHgOdj30xPgX920Cp5_MixiyPj0FPRZcaXlUoikpIY9c3Q-HL1tcbOW2fDniFG5VlZImckaNLS0GQdsuYc1O23axRRvEO_A6lU630jZxEU')]" />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[740px] w-[740px] rounded-full bg-[var(--primary)]/16 blur-[220px]" />
      <div className="pointer-events-none absolute -right-44 top-6 h-[820px] w-[820px] rounded-full bg-[var(--primary)]/12 blur-[250px]" />
    </>
  );

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      <div className="relative w-full h-[86svh] min-h-[560px] md:h-[92svh] md:min-h-[720px]">
        <div className="absolute inset-0 bg-black" />

        {!mounted ? (
          <div className="absolute inset-0">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <Overlays />
          </div>
        ) : (
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, filter: "blur(10px)", scale: 1.035 }
              }
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, filter: "blur(0px)", scale: 1.0 }
              }
              exit={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, filter: "blur(10px)", scale: 1.035 }
              }
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              drag={count > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (count <= 1) return;
                const swipe = swipePower(info.offset.x, info.velocity.x);
                if (swipe < -swipeConfidenceThreshold) next();
                else if (swipe > swipeConfidenceThreshold) prev();
              }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <Overlays />
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-10 md:px-12 md:pb-16">
            <div className="max-w-4xl">
              {active.eyebrow ? (
                <p className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.42em] text-white/70">
                  {active.eyebrow}
                </p>
              ) : null}

              {active.title ? (
                <h2
                  className="mt-4 secondaryFont font-black uppercase text-white leading-[0.92] tracking-[-0.02em]
                               text-[clamp(2.4rem,6.2vw,5.6rem)] md:text-[clamp(3.6rem,6.4vw,7.2rem)]"
                >
                  <span className="drop-shadow-[0_0_22px_rgba(255,77,94,0.16)]">
                    {active.title}
                  </span>
                </h2>
              ) : null}

              {active.subtitle ? (
                <p
                  className="mt-6 max-w-2xl text-white/72 leading-relaxed
                              text-[14px] md:text-[18px]"
                >
                  {active.subtitle}
                </p>
              ) : null}

              {count > 1 ? (
                <div className="mt-8 flex items-center gap-3">
                  {!reduceMotion && mounted ? (
                    <div className="hidden md:block h-[2px] w-[260px] overflow-hidden rounded-full bg-white/15">
                      <motion.div
                        key={`prog-${index}`}
                        className="h-full w-full bg-[var(--primary)]/95 shadow-[0_0_18px_rgba(255,77,94,0.35)]"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{
                          duration: intervalMs / 1000,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ) : null}

                  <div className="flex items-center gap-2.5">
                    {safeSlides.map((s, i) => {
                      const activeDot = i === index;
                      return (
                        <button
                          key={`${s.src}-${i}`}
                          type="button"
                          onClick={() => goTo(i)}
                          aria-label={`Ir a slide ${i + 1}`}
                          aria-current={activeDot ? "true" : "false"}
                          className={[
                            "relative rounded-full transition-all duration-300",
                            activeDot
                              ? "h-[10px] w-[44px] bg-[var(--primary)] shadow-[0_0_18px_rgba(255,77,94,0.42)]"
                              : "h-[10px] w-[10px] bg-white/25 hover:bg-white/45",
                          ].join(" ")}
                        >
                          <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity shadow-[0_0_26px_rgba(255,255,255,0.18)]" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:inline-flex
                         h-12 w-12 items-center justify-center rounded-2xl
                         border border-white/12 bg-black/35 backdrop-blur-md
                         hover:bg-black/55 hover:border-[var(--primary)]/35 transition
                         shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6 text-white/85" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:inline-flex
                         h-12 w-12 items-center justify-center rounded-2xl
                         border border-white/12 bg-black/35 backdrop-blur-md
                         hover:bg-black/55 hover:border-[var(--primary)]/35 transition
                         shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6 text-white/85" />
            </button>
          </>
        ) : null}

        {/* borde premium */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      </div>
    </section>
  );
}
