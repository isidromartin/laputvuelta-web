import { defineField, defineType } from "sanity";

export const sectionLive = defineType({
  name: "sectionLive",
  title: "Sección: Live (Kick)",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Título",
      type: "string",
      initialValue: "Live",
    }),
    defineField({
      name: "kickUrlOverride",
      title: "Kick URL (opcional)",
      type: "url",
    }),
    defineField({
      name: "autoplay",
      title: "Autoplay",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "muted",
      title: "Mute",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
