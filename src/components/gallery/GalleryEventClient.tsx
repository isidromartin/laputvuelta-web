"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import {
  GalleryGrid,
  type GalleryImage,
} from "@/components/gallery/GalleryGrid";

type ApiResp = { items: GalleryImage[]; nextCursor?: string };

async function fetchPage(folder: string, cursor?: string, max = 60) {
  const qs = new URLSearchParams({ folder, max: String(max) });
  if (cursor) qs.set("cursor", cursor);

  const res = await fetch(`/api/gallery?${qs.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load gallery page");
  return (await res.json()) as ApiResp;
}

export function GalleryEventClient({
  title,
  folder,
  initialItems,
  initialNextCursor,
  pageSize = 60,
}: {
  title: string;
  folder: string;
  initialItems: GalleryImage[];
  initialNextCursor?: string;
  pageSize?: number;
}) {
  const [items, setItems] = useState<GalleryImage[]>(initialItems);
  const [nextCursor, setNextCursor] = useState<string | undefined>(
    initialNextCursor,
  );
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // dedupe por seguridad (evita repetidos si Cloudinary cambia el orden)
  const deduped = useMemo(() => {
    const map = new Map<string, GalleryImage>();
    for (const it of items) map.set(it.public_id, it);
    return Array.from(map.values());
  }, [items]);

  const loadMore = useCallback(() => {
    if (!nextCursor || isPending) return;

    setError(null);
    startTransition(async () => {
      try {
        const data = await fetchPage(folder, nextCursor, pageSize);
        setItems((prev) => [...prev, ...data.items]);
        setNextCursor(data.nextCursor);
      } catch (e) {
        setError("No se pudieron cargar más fotos. Intenta de nuevo.");
      }
    });
  }, [folder, isPending, nextCursor, pageSize]);

  useEffect(() => {
    if (!nextCursor) return;
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "400px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [loadMore, nextCursor]);

  return (
    <div className="space-y-6">
      <GalleryGrid title={title} images={deduped} />

      <div className="flex flex-col items-center gap-3">
        {error ? <p className="text-sm text-white/70">{error}</p> : null}

        {nextCursor ? (
          <>
            <div ref={sentinelRef} className="h-1 w-full" />
            <button
              type="button"
              onClick={loadMore}
              disabled={isPending}
              className="rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.07] hover:border-white/25 disabled:opacity-60 transition"
            >
              {isPending ? "Cargando..." : "Cargar más"}
            </button>
          </>
        ) : (
          <p className="text-xs text-white/45">
            No hay más fotos en este álbum.
          </p>
        )}
      </div>
    </div>
  );
}
