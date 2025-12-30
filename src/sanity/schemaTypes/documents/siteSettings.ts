import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "kickUrl",
      title: "Kick URL",
      type: "url",
      initialValue: "https://kick.com/laputivuelta-oficial",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      initialValue: "https://instagram.com/laputvuelta.oficial",
    }),
    defineField({
      name: "fourvenuesTeamUrl",
      title: "Fourvenues Team URL",
      type: "url",
      initialValue: "https://web.fourvenues.com/es/team-la-putvuelta1/",
    }),
    defineField({
      name: "globalPartnerSlugs",
      title: "Partners globales (slugs)",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Ej: redbull, rives… Se combinan con los partners del evento.",
    }),
  ],
});
