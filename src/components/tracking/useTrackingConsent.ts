"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  readTrackingConsent,
  subscribeTrackingConsent,
  writeTrackingConsent,
  type TrackingConsent,
} from "@/lib/tracking";

function getServerSnapshot(): TrackingConsent | null {
  return null;
}

export function useTrackingConsent() {
  const consent = useSyncExternalStore(
    subscribeTrackingConsent,
    readTrackingConsent,
    getServerSnapshot,
  );

  const accept = useCallback(() => {
    writeTrackingConsent("granted");
  }, []);

  const decline = useCallback(() => {
    writeTrackingConsent("denied");
  }, []);

  return { consent, accept, decline, undecided: consent === null };
}
