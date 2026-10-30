/**
 * Verified contact details for Meșter la Tine Acasă (Iulian).
 * Single source of truth — do not hardcode elsewhere.
 */

export const CONTACT = {
  name: "Iulian",
  brand: "Meșter la Tine Acasă",
  tagline: "Simplu. Rapid. De încredere.",
  subtitle: "SERVICII PENTRU CASĂ · SIBIU",
  area: "Sibiu și împrejurimi",
  phoneDisplay: "0749 397 079",
  phoneNational: "0749397079",
  phoneE164: "+40749397079",
  phoneDigitsInternational: "40749397079",
  whatsappBaseUrl: "https://wa.me/40749397079",
  defaultWhatsappMessage:
    "Bună ziua! Am găsit site-ul Meșter la Tine Acasă și aș dori ajutor pentru o lucrare în Sibiu. Vă pot trimite câteva detalii?",
} as const;

export type ContactInfo = typeof CONTACT;
