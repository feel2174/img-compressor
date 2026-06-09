import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import InfoPageWindow from "@/components/InfoPageWindow";
import { defaultLocale, locales, type Locale } from "@/i18n";
import {
  infoPageSlugs,
  legalPages,
  siteMeta,
  type InfoPageSlug,
} from "@/content/site";

type Props = {
  params: Promise<{ locale: string; page: string }> | { locale: string; page: string };
};

const isLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);

const isInfoPageSlug = (page: string): page is InfoPageSlug =>
  infoPageSlugs.includes(page as InfoPageSlug);

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    infoPageSlugs.map((page) => ({
      locale,
      page,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await Promise.resolve(params);

  if (!isLocale(locale) || !isInfoPageSlug(page)) {
    return {};
  }

  setRequestLocale(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pixelzipkit.com";
  const currentUrl = `${baseUrl}/${locale}/${page}`;
  const currentPage = legalPages[locale][page];
  const alternatePage = legalPages[locale === "ko" ? "en" : "ko"][page];

  return {
    title: `${currentPage.title} | ${siteMeta[locale].name}`,
    description: currentPage.description,
    keywords: siteMeta[locale].keywords,
    alternates: {
      canonical: currentUrl,
      languages: {
        "ko-KR": `${baseUrl}/ko/${page}`,
        "en-US": `${baseUrl}/en/${page}`,
        "x-default": `${baseUrl}/${defaultLocale}/${page}`,
      },
    },
    openGraph: {
      title: `${currentPage.title} | ${siteMeta[locale].name}`,
      description: currentPage.description,
      url: currentUrl,
      siteName: siteMeta[locale].name,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${currentPage.title} | ${siteMeta[locale].name}`,
      description: currentPage.description || alternatePage.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function InfoPage({ params }: Props) {
  const { locale, page } = await Promise.resolve(params);

  if (!isLocale(locale) || !isInfoPageSlug(page)) {
    notFound();
  }

  setRequestLocale(locale);

  return <InfoPageWindow locale={locale} slug={page} />;
}
