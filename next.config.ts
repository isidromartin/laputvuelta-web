import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.botpress.cloud https://www.googletagmanager.com",
  "connect-src 'self' https://cdn.botpress.cloud wss://cdn.botpress.cloud https://www.google-analytics.com https://region1.google-analytics.com",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https:",
  "font-src 'self' data: https:",

  // ⬇️ AÑADIDO Kick
  "frame-src 'self' https://web.fourvenues.com https://www.fourvenues.com https://player.kick.com https://kick.com https://site.fourvenues.com",
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
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              'payment=(self "https://web.fourvenues.com" "https://www.fourvenues.com" "https://connector-service.fourvenues.com")',
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },

          // CSP
          { key: "Content-Security-Policy", value: csp },

          // (Opcional) quita Permissions-Policy si no lo estás usando realmente.
          // Si quieres mantenerlo, mejor algo estándar:
          // { key: "Permissions-Policy", value: "payment=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
