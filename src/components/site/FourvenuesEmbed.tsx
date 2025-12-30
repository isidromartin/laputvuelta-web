"use client";

import { useMemo, useState } from "react";

type Props = {
  /** Ej: "team-la-putvuelta1/events" */
  path: string;
  /** URL pública alternativa (si el iframe falla) */
  publicUrl: string;
  title?: string;
  minHeight?: number;
};

function buildFourvenuesEmbedUrl(path: string) {
  const clean = path.replace(/^\/+/, "");
  return `https://www.fourvenues.com/iframe/${clean}`;
}

export function FourvenuesEmbed({
  path,
  publicUrl,
  title = "Compra de entradas (Fourvenues)",
  minHeight = 820,
}: Props) {
  const [showEmbed, setShowEmbed] = useState(true);

  const embedUrl = useMemo(() => buildFourvenuesEmbedUrl(path), [path]);

  return (
    <div className="rounded-3xl overflow-hidden">
      {/* <div className="p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white/90">Entradas</p>
          <p className="text-sm text-white/65">
            Compra directamente desde nuestra web. Si tu navegador bloquea el
            iframe, abre Fourvenues en una pestaña.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={publicUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold
                       bg-white text-black hover:bg-white/90 transition"
          >
            Abrir en Fourvenues
          </a>

          <button
            type="button"
            onClick={() => setShowEmbed((v) => !v)}
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold
                       border border-white/15 text-white/90 hover:border-white/30 hover:bg-white/[0.04] transition"
          >
            {showEmbed ? "Ocultar compra" : "Mostrar compra aquí"}
          </button>
        </div>
      </div> */}

      {showEmbed ? (
        // <div className="border-t border-white/10">
        <iframe
          title={title}
          src={embedUrl}
          className="w-full"
          style={{ minHeight }}
          loading="lazy"
          // Importante para flujos de pago en algunos navegadores
          allow="payment *; fullscreen"
        />
      ) : // </div>
      null}
    </div>
  );
}
