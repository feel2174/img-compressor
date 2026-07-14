import type { MetadataRoute } from "next";
import { contentDates, infoPageSlugs, type InfoPageSlug } from "@/content/site";
import { locales } from "@/i18n";
import { getSiteUrl } from "@/lib/site-url";

const baseUrl = getSiteUrl();
const siteLastModified = new Date("2026-07-14T00:00:00.000Z");

const routes: {
  path: string;
  slug?: InfoPageSlug;
  priority: number;
  changeFrequency: "weekly" | "monthly";
}[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  ...infoPageSlugs.map((slug) => ({
    path: `/${slug}`,
    slug,
    priority: slug === "privacy" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  })),
];

function getRouteLastModified(slug?: InfoPageSlug) {
  if (!slug) return siteLastModified;

  return new Date(`${contentDates[slug].modifiedAt}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: getRouteLastModified(route.slug),
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
