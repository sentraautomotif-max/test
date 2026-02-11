"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lightweight IntersectionObserver-based reveal hook.
 * Returns a ref to attach to any element and `isVisible` boolean.
 * Once visible, stays visible (no re-hide on scroll away).
 */
export function useReveal(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
