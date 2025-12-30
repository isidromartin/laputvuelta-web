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
      name: "partners",
      title: "Partners",
      type: "array",
      of: [{ type: "reference", to: [{ type: "partner" }] }],
    }),

    defineField({
      name: "includeGlobal",
      title: "Incluir partners globales",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
