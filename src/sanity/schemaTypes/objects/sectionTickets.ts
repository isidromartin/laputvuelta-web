import { defineField, defineType } from "sanity";

export const sectionTickets = defineType({
  name: "sectionTickets",
  title: "Sección: Tickets",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Título",
      type: "string",
      initialValue: "Entradas",
    }),
    defineField({
      name: "fourvenuesUrl",
      title: "Fourvenues URL (evento)",
      type: "url",
      description:
        "Pega la URL pública del evento. Ej: https://web.fourvenues.com/es/team-.../events/...",
      validation: (r) => r.required(),
    }),
  ],
});
