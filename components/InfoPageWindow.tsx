import Link from "next/link";
import type { Locale } from "@/i18n";
import { infoPageSlugs, legalPages, siteMeta, type InfoPageSlug } from "@/content/site";

type InfoPageWindowProps = {
  locale: Locale;
  slug: InfoPageSlug;
};

export default function InfoPageWindow({ locale, slug }: InfoPageWindowProps) {
  const page = legalPages[locale][slug];
  const homeHref = `/${locale}`;
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@img-compressor.zucca100.com";

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

        <nav className="xp-menubar" aria-label="Site navigation">
          <Link href={homeHref}>{locale === "ko" ? "홈" : "Home"}</Link>
          {infoPageSlugs.map((item) => (
            <Link key={item} href={`/${locale}/${item}`}>
              {legalPages[locale][item].label}
            </Link>
          ))}
        </nav>

        <div className="xp-window-body">
          <article className="xp-section xp-document">
            <div className="xp-section-heading">
              <span>{page.label}</span>
              <h1 id="info-title">{page.title}</h1>
              <p>{page.description}</p>
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

              {slug === "contact" && (
                <div className="xp-contact-box">
                  <strong>{locale === "ko" ? "운영자 이메일" : "Operator email"}</strong>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              )}
            </div>
          </article>
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
    </main>
  );
}
