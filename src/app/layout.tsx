import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://laputvuelta.com";

export const viewport: Viewport = {
  themeColor: "#c0182a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Put* Vuelta",
    template: "%s | La Put* Vuelta",
  },
  description: "¿Hace cuánto no sales a dar una vuelta?",
  applicationName: "La Put* Vuelta",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "La Put* Vuelta",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "La Put* Vuelta",
    title: "La Put* Vuelta",
    description: "¿Hace cuánto no sales a dar una vuelta?",
    locale: "es_ES",
    images: [
      {
        url: "/hero/slide-3.png",
        width: 1200,
        height: 630,
        alt: "La Put* Vuelta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Put* Vuelta",
    description: "¿Hace cuánto no sales a dar una vuelta?",
    images: ["/hero/slide-3.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} dark`}>
      <head>
        {/* Material Symbols Outlined */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
