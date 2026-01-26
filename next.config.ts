import type { NextConfig } from "next";

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
              'payment=(self "https://web.fourvenues.com" "https://www.fourvenues.com")',
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.botpress.cloud",
              "connect-src 'self' https://cdn.botpress.cloud wss://cdn.botpress.cloud",
              "img-src 'self' data: blob: https:",
              "style-src 'self' 'unsafe-inline' https:",
              "font-src 'self' data: https:",
              "frame-src 'self' https://web.fourvenues.com https://www.fourvenues.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
