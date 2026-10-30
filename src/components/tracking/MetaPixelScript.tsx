"use client";

import Script from "next/script";
import { markMetaPixelInitialized } from "@/lib/tracking";
import { useTrackingConsent } from "./useTrackingConsent";

type MetaPixelScriptProps = {
  pixelId: string;
};

/**
 * Loads fbevents.js only after cookie consent is granted.
 * PageView is fired by TrackingEffects — not here — to avoid duplicates.
 */
export function MetaPixelScript({ pixelId }: MetaPixelScriptProps) {
  const { consent } = useTrackingConsent();

  if (consent !== "granted") return null;

  return (
    <Script
      id="meta-pixel-base"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
        `.trim(),
      }}
      onReady={() => {
        markMetaPixelInitialized(pixelId);
      }}
    />
  );
}
