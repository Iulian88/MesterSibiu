/**
 * Back-compat surface — prefer `@/lib/tracking`.
 */
export {
  getMetaPixelId,
  isMetaPixelConfigured as isMetaPixelEnabled,
  TRACKING_EVENTS as META_EVENTS,
  type ContactMethod as MetaContactMethod,
} from "./tracking";
