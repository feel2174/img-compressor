import Link from "next/link";
import type { Locale } from "@/i18n";
import { coreArticleSlugs, supportingArticleSlugs } from "@/content/articles";
import { benchmarkMethod, benchmarkScenarios, reductionPercent } from "@/content/benchmark";
import { legalPages } from "@/content/site";

type ContentHubSectionProps = {
  locale: Locale;
  variant: "articles" | "research";
};

function formatSize(bytes: number, locale: Locale) {
  const value = bytes / 1024;
  return `${new Intl.NumberFormat(locale === "ko" ? "ko-KR" : "en-US", {
    maximumFractionDigits: value >= 1024 ? 2 : 1,
  }).format(value >= 1024 ? value / 1024 : value)} ${value >= 1024 ? "MB" : "KB"}`;
}

export default function ContentHubSection({ locale, variant }: ContentHubSectionProps) {
  const isKo = locale === "ko";

  if (variant === "research") {
    return (
      <section className="xp-article-evidence" aria-labelledby="research-hub-title">
        <h2 id="research-hub-title">
          {isKo ? "검수 데이터와 측정 기준" : "Review Data and Measurement Criteria"}
        </h2>
        <p>
          {isKo
            ? `WebP 실측일은 ${benchmarkMethod.webpMeasuredAt}, JPEG 실측일은 ${benchmarkMethod.jpegMeasuredAt}입니다. 테스트 자산은 사이트 소유 고정 파일이며, 사용자 업로드 이미지나 고객 파일을 사용하지 않습니다.`
            : `WebP measurements were recorded on ${benchmarkMethod.webpMeasuredAt}, and JPEG measurements on ${benchmarkMethod.jpegMeasuredAt}. Test assets are fixed files owned by the site; user uploads and customer files are not used.`}
        </p>
        <dl>
          <div>
            <dt>{isKo ? "측정 방식" : "Measurement"}</dt>
            <dd>
              {isKo
                ? `${benchmarkMethod.encoder}와 ${benchmarkMethod.jpegEncoder} 결과를 분리해 기록합니다.`
                : `${benchmarkMethod.encoder} and ${benchmarkMethod.jpegEncoder} outputs are recorded separately.`}
            </dd>
          </div>
          <div>
            <dt>{isKo ? "검수 관점" : "Review Lens"}</dt>
            <dd>
              {isKo
                ? "파일 크기 감소율, 작은 글자, 투명 가장자리, 질감, 색상 경계를 함께 확인합니다."
                : "File-size reduction, small text, transparent edges, texture, and color transitions are reviewed together."}
            </dd>
          </div>
          <div>
            <dt>{isKo ? "핵심 연결" : "Primary Link"}</dt>
            <dd>
              <Link href={`/${locale}/image-compression-benchmark-results`}>
                {isKo ? "이미지 압축 테스트 결과 전체 보기" : "View the full image compression benchmark"}
              </Link>
            </dd>
          </div>
        </dl>

        <div className="xp-value-table-wrap xp-hub-table">
          <table className="xp-value-table">
            <thead>
              <tr>
                <th>{isKo ? "상황" : "Use case"}</th>
                <th>{isKo ? "설정" : "Setting"}</th>
                <th>{isKo ? "원본 합계" : "Original total"}</th>
                <th>{isKo ? "결과 합계" : "Output total"}</th>
                <th>{isKo ? "감소율" : "Reduction"}</th>
              </tr>
            </thead>
            <tbody>
              {benchmarkScenarios.map((scenario) => (
                <tr key={scenario.key}>
                  <td>{scenario.useCase[locale]}</td>
                  <td>{scenario.setting}</td>
                  <td>{formatSize(scenario.sourceBytes, locale)}</td>
                  <td>{formatSize(scenario.outputBytes, locale)}</td>
                  <td>{reductionPercent(scenario.sourceBytes, scenario.outputBytes).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return (
    <section className="xp-article-evidence" aria-labelledby="content-hub-title">
      <h2 id="content-hub-title">
        {isKo ? "실무 중심 이미지 최적화 가이드" : "Core Image Optimization Guides"}
      </h2>
      <p>
        {isKo
          ? "아래 8개 글은 압축 테스트, 실제 게시 목적, 품질 판단, 검색·성능 관점을 담당하는 핵심 페이지입니다. 각 글은 쉬운 요약과 비즈니스 기준을 함께 제공하도록 구성했습니다."
          : "The eight pages below carry the main publishing value of the site: tests, use cases, quality decisions, search, and performance. Each guide includes a plain-language summary and a business-ready rule."}
      </p>
      <div className="xp-hub-grid">
        {coreArticleSlugs.map((slug) => {
          const page = legalPages[locale][slug];
          return (
            <article key={slug}>
              <strong>{page.title}</strong>
              <p>{page.description}</p>
              <Link href={`/${locale}/${slug}`}>
                {isKo ? "핵심 글 열기" : "Open core guide"}
              </Link>
            </article>
          );
        })}
      </div>

      <h3>{isKo ? "보조 리소스" : "Supporting Resources"}</h3>
      <ul>
        {supportingArticleSlugs.map((slug) => (
          <li key={slug}>
            <Link href={`/${locale}/${slug}`}>
              <strong>{legalPages[locale][slug].title}</strong>
              <span>{legalPages[locale][slug].description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
