import { getMetaPixelId } from "@/lib/tracking";
import { CookieConsentBanner } from "./CookieConsentBanner";
import { MetaPixelScript } from "./MetaPixelScript";
import { TrackingEffects } from "./TrackingEffects";

/**
 * Root analytics shell.
 * Renders nothing when NEXT_PUBLIC_META_PIXEL_ID is unset.
 */
export function Analytics() {
  const pixelId = getMetaPixelId();
  if (!pixelId) return null;

  return (
    <>
      <MetaPixelScript pixelId={pixelId} />
      <TrackingEffects />
      <CookieConsentBanner enabled />
    </>
  );
}
