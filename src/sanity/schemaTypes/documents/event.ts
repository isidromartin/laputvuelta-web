import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Eventos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "startAt",
      title: "Inicio",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({ name: "endAt", title: "Fin (opcional)", type: "datetime" }),
    defineField({
      name: "venue",
      title: "Sala",
      type: "reference",
      to: [{ type: "venue" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cartel / Cover",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sections",
      title: "Secciones (ordenables, opcionales)",
      type: "array",
      of: [
        { type: "sectionTickets" },
        { type: "sectionLive" },
        { type: "sectionActivations" },
        { type: "sectionPartners" },
      ],
      description:
        "Si una sección no existe o no tiene datos, no se mostrará en la web.",
    }),
  ],
});
