"use client";

import { useMemo } from "react";
import { FourvenuesPrivacyBridge } from "@/components/consent/FourvenuesPrivacyBridge";
import Script from "next/script";

type Props = {
  /** URL pública que guardas en Sanity (la que abre bien en pestaña) */
  publicUrl: string;
  title?: string;
  className?: string;
};

function toFourvenuesEmbedUrlFromPublicUrl(publicUrl: string) {
  try {
    const u = new URL(publicUrl.trim());

    // Idioma si viene en /es/..., si no por defecto "es"
    const parts = u.pathname.split("/").filter(Boolean);
    const hasLang = parts[0]?.length === 2;
    const lang = hasLang ? parts[0] : "es";
    const rest = hasLang ? parts.slice(1) : parts;

    // Si la URL ya apunta a /iframe/... (por lo que sea), la respetamos y solo normalizamos host/lang
    const restNormalized = rest[0] === "iframe" ? rest.slice(1) : rest;

    if (restNormalized.length < 2) return null;

    return `https://web.fourvenues.com/${lang}/iframe/${restNormalized.join("/")}`;
  } catch {
    return null;
  }
}

export function FourvenuesEmbedEvent({
  publicUrl,
  title = "Entradas (Fourvenues)",
  className = "",
}: Props) {
  const embedUrl = useMemo(
    () => toFourvenuesEmbedUrlFromPublicUrl(publicUrl),
    [publicUrl],
  );

  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden ${className}`}
    >
      <FourvenuesPrivacyBridge />
      <script src="https://web.fourvenues.com/assets/iframe/team-la-putvuelta1"></script>
      {embedUrl ? (
        <div className="bg-white">
          <iframe
            key={embedUrl}
            title={title}
            src={embedUrl}
            className="w-full"
            style={{
              height: "calc(100vh - 240px)",
              minHeight: 740,
              maxHeight: 980,
            }}
            loading="lazy"
            allow="payment; clipboard-write; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <div className="border-t border-white/10 px-5 py-4 text-xs text-white/55">
          No se pudo generar el embed desde esta URL.
        </div>
      )}
    </div>
  );
}
