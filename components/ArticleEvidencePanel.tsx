import Link from "next/link";
import type { ArticleSlug } from "@/content/articles";
import type { Locale } from "@/i18n";

type Evidence = {
  title: string;
  purpose: string;
  startingPoint: string;
  check: string;
};

const evidenceBySlug: Record<Locale, Partial<Record<ArticleSlug, Evidence>>> = {
  ko: {
    "blog-image-optimization-checklist": {
      title: "운영 기준: 본문 이미지",
      purpose: "독자가 스크롤 중 보는 일반 본문 사진",
      startingPoint: "WebP 품질 70~80, 표시 폭에 맞춰 리사이즈",
      check: "모바일에서 첫 화면 로딩과 캡션 주변의 선명도를 확인",
    },
    "ecommerce-product-image-compression-guide": {
      title: "운영 기준: 상품 상세와 썸네일",
      purpose: "색감과 소재 질감이 구매 판단에 영향을 주는 이미지",
      startingPoint: "상세 대표 컷은 WebP 품질 80부터, 썸네일은 별도 축소본",
      check: "라벨, 색상 경계, 확대 보기에서 소재 질감을 원본과 비교",
    },
    "jpg-png-webp-format-choice": {
      title: "운영 기준: 포맷 결정",
      purpose: "사진, UI 캡처, 투명 로고처럼 원본 특성이 다른 파일",
      startingPoint: "사진은 WebP, 투명 자산은 PNG와 투명 WebP를 모두 비교",
      check: "글자 가장자리와 투명 영역을 밝은 배경·어두운 배경에서 확인",
    },
    "image-quality-60-70-80-comparison": {
      title: "운영 기준: 품질값 선택",
      purpose: "파일 크기 제한과 시각 품질을 함께 고려해야 하는 게시 이미지",
      startingPoint: "중요한 사진은 80, 일반 본문은 70, 썸네일은 60부터 비교",
      check: "100% 보기에서 얼굴, 글자, 그라데이션, 잎·섬유 질감을 확인",
    },
    "mobile-photo-compression-before-upload": {
      title: "운영 기준: 모바일 업로드",
      purpose: "스마트폰 원본을 블로그, 쇼핑몰, 양식에 올리기 전 만든 사본",
      startingPoint: "긴 변을 실제 표시 크기에 맞추고 품질 70~80부터 시작",
      check: "모바일 네트워크에서 업로드 시간과 최종 게시 페이지를 확인",
    },
    "webp-conversion-seo-guide": {
      title: "운영 기준: 웹 게시용 WebP",
      purpose: "사이트 속도와 이미지 이해도를 함께 관리해야 하는 웹 자산",
      startingPoint: "원본은 보관하고 WebP 사본을 만든 뒤 파일명과 alt를 작성",
      check: "결과가 더 작아졌는지, 실제 페이지의 크기와 문맥이 적절한지 확인",
    },
  },
  en: {
    "blog-image-optimization-checklist": {
      title: "Operating criteria: body images",
      purpose: "General editorial photos readers see while scrolling",
      startingPoint: "WebP quality 70-80 after resizing to the displayed width",
      check: "Check first-screen loading and caption-area clarity on mobile",
    },
    "ecommerce-product-image-compression-guide": {
      title: "Operating criteria: product detail and thumbnails",
      purpose: "Images where color and material texture affect purchase decisions",
      startingPoint: "Start detail hero images at WebP 80; create smaller thumbnail copies separately",
      check: "Compare labels, color edges, and material texture at full size",
    },
    "jpg-png-webp-format-choice": {
      title: "Operating criteria: format selection",
      purpose: "Photos, UI screenshots, and transparent graphics with different source characteristics",
      startingPoint: "Try WebP for photos; compare PNG and transparent WebP for alpha assets",
      check: "Inspect text edges and transparency on both light and dark backgrounds",
    },
    "image-quality-60-70-80-comparison": {
      title: "Operating criteria: quality selection",
      purpose: "Publishing images that need a balance between file limits and visual quality",
      startingPoint: "Start important photos at 80, ordinary body images at 70, and thumbnails at 60",
      check: "Inspect faces, text, gradients, leaves, and fabric texture at 100%",
    },
    "mobile-photo-compression-before-upload": {
      title: "Operating criteria: mobile uploads",
      purpose: "Publishing copies made from smartphone originals for blogs, stores, and forms",
      startingPoint: "Match the long edge to the display size and begin around quality 70-80",
      check: "Check upload time on mobile data and inspect the final published page",
    },
    "webp-conversion-seo-guide": {
      title: "Operating criteria: WebP for web publishing",
      purpose: "Web assets that need both page speed and understandable image context",
      startingPoint: "Keep the original, make a WebP copy, then add a descriptive filename and alt text",
      check: "Confirm the output is smaller and appropriate for the actual page context",
    },
  },
};

export default function ArticleEvidencePanel({ locale, slug }: { locale: Locale; slug: ArticleSlug }) {
  const evidence = evidenceBySlug[locale][slug];
  if (!evidence) return null;

  return (
    <section className="xp-article-evidence" aria-labelledby={`evidence-${slug}`}>
      <h2 id={`evidence-${slug}`}>{evidence.title}</h2>
      <dl>
        <div><dt>{locale === "ko" ? "사용 상황" : "Use case"}</dt><dd>{evidence.purpose}</dd></div>
        <div><dt>{locale === "ko" ? "권장 시작점" : "Starting point"}</dt><dd>{evidence.startingPoint}</dd></div>
        <div><dt>{locale === "ko" ? "최종 확인" : "Final check"}</dt><dd>{evidence.check}</dd></div>
      </dl>
      <p>
        {locale === "ko" ? "위 기준은 고정된 정답이 아니라, 실제 브라우저 인코더로 다시 측정할 수 있는 출발점입니다. " : "These are not universal answers; they are reproducible starting points measured with the actual browser encoder. "}
        <Link href={`/${locale}/image-compression-benchmark-results`}>
          {locale === "ko" ? "현재 브라우저의 테스트 결과를 확인하세요." : "Check the test results in your current browser."}
        </Link>
      </p>
    </section>
  );
}
