"use client";

import Script from "next/script";

interface AdSenseProps {
  slotId?: string;
  position?: "top" | "bottom";
}

export default function AdSense({ slotId, position = "top" }: AdSenseProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slotsEnabled =
    process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" &&
    process.env.NEXT_PUBLIC_CONSENT_PLATFORM_READY === "true";

  if (!clientId || !slotId || !slotsEnabled) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div
        className="adsense-slot"
        style={{ margin: "2rem auto", maxWidth: "1200px", padding: "0 1rem" }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center", minHeight: "100px" }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id={`adsense-${position}-${slotId}`} strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
      </div>
    </>
  );
}
