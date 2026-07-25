"use client";

import { useEffect, useState } from "react";

/**
 * Rotating hero headline (Josh sync, QP-156).
 *
 * Cycles through headline variants every ~3s with a soft crossfade. Josh: "make
 * it change so that every two seconds or three seconds it changes to 'protect
 * what is on your lot', 'protect what you invest in' — basically like a slider."
 * The dealer-first line leads; "Protect What You Invest In" is kept but flagged
 * by Josh for review (he wondered if it's too consumer-facing).
 *
 * Honors prefers-reduced-motion: shows the first line statically, no cycling.
 */
export default function RotatingHeadline({
  phrases,
  className,
  style,
  intervalMs = 3000,
}: {
  phrases: string[];
  className?: string;
  style?: React.CSSProperties;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (phrases.length <= 1) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const cycle = setInterval(() => {
      // Fade out, swap, fade in — a gentle crossfade rather than a hard cut.
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 350);
    }, intervalMs);
    return () => clearInterval(cycle);
  }, [phrases.length, intervalMs]);

  return (
    <h1 className={className} style={style} aria-live="polite">
      <span
        style={{
          display: "inline-block",
          transition: "opacity 350ms ease, filter 350ms ease, transform 350ms ease",
          opacity: visible ? 1 : 0,
          filter: visible ? "blur(0)" : "blur(4px)",
          transform: visible ? "translateY(0)" : "translateY(6px)",
        }}
      >
        {phrases[index]}
      </span>
    </h1>
  );
}
