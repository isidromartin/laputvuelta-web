"use client";

import { useMemo, useState } from "react";
import { FourvenuesPrivacyBridge } from "@/components/FourvenuesPrivacyBridge";

type Props = {
  publicUrl: string; // la URL que guardas en Sanity
  title?: string;
};

function toFourvenuesEmbedUrl(publicUrl: string) {
  try {
    const u = new URL(publicUrl);
    const parts = u.pathname.split("/").filter(Boolean);

    const hasLang = parts[0]?.length === 2;
    const lang = hasLang ? parts[0] : "es";
    const rest = hasLang ? parts.slice(1) : parts;

    if (rest.length < 2) return null;

    return `https://web.fourvenues.com/${lang}/iframe/${rest.join("/")}`;
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
      <FourvenuesPrivacyBridge />
      {embedUrl && showEmbed ? (
        <div className=" bg-white">
          <iframe
            title={title}
            src={embedUrl}
            className="w-full"
            style={{
              height: "calc(100vh - 240px)",
              minHeight: 740,
              maxHeight: 980,
            }}
            loading="lazy"
            allowFullScreen
            allow="payment; clipboard-write; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
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
