"use client";

import { useSyncExternalStore } from "react";
import { useTrackingConsent } from "./useTrackingConsent";

type CookieConsentBannerProps = {
  enabled: boolean;
};

function subscribe() {
  return () => {};
}

/**
 * Shown only when Meta Pixel is configured and consent is undecided.
 * Tracking scripts never load until the visitor accepts.
 */
export function CookieConsentBanner({ enabled }: CookieConsentBannerProps) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { undecided, accept, decline } = useTrackingConsent();

  if (!enabled || !mounted || !undecided) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 z-50 border-t border-border-soft bg-surface/95 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-md bottom-[calc(var(--sticky-bar-height)+var(--safe-bottom))] md:bottom-0 md:px-6 md:py-4"
    >
      <div className="container-page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p
            id="cookie-consent-title"
            className="text-sm font-bold text-forest"
          >
            Cookie-uri de măsurare
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-1 text-sm text-ink-muted"
          >
            Folosim Meta Pixel doar pentru a înțelege vizitele și clickurile de
            contact. Fără date personale în evenimente. Poți refuza oricând.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={decline}
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-lg)] bg-phone-btn px-4 text-sm font-bold text-ink transition-colors hover:bg-phone-btn-hover"
          >
            Refuz
          </button>
          <button
            type="button"
            onClick={accept}
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-lg)] bg-forest px-4 text-sm font-bold text-white transition-colors hover:bg-forest-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
