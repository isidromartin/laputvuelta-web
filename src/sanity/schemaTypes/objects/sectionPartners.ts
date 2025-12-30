import { defineField, defineType } from "sanity";

export const sectionPartners = defineType({
  name: "sectionPartners",
  title: "Sección: Partners",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Título",
      type: "string",
      initialValue: "Partners",
    }),
    defineField({
      name: "partnerSlugs",
      title: "Partners del evento (slugs)",
      type: "array",
      of: [{ type: "string" }],
      description: "Ej: rives, redbull…",
    }),
    defineField({
      name: "includeGlobal",
      title: "Incluir partners globales",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
