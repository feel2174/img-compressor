import type { Locale } from "@/i18n";

export type InfoPageSlug = "about" | "privacy" | "terms" | "contact";

export const infoPageSlugs: InfoPageSlug[] = [
  "about",
  "privacy",
  "terms",
  "contact",
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
        "윈도우 XP 스타일 화면은 친숙한 데스크톱 프로그램처럼 사용할 수 있도록 설계했습니다. 메인 기능은 이미지 압축과 WebP 변환이며, 추후 리사이즈, 포맷 변환, 메타데이터 정리 같은 기능을 같은 메뉴 구조 안에 추가할 예정입니다.",
      ],
      bullets: [
        "브라우저 기반 이미지 압축",
        "WebP 변환 및 다운로드",
        "여러 이미지 일괄 처리",
        "서버 업로드 없는 개인정보 보호 중심 설계",
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
        "향후 Google AdSense 광고가 적용되면 Google 및 제휴사는 쿠키, 웹 비콘, IP 주소 또는 기타 식별자를 사용해 광고를 제공하고 광고 성과를 측정할 수 있습니다. 사용자는 브라우저 설정 또는 Google 광고 설정에서 맞춤 광고와 쿠키 사용을 관리할 수 있습니다.",
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
        "The Windows XP style is designed to feel like a familiar desktop utility. The main tools are image compression and WebP conversion, with future room for resizing, format conversion, and metadata cleanup.",
      ],
      bullets: [
        "Browser-based image compression",
        "WebP conversion and download",
        "Batch processing for multiple images",
        "Privacy-focused design without image server upload",
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
        "If Google AdSense ads are added later, Google and its partners may use cookies, web beacons, IP addresses, or other identifiers to serve ads and measure ad performance. Users can manage personalized ads and cookies through browser settings or Google ad settings.",
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
  },
} satisfies Record<
  Locale,
  Record<
    InfoPageSlug,
    {
      title: string;
      description: string;
      label: string;
      paragraphs: string[];
      bullets: string[];
    }
  >
>;
