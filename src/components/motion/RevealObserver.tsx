"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll-reveal: observes [data-reveal] nodes once.
 * Progressive enhancement — content stays visible without JS.
 * CTAs are never delayed by this component.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (nodes.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      for (const node of nodes) {
        node.classList.add("is-visible");
      }
      document.documentElement.classList.add("js-reveal");
      return;
    }

    // Mark already-visible nodes before enabling hide styles (avoid FOUC).
    const viewportBottom = window.innerHeight * 0.92;
    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top < viewportBottom && rect.bottom > 0) {
        node.classList.add("is-visible");
      }
    }

    document.documentElement.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    for (const node of nodes) {
      if (!node.classList.contains("is-visible")) {
        observer.observe(node);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
