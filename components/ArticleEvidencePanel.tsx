import Link from "next/link";
import type { ArticleSlug } from "@/content/articles";
import { benchmarkAssets, reductionPercent } from "@/content/benchmark";
import type { Locale } from "@/i18n";

type Evidence = {
  title: string;
  observation: string;
  failureCase: string;
  decision: string;
};

const photo60Reduction = reductionPercent(
  benchmarkAssets.photo.sourceBytes,
  benchmarkAssets.photo.outputs[0].bytes
).toFixed(1);
const photo80Reduction = reductionPercent(
  benchmarkAssets.photo.sourceBytes,
  benchmarkAssets.photo.outputs[2].bytes
).toFixed(1);
const screenshotReduction = reductionPercent(
  benchmarkAssets.screenshot.sourceBytes,
  benchmarkAssets.screenshot.outputBytes
).toFixed(1);

const evidenceBySlug: Record<Locale, Partial<Record<ArticleSlug, Evidence>>> = {
  ko: {
    "blog-image-optimization-checklist": {
      title: "고정 자산으로 확인한 발행 전 검수 기록",
      observation: `1536 x 1024 사진 원본은 품질 60 WebP에서 ${photo60Reduction}%, 품질 80에서 ${photo80Reduction}% 작아졌습니다. 파일 크기만 보면 60이 유리했지만, 잎과 그림자 경계는 80에서 더 안전하게 검수할 수 있었습니다.`,
      failureCase: "본문에 작은 글자나 제품 라벨이 있는 이미지를 사진과 같은 기준으로 낮추면, 모바일에서 읽기 어려워질 수 있습니다. 파일이 작아졌다는 사실만으로 게시용이라고 판단하지 마세요.",
      decision: "본문 사진은 실제 표시 폭으로 먼저 줄이고, 중요한 질감이나 글자가 있다면 품질 80부터 비교합니다. 이미지마다 결과를 100% 보기로 확인한 뒤에만 같은 설정을 일괄 적용합니다.",
    },
    "ecommerce-product-image-compression-guide": {
      title: "상품 이미지에서 확인해야 하는 실패 신호",
      observation: `UI 캡처 고정 자산은 품질 80 WebP에서 ${screenshotReduction}% 작아졌습니다. 이 수치가 사진보다 작아도 작은 글자와 얇은 테두리를 보존해야 하는 이미지에는 더 보수적인 설정이 필요하다는 점을 보여줍니다.`,
      failureCase: "썸네일에서 충분히 선명해 보인 이미지가 상세 페이지 확대 보기에서는 라벨, 색상 경계, 질감이 뭉개질 수 있습니다. 특히 흰 배경 제품 사진은 가장자리 번짐이 눈에 잘 띕니다.",
      decision: "목록 썸네일과 상세 대표 컷을 같은 파일로 쓰지 않습니다. 상세 컷은 원본과 비교하고, 썸네일은 표시 크기에 맞춘 별도 사본으로 만들어 목록 로딩과 구매 판단 정보를 함께 관리합니다.",
    },
    "jpg-png-webp-format-choice": {
      title: "포맷을 고를 때 파일 크기보다 먼저 보는 것",
      observation: "고정 테스트는 사진, 작은 글자가 있는 UI 캡처, 투명 그래픽을 분리해 비교합니다. 같은 품질값이라도 사진의 질감, 글자의 선명도, 투명 가장자리는 서로 다른 방식으로 손상될 수 있었습니다.",
      failureCase: "투명 그래픽을 JPG로 바꾸면 투명도가 사라지고, 사진을 PNG로 남기면 기대만큼 작아지지 않을 수 있습니다. WebP가 더 작더라도 제출 시스템이나 편집 도구가 지원하지 않으면 결과 파일은 쓸모가 없습니다.",
      decision: "사진은 JPG와 WebP를, 투명 자산은 PNG와 투명 WebP를 같은 표시 크기에서 비교합니다. 최종 포맷은 파일 크기, 확대 품질, 업로드 대상의 지원 여부를 모두 확인한 뒤 결정합니다.",
    },
  },
  en: {
    "blog-image-optimization-checklist": {
      title: "Pre-publishing checks from fixed test assets",
      observation: `The 1536 x 1024 photo source was ${photo60Reduction}% smaller at WebP quality 60 and ${photo80Reduction}% smaller at quality 80. Quality 60 made the smallest file, while quality 80 was safer for inspecting leaves and shadow boundaries.`,
      failureCase: "Images with small text or product labels can become difficult to read on mobile when compressed like ordinary photographs. A smaller file is not enough evidence that it is ready to publish.",
      decision: "Resize body images to their displayed width first. Start at quality 80 when detail matters, inspect at full size, then reuse a setting only for images that pass the same review.",
    },
    "ecommerce-product-image-compression-guide": {
      title: "Failure signals to inspect in product images",
      observation: `The fixed UI screenshot was ${screenshotReduction}% smaller at WebP quality 80. Its smaller reduction than the photo shows why images with text and thin borders need a more conservative quality review.`,
      failureCase: "An image that looks clear as a thumbnail can lose labels, color edges, and texture in a detail-page zoom view. Edge artifacts are especially visible on white-background product photos.",
      decision: "Do not reuse one file for a product detail image and a thumbnail. Review the detail image against the original, then create a separate, display-sized thumbnail copy.",
    },
    "jpg-png-webp-format-choice": {
      title: "What to inspect before file size",
      observation: "The fixed test separates a photo, a UI screenshot with small text, and a transparent graphic. The same quality value can damage texture, text, and transparent edges in different ways.",
      failureCase: "Changing a transparent graphic to JPG removes transparency, and keeping a photo as PNG may not reduce its size meaningfully. A smaller WebP is still not useful if the destination system cannot accept it.",
      decision: "Compare JPG and WebP for photographs, and PNG and transparent WebP for alpha assets at the same display size. Decide only after checking file size, full-size quality, and destination support.",
    },
  },
};

export default function ArticleEvidencePanel({ locale, slug }: { locale: Locale; slug: ArticleSlug }) {
  const evidence = evidenceBySlug[locale][slug];
  if (!evidence) return null;

  const isKo = locale === "ko";

  return (
    <section className="xp-article-evidence" aria-labelledby={`evidence-${slug}`}>
      <h2 id={`evidence-${slug}`}>{evidence.title}</h2>
      <section>
        <h3>{isKo ? "관찰한 결과" : "Observed result"}</h3>
        <p>{evidence.observation}</p>
      </section>
      <section>
        <h3>{isKo ? "실패하기 쉬운 경우" : "Common failure case"}</h3>
        <p>{evidence.failureCase}</p>
      </section>
      <section>
        <h3>{isKo ? "이 페이지의 판단 기준" : "Decision rule for this page"}</h3>
        <p>{evidence.decision}</p>
      </section>
      <p>
        {isKo ? "원본과 결과 파일은 " : "The source and output files are published in the "}
        <Link href={`/${locale}/image-compression-benchmark-results`}>
          {isKo ? "압축 테스트 결과 페이지" : "compression benchmark"}
        </Link>
        {isKo ? "에서 직접 비교할 수 있습니다. 이미지 파일명과 alt 텍스트는 페이지 맥락에 맞게 설명적으로 작성하는 것을 권장합니다. " : ". Use descriptive filenames and alt text that match the page context. "}
        <a href="https://developers.google.com/search/docs/appearance/google-images" target="_blank" rel="noreferrer">
          {isKo ? "Google 이미지 SEO 가이드" : "Google Image SEO guidance"}
        </a>
      </p>
    </section>
  );
}
