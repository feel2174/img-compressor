import type { Locale } from "@/i18n";
import { articlePages, articleSlugs, type ArticlePage, type ArticleSlug } from "@/content/articles";

export type BaseInfoPageSlug =
  | "about"
  | "guide"
  | "faq"
  | "use-cases"
  | "formats"
  | "privacy"
  | "terms"
  | "contact";

export type InfoPageSlug = BaseInfoPageSlug | ArticleSlug;

export type InfoPageContent = ArticlePage;

export const infoPageSlugs: InfoPageSlug[] = [
  "about",
  "guide",
  "faq",
  "use-cases",
  "formats",
  "privacy",
  "terms",
  "contact",
  ...articleSlugs,
];

export const siteMeta = {
  ko: {
    name: "XP 이미지 압축기",
    description:
      "브라우저에서 이미지를 압축하고 WebP로 변환하는 무료 온라인 이미지 최적화 도구입니다.",
    keywords:
      "이미지 용량 줄이기, 이미지 압축, WebP 변환, 무료 이미지 최적화, JPG 압축, PNG 압축",
  },
  en: {
    name: "XP Image Compressor",
    description:
      "A free online image optimization tool for browser-based compression and WebP conversion.",
    keywords:
      "image compression, WebP converter, free image optimizer, JPG compression, PNG compression",
  },
} satisfies Record<Locale, { name: string; description: string; keywords: string }>;

