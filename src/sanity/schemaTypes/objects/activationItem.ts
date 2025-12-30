import { defineField, defineType } from "sanity";

export const activationItem = defineType({
  name: "activationItem",
  title: "Activation Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "window",
      title: "Ventana aproximada",
      type: "string",
      description: "Ej: 02:00–02:30",
    }),
    defineField({ name: "location", title: "Ubicación", type: "string" }),
    defineField({ name: "description", title: "Descripción", type: "text" }),
    defineField({
      name: "secret",
      title: "Sorpresa (ocultar detalle)",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
