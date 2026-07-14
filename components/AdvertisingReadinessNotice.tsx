import type { Locale } from "@/i18n";

export default function AdvertisingReadinessNotice({ locale }: { locale: Locale }) {
  const isKo = locale === "ko";

  return (
    <section className="xp-advertising-notice" aria-labelledby="advertising-readiness-title">
      <h2 id="advertising-readiness-title">
        {isKo ? "Google AdSense 광고 및 쿠키 안내" : "Google AdSense advertising and cookie notice"}
      </h2>
      <p>
        {isKo
          ? "이 사이트는 Google AdSense를 통해 광고를 게재합니다. AdSense 스크립트가 페이지에 포함되어 있으며, Google은 이 스크립트를 통해 광고 성과 측정과 관심사 기반 광고 게재에 사용되는 쿠키를 설정할 수 있습니다. 이미지 압축 기능은 광고 쿠키와 무관하게 작동하며, 사용자가 선택한 이미지 파일은 광고 시스템에 전달되지 않습니다."
          : "This site uses Google AdSense to display advertisements. The AdSense script is included in the page and Google may set cookies through it for ad measurement and interest-based advertising. The image compression tool works independently of advertising cookies, and selected image files are not passed to any advertising system."}
      </p>
      <p>
        {isKo ? (
          <>
            광고 개인화 설정은{" "}
            <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">
              Google 광고 설정
            </a>
            에서 변경하거나 해제할 수 있습니다. Google이 파트너 사이트에서 정보를 활용하는 방식은{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
              Google이 파트너 사이트에서 정보를 사용하는 방식
            </a>
            에서 확인할 수 있습니다. EEA, 영국, 스위스 등 동의 요건이 적용되는 지역 이용자에게는 인증 동의 관리 도구(CMP)를 통해 쿠키 사용 여부를 선택할 수 있도록 안내합니다.
          </>
        ) : (
          <>
            Ad personalization preferences can be managed or disabled through{" "}
            <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">
              Google Ads Settings
            </a>
            . Information about how Google uses data on partner sites is available at{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
              how Google uses information from sites or apps that use its services
            </a>
            . Visitors in regions with consent requirements, including the EEA, the UK, and Switzerland, can manage cookie preferences through a certified consent management tool.
          </>
        )}
      </p>
    </section>
  );
}
