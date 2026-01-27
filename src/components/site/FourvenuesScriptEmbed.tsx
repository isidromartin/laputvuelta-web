"use client";

import { useEffect, useMemo, useRef } from "react";
import { FourvenuesPrivacyBridge } from "@/components/consent/FourvenuesPrivacyBridge";

type Props = {
  /**
   * Ruta relativa a partir de /assets/iframe/
   * Ejemplos:
   * - "team-la-putvuelta1/events"
   * - "team-la-putvuelta1/calendar"
   * - "team-la-putvuelta1/events/<slug-evento>"
   * - "team-la-putvuelta1/events/<slug-evento>/tickets/<id>"
   */
  assetPath: string;
  className?: string;
};

function buildScriptSrc(assetPath: string) {
  const clean = assetPath.trim().replace(/^\/+/, "");
  return `https://www.fourvenues.com/assets/iframe/${clean}`;
}

export function FourvenuesScriptEmbed({ assetPath, className = "" }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const src = useMemo(() => buildScriptSrc(assetPath), [assetPath]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Limpieza (evita duplicados en navegación SPA / re-renders)
    mount.innerHTML = "";

    // Inserta el script dentro del contenedor: muchos embeds usan document.currentScript
    const s = document.createElement("script");
    s.src = src;
    s.async = true;

    mount.appendChild(s);

    return () => {
      // cleanup al desmontar
      mount.innerHTML = "";
    };
  }, [src]);

  return (
    <div className={className}>
      <FourvenuesPrivacyBridge />
      <div ref={mountRef} />
    </div>
  );
}
