"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up from 0 to `target` once the returned ref scrolls into view,
 * mirroring the source site's stat counters (see BEHAVIORS.md #2).
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  { duration = 1600 }: { duration?: number } = {},
) {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number;
    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return { ref, value };
}
