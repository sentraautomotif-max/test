import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { articles } from "@/data/articles";
import { SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = articles.map((article) => ({
    url: `${SITE.url}/artikel/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceUrls = SERVICES.map((service) => ({
    url: `${SITE.url}/layanan/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/lokasi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/artikel`, changeFrequency: "weekly", priority: 0.8 },
    ...serviceUrls,
    ...articleUrls,
  ];
}
