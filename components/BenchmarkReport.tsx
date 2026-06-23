"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n";
import { convertToWebPFile } from "@/lib/browser-image-processing";

type BenchmarkMetric = {
  quality: number;
  size: number;
  reduction: number;
};

type SupportingMetric = {
  label: "screenshot" | "transparent";
  size: number;
  reduction: number;
};

const photoQualities = [60, 70, 80];
const sourceFiles = {
  photo: "/benchmarks/benchmark-photo-source.png",
  screenshot: "/benchmarks/screenshot-source.png",
  transparent: "/benchmarks/transparent-graphic-source.png",
};

function formatSize(bytes: number, locale: Locale) {
  const value = bytes / 1024;
  return new Intl.NumberFormat(locale === "ko" ? "ko-KR" : "en-US", {
    maximumFractionDigits: value >= 1024 ? 2 : 1,
  }).format(value >= 1024 ? value / 1024 : value) + (value >= 1024 ? " MB" : " KB");
}

function reduction(originalSize: number, outputSize: number) {
  return Math.max(0, (1 - outputSize / originalSize) * 100);
}

async function getBenchmarkFile(url: string, filename: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to load benchmark source");

  const blob = await response.blob();
  return new File([blob], filename, { type: blob.type, lastModified: 1782057600000 });
}

