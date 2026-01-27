import type { NextConfig } from "next";

/**
 * CSP pública (tu web)
 */
const cspPublic = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",

  // Scripts
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.botpress.cloud https://www.googletagmanager.com",

  // Conexiones (fetch/ws)
  "connect-src 'self' https://cdn.botpress.cloud wss://cdn.botpress.cloud https://www.google-analytics.com https://region1.google-analytics.com",

  // Imágenes / estilos / fuentes
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https:",
  "font-src 'self' data: https:",

  // Iframes embebidos
  "frame-src 'self' https://web.fourvenues.com https://www.fourvenues.com https://player.kick.com https://kick.com https://site.fourvenues.com",
].join("; ");

/**
 * CSP para Sanity Studio (/studio)
 * Nota: si tu Studio usa más dominios, se añaden (según consola).
 */
const cspStudio = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",

  // Sanity Studio puede necesitar eval en dev; en prod a veces también según plugins.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",

  // Sanity hace requests a APIs/CDN. Esto suele ser lo crítico.
  "connect-src 'self' https: wss: blob:",

  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https:",
  "font-src 'self' data: https:",

  // Workers a veces necesarios (Vite/Monaco/etc.)
  "worker-src 'self' blob:",

  // Permitir iframes si Studio los usa (previews, etc.)
  "frame-src 'self' https:",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn-icons-png.flaticon.com",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },

  async headers() {
    return [
      /**
       * ✅ Sanity Studio: CSP separada (o podrías directamente NO poner CSP aquí).
       */
      {
        source: "/studio/:path*",
        headers: [
          // Importante: no le metas políticas raras que bloqueen recursos
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          { key: "Content-Security-Policy", value: cspStudio },
        ],
      },

      /**
       * ✅ Resto del sitio: tu CSP normal
       */
      {
        source: "/((?!studio).*)",
        headers: [
          // Si no estás seguro de necesitar Permissions-Policy, mejor dejarlo simple o quitarlo.
          // Aquí lo dejo “apagado” para evitar bloqueos inesperados.
          { key: "Permissions-Policy", value: "payment=()" },

          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          { key: "Content-Security-Policy", value: cspPublic },
        ],
      },
    ];
  },
};

export default nextConfig;
