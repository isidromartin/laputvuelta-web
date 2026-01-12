import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/studio", "/b2b"] }],
    sitemap: "https://laputvuelta.com/sitemap.xml",
  };
}
