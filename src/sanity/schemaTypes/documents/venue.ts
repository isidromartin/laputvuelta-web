import { defineField, defineType } from "sanity";

export const venue = defineType({
  name: "venue",
  title: "Salas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "city", title: "Ciudad", type: "string" }),
    defineField({ name: "address", title: "Dirección", type: "string" }),
    defineField({ name: "mapsUrl", title: "Google Maps URL", type: "url" }),
  ],
});
