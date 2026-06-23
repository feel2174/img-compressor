import Image from "next/image";
import {
  benchmarkAssets,
  benchmarkMethod,
  reductionPercent,
} from "@/content/benchmark";
import type { Locale } from "@/i18n";

function formatSize(bytes: number, locale: Locale) {
  const value = bytes / 1024;
  return `${new Intl.NumberFormat(locale === "ko" ? "ko-KR" : "en-US", {
    maximumFractionDigits: value >= 1024 ? 2 : 1,
  }).format(value >= 1024 ? value / 1024 : value)} ${value >= 1024 ? "MB" : "KB"}`;
}

export default function BenchmarkReport({ locale }: { locale: Locale }) {
  const isKo = locale === "ko";
  const { photo, screenshot, transparent, workspace } = benchmarkAssets;

  return (
    <section className="xp-benchmark" aria-labelledby="benchmark-title">
      <div className="xp-section-heading">
        <span>{isKo ? "고정 자산 실측" : "Fixed-asset measurements"}</span>
        <h2 id="benchmark-title">
          {isKo
            ? "같은 원본으로 확인한 WebP 파일 크기와 검수 기준"
            : "WebP file sizes and review criteria from the same source files"}
        </h2>
        <p>
          {isKo
            ? "아래 값은 페이지를 연 브라우저에서 즉시 계산한 수치가 아닙니다. 이 페이지에 공개한 고정 원본과 결과 파일을 기준으로 기록한 값이며, 누구나 파일을 내려받아 비교할 수 있습니다."
            : "These are recorded results for the fixed source and output files published on this page, not values calculated only after this page loads. Anyone can download and compare the files."}
        </p>
      </div>

      <div className="xp-benchmark-method">
        <strong>{isKo ? "측정 기록" : "Measurement record"}</strong>
        <p>
          {isKo
            ? `WebP 실측일: ${benchmarkMethod.webpMeasuredAt}. JPEG 실측일: ${benchmarkMethod.jpegMeasuredAt}. WebP 결과는 ${benchmarkMethod.encoder}, JPEG 결과는 ${benchmarkMethod.jpegEncoder}로 생성했습니다. ${benchmarkMethod.source}. 사진 원본은 ${photo.width} x ${photo.height} PNG입니다.`
            : `WebP measured: ${benchmarkMethod.webpMeasuredAt}. JPEG measured: ${benchmarkMethod.jpegMeasuredAt}. WebP results use the ${benchmarkMethod.encoder}; JPEG results use the ${benchmarkMethod.jpegEncoder}. ${benchmarkMethod.source}. The photo source is a ${photo.width} x ${photo.height} PNG.`}
        </p>
        <a href={photo.source} download>
          {isKo ? "사진 테스트 원본 다운로드" : "Download the photo source"}
        </a>
      </div>

      <div className="xp-benchmark-images">
        <figure>
          <Image src={photo.source} alt={isKo ? "질감, 잎, 그림자가 포함된 PixelZipKit 사진 테스트 원본" : "PixelZipKit photo test source with texture, leaves, and shadows"} width={photo.width} height={photo.height} />
          <figcaption>{isKo ? "사진: 섬유 질감, 잎, 그림자 경계를 확대해 비교합니다." : "Photo: inspect fabric texture, leaves, and shadow boundaries."}</figcaption>
        </figure>
        <figure>
          <Image src={screenshot.source} alt={isKo ? "작은 글자와 얇은 테두리를 포함한 UI 캡처 테스트 원본" : "UI screenshot source with small text and thin borders"} width={1600} height={1000} />
          <figcaption>{isKo ? "UI 캡처: 작은 글자와 얇은 선이 읽히는지 확인합니다." : "UI screenshot: verify small text and thin lines remain readable."}</figcaption>
        </figure>
        <figure>
          <Image src={transparent.source} alt={isKo ? "투명 배경과 선명한 모서리를 포함한 그래픽 테스트 원본" : "Transparent graphic source with crisp edges"} width={1200} height={800} />
          <figcaption>{isKo ? "투명 그래픽: 밝고 어두운 배경에서 가장자리를 확인합니다." : "Transparent graphic: inspect edges on light and dark backgrounds."}</figcaption>
        </figure>
        <figure>
          <Image src={workspace.source} alt={isKo ? "린넨 노트, 식물 잎, 패브릭, 색상 카드를 포함한 사이트 소유 사진형 테스트 원본" : "Site-owned photographic test source with a linen notebook, leaves, fabric, and color card"} width={workspace.width} height={workspace.height} />
          <figcaption>{isKo ? "사진형 자산: 린넨 섬유, 잎맥, 그림자, 색상 블록의 품질 저하를 확인합니다." : "Photographic asset: inspect linen fibers, leaf veins, shadows, and color blocks."}</figcaption>
        </figure>
      </div>

      <div className="xp-benchmark-note">
        <h3>{isKo ? "추가 사진형 자산: JPEG 품질 60·80" : "Additional photographic asset: JPEG quality 60 and 80"}</h3>
        <p>
          {isKo
            ? "이 원본은 PixelZipKit이 만든 공개 합성 테스트 자산입니다. 사람, 고객 이미지, 상표가 포함되지 않으며, 원본과 두 결과 파일을 모두 내려받아 직접 비교할 수 있습니다."
            : "This source is a public synthetic test asset created for PixelZipKit. It includes no people, customer images, or trademarks, and the source plus both outputs can be downloaded for direct comparison."}
        </p>
        <table className="xp-value-table">
          <thead>
            <tr>
              <th>{isKo ? "JPEG 품질" : "JPEG quality"}</th>
              <th>{isKo ? "결과 파일" : "Output file"}</th>
              <th>{isKo ? "원본 대비 감소" : "Reduction"}</th>
              <th>{isKo ? "검수 기준" : "Review point"}</th>
            </tr>
          </thead>
          <tbody>
            {workspace.outputs.map((output) => (
              <tr key={output.quality}>
                <td>{output.quality}</td>
                <td><a href={output.file} download>{formatSize(output.bytes, locale)}</a></td>
                <td>{reductionPercent(workspace.sourceBytes, output.bytes).toFixed(1)}%</td>
                <td>{output.quality === 60 ? (isKo ? "린넨 섬유와 잎맥" : "Linen fibers and leaf veins") : (isKo ? "색상 블록과 그림자 경계" : "Color blocks and shadow transitions")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href={workspace.source} download>
          {isKo ? "사진형 테스트 원본 다운로드" : "Download the photographic test source"}
        </a>
      </div>

      <div className="xp-value-table-wrap">
        <table className="xp-value-table">
          <thead>
            <tr>
              <th>{isKo ? "사진 품질" : "Photo quality"}</th>
              <th>{isKo ? "결과 파일" : "Output file"}</th>
              <th>{isKo ? "원본 대비 감소" : "Reduction"}</th>
              <th>{isKo ? "직접 확인할 부분" : "Inspect directly"}</th>
            </tr>
          </thead>
          <tbody>
            {photo.outputs.map((output) => (
              <tr key={output.quality}>
                <td>{output.quality}</td>
                <td><a href={output.file} download>{formatSize(output.bytes, locale)}</a></td>
                <td>{reductionPercent(photo.sourceBytes, output.bytes).toFixed(1)}%</td>
                <td>{output.quality === 60 ? (isKo ? "썸네일의 글자와 잎 디테일" : "Thumbnail text and leaf detail") : output.quality === 70 ? (isKo ? "본문 사진의 질감과 그림자" : "Body-photo texture and shadows") : (isKo ? "상품 라벨과 대표 이미지" : "Product labels and hero images")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="xp-benchmark-note">
        <h3>{isKo ? "보조 자산: 품질 80 결과" : "Supporting assets: quality 80 results"}</h3>
        <p>
          {isKo
            ? `UI 캡처: ${formatSize(screenshot.outputBytes, locale)} (${reductionPercent(screenshot.sourceBytes, screenshot.outputBytes).toFixed(1)}% 감소). 투명 그래픽: ${formatSize(transparent.outputBytes, locale)} (${reductionPercent(transparent.sourceBytes, transparent.outputBytes).toFixed(1)}% 감소).`
            : `UI screenshot: ${formatSize(screenshot.outputBytes, locale)} (${reductionPercent(screenshot.sourceBytes, screenshot.outputBytes).toFixed(1)}% reduction). Transparent graphic: ${formatSize(transparent.outputBytes, locale)} (${reductionPercent(transparent.sourceBytes, transparent.outputBytes).toFixed(1)}% reduction).`}
        </p>
        <p>
          {isKo
            ? "이 결과는 절대 품질 보증이 아닙니다. 실제 파일은 원본 형식, 이미지 내용, 브라우저 인코더에 따라 다르므로, 중요한 이미지는 이 기준을 출발점으로 삼아 원본과 결과를 직접 확대 비교하세요."
            : "These results are not a universal quality guarantee. Output varies with the source format, image content, and browser encoder, so use this as a starting point and compare important files at full size."}
        </p>
      </div>
    </section>
  );
}
