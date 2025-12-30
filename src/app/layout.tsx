import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Put* Vuelta",
  description: "Eventos, activaciones y directo.",
  metadataBase: new URL("https://laputvuelta.com"),
  openGraph: {
    title: "La Put* Vuelta",
    description: "Eventos, activaciones y directo.",
    url: "https://laputvuelta.com",
    siteName: "La Put* Vuelta",
    locale: "es_ES",
    type: "website",
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
