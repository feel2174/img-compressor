import type { Locale } from "@/i18n";

export default function AdvertisingReadinessNotice({ locale }: { locale: Locale }) {
  const isKo = locale === "ko";

  return (
    <section className="xp-advertising-notice" aria-labelledby="advertising-readiness-title">
      <h2 id="advertising-readiness-title">
        {isKo ? "광고 및 동의 관리 운영 기준" : "Advertising and consent management standard"}
      </h2>
      <p>
        {isKo
          ? "이미지 압축 기능은 광고와 무관하게 동작합니다. 이 사이트의 광고 태그는 기본적으로 비활성화되어 있으며, 운영자가 광고 활성화와 동의 관리 준비 값을 모두 확인할 때만 배포됩니다. 이 준비 값 자체는 CMP가 아닙니다. EEA, 영국, 스위스 등 동의 요건이 적용되는 지역에 광고를 제공하기 전에는 Google 인증 CMP를 실제 배포에 연결하고, 이 페이지에 사용 서비스와 동의 방법을 업데이트합니다."
          : "Image compression works independently of advertising. Ad tags are disabled by default and are deployed only when the operator confirms both advertising activation and consent readiness. This readiness setting is not a CMP itself. Before serving ads in regions with consent requirements, including the EEA, the UK, and Switzerland, the operator must deploy a Google-certified CMP and update this page with the services used and the consent method."}
      </p>
      <p>
        {isKo
          ? "광고가 활성화된 경우 사용자는 이 페이지에서 사용 중인 광고·동의 도구를 확인할 수 있어야 하며, Google 광고 설정과 Google 파트너 사이트 데이터 정책도 함께 안내합니다."
          : "When advertising is enabled, visitors must be able to identify the advertising and consent tools used on this page, alongside links to Google Ads Settings and Google partner-site data policies."}
      </p>
    </section>
  );
}
