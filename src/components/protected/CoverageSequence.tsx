"use client";

import { useState } from "react";
import Image from "next/image";
import { coveragePoints } from "@/data/coveragePoints";

/**
 * Protected areas, for the consumer /protected page.
 *
 * Mirrors the dealer coverage section: a single large visual on the left and a
 * compact list on the right, where hovering, tapping, or focusing a row swaps
 * the image. Rows are plain buttons rather than links, because the install
 * point pages they would open are written for dealers, not vehicle owners.
 *
 * All images stay mounted and crossfade, so switching is instant.
 */
export default function CoverageSequence() {
  const [active, setActive] = useState(0);
  const current = coveragePoints[active];

  return (
    <section className="bg-surface-alt py-24 md:py-32" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <h2 id="coverage-heading" className="type-display text-[32px] text-text-primary md:text-[42px]">
            Where the film is working
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            These are the areas we protect on your vehicle.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-10">
          {/* Active point, in close-up */}
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-dark-deep sm:min-h-[340px] lg:min-h-[440px]">
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
                      alt={point.label}
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
                    alt={point.label}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                )}
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="max-w-md">
                <h3 className="type-display text-[24px] text-white md:text-[28px]">
                  {current.label}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  {current.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Point selector. On phones this is a horizontal scroll of chips
              directly under the image, so the visual stays in view while you
              move between points; on wider screens it becomes the stacked
              list that sits alongside. */}
          <div
            className="-mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-1 lg:mx-0 lg:flex-col lg:gap-0 lg:divide-y lg:divide-border lg:overflow-visible lg:border-y lg:border-border lg:px-0 lg:pb-0 scrollbar-subtle"
            role="tablist"
            aria-label="Protected areas"
          >
            {coveragePoints.map((point, i) => {
              const isActive = i === active;
              return (
                <button
                  key={point.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group shrink-0 snap-start rounded-full border px-4 py-2.5 text-left text-[14px] font-semibold transition-colors duration-200 lg:flex lg:flex-1 lg:shrink lg:items-center lg:gap-4 lg:rounded-none lg:border-0 lg:px-5 lg:py-5 lg:text-[16px] ${
                    isActive
                      ? "border-blue bg-blue/15 text-blue-bright lg:bg-dark-tertiary/70"
                      : "border-border-dark text-text-primary lg:hover:bg-dark-tertiary/40"
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block transition-colors lg:text-[16px] lg:font-bold ${
                        isActive ? "lg:text-blue-bright" : "lg:text-text-primary"
                      }`}
                    >
                      {point.label}
                    </span>
                    {/* The location line is useful beside the image, but on a
                        phone it would make each chip too wide to scan. */}
                    <span className="mt-0.5 hidden text-[13px] font-normal leading-snug text-text-secondary lg:block">
                      {point.location}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
