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
} as const;

export const benchmarkMethod = {
  measuredAt: "2026-06-22",
  encoder: "Browser Canvas WebP encoder",
  source: "PixelZipKit-owned fixed test assets; no user uploads or customer files",
} as const;

export function reductionPercent(sourceBytes: number, outputBytes: number) {
  return Math.max(0, (1 - outputBytes / sourceBytes) * 100);
}
