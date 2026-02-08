"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  public_id: string;
  thumb: string;
  full: string;
  blur: string;
  download: string;
  width: number;
  height: number;
  created_at?: string;
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return (i + len) % len;
}

export function GalleryGrid({
  title,
  images,
}: {
  title: string;
  images: GalleryImage[];
}) {
  const [active, setActive] = useState<number | null>(null);

  const current = useMemo(() => {
    if (active === null) return null;
    return images[active] ?? null;
  }, [active, images]);

  const hasModal = active !== null && current;

  function close() {
    setActive(null);
  }

  function next() {
    if (active === null) return;
    setActive((i) => clampIndex((i ?? 0) + 1, images.length));
  }

  function prev() {
    if (active === null) return;
    setActive((i) => clampIndex((i ?? 0) - 1, images.length));
  }

  async function copyLink(url: string) {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // no-op
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, idx) => (
          <button
            key={img.public_id}
            type="button"
            onClick={() => setActive(idx)}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/25 transition text-left"
            title="Ver en grande"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={img.thumb}
                alt={title}
                fill
                placeholder="blur"
                blurDataURL={img.blur}
                className="object-cover group-hover:scale-[1.02] transition"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          </button>
        ))}
      </div>

      {hasModal ? (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-x-0 top-6 mx-auto w-[min(1100px,92vw)] mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-3xl border border-white/10 bg-black/70 overflow-hidden shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white/90 truncate">
                    {title}
                  </p>
                  <p className="text-xs text-white/55">
                    {active! + 1} / {images.length}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={current.download}
                    download
                    className="rounded-xl bg-[var(--primary)] px-3 py-2 text-xs font-semibold text-black hover:opacity-90 transition"
                  >
                    Descargar
                  </a>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/85 hover:bg-white/[0.06] hover:border-white/25 transition"
                  >
                    Cerrar
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative bg-black">
                {/* Contenedor con altura fija por viewport */}
                <div className="relative mx-auto w-full h-[78vh]">
                  <Image
                    src={current.full}
                    alt={title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 92vw, 1100px"
                    priority
                  />
                </div>

                {/* Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    type="button"
                    onClick={prev}
                    className="m-3 rounded-2xl border border-white/15 bg-black/40 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-black/55 hover:border-white/25 transition"
                  >
                    ←
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    onClick={next}
                    className="m-3 rounded-2xl border border-white/15 bg-black/40 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-black/55 hover:border-white/25 transition"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
