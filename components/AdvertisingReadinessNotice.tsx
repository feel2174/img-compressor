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
          ? "현재 서비스의 이미지 압축 기능은 광고와 무관하게 동작합니다. 광고를 실제로 활성화하기 전에는 대상 지역의 개인정보·동의 요건을 확인하고, 필요 지역에서는 Google 인증 CMP를 연결한 뒤에만 광고 태그를 활성화합니다. 배포 환경도 광고 활성화와 동의 관리 준비 값이 모두 확인되어야 광고 태그가 실행되도록 구성했습니다."
          : "Image compression works independently of advertising. Before ads are activated, the operator reviews regional privacy and consent requirements and enables ad tags only after a Google-certified CMP is connected where it is required. The deployment also requires both advertising and consent-readiness settings before ad tags can run."}
      </p>
      <p>
        {isKo
          ? "사용자는 Google 광고 설정에서 맞춤 광고를 관리할 수 있으며, Google 파트너 사이트에서의 데이터 사용 방식은 Google 정책 페이지에서 확인할 수 있습니다."
          : "Users can manage personalized ads through Google Ads Settings and review how data is used on Google partner sites through Google policy pages."}
      </p>
    </section>
  );
}
