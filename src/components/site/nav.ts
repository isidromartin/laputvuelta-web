export const nav = [
  { href: "/events", label: "Eventos" },
  { href: "/venues", label: "Salas" },
  { href: "/tickets", label: "Entradas" },
  { href: "/contact", label: "Contacto" },
  { href: "/gallery", label: "Galería" },
  { href: "/live", label: "Live" },
] as const;

export type NavItem = (typeof nav)[number];
