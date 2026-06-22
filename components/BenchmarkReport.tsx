import Image from "next/image";
import type { Locale } from "@/i18n";

type BenchmarkReportProps = {
  locale: Locale;
};

const metrics = [
  { quality: "60", jpg: "183 KB", webp: "145 KB", jpgReduction: "93.6%", webpReduction: "94.9%" },
  { quality: "70", jpg: "216 KB", webp: "164 KB", jpgReduction: "92.4%", webpReduction: "94.2%" },
  { quality: "80", jpg: "268 KB", webp: "210 KB", jpgReduction: "90.5%", webpReduction: "92.6%" },
];

export default function BenchmarkReport({ locale }: BenchmarkReportProps) {
  const isKo = locale === "ko";

  return (
    <section className="xp-benchmark" aria-labelledby="benchmark-title">
      <div className="xp-section-heading">
        <span>{isKo ? "고정 테스트 세트" : "Fixed Test Set"}</span>
        <h2 id="benchmark-title">
          {isKo ? "사진·텍스트·투명 이미지로 확인한 압축 기준" : "Compression Checks for Photo, Text, and Transparency"}
        </h2>
        <p>
          {isKo
            ? "2026년 6월 22일에 만든 PixelZipKit 전용 테스트 자산입니다. 실제 사용자 파일이 아닌 고정 원본을 사용해 품질별 상대적인 크기 차이와 확인 지점을 기록했습니다."
            : "These PixelZipKit test assets were created on June 22, 2026. They use fixed, non-user source files to document relative size changes and review points by quality setting."}
        </p>
      </div>

      <div className="xp-benchmark-images">
        <figure>
          <Image
            src="/benchmarks/benchmark-photo-source.png"
            alt={isKo ? "질감과 그라데이션을 포함한 사진 압축 테스트 원본" : "Photo compression source with texture and gradients"}
            width={1536}
            height={1024}
          />
          <figcaption>
            {isKo ? "사진 원본: PNG, 2.77 MB. 천 질감, 잎맥, 그림자처럼 손실 압축 흔적이 드러나는 영역을 포함합니다." : "Photo source: PNG, 2.77 MB. Fabric texture, leaf detail, and shadows make artifacts easier to review."}
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/benchmarks/photo-quality-80.webp"
            alt={isKo ? "품질 80 WebP 사진 압축 결과" : "Photo result encoded as WebP at quality 80"}
            width={1536}
            height={1024}
          />
          <figcaption>
            {isKo ? "권장 시작점: WebP 품질 80, 210 KB. 제품·포트폴리오처럼 질감이 중요한 사진에 적합한 출발점입니다." : "Suggested starting point: WebP quality 80, 210 KB. Suitable for product or portfolio images where texture matters."}
          </figcaption>
        </figure>
      </div>

      <div className="xp-value-table-wrap">
        <table className="xp-value-table">
          <thead>
            <tr>
              <th>{isKo ? "품질" : "Quality"}</th>
              <th>{isKo ? "JPG 결과" : "JPG output"}</th>
              <th>{isKo ? "JPG 감소율" : "JPG reduction"}</th>
              <th>{isKo ? "WebP 결과" : "WebP output"}</th>
              <th>{isKo ? "WebP 감소율" : "WebP reduction"}</th>
              <th>{isKo ? "검수 기준" : "Review point"}</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((row) => (
              <tr key={row.quality}>
                <td>{row.quality}</td>
                <td>{row.jpg}</td>
                <td>{row.jpgReduction}</td>
                <td>{row.webp}</td>
                <td>{row.webpReduction}</td>
                <td>
                  {row.quality === "60"
                    ? isKo ? "썸네일·미리보기에서 글자와 잎맥이 뭉개지지 않는지 확인" : "Check thumbnails and previews for readable text and leaf detail"
                    : row.quality === "70"
                      ? isKo ? "일반 본문 이미지에서 질감과 그림자 경계를 확인" : "Review texture and shadow boundaries for body images"
                      : isKo ? "상품 라벨·포트폴리오·대표 이미지에서 100% 확대 확인" : "Review product labels, portfolio work, and hero images at 100%"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="xp-benchmark-images xp-benchmark-supporting">
        <figure>
          <Image
            src="/benchmarks/screenshot-source.png"
            alt={isKo ? "작은 글자와 경계선을 포함한 화면 캡처 테스트 원본" : "UI screenshot source with small text and sharp boundaries"}
            width={1600}
            height={1000}
          />
          <figcaption>
            {isKo ? "텍스트 캡처: 작은 글자, 얇은 테두리, 단색 배경은 사진보다 압축 손상이 먼저 보입니다. 품질 80부터 확인합니다." : "Text screenshot: small type, thin borders, and flat backgrounds reveal artifacts earlier than photos. Start at quality 80."}
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/benchmarks/transparent-graphic-quality-80.webp"
            alt={isKo ? "투명 배경을 유지한 WebP 그래픽 테스트 결과" : "Transparent WebP graphic test result"}
            width={1200}
            height={800}
          />
          <figcaption>
            {isKo ? "투명 그래픽: PNG 9.6 KB, WebP 7.3 KB. 로고·누끼는 밝은 배경과 어두운 배경에서 가장자리 번짐을 함께 확인합니다." : "Transparent graphic: PNG 9.6 KB, WebP 7.3 KB. Check logo and cutout edges on both light and dark backgrounds."}
          </figcaption>
        </figure>
      </div>

      <div className="xp-benchmark-note">
        <h3>{isKo ? "이 결과를 사용하는 방법" : "How to use these results"}</h3>
        <p>
          {isKo
            ? "표의 수치는 고정 테스트 자산을 같은 크기로 인코딩한 결과입니다. 실제 결과는 원본 형식, 이미지 내용, 브라우저와 기기 환경에 따라 달라질 수 있으므로 숫자 자체보다 품질 80에서 시작해 목적별로 낮추고, 중요한 영역을 확대 검수하는 흐름을 권장합니다."
            : "These figures come from fixed benchmark assets encoded at the same dimensions. Real results vary by source format, image content, browser, and device. Start at quality 80, lower it for the publishing purpose, and inspect important areas at full size."}
        </p>
      </div>
    </section>
  );
}
