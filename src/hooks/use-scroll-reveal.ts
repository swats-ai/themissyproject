"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the source site's `.atlas-animate-reveal` / `.revealed` scroll-reveal
 * mechanism (see docs/research/themissyproject.org/BEHAVIORS.md #1): the element
 * starts hidden and fades/slides in once it enters the viewport. Pair the returned
 * ref + `revealed` boolean with the `.reveal` / `.reveal.revealed` utility classes
 * defined in globals.css.
 *
 * const { ref, revealed } = useScrollReveal();
 * <div ref={ref} className={cn("reveal", revealed && "revealed")}>...</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, revealed };
}
