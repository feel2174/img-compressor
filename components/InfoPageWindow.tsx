import Link from "next/link";
import type { Locale } from "@/i18n";
import { articleSlugs } from "@/content/articles";
import { infoPageSlugs, legalPages, siteMeta, type InfoPageSlug } from "@/content/site";
import { pageDepthSections, type PageDepthSection } from "@/content/page-depth";
import BenchmarkReport from "@/components/BenchmarkReport";
import ArticleEvidencePanel from "@/components/ArticleEvidencePanel";
import AdvertisingReadinessNotice from "@/components/AdvertisingReadinessNotice";
import SiteFooter from "@/components/SiteFooter";
import { getSiteUrl } from "@/lib/site-url";

type InfoPageWindowProps = {
  locale: Locale;
  slug: InfoPageSlug;
};

export default function InfoPageWindow({ locale, slug }: InfoPageWindowProps) {
  const page = legalPages[locale][slug];
  const faqs = "faqs" in page ? page.faqs : undefined;
  const isArticle = articleSlugs.includes(
    slug as (typeof articleSlugs)[number]
  );
  const localeDepthSections = pageDepthSections[locale] as Record<
    string,
    PageDepthSection[]
  >;
  const depthSections = localeDepthSections[slug] || [];
  const homeHref = `/${locale}`;
  const baseUrl = getSiteUrl();
  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const authorName = locale === "ko" ? "PixelZipKit 운영팀" : "PixelZipKit editorial team";
  const authorMethod =
    locale === "ko"
      ? "고정 테스트 자산, 실제 도구 동작, 공개된 참고 자료를 기준으로 검수"
      : "Reviewed against fixed test assets, tool behavior, and published references";
  const authorEmail = "devzucca@gmail.com";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || authorEmail;
  const contentPublishedAt = "2026-06-22";
  const contentModifiedAt = "2026-06-26";

  return (
    <main className="xp-desktop">
      <div className="xp-wallpaper" aria-hidden="true" />

      <section className="xp-window xp-info-window" aria-labelledby="info-title">
        <div className="xp-titlebar">
          <div className="xp-titlebar-left">
            <span className="xp-window-icon" aria-hidden="true" />
            <span>{siteMeta[locale].name}</span>
          </div>
          <div className="xp-window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <nav className="xp-menubar xp-compact-menubar" aria-label="Site navigation">
          <Link href={homeHref}>{locale === "ko" ? "홈" : "Home"}</Link>
          <span className="xp-current-page">{page.label}</span>
          <details className="xp-nav-menu">
            <summary>{locale === "ko" ? "콘텐츠 메뉴" : "Content Menu"}</summary>
            <div className="xp-nav-menu-panel">
              {infoPageSlugs.map((item) => (
                <Link
                  key={item}
                  href={`/${locale}/${item}`}
                  aria-current={item === slug ? "page" : undefined}
                >
                  {legalPages[locale][item].label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="xp-window-body">
          <article className="xp-section xp-document">
            <div className="xp-section-heading">
              <span>{page.label}</span>
              <h1 id="info-title">{page.title}</h1>
              <p>{page.description}</p>
              <div className="xp-author-line">
                <span>{locale === "ko" ? "작성자" : "Author"}</span>
                <strong>{authorName}</strong>
                <em>{authorMethod}</em>
                <span>{locale === "ko" ? "최종 검수" : "Last reviewed"}</span>
                <time dateTime={contentModifiedAt}>{contentModifiedAt}</time>
              </div>
            </div>

            <div className="xp-text-panel">
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ul>
                {page.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {depthSections.length > 0 && (
                <div className="xp-depth-sections">
                  {depthSections.map((section) => (
                    <section key={section.title}>
                      <h2>{section.title}</h2>
                      <p>{section.body}</p>
                    </section>
                  ))}
                </div>
              )}

              {slug === "image-compression-benchmark-results" && (
                <BenchmarkReport locale={locale} />
              )}

              {isArticle && slug !== "image-compression-benchmark-results" && (
                <ArticleEvidencePanel locale={locale} slug={slug as (typeof articleSlugs)[number]} />
              )}

              {slug === "privacy" && <AdvertisingReadinessNotice locale={locale} />}

              {isArticle && slug !== "image-compression-benchmark-results" && (
                <aside className="xp-benchmark-link">
                  <strong>
                    {locale === "ko"
                      ? "권장 품질을 실제 결과로 비교해 보세요"
                      : "Compare the recommended settings with actual results"}
                  </strong>
                  <p>
                    {locale === "ko"
                      ? "사진, 텍스트 캡처, 투명 그래픽의 품질 60·70·80 및 WebP 파일 크기를 PixelZipKit 고정 테스트 세트에서 확인할 수 있습니다."
                      : "Review quality 60, 70, and 80 plus WebP file sizes for photo, text screenshot, and transparent graphic benchmark assets."}
                  </p>
                  <Link href={`/${locale}/image-compression-benchmark-results`}>
                    {locale === "ko"
                      ? "이미지 압축 테스트 결과 보기"
                      : "View image compression test results"}
                  </Link>
                </aside>
              )}

              {faqs && (
                <div className="xp-faq-list">
                  {faqs.map((item) => (
                    <section key={item.question}>
                      <h2>{item.question}</h2>
                      <p>{item.answer}</p>
                    </section>
                  ))}
                </div>
              )}

              {slug === "contact" && (
                <div className="xp-contact-box">
                  <strong>
                    {locale === "ko" ? "운영자 연락처" : "Operator contact"}
                  </strong>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>

      <SiteFooter locale={locale} />

      <footer className="xp-taskbar">
        <Link className="xp-start-button" href={homeHref}>
          <span aria-hidden="true" />
          {locale === "ko" ? "시작" : "Start"}
        </Link>
        <div className="xp-taskbar-item">{page.title}</div>
        <div className="xp-clock">
          {locale === "ko"
            ? "모든 이미지는 브라우저에서 처리됩니다."
            : "All images are processed in your browser."}
        </div>
      </footer>

      {faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: siteMeta[locale].name,
                    item: `${baseUrl}/${locale}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: page.title,
                    item: pageUrl,
                  },
                ],
              },
              isArticle
                ? {
                    "@type": "Article",
                    headline: page.title,
                    description: page.description,
                    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
                    mainEntityOfPage: pageUrl,
                    datePublished: contentPublishedAt,
                    dateModified: contentModifiedAt,
                    image:
                      slug === "image-compression-benchmark-results"
                        ? `${baseUrl}/benchmarks/benchmark-photo-source.png`
                        : `${baseUrl}/${locale}/opengraph-image`,
                    author: {
                      "@type": "Organization",
                      name: authorName,
                    },
                    publisher: {
                      "@type": "Organization",
                      name: siteMeta[locale].name,
                    },
                  }
                : {
                    "@type": "WebPage",
                    name: page.title,
                    description: page.description,
                    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
                    url: pageUrl,
                    datePublished: contentPublishedAt,
                    dateModified: contentModifiedAt,
                  },
            ],
          }),
        }}
      />
    </main>
  );
}
