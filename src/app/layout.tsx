import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laputvuelta.com"),
  title: {
    default: "La Put* Vuelta",
    template: "%s | La Put* Vuelta",
  },
  description:
    "Live en Kick, activaciones durante la noche y eventos en distintas salas.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#c0182a",
  openGraph: {
    type: "website",
    url: "https://laputvuelta.com",
    siteName: "La Put* Vuelta",
    title: "La Put* Vuelta",
    description:
      "Live en Kick, activaciones durante la noche y eventos en distintas salas.",
    images: [
      {
        url: "/og.jpg", // crea este archivo si quieres OG pro
        width: 1200,
        height: 630,
        alt: "La Put* Vuelta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Put* Vuelta",
    description:
      "Live en Kick, activaciones durante la noche y eventos en distintas salas.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
