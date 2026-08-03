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

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-10">
          {/* Active point, in close-up */}
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-dark-deep sm:min-h-[340px] lg:min-h-[440px]">
            {points.map((point, i) => (
              <Image
                key={point.id}
                src={point.image}
                alt={point.label}
                fill
                className={`object-cover transition-opacity duration-500 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <div className="max-w-md">
                <h3 className="type-display text-[22px] text-white md:text-[28px]">
                  {current.label}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  {current.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Point selector. On phones this is a horizontal scroll of chips
              sitting directly under the image, so the visual stays in view
              while moving between points; from lg it becomes the stacked list
              alongside, where each row is itself the link. */}
          <div className="-mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-1 lg:mx-0 lg:flex-col lg:gap-0 lg:divide-y lg:divide-border lg:overflow-visible lg:border-y lg:border-border lg:px-0 lg:pb-0 scrollbar-subtle">
            {points.map((point, i) => {
              const isActive = i === active;
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 lg:hidden ${
                    isActive
                      ? "border-blue bg-blue/15 text-blue-bright"
                      : "border-border-dark text-text-primary"
                  }`}
                >
                  {point.label}
                </button>
              );
            })}

            {points.map((point, i) => {
              const isActive = i === active;
              return (
                <Link
                  key={`row-${point.id}`}
                  href={point.slug ? `/services/${point.slug}` : "#"}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group hidden flex-1 items-center gap-4 px-5 py-5 text-left transition-colors duration-200 lg:flex ${
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

          {/* Mobile: one link for the active point, since the chips above only
              switch the image. */}
          {current.slug && (
            <Link
              href={`/services/${current.slug}`}
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-blue-bright transition-colors hover:text-white lg:hidden"
            >
              Install details
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
