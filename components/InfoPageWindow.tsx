import Link from "next/link";
import type { Locale } from "@/i18n";
import { infoPageSlugs, legalPages, siteMeta, type InfoPageSlug } from "@/content/site";
import SiteFooter from "@/components/SiteFooter";
import { getSiteUrl } from "@/lib/site-url";

type InfoPageWindowProps = {
  locale: Locale;
  slug: InfoPageSlug;
};

export default function InfoPageWindow({ locale, slug }: InfoPageWindowProps) {
  const page = legalPages[locale][slug];
  const faqs = "faqs" in page ? page.faqs : undefined;
  const homeHref = `/${locale}`;
  const baseUrl = getSiteUrl();
  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const issueUrl = "https://github.com/feel2174/img-compressor/issues";
  const authorName = "pixelzip 운영자";
  const authorEmail = "devzucca@gmail.com";

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
                <em>{authorEmail}</em>
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
                  {contactEmail ? (
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  ) : (
                    <a href={issueUrl} target="_blank" rel="noreferrer">
                      {locale === "ko" ? "GitHub Issues로 문의하기" : "Contact via GitHub Issues"}
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
          <SiteFooter locale={locale} />
        </div>
      </section>

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
              {
                "@type": "Article",
                headline: page.title,
                description: page.description,
                inLanguage: locale === "ko" ? "ko-KR" : "en-US",
                mainEntityOfPage: pageUrl,
                author: {
                  "@type": "Person",
                  name: authorName,
                  email: authorEmail,
                },
                publisher: {
                  "@type": "Organization",
                  name: siteMeta[locale].name,
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
