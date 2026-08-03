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

        {/* Phones get a plain stack: one card per area, image above its own
            words. A shared visual with a separate selector works on a wide
            screen, but on a phone it means tapping in one place and looking in
            another, and the caption ends up on top of the photograph. */}
        <ul className="space-y-4 lg:hidden">
          {coveragePoints.map((point, i) => (
            <li
              key={point.id}
              className="overflow-hidden rounded-2xl border border-border bg-dark-tertiary"
            >
              <div className="relative h-[190px] bg-dark-deep sm:h-[240px]">
                <Image
                  src={point.image}
                  alt={point.label}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="type-display text-[20px] text-text-primary">
                  {point.label}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-blue-bright">
                  {point.location}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {point.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden gap-5 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-10">
          {/* Active point, in close-up */}
          <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-dark-deep">
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

          {/* Point selector, wide screens only: the mobile stack above needs
              no separate control. */}
          <div
            className="flex flex-col divide-y divide-border border-y border-border"
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
                  className={`group flex flex-1 items-center gap-4 px-5 py-5 text-left transition-colors duration-200 ${
                    isActive ? "bg-dark-tertiary/70" : "hover:bg-dark-tertiary/40"
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-[16px] font-bold transition-colors ${
                        isActive ? "text-blue-bright" : "text-text-primary"
                      }`}
                    >
                      {point.label}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-text-secondary">
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
