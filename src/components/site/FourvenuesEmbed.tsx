"use client";

import { useMemo } from "react";
import { FourvenuesPrivacyBridge } from "@/components/FourvenuesPrivacyBridge";
import { FourvenuesScriptEmbed } from "@/components/site/FourvenuesScriptEmbed";
import Script from "next/script";

type Props = {
  /**
   * Ejemplos:
   * - "team-la-putvuelta1/events"
   * - "/team-la-putvuelta1/events"
   * - "iframe/team-la-putvuelta1/events"  (lo normalizamos)
   */
  path: string;
  title?: string;
  minHeight?: number;
  className?: string;
};

function buildFourvenuesEmbedUrlFromPath(path: string) {
  const clean = path.trim().replace(/^\/+/, "");

  // Si te pasan algo tipo "es/iframe/..." o "iframe/...", lo normalizamos
  const normalized = clean
    .replace(/^([a-z]{2}\/)?iframe\//i, "") // quita "es/iframe/" o "iframe/"
    .replace(/^([a-z]{2}\/)?/i, ""); // no tocamos más, el lang lo ponemos nosotros

  // Idioma fijo por defecto (si quieres hacerlo dinámico, pásalo por prop)
  const lang = "es";

  return `https://web.fourvenues.com/${lang}/iframe/${normalized}`;
}

export function FourvenuesEmbed({
  path,
  title = "Compra de entradas (Fourvenues)",
  minHeight = 820,
  className = "",
}: Props) {
  const embedUrl = useMemo(() => buildFourvenuesEmbedUrlFromPath(path), [path]);

  return (
    <div className={`rounded-3xl overflow-hidden ${className}`}>
      <FourvenuesPrivacyBridge />

      <script src="www.fourvenues.com/assets/iframe/team-la-putvuelta1"></script>

      <iframe
        key={embedUrl}
        title={title}
        src={embedUrl}
        className="w-full"
        style={{ minHeight }}
        loading="lazy"
        allow="payment; clipboard-write; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
