import Link from "next/link";
import type { Locale } from "@/i18n";

type EditorialValueSectionProps = {
  locale: Locale;
};

const koRows = [
  ["블로그 본문", "WebP 또는 JPG", "75~85", "본문 폭보다 큰 원본을 줄이고 모바일에서 로딩을 확인합니다."],
  ["쇼핑몰 상세", "WebP 또는 JPG", "80 전후", "색감, 질감, 작은 라벨이 흐려지지 않는지 원본과 비교합니다."],
  ["상품 썸네일", "WebP", "65~75", "목록에 여러 장이 동시에 뜨므로 용량 절감 효과가 큽니다."],
  ["로고/누끼", "PNG 또는 투명 WebP", "80 이상", "투명 배경과 가장자리 번짐을 밝은 배경과 어두운 배경에서 확인합니다."],
  ["이메일 첨부", "JPG", "70~80", "수신자 호환성이 중요하면 WebP보다 JPG가 안전합니다."],
];

const enRows = [
  ["Blog body", "WebP or JPG", "75-85", "Resize oversized originals and check mobile loading before publishing."],
  ["Product detail", "WebP or JPG", "Around 80", "Compare color, texture, and small labels against the original."],
  ["Product thumbnail", "WebP", "65-75", "Grid pages load many thumbnails at once, so size reduction matters."],
  ["Logo/cutout", "PNG or transparent WebP", "80+", "Check transparency and edge quality on light and dark backgrounds."],
  ["Email attachment", "JPG", "70-80", "JPG is safer than WebP when recipient compatibility matters."],
];

export default function EditorialValueSection({ locale }: EditorialValueSectionProps) {
  const isKo = locale === "ko";
  const rows = isKo ? koRows : enRows;
  const resources = isKo
    ? [
        ["고정 자산 압축 테스트", "같은 원본의 품질 60·70·80 결과 파일을 직접 비교합니다.", "image-compression-benchmark-results"],
        ["블로그 발행 전 체크리스트", "본문 사진의 표시 크기, alt 텍스트, 모바일 검수 순서를 정리했습니다.", "blog-image-optimization-checklist"],
        ["상품 이미지 검수 가이드", "썸네일과 상세 컷을 분리하고 라벨·색감·질감을 확인하는 기준입니다.", "ecommerce-product-image-compression-guide"],
        ["JPG·PNG·WebP 선택 기준", "사진, UI 캡처, 투명 자산의 포맷을 목적에 맞게 비교합니다.", "jpg-png-webp-format-choice"],
      ]
    : [
        ["Fixed-asset compression test", "Compare published quality 60, 70, and 80 output files from the same source.", "image-compression-benchmark-results"],
        ["Blog pre-publishing checklist", "Review displayed size, alt text, and mobile clarity for body images.", "blog-image-optimization-checklist"],
        ["Product image review guide", "Separate thumbnails from detail images and inspect labels, color, and texture.", "ecommerce-product-image-compression-guide"],
        ["JPG, PNG, and WebP decisions", "Compare formats by image type, visual quality, and destination support.", "jpg-png-webp-format-choice"],
      ];

  return (
    <section className="xp-section xp-editorial-value" aria-labelledby="editorial-value-title">
      <div className="xp-section-heading">
        <span>{isKo ? "실전 이미지 최적화 기준" : "Practical Optimization Guide"}</span>
        <h2 id="editorial-value-title">
          {isKo ? "이미지 용량을 줄일 때 실제로 확인해야 할 것" : "What to Check Before Compressing Images"}
        </h2>
        <p>
          {isKo
            ? "이 도구는 단순히 파일을 작게 만드는 데서 끝나지 않습니다. 게시 위치, 이미지 종류, 품질 기준을 함께 판단해야 블로그·쇼핑몰·포트폴리오에서 빠르면서도 신뢰감 있는 이미지를 만들 수 있습니다."
            : "This tool is not only about making files smaller. The right setting depends on where the image will be published, what the image contains, and how much visual detail must be preserved."}
        </p>
      </div>

      <div className="xp-value-table-wrap">
        <table className="xp-value-table">
          <thead>
            <tr>
              <th>{isKo ? "사용 목적" : "Use case"}</th>
              <th>{isKo ? "추천 포맷" : "Format"}</th>
              <th>{isKo ? "품질값" : "Quality"}</th>
              <th>{isKo ? "검수 기준" : "Review point"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([useCase, format, quality, note]) => (
              <tr key={useCase}>
                <td>{useCase}</td>
                <td>{format}</td>
                <td>{quality}</td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="xp-editorial-grid">
        <article>
          <h3>{isKo ? "1. 원본은 보관하고 게시용 파일만 줄이기" : "1. Keep originals and compress publishing copies"}</h3>
          <p>
            {isKo
              ? "압축은 되돌릴 수 없는 품질 손실을 만들 수 있습니다. 중요한 원본은 따로 보관하고, 웹 게시·메일 첨부·상품 등록처럼 목적이 정해진 파일만 압축하는 흐름이 안전합니다."
              : "Compression can permanently reduce visual detail. Keep the original separately and compress only the copy that will be published, attached, or uploaded."}
          </p>
        </article>
        <article>
          <h3>{isKo ? "2. 원본보다 커진 결과는 사용하지 않기" : "2. Skip outputs larger than the original"}</h3>
          <p>
            {isKo
              ? "이미 최적화된 이미지나 단순 그래픽은 변환 후 오히려 커질 수 있습니다. 이 사이트는 그런 경우 원본을 유지하도록 설계되어 있어 불필요한 다운로드를 줄일 수 있습니다."
              : "Already optimized images can become larger after conversion. The tool is designed to keep the original when a new output is not smaller."}
          </p>
        </article>
        <article>
          <h3>{isKo ? "3. 브라우저 내 처리로 개인 사진 부담 줄이기" : "3. Process private photos in the browser"}</h3>
          <p>
            {isKo
              ? "선택한 이미지는 서버에 저장하지 않고 브라우저에서 처리합니다. 가족 사진, 업무 캡처, 출시 전 상품 사진처럼 외부 업로드가 부담스러운 파일을 가볍게 줄일 때 유용합니다."
              : "Selected images are processed in the browser and are not stored on this site's server. This is useful for private photos, work screenshots, and pre-release product images."}
          </p>
        </article>
      </div>

      <nav className="xp-article-evidence" aria-label={isKo ? "이미지 최적화 자료" : "Image optimization resources"}>
        <h3>{isKo ? "직접 확인할 수 있는 이미지 최적화 자료" : "Image optimization resources with checkable evidence"}</h3>
        <ul>
          {resources.map(([title, description, slug]) => (
            <li key={slug}>
              <Link href={`/${locale}/${slug}`}>
                <strong>{title}</strong>
                <span>{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
