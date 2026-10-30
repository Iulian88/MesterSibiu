/**
 * Meta Pixel config — no invented IDs.
 * Tracking stays fully off when NEXT_PUBLIC_META_PIXEL_ID is empty.
 */

export function getMetaPixelId(): string | null {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  return id ? id : null;
}

export function isMetaPixelConfigured(): boolean {
  return Boolean(getMetaPixelId());
}