export default function BenchmarkReport({ locale }: { locale: Locale }) {
  const isKo = locale === "ko";
  const [photoMetrics, setPhotoMetrics] = useState<BenchmarkMetric[]>([]);
  const [supportingMetrics, setSupportingMetrics] = useState<SupportingMetric[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function runBenchmark() {
      try {
        const photo = await getBenchmarkFile(
          sourceFiles.photo,
          "pixelzipkit-photo-source.png"
        );

        const measuredPhoto = await Promise.all(
          photoQualities.map(async (quality) => {
            const output = await convertToWebPFile(photo, quality / 100);
            return { quality, size: output.size, reduction: reduction(photo.size, output.size) };
          })
        );

        if (cancelled) return;

        setPhotoMetrics(measuredPhoto);

        try {
          const [screenshot, transparent] = await Promise.all([
            getBenchmarkFile(sourceFiles.screenshot, "pixelzipkit-screenshot-source.png"),
            getBenchmarkFile(sourceFiles.transparent, "pixelzipkit-transparent-source.png"),
          ]);
          const [screenshotOutput, transparentOutput] = await Promise.all([
            convertToWebPFile(screenshot, 0.8),
            convertToWebPFile(transparent, 0.8),
          ]);

          if (cancelled) return;

          setSupportingMetrics([
            { label: "screenshot", size: screenshotOutput.size, reduction: reduction(screenshot.size, screenshotOutput.size) },
            { label: "transparent", size: transparentOutput.size, reduction: reduction(transparent.size, transparentOutput.size) },
          ]);
        } catch {
          // Supporting checks are additive; the primary photo measurement remains valid.
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    void runBenchmark();
    return () => {
      cancelled = true;
    };
  }, []);

  const isRunning = !error && photoMetrics.length === 0;

  return (
    <section className="xp-benchmark" aria-labelledby="benchmark-title">
      <div className="xp-section-heading">
        <span>{isKo ? "실행 가능한 테스트" : "Reproducible Test"}</span>
        <h2 id="benchmark-title">
          {isKo ? "현재 브라우저에서 다시 측정하는 WebP 압축 결과" : "WebP results measured again in your current browser"}
        </h2>
        <p>
          {isKo
            ? "이 표는 문서에 미리 적어 둔 수치가 아닙니다. PixelZipKit의 WebP 변환과 동일한 Canvas 처리 방식을 이 페이지를 연 브라우저에서 실행해 계산합니다. 원본과 결과는 서버에 전송하거나 저장하지 않습니다."
            : "This table is not pre-filled. It runs the same Canvas-based WebP conversion used by PixelZipKit in the browser viewing this page. Source and output files are not sent to or stored on a server."}
        </p>
      </div>

      <div className="xp-benchmark-method">
        <strong>{isKo ? "측정 조건" : "Test conditions"}</strong>
        <p>
          {isKo
            ? "측정일: 2026-06-22. 고정 테스트 자산 3종(사진, UI 캡처, 투명 그래픽)을 사용합니다. 사진은 1536 x 1024 PNG 원본을 품질 60, 70, 80의 WebP로 변환하고, 나머지 두 자산은 품질 80에서 가장자리와 작은 글자를 확인합니다. 테스트 자산은 고객 파일이 아니며, 사진은 합성 테스트 이미지입니다."
            : "Measured from a fixed set created on June 22, 2026: a photo, UI screenshot, and transparent graphic. The 1536 x 1024 PNG photo runs at WebP quality 60, 70, and 80; the other assets run at quality 80 to check small text and edges. These are non-customer test assets, and the photo is synthetic."}
        </p>
        <a href={sourceFiles.photo} download>
          {isKo ? "사진 테스트 원본 보기" : "Open the photo test source"}
        </a>
      </div>

      <div className="xp-benchmark-images">
        <figure>
          <Image src={sourceFiles.photo} alt={isKo ? "질감과 그림자가 있는 합성 사진 테스트 원본" : "Synthetic photo source with texture and shadows"} width={1536} height={1024} />
          <figcaption>{isKo ? "사진 원본: 질감, 잎, 그림자 영역을 확대 검수합니다." : "Photo source: inspect texture, leaves, and shadow transitions at full size."}</figcaption>
        </figure>
        <figure>
          <Image src={sourceFiles.screenshot} alt={isKo ? "작은 글자와 얇은 테두리가 있는 UI 캡처 테스트 원본" : "UI screenshot test source with small text and thin borders"} width={1600} height={1000} />
          <figcaption>{isKo ? "UI 캡처: 작은 글자와 얇은 선이 흐려지는지 확인합니다." : "UI screenshot: check whether small text and thin lines stay clear."}</figcaption>
        </figure>
        <figure>
          <Image src={sourceFiles.transparent} alt={isKo ? "투명 배경과 선명한 가장자리가 있는 그래픽 테스트 원본" : "Transparent graphic test source with crisp edges"} width={1200} height={800} />
          <figcaption>{isKo ? "투명 그래픽: 밝은 배경과 어두운 배경에서 가장자리를 확인합니다." : "Transparent graphic: inspect edges on both light and dark backgrounds."}</figcaption>
        </figure>
      </div>

      <div className="xp-value-table-wrap" aria-live="polite">
        <table className="xp-value-table">
          <thead>
            <tr>
              <th>{isKo ? "사진 품질" : "Photo quality"}</th>
              <th>{isKo ? "WebP 결과" : "WebP output"}</th>
              <th>{isKo ? "원본 대비 감소" : "Reduction from source"}</th>
              <th>{isKo ? "검수 기준" : "Review point"}</th>
            </tr>
          </thead>
          <tbody>
            {photoQualities.map((quality) => {
              const metric = photoMetrics.find((item) => item.quality === quality);
              return (
                <tr key={quality}>
                  <td>{quality}</td>
                  <td>{metric ? formatSize(metric.size, locale) : isRunning ? (isKo ? "측정 중" : "Measuring") : "-"}</td>
                  <td>{metric ? `${metric.reduction.toFixed(1)}%` : "-"}</td>
                  <td>{quality === 60 ? (isKo ? "썸네일의 글자와 잎 디테일" : "Thumbnail text and leaf detail") : quality === 70 ? (isKo ? "본문 사진의 질감과 그림자 경계" : "Texture and shadow boundaries for body images") : (isKo ? "상품 라벨과 포트폴리오 대표 이미지" : "Product labels and portfolio hero images")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="xp-benchmark-note">
        <h3>{isKo ? "보조 자산의 품질 80 결과" : "Quality 80 results for supporting assets"}</h3>
        {error ? (
          <p>{isKo ? "현재 브라우저에서 측정을 완료하지 못했습니다. 홈 도구에서 같은 원본으로 직접 변환해 결과를 확인해 주세요." : "This browser could not complete the measurement. Use the home tool with the same source to verify the result directly."}</p>
        ) : isRunning ? (
          <p>{isKo ? "테스트 자산을 브라우저 안에서 변환하고 있습니다." : "The test assets are being converted in this browser."}</p>
        ) : supportingMetrics.length === 0 ? (
          <p>{isKo ? "보조 자산 측정은 네트워크 상태에 따라 늦게 완료될 수 있습니다. 사진 품질 표는 현재 브라우저에서 완료된 결과입니다." : "Supporting asset checks can finish later depending on network conditions. The photo-quality table is already measured in this browser."}</p>
        ) : (
          <p>{supportingMetrics.map((metric) => `${metric.label === "screenshot" ? (isKo ? "UI 캡처" : "UI screenshot") : (isKo ? "투명 그래픽" : "Transparent graphic")}: ${formatSize(metric.size, locale)} (${metric.reduction.toFixed(1)}%)`).join(" / ")}</p>
        )}
        <p>{isKo ? "실제 결과는 브라우저의 이미지 인코더, 원본 포맷, 이미지 내용, 기기 성능에 따라 달라집니다. 이 수치는 절대적인 품질 보증이 아니라, 품질값을 결정하기 전에 직접 비교할 수 있게 만든 재현 가능한 기준입니다." : "Actual output varies by browser encoder, source format, image content, and device. These figures are not a quality guarantee; they are a reproducible starting point for comparison before choosing a setting."}</p>
      </div>
    </section>
  );
}
