import { CONTACT } from "./contact";

export type WhatsAppLinkOptions = {
  /** Override the default prefilled message. */
  message?: string;
  /** Optional UTM / campaign query params appended after the WhatsApp URL. */
  utm?: Record<string, string | undefined>;
};

/**
 * Builds a WhatsApp chat URL with a prefilled message.
 * All WhatsApp CTAs must use this helper.
 */
export function getWhatsAppUrl(options: WhatsAppLinkOptions = {}): string {
  const message = options.message ?? CONTACT.defaultWhatsappMessage;
  const url = new URL(CONTACT.whatsappBaseUrl);
  url.searchParams.set("text", message);

  if (options.utm) {
    for (const [key, value] of Object.entries(options.utm)) {
      if (value) {
        url.searchParams.set(key, value);
      }
    }
  }

  return url.toString();
}
