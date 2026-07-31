"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Live installed-unit counter (Josh sync, QP-155).
 *
 * Reads the real figure from /api/install-count, which sums
 * No_of_Installed_Units across the Creator install log. That call walks the
 * report, so it can take a moment on a cold cache: until it resolves the
 * counter reads "Calculating" rather than animating to a stale static number
 * and then jumping, which would look like the figure was wrong.
 *
 * The live indicator is labelled rather than left as a bare pulsing dot, so the
 * claim that this is a live feed is stated instead of implied.
 *
 * Honors prefers-reduced-motion by skipping the count-up entirely.
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
  /** Null until the live figure arrives; falls back to `end` on failure. */
  const [target, setTarget] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/install-count")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { units?: number } | null) => {
        if (cancelled) return;
        setTarget(
          typeof data?.units === "number" && data.units > 0 ? data.units : end,
        );
      })
      .catch(() => {
        if (!cancelled) setTarget(end);
      });
    return () => {
      cancelled = true;
    };
  }, [end]);

  // Visibility is tracked independently of the fetch: the element is often
  // already on screen before the live figure lands, and waiting for both
  // before observing would leave the counter stuck on "Calculating".
  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || target === null) return;
    if (count === target) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(target);
      return;
    }

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

  const loading = target === null;

  return (
    <div ref={ref}>
      <div className={`flex items-baseline gap-2.5 ${centered ? "justify-center" : ""}`}>
        {/* The dot sits apart so the number itself reads as plain white text,
            legible over bright photography rather than tinted into it. */}
        <span className="relative flex h-2 w-2 translate-y-[-6px]" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-bright/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-bright shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
        </span>
        <span
          className={`type-num font-bold leading-none text-white ${
            loading ? "text-[24px] text-white/70" : "text-[34px]"
          }`}
          aria-live="polite"
        >
          {loading ? (
            "Calculating"
          ) : (
            <>
              {count.toLocaleString()}
              <span>+</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
