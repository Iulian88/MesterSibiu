/**
 * Shared tracking types for Meta Pixel (browser) and a future Conversions API.
 * Keep eventId stable across channels for deduplication.
 */

export const TRACKING_EVENTS = {
  PageView: "PageView",
  ViewContent: "ViewContent",
  Contact: "Contact",
} as const;

export type TrackingEventName =
  (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS];

export type ContactMethod = "whatsapp" | "phone";

/** Custom data only — never include PII (phone, name, email, message text). */
export type TrackingEventParams = {
  content_name?: string;
  content_category?: string;
  content_type?: string;
  content_ids?: string[];
};

export type TrackingEvent = {
  name: TrackingEventName;
  eventId: string;
  params?: TrackingEventParams;
  /** Browser pixel today; server Conversions API later. */
  channel: "browser" | "server";
};

export type TrackingConsent = "granted" | "denied";
