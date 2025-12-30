import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partners",
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
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "website", title: "Web", type: "url" }),
    defineField({
      name: "tier",
      title: "Tier",
      type: "string",
      options: {
        list: [
          { title: "Global", value: "global" },
          { title: "Evento", value: "event" },
        ],
      },
      initialValue: "event",
    }),
  ],
});
