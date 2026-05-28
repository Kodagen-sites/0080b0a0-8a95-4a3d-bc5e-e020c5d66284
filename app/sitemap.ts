import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/services`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/about`, lastModified: now, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/contact`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/privacy`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/terms`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
  ];
}
