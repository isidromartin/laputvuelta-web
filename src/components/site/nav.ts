export const nav = [
  { href: "/events", label: "Eventos" },
  { href: "/venues", label: "Salas" },
  { href: "/tickets", label: "Calendario" },
  { href: "/gallery", label: "Galería" },
  { href: "/live", label: "Live" },
  { href: "/contact", label: "Contacto" },
] as const;

export type NavItem = (typeof nav)[number];
