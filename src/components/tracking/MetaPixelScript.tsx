"use client";

import { useEffect } from "react";
import Script from "next/script";
import { markMetaPixelInitialized } from "@/lib/tracking";
import { useTrackingConsent } from "./useTrackingConsent";

type MetaPixelScriptProps = {
  pixelId: string;
};

/**
 * Loads fbevents.js only after cookie consent is granted.
 * Init is queued in the bootstrap snippet and confirmed via markMetaPixelInitialized.
 * PageView is fired by TrackingEffects — not here — to avoid duplicates.
 */
export function MetaPixelScript({ pixelId }: MetaPixelScriptProps) {
  const { consent } = useTrackingConsent();
  const granted = consent === "granted";

  useEffect(() => {
    if (!granted) return;

    let cancelled = false;
    let attempts = 0;

    const tryMarkReady = () => {
      if (cancelled) return true;
      if (typeof window.fbq === "function") {
        markMetaPixelInitialized(pixelId);
        return true;
      }
      return false;
    };

    if (tryMarkReady()) return;

    const intervalId = window.setInterval(() => {
      attempts += 1;
      if (tryMarkReady() || attempts >= 100) {
        window.clearInterval(intervalId);
      }
    }, 50);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [granted, pixelId]);

  if (!granted) return null;

  const bootstrap = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(pixelId)});
`.trim();

  return (
    <Script
      id="meta-pixel-base"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: bootstrap }}
      onReady={() => {
        markMetaPixelInitialized(pixelId);
      }}
    />
  );
}
