import type { MetadataRoute } from "next";
import { projects } from "../../data/projects";
import { siteConfig } from "../../data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];

  return [
    { url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.filter((project) => project.caseStudy).map((project) => ({
      url: `${siteConfig.siteUrl}/projects/${project.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
