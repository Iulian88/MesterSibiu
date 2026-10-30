import type { TrackingEvent } from "./types";

/**
 * Placeholder for Meta Conversions API (server-side).
 * Keep the same `eventId` as the browser Pixel for deduplication.
 * Do not implement network calls here yet.
 */
export async function sendConversionsApiEvent(
  event: TrackingEvent,
): Promise<void> {
  void event;
  // Future: POST to a Next.js route that calls Meta Graph API with
  // META_PIXEL_ID + META_CAPI_ACCESS_TOKEN (server-only env vars).
  return;
}
