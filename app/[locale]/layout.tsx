import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { defaultLocale, locales, type Locale } from "@/i18n";
import { siteMeta } from "@/content/site";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getSiteUrl } from "@/lib/site-url";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
};

const isLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const adsenseScriptEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
const analyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "devzucca@gmail.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  if (!isLocale(locale)) {
    return {};
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const seo = messages.seo as {
    title: string;
    description: string;
    keywords: string;
  };

  const baseUrl = getSiteUrl();
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteMeta[locale].name }],
    creator: siteMeta[locale].name,
    publisher: siteMeta[locale].name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        "ko-KR": `${baseUrl}/ko`,
        "en-US": `${baseUrl}/en`,
        "x-default": `${baseUrl}/${defaultLocale}`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: currentUrl,
      siteName: siteMeta[locale].name,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
      type: "website",
      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${baseUrl}/${locale}/twitter-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await Promise.resolve(params);

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const baseUrl = getSiteUrl();

  return (
    <html lang={locale}>
      <head>
        <meta name="theme-color" content="#245edb" />
        {adsenseScriptEnabled && adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: siteMeta[locale].name,
                  url: baseUrl,
                  inLanguage: locale === "ko" ? "ko-KR" : "en-US",
                },
                {
                  "@type": "Organization",
                  name: siteMeta[locale].name,
                  url: baseUrl,
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: contactEmail,
                    contactType: "customer support",
                    availableLanguage: ["ko", "en"],
                  },
                },
                {
                  "@type": "WebApplication",
                  name: siteMeta[locale].name,
                  description: siteMeta[locale].description,
                  url: `${baseUrl}/${locale}`,
                  applicationCategory: "UtilityApplication",
                  operatingSystem: "Web",
                  inLanguage: locale === "ko" ? "ko-KR" : "en-US",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList:
                    locale === "ko"
                      ? [
                          "이미지 용량 줄이기",
                          "WebP 변환",
                          "여러 이미지 처리",
                          "브라우저 기반 개인정보 보호",
                        ]
                      : [
                          "Image compression",
                          "WebP conversion",
                          "Batch image processing",
                          "Browser-based privacy",
                        ],
                },
              ],
            }),
          }}
        />
        <meta
          name="naver-site-verification"
          content="454875241af788011e2b9d908f59919bb91c5cc3"
        />
        <meta
          name="google-site-verification"
          content="ylRZwQXQH9ZVegPDqDJGKHanYBIwb2fDMD_NWF917FI"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitcher currentLocale={locale} />
          {children}
        </NextIntlClientProvider>
        {analyticsEnabled && <Analytics />}
      </body>
    </html>
  );
}
