import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Put* Vuelta",
  description: "La Put* Vuelta — eventos, activaciones y directo.",
  metadataBase: new URL("https://laputvuelta.com"),
  openGraph: {
    title: "La Put* Vuelta",
    description: "La Put* Vuelta — eventos, activaciones y directo.",
    url: "https://laputvuelta.com",
    siteName: "La Put* Vuelta",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
