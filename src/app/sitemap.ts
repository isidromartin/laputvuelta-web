import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://laputvuelta.com";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/events`, lastModified: new Date() },
    { url: `${base}/venues`, lastModified: new Date() },
    { url: `${base}/tickets`, lastModified: new Date() },
    { url: `${base}/gallery`, lastModified: new Date() },
    { url: `${base}/live`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
