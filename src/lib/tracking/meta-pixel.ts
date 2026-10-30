import type { TrackingEvent } from "./types";

type FbqCommand = (
  command: string,
  eventNameOrId?: string,
  params?: Record<string, unknown>,
  options?: { eventID?: string },
) => void;

type FbqStub = FbqCommand & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: FbqStub;
  loaded: boolean;
  version: string;
  instance?: {
    pixelsByID?: Record<string, unknown>;
  };
};

declare global {
  interface Window {
    fbq?: FbqStub;
    _fbq?: FbqStub;
    __mesterPixelInitialized?: boolean;
  }
}

const PIXEL_READY_EVENT = "mester-pixel-ready";

/** In-memory queue until fbevents.js is ready. */
const pending: TrackingEvent[] = [];

/** Dedup keys already sent this page lifetime. */
const sentKeys = new Set<string>();

export function isMetaPixelReady(): boolean {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

export function markMetaPixelInitialized(pixelId: string): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }
  if (window.__mesterPixelInitialized) return;

  const existingIds = window.fbq.instance?.pixelsByID
    ? Object.keys(window.fbq.instance.pixelsByID)
    : [];

  // Bootstrap snippet may already have queued/applied init — avoid a second one.
  if (!existingIds.includes(pixelId)) {
    window.fbq("init", pixelId);
  }

  window.__mesterPixelInitialized = true;
  window.dispatchEvent(new Event(PIXEL_READY_EVENT));
  flushPendingMetaPixelEvents();
}

export function subscribeMetaPixelReady(onReady: () => void): () => void {
  if (isMetaPixelReady() && window.__mesterPixelInitialized) {
    onReady();
    return () => {};
  }
  const handler = () => onReady();
  window.addEventListener(PIXEL_READY_EVENT, handler);
  return () => window.removeEventListener(PIXEL_READY_EVENT, handler);
}

function dedupeKey(event: TrackingEvent): string {
  if (event.name === "PageView") return "PageView";
  if (event.name === "ViewContent") {
    return `ViewContent:${event.params?.content_name ?? "default"}`;
  }
  // Contact: allow multiple intentional clicks; short-window dedupe is handled in track.ts
  return `Contact:${event.eventId}`;
}

export function sendMetaPixelEvent(event: TrackingEvent): boolean {
  const key = dedupeKey(event);
  if (sentKeys.has(key)) return false;

  if (!isMetaPixelReady() || !window.__mesterPixelInitialized) {
    const alreadyQueued = pending.some(
      (item) => dedupeKey(item) === key && item.name !== "Contact",
    );
    if (!alreadyQueued || event.name === "Contact") {
      pending.push(event);
    }
    return false;
  }

  sentKeys.add(key);

  const params = event.params
    ? (Object.fromEntries(
        Object.entries(event.params).filter(([, value]) => value !== undefined),
      ) as Record<string, unknown>)
    : {};

  window.fbq?.("track", event.name, params, { eventID: event.eventId });

  return true;
}

function flushPendingMetaPixelEvents(): void {
  if (!isMetaPixelReady() || !window.__mesterPixelInitialized) return;
  const queue = pending.splice(0, pending.length);
  for (const event of queue) {
    sendMetaPixelEvent(event);
  }
}

/** Test helper — resets in-memory dedupe (not used in production UI). */
export function __resetMetaPixelDedupeForTests(): void {
  sentKeys.clear();
  pending.length = 0;
}
