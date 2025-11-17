import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale } from "@/i18n";
import type { Metadata } from "next";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const seo = messages.seo as {
    title: string;
    description: string;
    keywords: string;
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Image Compressor" }],
    creator: "Image Compressor",
    publisher: "Image Compressor",
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
      siteName: "Image Compressor",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
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
      images: [`${baseUrl}/og-image.png`],
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
    verification: {
      // Google Search Console verification code (add your own)
      // google: 'your-google-verification-code',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await Promise.resolve(params);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name:
                locale === "ko"
                  ? "무료 이미지 압축기"
                  : "Free Image Compressor",
              description:
                locale === "ko"
                  ? "웹에서 무료로 이미지를 압축하고 최적화하세요"
                  : "Compress and optimize images for free on the web",
              url: `${
                process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"
              }/${locale}`,
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                locale === "ko" ? "이미지 압축" : "Image Compression",
                locale === "ko" ? "이미지 최적화" : "Image Optimization",
                locale === "ko"
                  ? "다중 이미지 처리"
                  : "Multiple Image Processing",
                locale === "ko"
                  ? "브라우저 내 처리"
                  : "Browser-based Processing",
              ],
            }),
          }}
        />
        <meta
          name="naver-site-verification"
          content="c14223cecc243ac817b5fa8c0d84a525305a7042"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="relative">
            <LanguageSwitcher currentLocale={locale} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
