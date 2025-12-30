"use client";

import { useMemo, useState } from "react";

type Props = {
  publicUrl: string; // la URL que guardas en Sanity
  title?: string;
};

function toFourvenuesEmbedUrl(publicUrl: string) {
  try {
    const u = new URL(publicUrl);

    // Ej público:
    // /es/team-la-putvuelta1/events/<slug>
    const parts = u.pathname.split("/").filter(Boolean);

    // quita idioma si existe (es/en/...)
    const withoutLang = parts[0]?.length === 2 ? parts.slice(1) : parts;

    if (withoutLang.length < 2) return null;

    return `https://www.fourvenues.com/iframe/${withoutLang.join("/")}`;
  } catch {
    return null;
  }
}

export function FourvenuesEmbedEvent({
  publicUrl,
  title = "Entradas (Fourvenues)",
}: Props) {
  const [showEmbed, setShowEmbed] = useState(true);

  const embedUrl = useMemo(() => toFourvenuesEmbedUrl(publicUrl), [publicUrl]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
      {embedUrl && showEmbed ? (
        <div className=" bg-white">
          <iframe
            title={title}
            src={embedUrl}
            className="w-full"
            // Altura responsiva (sin campo editable):
            // - usa el viewport
            // - con límites razonables para que no sea ni enano ni enorme
            style={{
              height: "calc(100vh - 240px)",
              minHeight: 740,
              maxHeight: 980,
            }}
            loading="lazy"
            allow="payment *; fullscreen"
            allowFullScreen
          />
        </div>
      ) : null}

      {!embedUrl ? (
        <div className="border-t border-white/10 px-5 py-4 text-xs text-white/55">
          No se pudo generar el embed desde esta URL. Usa “Abrir en Fourvenues”.
        </div>
      ) : null}
    </div>
  );
}
