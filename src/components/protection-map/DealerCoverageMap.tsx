"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { installPoints } from "@/data/installPoints";
import { dealerInstallPointSlugs } from "@/lib/siteConfig";

/**
 * DealerCoverageMap (Josh sync, QP-157; redesigned per Boko's feedback).
 *
 * The five dealer install points as an interactive photo-swap: selecting a
 * point shows its real install close-up instead of abstract markers on a car
 * diagram. All five images stay mounted and crossfade, so switching is
 * instant. Hover, focus, and tap all drive the selection.
 */

const points = dealerInstallPointSlugs
  .map((slug) => installPoints.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function DealerCoverageMap() {
  const [active, setActive] = useState(0);
  const current = points[active];

  return (
    <section className="bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <h2 className="type-display text-[32px] text-text-primary md:text-[42px]">
            Five points. Total protection.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We cover the areas that take the most abuse on every vehicle on your
            lot, clearly marked, precisely installed.
          </p>
        </div>

        {/* Phones get a plain vertical list: one card per point, image above
            its own words, each linking to its install page. Horizontal scroll
            hid points off-screen with no affordance that they existed, and a
            shared visual meant tapping in one place to change something
            elsewhere. */}
        <ul className="space-y-4 lg:hidden">
          {points.map((point, i) => (
            <li key={point.id}>
              <Link
                href={point.slug ? `/services/${point.slug}` : "#"}
                className="group block overflow-hidden rounded-2xl border border-border bg-dark-tertiary transition-colors duration-200 active:border-blue/50"
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
                  <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
                    {point.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-blue-bright">
                    Install details
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* From lg the shared visual works: the list sits beside the image
            rather than above it, so hovering a row changes something in view. */}
        <div className="hidden gap-10 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-dark-deep">
            {points.map((point, i) => (
              <Image
                key={point.id}
                src={point.image}
                alt={point.label}
                fill
                className={`object-cover transition-opacity duration-500 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                sizes="60vw"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="max-w-md">
                <h3 className="type-display text-[28px] text-white">
                  {current.label}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  {current.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Each row is itself the link, so the element you hover to preview a
              point is the one you click to open it. */}
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {points.map((point, i) => {
              const isActive = i === active;
              return (
                <Link
                  key={point.id}
                  href={point.slug ? `/services/${point.slug}` : "#"}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex flex-1 items-center gap-4 px-5 py-5 text-left transition-colors duration-200 ${
                    isActive ? "bg-dark-tertiary/70" : "hover:bg-dark-tertiary/40"
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[16px] font-bold transition-colors ${isActive ? "text-blue-bright" : "text-text-primary"}`}>
                      {point.label}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-text-secondary">
                      {point.description}
                    </span>
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                      isActive ? "translate-x-0 text-blue-bright opacity-100" : "-translate-x-1 text-text-tertiary opacity-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
