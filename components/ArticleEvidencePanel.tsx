import Link from "next/link";
import type { ArticleSlug } from "@/content/articles";
import {
  benchmarkAssets,
  benchmarkScenarios,
  reductionPercent,
} from "@/content/benchmark";
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
const photo70Reduction = reductionPercent(
  benchmarkAssets.photo.sourceBytes,
  benchmarkAssets.photo.outputs[1].bytes
).toFixed(1);
const photo80Reduction = reductionPercent(
  benchmarkAssets.photo.sourceBytes,
  benchmarkAssets.photo.outputs[2].bytes
).toFixed(1);
const screenshotReduction = reductionPercent(
  benchmarkAssets.screenshot.sourceBytes,
  benchmarkAssets.screenshot.outputBytes
).toFixed(1);
const transparentReduction = reductionPercent(
  benchmarkAssets.transparent.sourceBytes,
  benchmarkAssets.transparent.outputBytes
).toFixed(1);
const workspace80Reduction = reductionPercent(
  benchmarkAssets.workspace.sourceBytes,
  benchmarkAssets.workspace.outputs[1].bytes
).toFixed(1);
const scenarioReduction = (key: (typeof benchmarkScenarios)[number]["key"]) => {
  const scenario = benchmarkScenarios.find((item) => item.key === key);
  return scenario
    ? reductionPercent(scenario.sourceBytes, scenario.outputBytes).toFixed(1)
    : "0.0";
};

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
    "image-quality-60-70-80-comparison": {
      title: "품질 60·70·80 실측 차이",
      observation: `사진 테스트 원본은 WebP 품질 60에서 ${photo60Reduction}%, 70에서 ${photo70Reduction}%, 80에서 ${photo80Reduction}% 작아졌습니다. 감소율은 모두 컸지만, 품질 80은 그림자와 질감 검수에 더 보수적인 출발점이었습니다.`,
      failureCase: "품질값을 숫자만 보고 고르면 작은 글자, 인물 얼굴, 상품 질감 같은 핵심 정보가 손상될 수 있습니다. 썸네일에서 괜찮아 보인 결과가 상세 화면에서는 부족할 수 있습니다.",
      decision: "중요 이미지는 80에서 시작하고, 표시 크기와 게시 목적이 가벼울 때 70 또는 60을 비교합니다. 최종 선택은 감소율보다 실제 화면에서 핵심 정보가 유지되는지입니다.",
    },
    "mobile-photo-compression-before-upload": {
      title: "모바일 사진 묶음의 절감 규모",
      observation: `고정 사진 원본 8장을 블로그 본문 사진처럼 품질 80 WebP로 처리한 시나리오는 ${scenarioReduction("blog-body-photos-q80")}% 절감을 보였습니다. 스마트폰 원본이 여러 장일수록 압축 전후의 체감 차이가 커집니다.`,
      failureCase: "모바일 사진을 무조건 낮은 품질로 줄이면 증빙 사진의 작은 글자나 어두운 영역이 식별되지 않을 수 있습니다. 오래된 휴대폰에서는 대량 처리 중 시간이 오래 걸릴 수도 있습니다.",
      decision: "원본 보관용과 업로드용 사본을 나누고, 중요한 사진은 80 전후에서 먼저 확인합니다. 대량 사진은 목적이 같은 묶음부터 처리한 뒤 결과를 나누어 검수합니다.",
    },
    "webp-conversion-seo-guide": {
      title: "WebP는 속도 개선의 재료입니다",
      observation: `사진 원본은 품질 80 WebP에서 ${photo80Reduction}% 작아졌지만, UI 캡처는 ${screenshotReduction}% 절감에 그쳤습니다. WebP 효과는 이미지 종류에 따라 달라지므로 SEO 판단도 파일 형식 하나로 끝나지 않습니다.`,
      failureCase: "WebP로 바꾸었다는 이유만으로 이미지 SEO가 해결되지는 않습니다. 파일명, alt 텍스트, 주변 문맥, 표시 크기, 실제 페이지 로딩이 함께 맞아야 합니다.",
      decision: "WebP는 페이지 속도를 돕는 선택지로 사용하고, 결과가 원본보다 크거나 플랫폼이 지원하지 않으면 원본 포맷을 유지합니다. 이미지 설명과 문맥도 함께 정리합니다.",
    },
    "naver-blog-image-size-guide": {
      title: "사진 많은 글의 모바일 검수 기준",
      observation: `본문 사진 8장 품질 70 WebP 시나리오는 ${scenarioReduction("blog-body-photos-q70")}% 절감을 보였습니다. 사진이 많은 글에서는 한 장보다 전체 묶음의 용량이 모바일 체감 속도에 더 크게 작용합니다.`,
      failureCase: "블로그 플랫폼 재압축을 고려하지 않고 너무 낮은 품질로 올리면 업로드 후 이미지가 더 흐려질 수 있습니다. 대표 이미지와 캡처 이미지를 같은 기준으로 처리하는 것도 위험합니다.",
      decision: "대표 이미지는 품질을 보수적으로 두고, 반복 본문 이미지는 표시 폭에 맞춰 줄입니다. 업로드 후 모바일 화면에서 대표 이미지, 본문 사진, 캡처를 각각 확인합니다.",
    },
    "google-image-seo-alt-filename-guide": {
      title: "이미지 SEO는 파일과 문맥의 조합입니다",
      observation: `사진 품질 80 WebP는 ${photo80Reduction}% 절감됐지만, 검색엔진이 이해하는 정보는 파일 크기만이 아닙니다. 파일명, alt 텍스트, 주변 문단이 이미지의 의미를 함께 설명해야 합니다.`,
      failureCase: "파일명과 alt 텍스트에 키워드만 반복하면 사용자에게 도움이 되지 않고, 이미지가 본문과 어긋나면 콘텐츠 품질 신호도 약해집니다.",
      decision: "압축 후에는 파일명을 설명적으로 정리하고, alt 텍스트는 이미지가 전달하는 정보나 기능을 문장으로 작성합니다. 장식 이미지는 과도하게 설명하지 않습니다.",
    },
    "product-thumbnail-compression-checklist": {
      title: "목록 썸네일 묶음 절감 기록",
      observation: `상품 목록 썸네일 24장을 품질 60 WebP로 처리한 시나리오는 ${scenarioReduction("product-grid-thumbnails-q60")}% 절감을 보였습니다. 목록 페이지처럼 이미지가 많은 화면에서는 썸네일 최적화 효과가 큽니다.`,
      failureCase: "썸네일이 작다는 이유로 무조건 낮은 품질을 쓰면 상품 경계, 흰 배경, 색상 차이가 무너질 수 있습니다. 대표 상품 이미지는 일반 묶음보다 더 꼼꼼히 봐야 합니다.",
      decision: "썸네일은 상세 이미지와 분리해 작은 표시 크기에 맞추고, 카테고리 목록 전체 화면에서 색상과 경계가 자연스러운지 확인합니다.",
    },
    "website-speed-core-web-vitals-images": {
      title: "성능 개선은 이미지 묶음에서 커집니다",
      observation: `블로그 사진 8장 품질 80 시나리오는 ${scenarioReduction("blog-body-photos-q80")}% 절감, 상품 목록 24장 시나리오는 ${scenarioReduction("product-grid-thumbnails-q60")}% 절감을 보였습니다. 이미지가 많은 페이지일수록 압축과 리사이즈의 효과가 커집니다.`,
      failureCase: "파일만 줄이고 이미지 표시 크기, 너비와 높이, 지연 로딩 위치를 관리하지 않으면 Core Web Vitals 개선이 제한적일 수 있습니다.",
      decision: "첫 화면의 LCP 후보 이미지를 먼저 줄이고, 아래쪽 반복 이미지는 지연 로딩과 표시 크기를 함께 확인합니다. 압축 결과는 실제 페이지에서 다시 검증합니다.",
    },
    "transparent-png-webp-guide": {
      title: "투명 그래픽은 절감률보다 가장자리입니다",
      observation: `투명 그래픽 고정 자산은 품질 80 WebP에서 ${transparentReduction}% 작아졌습니다. 절감 폭이 사진보다 작기 때문에 로고와 누끼 이미지는 용량보다 투명도와 가장자리 품질을 우선해야 합니다.`,
      failureCase: "투명 PNG를 JPG로 바꾸면 알파 채널이 사라집니다. 작은 아이콘은 WebP로 바꿔도 절감 이득이 작고, 오히려 가장자리 번짐이 더 눈에 띌 수 있습니다.",
      decision: "투명도 유지가 필요한 이미지는 PNG와 투명 WebP를 비교하고, 밝은 배경과 어두운 배경에서 모두 검수한 뒤 더 안정적인 결과를 사용합니다.",
    },
    "social-media-upload-image-compression": {
      title: "SNS 재압축을 고려한 테스트 기준",
      observation: `사진 원본은 품질 70 WebP에서 ${photo70Reduction}% 작아졌습니다. 다만 SNS는 업로드 후 재압축이 발생할 수 있으므로, 절감률이 높아도 글자 카드와 인물 사진은 한 단계 보수적으로 확인해야 합니다.`,
      failureCase: "카드뉴스나 이벤트 배너를 낮은 품질로 줄이면 플랫폼 재압축 후 글자 경계가 흐려질 수 있습니다. 비율을 맞추지 않고 압축하면 업로드 후 중요한 부분이 잘릴 수도 있습니다.",
      decision: "먼저 게시 비율에 맞춰 크롭하고, 피드 사진은 75~85에서 시작합니다. 텍스트가 있는 이미지는 업로드 화면에서 작은 글자 선명도를 최종 기준으로 삼습니다.",
    },
    "email-attachment-image-size-guide": {
      title: "첨부용 보기 사본의 절감 규모",
      observation: `이메일 첨부 사진 10장을 JPEG 품질 80으로 처리한 시나리오는 ${scenarioReduction("email-attachments-q80")}% 절감을 보였습니다. 여러 장을 보낼 때는 한 장의 절감보다 전체 첨부 용량 감소가 중요합니다.`,
      failureCase: "WebP는 효율적이지만 일부 업무 환경에서 열리지 않을 수 있습니다. 인쇄나 디자인용 원본을 압축본으로 대체하면 나중에 품질 손실 문제가 생깁니다.",
      decision: "이메일 확인용은 JPG 보기 사본을 만들고, 원본이 필요한 작업은 압축하지 않은 파일이나 별도 전달 방식을 사용합니다. 첨부 전 전체 용량과 파일명 순서를 함께 확인합니다.",
    },
    "portfolio-image-optimization-guide": {
      title: "포트폴리오 대표 이미지의 보수적 절감",
      observation: `사진형 테스트 자산은 JPEG 품질 80에서 ${workspace80Reduction}% 작아졌습니다. 포트폴리오와 상품 상세처럼 신뢰가 중요한 이미지는 큰 절감률보다 질감과 색상 유지가 더 중요합니다.`,
      failureCase: "대표 작품 이미지를 썸네일 기준으로 강하게 압축하면 첫인상이 약해질 수 있습니다. UI 캡처는 작은 글자와 얇은 선이 흐려지는 문제가 특히 잘 보입니다.",
      decision: "대표 작품은 품질 80 이상에서 시작하고, 목록용 썸네일과 상세용 이미지를 분리합니다. UI 캡처는 PNG와 WebP를 비교하며 글자 선명도를 우선합니다.",
    },
    "batch-image-compression-workflow": {
      title: "일괄 처리 전 샘플 기준",
      observation: `본문 사진 8장 품질 80 시나리오는 ${scenarioReduction("blog-body-photos-q80")}% 절감됐고, 상품 목록 24장 품질 60 시나리오는 ${scenarioReduction("product-grid-thumbnails-q60")}% 절감됐습니다. 목적별 묶음에 따라 적절한 품질값이 달라집니다.`,
      failureCase: "모든 이미지를 한 품질로 처리하면 캡처는 흐려지고, 썸네일은 과하게 커지고, 상세 이미지는 신뢰를 잃을 수 있습니다. 일괄 압축일수록 예외 파일 검수가 중요합니다.",
      decision: "대표 이미지, 본문 사진, 캡처, 썸네일을 나누고 샘플 몇 장으로 기준을 정합니다. 처리 후 원본보다 큰 결과와 흐린 캡처를 따로 확인합니다.",
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
    "image-quality-60-70-80-comparison": {
      title: "Measured difference between quality 60, 70, and 80",
      observation: `The photo source was ${photo60Reduction}% smaller at WebP quality 60, ${photo70Reduction}% smaller at quality 70, and ${photo80Reduction}% smaller at quality 80. Quality 80 remained the safer starting point for texture and shadow review.`,
      failureCase: "Choosing by number alone can damage small text, faces, product texture, or gradients. A thumbnail result may still be too soft for a detail page.",
      decision: "Start important images at quality 80, then compare 70 or 60 when the displayed size and publishing purpose allow it. The final criterion is whether the important information survives.",
    },
    "mobile-photo-compression-before-upload": {
      title: "Savings scale for mobile photo batches",
      observation: `The 8-photo blog-body scenario using WebP quality 80 showed a ${scenarioReduction("blog-body-photos-q80")}% reduction. The more phone originals a page uses, the more visible the total weight difference becomes.`,
      failureCase: "Compressing phone photos too aggressively can make proof text, dark areas, or important details hard to identify. Large batches can also take longer on older devices.",
      decision: "Keep originals separate from upload copies, start important files around quality 80, and process large batches in purpose-based groups.",
    },
    "webp-conversion-seo-guide": {
      title: "WebP is a performance ingredient",
      observation: `The photo source was ${photo80Reduction}% smaller at quality 80 WebP, while the UI screenshot was ${screenshotReduction}% smaller. WebP benefits vary by image type, so SEO work cannot stop at format conversion.`,
      failureCase: "Converting to WebP does not fix weak filenames, missing alt text, unrelated surrounding content, oversized dimensions, or uncrawlable image URLs.",
      decision: "Use WebP to support speed, keep the original format when WebP is larger or unsupported, and improve image context at the same time.",
    },
    "naver-blog-image-size-guide": {
      title: "Mobile review for photo-heavy posts",
      observation: `The 8-photo quality 70 scenario showed a ${scenarioReduction("blog-body-photos-q70")}% reduction. In photo-heavy posts, total image weight matters more than a single-file result.`,
      failureCase: "If a platform recompresses images after upload, very low pre-compression can make the final post look worse. Hero images and screenshots should not use the same setting blindly.",
      decision: "Keep the lead image more conservative, resize repeated body images to the reading width, and review the final mobile post after upload.",
    },
    "google-image-seo-alt-filename-guide": {
      title: "Image SEO combines files and context",
      observation: `The quality 80 WebP photo output was ${photo80Reduction}% smaller, but search engines also use filenames, alt text, surrounding paragraphs, and page context to understand images.`,
      failureCase: "Keyword-stuffed alt text and unrelated images weaken usefulness. Smaller files do not compensate for unclear image meaning.",
      decision: "After compression, use descriptive filenames and write alt text that explains the image's information or function in the page.",
    },
    "product-thumbnail-compression-checklist": {
      title: "Measured savings for thumbnail grids",
      observation: `The 24-thumbnail quality 60 WebP scenario showed a ${scenarioReduction("product-grid-thumbnails-q60")}% reduction. Thumbnail optimization matters because grid pages load many images at once.`,
      failureCase: "Low quality can damage product edges, white backgrounds, and color differences. Featured products need more review than ordinary grid items.",
      decision: "Create separate thumbnail files at the displayed grid size and review color and edges in the full category page.",
    },
    "website-speed-core-web-vitals-images": {
      title: "Performance gains grow with image groups",
      observation: `The 8-photo quality 80 scenario showed a ${scenarioReduction("blog-body-photos-q80")}% reduction, while the 24-thumbnail scenario showed ${scenarioReduction("product-grid-thumbnails-q60")}% reduction. Image-heavy pages benefit most from systematic optimization.`,
      failureCase: "Compression alone cannot fix missing dimensions, oversized display slots, poor lazy loading, or an unoptimized LCP image.",
      decision: "Optimize the likely LCP image first, then handle repeated below-the-fold images with resizing and sensible lazy loading.",
    },
    "transparent-png-webp-guide": {
      title: "Transparent graphics need edge review",
      observation: `The transparent test asset was ${transparentReduction}% smaller at WebP quality 80. The reduction was smaller than the photo result, so alpha preservation and edge quality matter more than raw savings.`,
      failureCase: "JPG removes transparency, and tiny graphics may save very little after conversion while becoming visibly softer.",
      decision: "Compare PNG with transparent WebP on light and dark backgrounds, then keep the more stable result even if it is not the smallest file.",
    },
    "social-media-upload-image-compression": {
      title: "Social uploads need room for recompression",
      observation: `The photo source was ${photo70Reduction}% smaller at WebP quality 70. Social platforms may recompress after upload, so text cards and portraits need more conservative review than the reduction number alone suggests.`,
      failureCase: "Text-heavy cards can become soft after two compression passes, and images compressed before cropping may lose important subjects when the platform crops them.",
      decision: "Crop to the target ratio first, start feed photos around quality 75 to 85, and judge text images in the final upload view.",
    },
    "email-attachment-image-size-guide": {
      title: "Savings for viewing-copy attachments",
      observation: `The 10-photo email attachment scenario using JPEG quality 80 showed a ${scenarioReduction("email-attachments-q80")}% reduction. For email, the total attachment size often matters more than a single-image number.`,
      failureCase: "WebP may not open in older office workflows, and compressed copies should not replace originals needed for print or design.",
      decision: "Use JPG viewing copies when compatibility matters, keep originals for high-quality work, and review total attachment size before sending.",
    },
    "portfolio-image-optimization-guide": {
      title: "Conservative savings for portfolio visuals",
      observation: `The photographic workspace asset was ${workspace80Reduction}% smaller at JPEG quality 80. Portfolio and product-detail images should preserve trust details even when large reductions are possible.`,
      failureCase: "Compressing featured work like thumbnails can weaken the first impression. UI screenshots can also lose small type and thin lines quickly.",
      decision: "Start featured work at quality 80 or higher, prepare separate thumbnail and detail files, and review UI screenshots for text clarity.",
    },
    "batch-image-compression-workflow": {
      title: "Sample settings before batch processing",
      observation: `The 8-photo quality 80 scenario showed ${scenarioReduction("blog-body-photos-q80")}% reduction, while the 24-thumbnail scenario showed ${scenarioReduction("product-grid-thumbnails-q60")}% reduction. Different groups need different settings.`,
      failureCase: "One setting for all images can blur screenshots, leave thumbnails too heavy, or damage important detail images.",
      decision: "Group files by purpose, test a representative sample, then review larger-than-original outputs and soft screenshots after processing.",
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
