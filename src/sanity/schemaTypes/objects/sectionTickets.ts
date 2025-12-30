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
      title: "Fourvenues URL",
      type: "url",
      validation: (r) => r.required(),
    }),
  ],
});
