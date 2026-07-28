"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated "live" installation counter (Josh sync, QP-155).
 *
 * Counts up to the configured lifetime install figure when scrolled into view,
 * with a subtle live indicator. Josh wanted this to feel real ("a live counter
 * with an exact amount makes it look more real"). The value comes from
 * siteConfig.installCount; swap in a real app fetch when the QP app exposes one.
 *
 * Honors prefers-reduced-motion (shows the final number immediately) and matches
 * the trust-bar's centered blue style.
 */
export default function LiveInstallCounter({ end }: { end: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(end);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, end]);

  useEffect(() => {
    if (!started) return;
    if (count === end) return;
    const duration = 2000;
    const steps = 80;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (current >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, end]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
        </span>
        <span className="text-[42px] font-bold leading-none text-blue tabular-nums">
          {count.toLocaleString()}
          <span>+</span>
        </span>
      </div>
    </div>
  );
}
