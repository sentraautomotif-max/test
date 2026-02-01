import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const articleSlugs = [
  "kapan-harus-ganti-kaca-depan-mobil",
  "perbedaan-kaca-oem-dan-aftermarket",
  "keamanan-pemasangan-kaca-mobil",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = articleSlugs.map((slug) => ({
    url: `${SITE.url}/artikel/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/lokasi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/artikel`, changeFrequency: "weekly", priority: 0.8 },
    ...articleUrls,
  ];
}
