import { defineField, defineType } from "sanity";

export const sectionActivations = defineType({
  name: "sectionActivations",
  title: "Sección: Activaciones",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Título",
      type: "string",
      initialValue: "Activaciones",
    }),
    defineField({
      name: "items",
      title: "Activaciones",
      type: "array",
      of: [{ type: "activationItem" }],
    }),
  ],
});
