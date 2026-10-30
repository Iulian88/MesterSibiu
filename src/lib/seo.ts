import type { Metadata } from "next";
import { CONTACT } from "./contact";
import { getSiteUrl } from "./site";

export const SEO = {
  title: "Meșter Sibiu | Meșter la Tine Acasă — Handyman & reparații",
  titleTemplate: "%s | Meșter la Tine Acasă",
  description:
    "Meșter Sibiu pentru montaj mobilier, reparații prin casă și mici reparații. Handyman Sibiu și împrejurimi — Meșter la Tine Acasă. Simplu. Rapid. De încredere.",
  keywords: [
    "Meșter Sibiu",
    "Handyman Sibiu",
    "Montaj mobilier Sibiu",
    "Reparații prin casă Sibiu",
    "Mici reparații Sibiu",
    "Montaj rafturi Sibiu",
  ],
  locale: "ro_RO",
  ogImagePath: "/opengraph-image",
} as const;

export function buildMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: SEO.title,
      template: SEO.titleTemplate,
    },
    description: SEO.description,
    keywords: [...SEO.keywords],
    applicationName: CONTACT.brand,
    authors: [{ name: CONTACT.name }],
    creator: CONTACT.brand,
    publisher: CONTACT.brand,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url: siteUrl,
      siteName: CONTACT.brand,
      title: SEO.title,
      description: SEO.description,
      images: [
        {
          url: SEO.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${CONTACT.brand} — Meșter Sibiu`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [SEO.ogImagePath],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    category: "home services",
  };
}

/**
 * LocalBusiness JSON-LD — only verified fields.
 * No address, opening hours, reviews, ratings, or years of experience.
 */
export function buildLocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: CONTACT.brand,
    description: SEO.description,
    url: siteUrl,
    telephone: CONTACT.phoneE164,
    image: `${siteUrl}${SEO.ogImagePath}`,
    areaServed: {
      "@type": "Place",
      name: CONTACT.area,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneE164,
      contactType: "customer service",
      availableLanguage: ["Romanian"],
    },
    founder: {
      "@type": "Person",
      name: CONTACT.name,
    },
    slogan: CONTACT.tagline,
    knowsAbout: [...SEO.keywords],
  };
}
