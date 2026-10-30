"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  subscribeMetaPixelReady,
  trackContact,
  trackPageView,
  trackViewContent,
  type ContactMethod,
} from "@/lib/tracking";
import { useTrackingConsent } from "./useTrackingConsent";

function resolveContactMethod(href: string): ContactMethod | null {
  const value = href.trim().toLowerCase();
  if (value.startsWith("tel:")) return "phone";
  if (
    value.includes("wa.me/") ||
    value.includes("api.whatsapp.com/") ||
    value.includes("whatsapp.com/send")
  ) {
    return "whatsapp";
  }
  return null;
}

/**
 * Fires PageView / ViewContent / Contact after consent + Pixel init.
 * Contact is detected from existing tel: / WhatsApp anchors — links stay unchanged.
 */
export function TrackingEffects() {
  const { consent } = useTrackingConsent();
  const pathname = usePathname();
  const viewContentSent = useRef(false);
  const lastPathPageView = useRef<string | null>(null);

  useEffect(() => {
    if (consent !== "granted") return;

    return subscribeMetaPixelReady(() => {
      if (lastPathPageView.current !== pathname) {
        lastPathPageView.current = pathname;
        trackPageView();
      }
    });
  }, [consent, pathname]);

  useEffect(() => {
    if (consent !== "granted") return;

    const section = document.getElementById("servicii");
    if (!section) return;

    let observer: IntersectionObserver | null = null;

    const fireOnce = () => {
      if (viewContentSent.current) return;
      viewContentSent.current = true;
      trackViewContent();
      observer?.disconnect();
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          fireOnce();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    const unsubscribeReady = subscribeMetaPixelReady(() => {
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visible =
        rect.top < viewportHeight * 0.85 && rect.bottom > viewportHeight * 0.15;
      if (visible) fireOnce();
    });

    return () => {
      observer?.disconnect();
      unsubscribeReady();
    };
  }, [consent]);

  useEffect(() => {
    if (consent !== "granted") return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const method = resolveContactMethod(href);
      if (!method) return;

      trackContact(method);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [consent]);

  return null;
}
