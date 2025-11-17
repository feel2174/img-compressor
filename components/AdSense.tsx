"use client";

import Script from "next/script";

interface AdSenseProps {
  slotId?: string;
  position?: "top" | "bottom";
}

export default function AdSense({
  slotId = "YOUR_AD_SLOT_ID",
  position = "top",
}: AdSenseProps) {
  return (
    <>
      {/* Google AdSense 스크립트 */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9196149361612087"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div
        style={{ margin: "2rem auto", maxWidth: "1200px", padding: "0 1rem" }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center", minHeight: "100px" }}
          data-ad-client="ca-pub-9196149361612087"
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id={`adsense-${position}`} strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
      </div>
    </>
  );
}
