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
export default function LiveInstallCounter({
  end,
  centered = true,
}: {
  end: number;
  centered?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  // Starts at the static figure so the counter renders instantly, then swaps to
  // the live unit total from Zoho once /api/install-count responds.
  const [target, setTarget] = useState(end);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/install-count")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { units?: number } | null) => {
        if (!cancelled && typeof data?.units === "number" && data.units > 0) {
          setTarget(data.units);
        }
      })
      .catch(() => {
        /* keep the static fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(target);
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
  }, [started, target]);

  useEffect(() => {
    if (!started) return;
    if (count === target) return;
    const duration = 2000;
    const steps = 80;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (current >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, target]);

  return (
    <div ref={ref}>
      <div className={`flex items-baseline gap-2.5 ${centered ? "justify-center" : ""}`}>
        {/* Live dot sits on its own so the number reads as plain white text,
            legible over bright photography rather than tinted into it. */}
        <span className="relative flex h-2 w-2 translate-y-[-6px]" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-bright/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-bright shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
        </span>
        <span className="type-num text-[34px] font-bold leading-none text-white">
          {count.toLocaleString()}
          <span>+</span>
        </span>
      </div>
    </div>
  );
}
