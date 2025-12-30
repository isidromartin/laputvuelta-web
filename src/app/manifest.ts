import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "La Put* Vuelta",
    short_name: "La Put* Vuelta",
    description:
      "Live en Kick, activaciones durante la noche y eventos en distintas salas.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0d",
    theme_color: "#c0182a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
