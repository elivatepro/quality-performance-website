"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroPoints } from "@/data/heroPoints";

const INTERVAL_MS = 4500;

/**
 * Rotating annotated install points for the /protected hero.
 *
 * The artwork carries a leader line out to the upper-right; the caption is real
 * text positioned at the end of that line, so it stays sharp and accessible
 * rather than baked into the image. On narrow screens the caption drops below
 * the frame, where there is room for it to be legible.
 *
 * Advances on a timer, pauses on hover or focus, and stops entirely under
 * prefers-reduced-motion (the first point is shown statically, and the dots
 * still work). Arrow keys move between points once the strip has focus.
 */
export default function HeroRotator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Read lazily so the initial value is correct on first paint without a
  // setState inside an effect body.
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % heroPoints.length),
      INTERVAL_MS,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduced]);

  const go = useCallback((index: number) => {
    setActive(((index % heroPoints.length) + heroPoints.length) % heroPoints.length);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(active + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(active - 1);
      }
    },
    [active, go],
  );

  const current = heroPoints[active];

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Frame: artwork plus the caption anchored to the leader line. */}
      <div className="relative">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-dark-deep">
          {heroPoints.map((point, i) => (
            <Image
              key={point.id}
              src={point.image}
              alt={`${point.label}: ${point.caption}`}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className={`object-cover transition-opacity duration-700 ease-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Caption for wide screens: pinned to the frame's dark upper-right,
              where every image deliberately leaves room, so each drawn leader
              line reads as terminating at the text. */}
          <div className="pointer-events-none absolute right-4 top-4 z-10 hidden w-[58%] max-w-[300px] lg:block xl:w-[52%]">
            <div
              key={current.id}
              className="animate-hero rounded-xl border border-white/15 bg-dark-deep/80 px-4 py-3.5 backdrop-blur-md"
              style={{ animationDelay: "0.05s" }}
            >
              <p className="type-display text-[17px] leading-tight text-white">
                {current.label}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-white/70">
                {current.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Caption for narrow screens: below the frame, where there is room. */}
        <div className="mt-4 lg:hidden">
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-blue-bright" />
            <div>
              <p className="type-display text-[18px] leading-tight text-white">
                {current.label}
              </p>
              <p className="mt-1.5 max-w-[46ch] text-[14px] leading-snug text-white/70">
                {current.caption}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div
        className="mt-5 flex items-center gap-3"
        role="tablist"
        aria-label="Protected areas"
        onKeyDown={onKeyDown}
      >
        {heroPoints.map((point, i) => (
          <button
            key={point.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={point.label}
            tabIndex={i === active ? 0 : -1}
            onClick={() => go(i)}
            className="group py-2"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-blue-bright"
                  : "w-4 bg-white/25 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
        <span className="ml-auto text-[12px] tabular-nums text-white/40">
          {active + 1} / {heroPoints.length}
        </span>
      </div>

      {/* Announce changes for screen readers without moving focus. */}
      <p className="sr-only" aria-live="polite">
        {current.label}. {current.caption}
      </p>
    </div>
  );
}
