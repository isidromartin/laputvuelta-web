import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "La Put* Vuelta",
    short_name: "La Put* Vuelta",
    description: "¿Hace cuánto no sales a dar una vuelta?",
    id: "/",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    background_color: "#0b0b0d",
    theme_color: "#c0182a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // Opcional (recomendado): iconos maskable reales
      // {
      //   src: "/icon-192-maskable.png",
      //   sizes: "192x192",
      //   type: "image/png",
      //   purpose: "maskable",
      // },
      // {
      //   src: "/icon-512-maskable.png",
      //   sizes: "512x512",
      //   type: "image/png",
      //   purpose: "maskable",
      // },
    ],
  };
}