export const legalPages = {
  ko: {
    about: {
      title: "사이트 소개",
      description:
        "XP 이미지 압축기가 제공하는 이미지 최적화 기능과 운영 방향을 소개합니다.",
      label: "About",
      paragraphs: [
        "XP 이미지 압축기는 웹사이트 운영자, 블로거, 디자이너, 쇼핑몰 운영자처럼 이미지를 자주 다루는 사용자를 위해 만든 무료 온라인 유틸리티입니다.",
        "이미지 파일이 너무 크면 페이지 로딩 속도가 느려지고 검색엔진 최적화에도 불리할 수 있습니다. 이 사이트는 별도 프로그램 설치 없이 브라우저에서 이미지 용량을 줄이고 WebP 파일을 만들 수 있도록 돕습니다.",
        "클래식 데스크톱 스타일 화면은 친숙한 프로그램처럼 사용할 수 있도록 설계했습니다. 메인 기능은 이미지 압축과 WebP 변환이며, 추후 리사이즈, 포맷 변환, 메타데이터 정리 같은 기능을 같은 메뉴 구조 안에 추가할 예정입니다.",
      ],
      bullets: [
        "브라우저 기반 이미지 압축",
        "WebP 변환 및 다운로드",
        "여러 이미지 일괄 처리",
        "서버 업로드 없는 개인정보 보호 중심 설계",
      ],
    },
    guide: {
      title: "이미지 최적화 가이드",
      description:
        "이미지 용량 줄이기, WebP 변환, 품질 설정을 언제 어떻게 사용하는지 안내합니다.",
      label: "Guide",
      paragraphs: [
        "웹사이트에 이미지를 올릴 때는 원본 화질을 그대로 유지하는 것보다 화면에 필요한 크기와 용도에 맞게 최적화하는 것이 중요합니다. 너무 큰 이미지는 첫 화면 로딩을 늦추고 모바일 데이터 사용량을 늘릴 수 있습니다.",
        "일반 사진은 품질을 75%에서 85% 사이로 낮춰도 화면에서는 큰 차이가 느껴지지 않는 경우가 많습니다. 상품 사진이나 포트폴리오처럼 디테일이 중요한 이미지는 품질을 조금 높게 두고, 썸네일이나 블로그 본문 이미지는 더 과감하게 줄이는 방식이 좋습니다.",
        "WebP는 JPEG나 PNG보다 작은 파일 크기를 만들 수 있는 최신 이미지 형식입니다. 대부분의 최신 브라우저에서 지원되므로 웹 게시용 이미지에는 WebP 변환을 우선 검토할 만합니다. 다만 일부 이미지에서는 원본보다 커질 수 있으므로 결과 용량을 비교한 뒤 다운로드하는 것이 안전합니다.",
        "이 도구는 이미지를 서버로 업로드하지 않고 브라우저 안에서 처리합니다. 개인 사진이나 작업 중인 이미지를 빠르게 줄이고 싶을 때, 별도 편집 프로그램을 설치하지 않아도 결과를 바로 확인할 수 있습니다.",
      ],
      bullets: [
        "웹 본문 이미지는 보통 1200px에서 1920px 사이면 충분합니다.",
        "품질 80% 전후는 용량과 시각 품질의 균형점으로 쓰기 좋습니다.",
        "투명 배경이 중요한 PNG는 결과를 확인한 뒤 WebP 전환 여부를 결정하세요.",
        "중요한 원본 파일은 압축 전 별도로 보관하는 것이 좋습니다.",
      ],
    },
    faq: {
      title: "자주 묻는 질문",
      description:
        "이미지 압축, WebP 변환, 개인정보 보호 방식에 대해 자주 묻는 질문을 정리했습니다.",
      label: "FAQ",
      paragraphs: [
        "아래 질문은 이미지 최적화 도구를 처음 사용하는 사용자가 가장 자주 확인하는 내용입니다. 압축 결과는 원본 이미지의 형식, 해상도, 색상 수, 투명 배경 여부에 따라 달라질 수 있습니다.",
      ],
      bullets: [
        "작업 전 원본 파일은 별도로 보관하는 것이 좋습니다.",
        "결과 용량이 원본보다 클 경우 원본을 유지하는 방식이 더 안전합니다.",
        "웹 게시용 이미지는 용도에 맞는 크기와 품질로 조정하는 것이 중요합니다.",
      ],
      faqs: [
        {
          question: "이미지가 서버로 업로드되나요?",
          answer:
            "아니요. 이미지 압축과 WebP 변환은 브라우저에서 실행됩니다. 선택한 이미지 파일은 사이트 서버로 전송하거나 저장하지 않습니다.",
        },
        {
          question: "WebP로 변환하면 항상 용량이 줄어드나요?",
          answer:
            "대부분의 웹 이미지에서는 줄어드는 경우가 많지만 항상 그렇지는 않습니다. 이미지 종류에 따라 WebP 결과가 원본보다 커질 수 있으므로 결과 용량을 확인한 뒤 다운로드하는 것이 좋습니다.",
        },
        {
          question: "품질 설정은 어느 정도가 적당한가요?",
          answer:
            "웹 본문 이미지나 블로그 이미지는 75%에서 85% 사이가 무난합니다. 상품 사진이나 포트폴리오처럼 디테일이 중요한 이미지는 더 높은 품질을 선택하세요.",
        },
        {
          question: "여러 이미지를 한 번에 처리할 수 있나요?",
          answer:
            "네. 여러 이미지를 선택하면 순차적으로 압축되며, 결과 목록에서 개별 다운로드 또는 전체 다운로드를 사용할 수 있습니다.",
        },
        {
          question: "PNG 투명 배경도 유지되나요?",
          answer:
            "일반 압축에서는 원본 형식에 따라 투명 배경이 유지될 수 있습니다. WebP도 투명도를 지원하지만, 중요한 디자인 파일은 변환 후 미리보기와 결과 파일을 확인하는 것이 좋습니다.",
        },
        {
          question: "모바일 사진도 압축할 수 있나요?",
          answer:
            "네. 모바일 브라우저에서도 이미지를 선택해 압축할 수 있습니다. 다만 매우 큰 사진을 여러 장 처리하면 기기 성능에 따라 시간이 걸릴 수 있습니다.",
        },
        {
          question: "이미지 최적화가 SEO에 도움이 되나요?",
          answer:
            "이미지 용량을 줄이면 페이지 로딩 속도와 사용자 경험 개선에 도움이 됩니다. 검색 순위는 여러 요소가 함께 작용하지만, 빠른 로딩과 적절한 이미지 크기는 웹사이트 품질 관리에 중요한 요소입니다.",
        },
      ],
    },
    "use-cases": {
      title: "이미지 압축 사용 사례",
      description:
        "블로그, 쇼핑몰, 포트폴리오, SNS 업로드처럼 상황별 이미지 최적화 방법을 안내합니다.",
      label: "Use Cases",
      paragraphs: [
        "이미지 압축은 단순히 파일 크기를 줄이는 작업이 아니라, 사용 목적에 맞게 로딩 속도와 시각 품질의 균형을 맞추는 과정입니다. 같은 사진이라도 블로그 본문, 상품 상세 페이지, 썸네일, 포트폴리오 대표 이미지에 필요한 설정은 달라질 수 있습니다.",
        "블로그나 매거진형 콘텐츠에서는 본문 폭에 맞춰 이미지를 줄이고 품질을 75%에서 85% 정도로 설정하는 방식이 효율적입니다. 방문자는 원본 해상도보다 빠르게 열리는 이미지를 더 자연스럽게 경험합니다.",
        "쇼핑몰 상품 사진은 디테일과 색감이 중요하므로 품질을 너무 낮추지 않는 것이 좋습니다. 대신 최대 너비를 실제 상세 페이지 영역에 맞추고, 썸네일은 별도로 더 작은 크기로 압축하면 목록 페이지 속도를 개선할 수 있습니다.",
        "포트폴리오나 디자인 시안은 품질을 높게 유지하되 WebP 결과를 함께 비교해 보는 것이 좋습니다. 파일 크기를 줄이면서도 시각 품질이 유지된다면, 프로젝트 소개 페이지의 체감 속도를 높일 수 있습니다.",
      ],
      bullets: [
        "블로그 본문: 1200px 안팎, 품질 75~85% 권장",
        "쇼핑몰 상세: 실제 표시 영역에 맞춘 크기 제한 권장",
        "썸네일: 작은 크기와 강한 압축으로 목록 로딩 개선",
        "포트폴리오: 품질을 높게 두고 WebP 결과를 비교",
      ],
    },
    formats: {
      title: "JPG, PNG, WebP 포맷 선택 가이드",
      description:
        "이미지 유형에 따라 JPG, PNG, WebP 중 어떤 형식을 선택하면 좋은지 설명합니다.",
      label: "Formats",
      paragraphs: [
        "이미지 최적화에서 포맷 선택은 품질 슬라이더만큼 중요합니다. 사진, 로고, 투명 배경 이미지, 스크린샷은 각각 어울리는 형식이 다르며, 잘못된 포맷을 선택하면 용량이 커지거나 디테일이 손상될 수 있습니다.",
        "JPG는 사진처럼 색상이 풍부하고 연속적인 톤이 많은 이미지에 적합합니다. 투명 배경은 지원하지 않지만, 일반 사진을 작은 용량으로 저장하기 좋습니다.",
        "PNG는 투명 배경, 로고, 아이콘, UI 스크린샷처럼 선명한 경계가 중요한 이미지에 적합합니다. 다만 사진을 PNG로 저장하면 파일 크기가 커질 수 있으므로 웹 게시 전 압축 또는 WebP 변환을 검토하는 것이 좋습니다.",
        "WebP는 사진과 투명 이미지를 모두 지원하는 최신 웹 이미지 형식입니다. 대부분의 최신 브라우저에서 지원되며, 동일한 시각 품질에서 JPG나 PNG보다 작은 결과를 만들 수 있는 경우가 많습니다.",
      ],
      bullets: [
        "사진 중심 이미지는 JPG 또는 WebP를 우선 검토하세요.",
        "투명 배경 로고는 PNG 또는 투명 WebP가 적합합니다.",
        "스크린샷은 PNG로 선명도를 유지한 뒤 WebP 결과를 비교하세요.",
        "최종 선택은 원본 용량과 결과 용량을 함께 비교해 결정하세요.",
      ],
    },
    privacy: {
      title: "개인정보처리방침",
      description:
        "이미지 처리, 분석 도구, 광고 쿠키와 관련된 개인정보 처리 기준을 안내합니다.",
      label: "Privacy",
      paragraphs: [
        "이 사이트의 이미지 압축과 WebP 변환 기능은 사용자의 브라우저에서 실행됩니다. 선택한 이미지 파일은 사이트 서버로 업로드하거나 저장하지 않습니다.",
        "서비스 품질 개선을 위해 Vercel Analytics와 같은 분석 도구가 사용될 수 있습니다. 이 분석은 페이지 방문, 기기 환경, 대략적인 사용 흐름을 이해하기 위한 목적으로 사용되며, 사용자가 선택한 이미지 파일 내용은 수집하지 않습니다.",
        "향후 Google AdSense 광고가 적용되면 Google을 포함한 제3자 광고 사업자는 사용자의 이전 방문 기록을 기반으로 광고를 제공하기 위해 쿠키를 사용할 수 있습니다. Google의 광고 쿠키 사용은 이 사이트 또는 인터넷의 다른 사이트 방문 정보를 바탕으로 사용자에게 광고를 제공하는 데 사용될 수 있습니다.",
        "사용자는 Google 광고 설정에서 맞춤 광고를 관리하거나, www.aboutads.info를 통해 일부 제3자 광고 사업자의 맞춤 광고 쿠키 사용을 거부할 수 있습니다. Google 파트너 사이트에서 데이터가 사용되는 방식은 https://policies.google.com/technologies/partner-sites 에서 확인할 수 있습니다.",
        "Google 및 제휴사는 쿠키, 웹 비콘, IP 주소 또는 기타 식별자를 사용해 광고를 제공하고 광고 성과를 측정할 수 있습니다. 이 사이트는 Google이 개인 식별 정보로 인식할 수 있는 정보를 광고 요청에 전달하지 않습니다.",
        "문의 기능이나 이메일 연락처를 통해 사용자가 직접 정보를 제공하는 경우, 해당 정보는 문의 응답과 서비스 개선 목적에 한해 사용됩니다. 법령상 보관 의무가 있거나 분쟁 대응이 필요한 경우를 제외하고 불필요한 개인정보는 보관하지 않습니다.",
      ],
      bullets: [
        "이미지 파일 서버 저장 없음",
        "분석 도구 사용 가능성 고지",
        "Google 광고 쿠키 및 식별자 사용 가능성 고지",
        "문의 정보는 응답 목적 중심으로 처리",
      ],
    },
    terms: {
      title: "이용약관",
      description:
        "XP 이미지 압축기 사용 시 알아야 할 기본 이용 조건과 책임 범위를 안내합니다.",
      label: "Terms",
      paragraphs: [
        "XP 이미지 압축기는 무료로 제공되는 브라우저 기반 이미지 최적화 도구입니다. 사용자는 합법적으로 보유하거나 처리 권한이 있는 이미지 파일에 한해 서비스를 이용해야 합니다.",
        "서비스는 일반적인 이미지 압축과 WebP 변환을 돕기 위한 도구이며, 모든 이미지에서 동일한 압축률이나 품질 결과를 보장하지 않습니다. 중요한 원본 파일은 사용자가 별도로 보관해야 합니다.",
        "사용자는 저작권을 침해하거나 불법적인 목적의 이미지 처리에 이 사이트를 사용해서는 안 됩니다. 서비스 운영자는 안정적인 사용 환경을 위해 기능, 디자인, 정책을 변경할 수 있습니다.",
      ],
      bullets: [
        "권한이 있는 이미지 파일만 사용",
        "결과 품질과 압축률은 파일 특성에 따라 달라짐",
        "중요 원본은 사용자가 직접 백업",
        "불법 또는 권리 침해 목적 사용 금지",
      ],
    },
    contact: {
      title: "문의하기",
      description:
        "기능 제안, 오류 제보, 광고 및 제휴 문의를 위한 안내 페이지입니다.",
      label: "Contact",
      paragraphs: [
        "서비스 이용 중 오류를 발견했거나 추가되면 좋은 이미지 편집 기능이 있다면 운영자에게 알려주세요. 기능 개선 요청은 사이트의 다음 업데이트 우선순위를 정하는 데 참고됩니다.",
        "광고, 제휴, 정책 관련 문의가 있는 경우 사이트 이름, 문의 목적, 회신 가능한 연락처를 포함해 전달해 주세요.",
        "문의 내용은 오류 확인, 기능 개선, 정책 응답, 제휴 검토 목적으로만 사용됩니다. 개인정보 관련 문의에는 가능한 한 빠르게 확인 후 답변하겠습니다.",
      ],
      bullets: [
        "오류 제보",
        "새 기능 제안",
        "광고 및 제휴 문의",
        "개인정보 또는 정책 문의",
      ],
    },
    ...articlePages.ko,
  },
  en: {
    about: {
      title: "About",
      description:
        "Learn about XP Image Compressor, its image optimization features, and product direction.",
      label: "About",
      paragraphs: [
        "XP Image Compressor is a free online utility for website owners, bloggers, designers, and store operators who regularly prepare images for the web.",
        "Large image files can slow down pages and affect search performance. This site helps users reduce image file size and create WebP files directly in the browser without installing extra software.",
        "The classic desktop style is designed to feel like a familiar utility. The main tools are image compression and WebP conversion, with future room for resizing, format conversion, and metadata cleanup.",
      ],
      bullets: [
        "Browser-based image compression",
        "WebP conversion and download",
        "Batch processing for multiple images",
        "Privacy-focused design without image server upload",
      ],
    },
    guide: {
      title: "Image Optimization Guide",
      description:
        "Learn when to use image compression, WebP conversion, and quality settings.",
      label: "Guide",
      paragraphs: [
        "When publishing images on a website, it is often better to optimize them for the screen size and use case instead of uploading the original file unchanged. Oversized images can slow the first page load and increase mobile data usage.",
        "For many photos, lowering quality to the 75% to 85% range keeps the image visually close to the original while reducing file size. Product images and portfolio work may need a higher quality setting, while thumbnails and blog body images can usually be compressed more aggressively.",
        "WebP is a modern image format that can create smaller files than JPEG or PNG. It is supported by most modern browsers, so it is worth considering for web publishing. Some images may become larger after conversion, so comparing the result size before downloading is a good habit.",
        "This tool processes images inside the browser without uploading them to a server. It is useful when you want to quickly reduce private photos or work-in-progress images without installing a separate editor.",
      ],
      bullets: [
        "Body images are often sufficient between 1200px and 1920px wide.",
        "Around 80% quality is a practical balance between file size and visual quality.",
        "For PNG files with important transparency, review the result before choosing WebP.",
        "Keep a separate copy of important original files before compression.",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Common questions about image compression, WebP conversion, and privacy protection.",
      label: "FAQ",
      paragraphs: [
        "These answers cover the questions users most often have before using an image optimization tool. Compression results may vary depending on the original format, resolution, color count, and transparency.",
      ],
      bullets: [
        "Keep a separate copy of important original files.",
        "If the result is larger than the original, keeping the original is usually safer.",
        "For web publishing, choose dimensions and quality based on the actual use case.",
      ],
      faqs: [
        {
          question: "Are my images uploaded to a server?",
          answer:
            "No. Image compression and WebP conversion run in your browser. Selected image files are not sent to or stored on this site's server.",
        },
        {
          question: "Does WebP always reduce file size?",
          answer:
            "Not always. WebP often creates smaller files for web images, but some images can become larger. Compare the result size before downloading.",
        },
        {
          question: "What quality setting should I use?",
          answer:
            "For blog and body images, 75% to 85% is usually a practical range. For product photos or portfolio images where detail matters, choose a higher quality setting.",
        },
        {
          question: "Can I process multiple images at once?",
          answer:
            "Yes. Select multiple images to process them sequentially, then download individual files or all results from the list.",
        },
        {
          question: "Will PNG transparency be preserved?",
          answer:
            "Transparency can be preserved depending on the original format and output. WebP supports transparency too, but important design files should always be reviewed after conversion.",
        },
        {
          question: "Can I compress photos on mobile?",
          answer:
            "Yes. You can choose and compress images from a mobile browser. Very large photos or large batches may take more time depending on device performance.",
        },
        {
          question: "Does image optimization help SEO?",
          answer:
            "Reducing image size can improve page loading and user experience. Search ranking depends on many factors, but fast loading and appropriately sized images are important parts of website quality.",
        },
      ],
    },
    "use-cases": {
      title: "Image Compression Use Cases",
      description:
        "Practical image optimization guidance for blogs, online stores, portfolios, and social media uploads.",
      label: "Use Cases",
      paragraphs: [
        "Image compression is not just about making a file smaller. It is about matching visual quality and loading speed to the purpose of the image. The best settings for a blog image, product detail photo, thumbnail, or portfolio hero image can be different.",
        "For blogs and magazine-style content, resizing images to the content width and using 75% to 85% quality is often efficient. Visitors usually benefit more from a fast-loading image than from an oversized original.",
        "For online store product photos, detail and color accuracy matter. Avoid over-compressing the main product image. Instead, limit the maximum width to the actual display area and compress thumbnails more aggressively for faster listing pages.",
        "For portfolios and design previews, keep quality higher and compare the WebP result. If the visual quality remains strong, WebP can help portfolio pages feel faster without weakening presentation.",
      ],
      bullets: [
        "Blog body images: around 1200px wide and 75% to 85% quality",
        "Product pages: limit width to the real display area",
        "Thumbnails: use smaller dimensions and stronger compression",
        "Portfolios: keep quality high and compare WebP output",
      ],
    },
    formats: {
      title: "JPG, PNG, and WebP Format Guide",
      description:
        "Understand when to choose JPG, PNG, or WebP based on the image type.",
      label: "Formats",
      paragraphs: [
        "Format choice is as important as the quality slider. Photos, logos, transparent images, and screenshots have different needs. Choosing the wrong format can increase file size or damage important details.",
        "JPG is useful for photos and images with rich color and smooth gradients. It does not support transparency, but it is often a good choice for reducing ordinary photo file sizes.",
        "PNG is useful for transparency, logos, icons, and UI screenshots where sharp edges matter. However, photos saved as PNG can become large, so compression or WebP conversion is worth testing before publishing.",
        "WebP is a modern web image format that supports both photo-like images and transparency. It is supported by most modern browsers and often creates smaller files than JPG or PNG at similar visual quality.",
      ],
      bullets: [
        "For photos, test JPG or WebP first.",
        "For transparent logos, use PNG or transparent WebP.",
        "For screenshots, keep clarity with PNG and compare WebP output.",
        "Choose the final format by comparing original size, result size, and visual quality.",
      ],
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How this site handles image processing, analytics, advertising cookies, and user data.",
      label: "Privacy",
      paragraphs: [
        "Image compression and WebP conversion run in the user's browser. Selected image files are not uploaded to or stored on this site's server.",
        "Privacy-conscious analytics such as Vercel Analytics may be used to improve service quality. Analytics may help understand visits, device context, and broad usage flow, but it does not collect the contents of selected image files.",
        "If Google AdSense ads are added later, third-party vendors including Google may use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on visits to this site and other sites on the Internet.",
        "Users may manage personalized advertising through Google Ads Settings or opt out of some third-party vendors' use of cookies for personalized advertising at www.aboutads.info. Information about how Google uses data on partner sites is available at https://policies.google.com/technologies/partner-sites.",
        "Google and its partners may use cookies, web beacons, IP addresses, or other identifiers to serve ads and measure ad performance. This site does not pass information to Google that Google could recognize as personally identifiable information.",
        "If a user provides information through a contact channel, it will be used to respond to the inquiry and improve the service. Unnecessary personal data is not retained unless required by law or needed to resolve a dispute.",
      ],
      bullets: [
        "No server-side image storage",
        "Analytics disclosure",
        "Google advertising cookie and identifier disclosure",
        "Contact information is used mainly for replies",
      ],
    },
    terms: {
      title: "Terms of Use",
      description:
        "Basic usage conditions and responsibility boundaries for XP Image Compressor.",
      label: "Terms",
      paragraphs: [
        "XP Image Compressor is a free browser-based image optimization tool. Users should only process image files they own or have permission to handle.",
        "The service helps with general image compression and WebP conversion, but it does not guarantee the same compression rate or visual quality for every file. Users should keep separate backups of important originals.",
        "Users must not use this site for copyright infringement or illegal image processing. The operator may update features, design, and policies to maintain a stable service.",
      ],
      bullets: [
        "Use only images you have permission to process",
        "Results vary by file type and image content",
        "Keep your own backup of important originals",
        "Illegal or rights-infringing use is prohibited",
      ],
    },
    contact: {
      title: "Contact",
      description:
        "Information for feature suggestions, bug reports, advertising, and partnership inquiries.",
      label: "Contact",
      paragraphs: [
        "If you find an issue or have an idea for a useful image editing feature, please let the operator know. Feature requests may guide future updates.",
        "For advertising, partnership, or policy inquiries, include the site name, inquiry purpose, and a reply contact.",
        "Inquiry details are used only for bug review, feature improvement, policy replies, and partnership review. Privacy-related questions will be reviewed and answered as promptly as possible.",
      ],
      bullets: [
        "Bug reports",
        "New feature suggestions",
        "Advertising and partnership inquiries",
        "Privacy or policy questions",
      ],
    },
    ...articlePages.en,
  },
} satisfies Record<
  Locale,
  Record<InfoPageSlug, InfoPageContent>
>;
