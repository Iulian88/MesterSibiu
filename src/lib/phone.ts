import { CONTACT } from "./contact";

/**
 * Returns a tel: URI for the verified business number.
 * All phone CTAs must use this helper.
 */
export function getPhoneUrl(): string {
  return `tel:${CONTACT.phoneE164}`;
}

export function getPhoneDisplay(): string {
  return CONTACT.phoneDisplay;
}
