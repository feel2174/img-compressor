import type { MetadataRoute } from "next";
import { infoPageSlugs } from "@/content/site";
import { locales } from "@/i18n";
import { getSiteUrl } from "@/lib/site-url";

const baseUrl = getSiteUrl();

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  ...infoPageSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: slug === "privacy" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "ko-KR": `${baseUrl}/ko${route.path}`,
          "en-US": `${baseUrl}/en${route.path}`,
          "x-default": `${baseUrl}/ko${route.path}`,
        },
      },
    }))
  );
}
