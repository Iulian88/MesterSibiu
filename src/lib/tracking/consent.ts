import type { TrackingConsent } from "./types";

export const TRACKING_CONSENT_KEY = "mester_tracking_consent";
export const TRACKING_CONSENT_EVENT = "mester-tracking-consent";

function isConsentValue(value: string | null): value is TrackingConsent {
  return value === "granted" || value === "denied";
}

export function readTrackingConsent(): TrackingConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(TRACKING_CONSENT_KEY);
    return isConsentValue(raw) ? raw : null;
  } catch {
    return null;
  }
}

export function writeTrackingConsent(value: TrackingConsent): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(TRACKING_CONSENT_KEY, value);
  } catch {
    // Private mode / blocked storage — still notify in-memory listeners.
  }
  window.dispatchEvent(
    new CustomEvent(TRACKING_CONSENT_EVENT, { detail: value }),
  );
}

export function subscribeTrackingConsent(onStoreChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === TRACKING_CONSENT_KEY || event.key === null) {
      onStoreChange();
    }
  };
  const onCustom = () => onStoreChange();

  window.addEventListener("storage", onStorage);
  window.addEventListener(TRACKING_CONSENT_EVENT, onCustom);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(TRACKING_CONSENT_EVENT, onCustom);
  };
}

export function hasTrackingConsent(): boolean {
  return readTrackingConsent() === "granted";
}
