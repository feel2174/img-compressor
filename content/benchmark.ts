export const benchmarkAssets = {
  photo: {
    source: "/benchmarks/benchmark-photo-source.png",
    sourceBytes: 2_901_456,
    width: 1536,
    height: 1024,
    outputs: [
      { quality: 60, file: "/benchmarks/photo-quality-60.webp", bytes: 148_680 },
      { quality: 70, file: "/benchmarks/photo-quality-70.webp", bytes: 168_144 },
      { quality: 80, file: "/benchmarks/photo-quality-80.webp", bytes: 214_980 },
    ],
  },
  screenshot: {
    source: "/benchmarks/screenshot-source.png",
    sourceBytes: 54_371,
    output: "/benchmarks/screenshot-quality-80.webp",
    outputBytes: 31_954,
  },
  transparent: {
    source: "/benchmarks/transparent-graphic-source.png",
    sourceBytes: 9_838,
    output: "/benchmarks/transparent-graphic-quality-80.webp",
    outputBytes: 7_430,
  },
  workspace: {
    source: "/benchmarks/editorial-workspace-source.png",
    sourceBytes: 3_481_104,
    width: 1536,
    height: 1024,
    outputs: [
      { quality: 60, file: "/benchmarks/editorial-workspace-quality-60.jpg", bytes: 383_741 },
      { quality: 80, file: "/benchmarks/editorial-workspace-quality-80.jpg", bytes: 577_779 },
    ],
  },
} as const;

export const benchmarkMethod = {
  webpMeasuredAt: "2026-06-22",
  jpegMeasuredAt: "2026-06-23",
  encoder: "Browser Canvas WebP encoder",
  source: "PixelZipKit-owned fixed test assets; no user uploads or customer files",
  jpegEncoder: "macOS Image I/O JPEG encoder",
} as const;

export function reductionPercent(sourceBytes: number, outputBytes: number) {
  return Math.max(0, (1 - outputBytes / sourceBytes) * 100);
}

export const benchmarkScenarios = [
  {
    key: "blog-body-photos-q80",
    count: 8,
    sourceBytes: benchmarkAssets.photo.sourceBytes * 8,
    outputBytes: benchmarkAssets.photo.outputs[2].bytes * 8,
    setting: "WebP quality 80",
    useCase: {
      ko: "블로그 본문 사진 8장",
      en: "8 blog body photos",
    },
    review: {
      ko: "잎, 그림자, 질감처럼 본문 사진에서 눈에 띄는 영역을 보수적으로 유지",
      en: "Keeps leaves, shadows, and texture safer for ordinary article photos",
    },
  },
  {
    key: "blog-body-photos-q70",
    count: 8,
    sourceBytes: benchmarkAssets.photo.sourceBytes * 8,
    outputBytes: benchmarkAssets.photo.outputs[1].bytes * 8,
    setting: "WebP quality 70",
    useCase: {
      ko: "모바일 중심 본문 사진 8장",
      en: "8 mobile-first body photos",
    },
    review: {
      ko: "화면에서 크게 확대하지 않는 본문 이미지의 용량 절감 우선 기준",
      en: "Prioritizes size reduction for images that are not inspected at large size",
    },
  },
  {
    key: "product-grid-thumbnails-q60",
    count: 24,
    sourceBytes: benchmarkAssets.photo.sourceBytes * 24,
    outputBytes: benchmarkAssets.photo.outputs[0].bytes * 24,
    setting: "WebP quality 60",
    useCase: {
      ko: "상품 목록 썸네일 24장",
      en: "24 product grid thumbnails",
    },
    review: {
      ko: "목록 전체 로딩을 줄이는 대신 상품 경계와 색상은 별도 검수",
      en: "Reduces full grid weight while requiring edge and color review",
    },
  },
  {
    key: "product-detail-q80",
    count: 6,
    sourceBytes: benchmarkAssets.workspace.sourceBytes * 6,
    outputBytes: benchmarkAssets.workspace.outputs[1].bytes * 6,
    setting: "JPEG quality 80",
    useCase: {
      ko: "상품 상세/포트폴리오 이미지 6장",
      en: "6 product detail or portfolio images",
    },
    review: {
      ko: "색상 블록, 린넨 질감, 그림자 경계처럼 신뢰에 영향을 주는 세부 묘사 유지",
      en: "Preserves trust details such as color blocks, linen texture, and shadow edges",
    },
  },
  {
    key: "email-attachments-q80",
    count: 10,
    sourceBytes: benchmarkAssets.workspace.sourceBytes * 10,
    outputBytes: benchmarkAssets.workspace.outputs[1].bytes * 10,
    setting: "JPEG quality 80",
    useCase: {
      ko: "이메일 첨부용 사진 10장",
      en: "10 email attachment photos",
    },
    review: {
      ko: "상대방이 빠르게 열람할 수 있는 보기용 사본 기준",
      en: "Creates viewing copies that are easier for recipients to open",
    },
  },
  {
    key: "text-screenshots-q80",
    count: 12,
    sourceBytes: benchmarkAssets.screenshot.sourceBytes * 12,
    outputBytes: benchmarkAssets.screenshot.outputBytes * 12,
    setting: "WebP quality 80",
    useCase: {
      ko: "텍스트 캡처 12장",
      en: "12 text-heavy screenshots",
    },
    review: {
      ko: "절감률보다 작은 글자와 얇은 선의 식별 가능성을 우선 확인",
      en: "Prioritizes readability of small type and thin lines over maximum reduction",
    },
  },
] as const;
