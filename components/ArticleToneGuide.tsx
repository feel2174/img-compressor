import type { ArticleSlug } from "@/content/articles";
import type { Locale } from "@/i18n";

type ToneGuide = {
  plainTitle: string;
  plainBody: string;
  businessTitle: string;
  businessBody: string;
  actionTitle: string;
  actionItems: string[];
};

const toneGuides: Record<Locale, Partial<Record<ArticleSlug, ToneGuide>>> = {
  ko: {
    "image-compression-benchmark-results": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "압축 품질 숫자는 정답표가 아닙니다. 같은 품질 80이라도 사진, 캡처, 투명 이미지에서 보이는 문제점이 다릅니다. 이 페이지는 실제 파일을 내려받아 비교할 수 있는 기준표 역할을 합니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "이미지 최적화 정책은 파일 크기만으로 결정하지 않습니다. 게시 위치, 이미지 역할, 플랫폼 호환성, 시각 검수 항목을 함께 기록하고 품질 기준을 운영 문서로 남기는 흐름이 적합합니다.",
      actionTitle: "이 페이지에서 확인할 것",
      actionItems: [
        "품질 60·70·80의 용량 차이",
        "텍스트 캡처와 투명 그래픽의 손상 지점",
        "상품·블로그·썸네일에 적용할 시작 품질",
      ],
    },
    "blog-image-optimization-checklist": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "블로그 사진은 원본 그대로 올리는 것보다 글 폭에 맞게 줄인 사본을 쓰는 편이 좋습니다. 독자는 큰 원본보다 빠르게 열리고 또렷한 이미지를 더 편하게 봅니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "콘텐츠 발행 전 이미지 검수는 대표 이미지, 본문 이미지, 캡처 이미지로 분리합니다. 각 그룹은 파일명, alt 텍스트, 표시 크기, 모바일 선명도 기준을 통과한 뒤 게시합니다.",
      actionTitle: "발행 전 기준",
      actionItems: [
        "본문 이미지는 실제 표시 폭 기준으로 리사이즈",
        "캡처 이미지는 글자 선명도 우선 검수",
        "대표 이미지는 공유 미리보기와 모바일 첫 화면 확인",
      ],
    },
    "ecommerce-product-image-compression-guide": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "상품 이미지는 빠르게 떠야 하지만, 색감과 질감이 무너지면 안 됩니다. 썸네일은 가볍게, 상세 이미지는 더 선명하게 나누어 관리하는 게 핵심입니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "상품 이미지 최적화는 구매 판단 정보 보존을 우선합니다. 목록 썸네일과 상세 컷은 별도 파일로 생성하고, 색상·라벨·구성품 식별 가능성을 모바일 상품 페이지에서 확인합니다.",
      actionTitle: "상품 이미지 검수 항목",
      actionItems: [
        "상세 컷과 목록 썸네일 파일 분리",
        "흰 배경 노이즈와 상품 경계 흐림 확인",
        "색상 옵션 이미지는 같은 기준으로 일괄 처리",
      ],
    },
    "jpg-png-webp-format-choice": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "사진은 JPG나 WebP가 잘 맞고, 투명 로고나 캡처는 PNG 또는 투명 WebP를 봐야 합니다. 포맷은 유행보다 이미지 역할에 맞춰 고르는 게 안전합니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "최종 포맷은 파일 크기, 투명도 유지, 텍스트 선명도, 업로드 대상 호환성을 기준으로 결정합니다. 외부 제출용과 웹 게시용 파일은 서로 다른 포맷 정책을 적용할 수 있습니다.",
      actionTitle: "포맷 결정 기준",
      actionItems: [
        "사진형 이미지는 JPG와 WebP 비교",
        "투명 자산은 PNG와 투명 WebP 비교",
        "제출·메일·협업 파일은 호환성 우선",
      ],
    },
    "image-quality-60-70-80-comparison": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "품질 60은 작지만 거칠 수 있고, 80은 조금 더 크지만 안정적입니다. 중요한 이미지는 80에서 시작하고, 썸네일이나 가벼운 본문 이미지는 70이나 60을 비교하면 됩니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "품질값은 이미지 유형별 출발값으로 관리합니다. 대표 이미지와 상품 상세는 보수적으로, 반복 썸네일은 용량 절감을 우선하되 결과 검수 기준을 문서화합니다.",
      actionTitle: "품질값 적용 기준",
      actionItems: [
        "대표·상품·포트폴리오 이미지는 80 이상에서 시작",
        "일반 본문 이미지는 70 전후 비교",
        "썸네일은 60부터 검토하되 경계와 색상 확인",
      ],
    },
    "mobile-photo-compression-before-upload": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "휴대폰 사진은 웹에 올리기엔 너무 큰 경우가 많습니다. 원본은 보관하고, 업로드용 사본만 작게 만들면 속도와 관리가 좋아집니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "모바일 사진은 보관용 원본과 게시용 사본을 분리합니다. 후기, 증빙, 썸네일처럼 목적별 묶음을 나눈 뒤 기기 성능과 업로드 제한을 고려해 처리합니다.",
      actionTitle: "모바일 처리 기준",
      actionItems: [
        "원본 보관용과 업로드용 사본 분리",
        "증빙 사진은 글자와 어두운 영역 식별 가능성 확인",
        "대량 이미지는 같은 목적별로 나누어 처리",
      ],
    },
    "webp-conversion-seo-guide": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "WebP로 바꾸면 파일이 작아질 수 있지만, 그것만으로 SEO가 끝나지는 않습니다. 빠른 이미지, 설명이 좋은 파일명, 본문과 맞는 alt 텍스트가 함께 필요합니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "WebP 적용은 성능 개선 항목 중 하나로 관리합니다. 파일명, alt 텍스트, 표시 크기, 이미지 주변 문맥, 원본 포맷 fallback 여부를 함께 검수합니다.",
      actionTitle: "SEO 검수 기준",
      actionItems: [
        "WebP 결과가 원본보다 작은지 확인",
        "파일명과 alt 텍스트를 페이지 문맥에 맞게 작성",
        "외부 플랫폼은 JPG/PNG 대체본 유지",
      ],
    },
    "website-speed-core-web-vitals-images": {
      plainTitle: "쉽게 말하면",
      plainBody:
        "이미지 용량만 줄여도 도움이 되지만, 첫 화면 이미지가 늦게 발견되거나 크기 정보가 없으면 여전히 느리게 느껴집니다.",
      businessTitle: "비즈니스 기준",
      businessBody:
        "성능 최적화는 LCP 후보 이미지, 표시 크기, width/height, lazy loading 위치, 캐싱을 함께 관리합니다. 압축 파일 생성은 전체 성능 관리의 시작 단계입니다.",
      actionTitle: "성능 적용 기준",
      actionItems: [
        "첫 화면 대표 이미지를 가장 먼저 최적화",
        "이미지 width와 height를 명시해 CLS 방지",
        "아래쪽 반복 이미지는 검색 친화적으로 지연 로딩",
      ],
    },
  },
  en: {
    "image-compression-benchmark-results": {
      plainTitle: "Plain-language summary",
      plainBody:
        "A quality number is not a universal answer. Quality 80 can behave differently on a photo, screenshot, or transparent graphic. This page gives visitors real files and measurements to compare.",
      businessTitle: "Business rule",
      businessBody:
        "Image optimization standards should be based on publishing context, image role, platform compatibility, and visual review criteria, not file size alone.",
      actionTitle: "What to check here",
      actionItems: [
        "Size differences at quality 60, 70, and 80",
        "Failure points in screenshots and transparent assets",
        "Starting quality for products, blogs, and thumbnails",
      ],
    },
    "blog-image-optimization-checklist": {
      plainTitle: "Plain-language summary",
      plainBody:
        "Blog images usually work better as publishing copies than full originals. Readers benefit from images that open quickly and remain clear at the article width.",
      businessTitle: "Business rule",
      businessBody:
        "Before publishing, separate hero images, body images, and screenshots. Each group needs checks for filename, alt text, displayed size, and mobile clarity.",
      actionTitle: "Pre-publishing checks",
      actionItems: [
        "Resize body images to the displayed width",
        "Review screenshots for text clarity",
        "Check hero images in sharing previews and mobile view",
      ],
    },
    "ecommerce-product-image-compression-guide": {
      plainTitle: "Plain-language summary",
      plainBody:
        "Product images should load quickly without losing the details that help shoppers trust the product. Thumbnails and detail images need separate files.",
      businessTitle: "Business rule",
      businessBody:
        "Product optimization should preserve purchase signals. Review color, texture, labels, and included components in the mobile product page after compression.",
      actionTitle: "Product review points",
      actionItems: [
        "Separate detail images from grid thumbnails",
        "Check white-background noise and product edges",
        "Use consistent settings for color variants",
      ],
    },
    "jpg-png-webp-format-choice": {
      plainTitle: "Plain-language summary",
      plainBody:
        "Photos usually fit JPG or WebP. Transparent logos and screenshots need PNG or transparent WebP. Choose the format by job, not by trend.",
      businessTitle: "Business rule",
      businessBody:
        "The final format should be chosen by file size, transparency, text clarity, and destination compatibility. Web publishing and external submission can use different format policies.",
      actionTitle: "Format decision points",
      actionItems: [
        "Compare JPG and WebP for photo assets",
        "Compare PNG and transparent WebP for alpha assets",
        "Prioritize compatibility for email and submission workflows",
      ],
    },
    "image-quality-60-70-80-comparison": {
      plainTitle: "Plain-language summary",
      plainBody:
        "Quality 60 is smaller but can be rougher. Quality 80 is larger but safer. Start important images at 80 and compare 70 or 60 for lighter contexts.",
      businessTitle: "Business rule",
      businessBody:
        "Treat quality values as starting points by image type. Keep hero and product-detail images conservative, while managing repeated thumbnails for size reduction with a documented review rule.",
      actionTitle: "Quality starting points",
      actionItems: [
        "Start hero, product, and portfolio images at 80 or higher",
        "Compare general body images around 70",
        "Test thumbnails from 60 while checking edges and color",
      ],
    },
    "mobile-photo-compression-before-upload": {
      plainTitle: "Plain-language summary",
      plainBody:
        "Phone photos are often larger than a web page needs. Keep the original and create a smaller upload copy for faster publishing.",
      businessTitle: "Business rule",
      businessBody:
        "Separate storage originals from publishing copies. Group mobile photos by purpose such as review images, proof images, and thumbnails before processing.",
      actionTitle: "Mobile workflow rules",
      actionItems: [
        "Keep originals separate from upload copies",
        "Check proof photos for readable text and dark areas",
        "Process large batches by purpose-based groups",
      ],
    },
    "webp-conversion-seo-guide": {
      plainTitle: "Plain-language summary",
      plainBody:
        "WebP can reduce file size, but SEO does not end with conversion. Fast images, descriptive filenames, useful alt text, and matching page context all matter.",
      businessTitle: "Business rule",
      businessBody:
        "Manage WebP as one performance improvement. Review filenames, alt text, displayed dimensions, surrounding content, and fallback format needs together.",
      actionTitle: "SEO review points",
      actionItems: [
        "Confirm the WebP result is smaller than the original",
        "Write filenames and alt text for the page context",
        "Keep JPG or PNG fallbacks for external platforms",
      ],
    },
    "website-speed-core-web-vitals-images": {
      plainTitle: "Plain-language summary",
      plainBody:
        "Reducing file size helps, but a page can still feel slow if the hero image is discovered late or dimensions are missing.",
      businessTitle: "Business rule",
      businessBody:
        "Performance work should manage the LCP candidate image, displayed size, width and height attributes, lazy-loading position, and caching together.",
      actionTitle: "Performance rules",
      actionItems: [
        "Optimize above-the-fold hero images first",
        "Set width and height to reduce CLS",
        "Use crawlable lazy loading for repeated lower-page images",
      ],
    },
  },
};

export default function ArticleToneGuide({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ArticleSlug;
}) {
  const guide = toneGuides[locale][slug];
  if (!guide) return null;

  return (
    <section className="xp-tone-guide" aria-labelledby={`tone-guide-${slug}`}>
      <h2 id={`tone-guide-${slug}`}>{guide.actionTitle}</h2>
      <div className="xp-tone-grid">
        <article>
          <h3>{guide.plainTitle}</h3>
          <p>{guide.plainBody}</p>
        </article>
        <article>
          <h3>{guide.businessTitle}</h3>
          <p>{guide.businessBody}</p>
        </article>
      </div>
      <ul>
        {guide.actionItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
