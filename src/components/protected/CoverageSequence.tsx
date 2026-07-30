"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { coveragePoints } from "@/data/coveragePoints";

/**
 * Scroll-synced tour of the install points, for the consumer /protected page.
 *
 * The visual pins to the viewport while the caption column scrolls past it, so
 * the car appears to travel from one protected area to the next. Each point
 * shows its motion clip when one exists and its still otherwise, which lets the
 * page ship before the animations are generated.
 *
 * Uses IntersectionObserver rather than a scroll listener so nothing runs on
 * the main thread per frame. Under prefers-reduced-motion the pinning still
 * works but the crossfades resolve instantly (handled by the global CSS rule).
 */
export default function CoverageSequence() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (nodes.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the middle of the viewport so the caption
        // and the visual always agree about which point is current.
        let best: { index: number; ratio: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { index, ratio: entry.intersectionRatio };
          }
        }
        if (best) setActive(best.index);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <h2 id="coverage-heading" className="type-display text-[32px] text-text-primary md:text-[42px]">
            Where the film is working
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            These are the areas we protect. Scroll to see each one up close.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Pinned visual. `self-start` plus a sticky offset keeps it in view
              for the whole caption column instead of scrolling away at the top.
              Hidden on mobile, where each step carries its own image instead:
              a single sticky visual there would either cover the captions or
              sit too far from the one it describes. */}
          <div className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <div className="relative h-[300px] overflow-hidden rounded-2xl bg-dark-deep sm:h-[380px] lg:h-[min(72vh,600px)]">
              {coveragePoints.map((point, i) => (
                <div
                  key={point.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== active}
                >
                  {point.motion ? (
                    // Motion clip: GIFs render via <img>, video files via <video>.
                    point.motion.endsWith(".gif") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={point.motion}
                        alt={`${point.label}: ${point.caption}`}
                        className="h-full w-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    ) : (
                      <video
                        src={point.motion}
                        poster={point.image}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload={i === 0 ? "auto" : "none"}
                        className="h-full w-full object-cover"
                      />
                    )
                  ) : (
                    <Image
                      src={point.image}
                      alt={`${point.label}: ${point.caption}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  )}
                </div>
              ))}

              {/* Leader line + label, anchored to the visual */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-deep/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-8 shrink-0 bg-blue-bright md:w-12"
                  />
                  <div>
                    <p className="type-display text-[20px] text-white md:text-[26px]">
                      {coveragePoints[active].label}
                    </p>
                    <p className="mt-1 text-[13px] text-white/70 md:text-[14px]">
                      {coveragePoints[active].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress: which point of how many */}
              <div className="absolute right-5 top-5 flex gap-1.5" aria-hidden="true">
                {coveragePoints.map((point, i) => (
                  <span
                    key={point.id}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === active ? "w-5 bg-blue-bright" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Caption column: one step per point */}
          <div>
            {coveragePoints.map((point, i) => (
              <div
                key={point.id}
                data-index={i}
                ref={(node) => {
                  stepRefs.current[i] = node;
                }}
                className="flex flex-col justify-center border-b border-border py-8 last:border-b-0 lg:min-h-[46vh]"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "lg:opacity-40"
                  }`}
                >
                  {/* Mobile-only visual, paired with its own caption. */}
                  <div className="relative mb-5 h-[220px] overflow-hidden rounded-2xl bg-dark-deep sm:h-[300px] lg:hidden">
                    {point.motion && point.motion.endsWith(".gif") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={point.motion}
                        alt={`${point.label}: ${point.caption}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : point.motion ? (
                      <video
                        src={point.motion}
                        poster={point.image}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="none"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={point.image}
                        alt={`${point.label}: ${point.caption}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-deep/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-4">
                      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-blue-bright" />
                      <span className="text-[13px] text-white/80">{point.location}</span>
                    </div>
                  </div>

                  <h3 className="type-display text-[24px] text-text-primary md:text-[30px]">
                    {point.label}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-text-secondary">
                    {point.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
