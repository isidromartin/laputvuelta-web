import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // De momento estático. Luego añadimos eventos/venues desde CMS.
  return [
    { url: "https://laputvuelta.com", lastModified: new Date() },
    { url: "https://laputvuelta.com/events", lastModified: new Date() },
    { url: "https://laputvuelta.com/venues", lastModified: new Date() },
    { url: "https://laputvuelta.com/gallery", lastModified: new Date() },
    { url: "https://laputvuelta.com/live", lastModified: new Date() },
  ];
}
