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
        ],
      },
    ];
  },
};

export default nextConfig;
