import { hasTrackingConsent } from "./consent";
import { isMetaPixelConfigured } from "./config";
import { sendConversionsApiEvent } from "./conversions-api";
import { createEventId } from "./event-id";
import { sendMetaPixelEvent } from "./meta-pixel";
import {
  TRACKING_EVENTS,
  type ContactMethod,
  type TrackingEvent,
  type TrackingEventParams,
} from "./types";

const contactCooldownMs = 1500;
const lastContactAt: Partial<Record<ContactMethod, number>> = {};

function canTrack(): boolean {
  return isMetaPixelConfigured() && hasTrackingConsent();
}

function dispatch(
  name: TrackingEvent["name"],
  params?: TrackingEventParams,
  eventId = createEventId(name.toLowerCase()),
): string | null {
  if (!canTrack()) return null;

  const event: TrackingEvent = {
    name,
    eventId,
    params,
    channel: "browser",
  };

  sendMetaPixelEvent(event);
  // Prepare dual-channel payload for a future Conversions API route.
  void sendConversionsApiEvent({ ...event, channel: "server" });

  return eventId;
}

/** Standard PageView — once per page lifetime (deduped in meta-pixel). */
export function trackPageView(): string | null {
  return dispatch(TRACKING_EVENTS.PageView);
}

/** Services section impression — once per page lifetime. */
export function trackViewContent(): string | null {
  return dispatch(TRACKING_EVENTS.ViewContent, {
    content_name: "Servicii",
    content_category: "handyman_services",
    content_type: "product_group",
    content_ids: ["servicii"],
  });
}

/**
 * Contact conversion — WhatsApp or phone click.
 * No PII in params. Short cooldown avoids accidental duplicate fires.
 */
export function trackContact(method: ContactMethod): string | null {
  if (!canTrack()) return null;

  const now = Date.now();
  const previous = lastContactAt[method] ?? 0;
  if (now - previous < contactCooldownMs) return null;
  lastContactAt[method] = now;

  return dispatch(TRACKING_EVENTS.Contact, {
    content_name: method,
    content_category: "contact",
  });
}
