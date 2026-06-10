import Link from "next/link";
import type { Locale } from "@/i18n";
import { legalPages, siteMeta } from "@/content/site";
import { articleSlugs } from "@/content/articles";
import { getSiteHost } from "@/lib/site-url";

type SiteFooterProps = {
  locale: Locale;
};

export default function SiteFooter({ locale }: SiteFooterProps) {
  const host = getSiteHost();
  const isKo = locale === "ko";

  return (
    <footer className="xp-site-footer" aria-label={isKo ? "사이트 하단 정보" : "Site footer"}>
      <div className="xp-site-footer-main">
        <div className="xp-site-brand">
          <span className="xp-site-brand-mark" aria-hidden="true" />
          <strong>{siteMeta[locale].name}</strong>
          <span>{host}</span>
        </div>

        <p className="xp-site-footer-title">
          {isKo
            ? "무료 이미지 용량 줄이기 및 WebP 변환 도구"
            : "Free image compression and WebP conversion tool"}
        </p>
        <p>
          {isKo
            ? "본 사이트는 브라우저에서 이미지를 압축하고 WebP로 변환할 수 있도록 돕는 온라인 도구입니다. 선택한 이미지는 서버에 저장하지 않으며, 블로그·쇼핑몰·포트폴리오·SNS 업로드 전에 파일 용량을 줄이는 용도로 사용할 수 있습니다."
            : "This site helps users compress images and convert them to WebP directly in the browser. Selected images are not stored on the server, and the tool can be used before publishing images to blogs, ecommerce pages, portfolios, or social media."}
        </p>
        <p>
          {isKo
            ? "광고, 분석, 개인정보 처리 기준은 개인정보처리방침에서 확인할 수 있습니다. 기능 제안이나 오류 제보는 문의 페이지를 통해 전달해 주세요."
            : "Advertising, analytics, and privacy practices are described in the privacy policy. Feature suggestions and bug reports can be sent through the contact page."}
        </p>
      </div>

      <nav className="xp-site-footer-nav" aria-label={isKo ? "푸터 링크" : "Footer links"}>
        <Link href={`/${locale}/about`}>{isKo ? "소개" : "About"}</Link>
        <Link href={`/${locale}/guide`}>{isKo ? "가이드" : "Guide"}</Link>
        <Link href={`/${locale}/faq`}>FAQ</Link>
        <Link href={`/${locale}/contact`}>{isKo ? "문의" : "Contact"}</Link>
        <Link href={`/${locale}/privacy`}>{isKo ? "개인정보처리방침" : "Privacy Policy"}</Link>
        <Link href={`/${locale}/terms`}>{isKo ? "이용약관" : "Terms"}</Link>
      </nav>

      <nav
        className="xp-site-footer-articles"
        aria-label={isKo ? "이미지 최적화 콘텐츠" : "Image optimization articles"}
      >
        <strong>{isKo ? "이미지 최적화 콘텐츠" : "Image Optimization Articles"}</strong>
        <ul>
          {articleSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`/${locale}/${slug}`}>
                {legalPages[locale][slug].title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="xp-site-footer-copy">
        © 2026 {host} — All rights reserved.
      </div>
    </footer>
  );
}
