import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/lokasi`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
