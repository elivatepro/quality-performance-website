"use client";

import { useState } from "react";
import Link from "next/link";
import { installPoints } from "@/data/installPoints";
import VehicleMapImage from "./VehicleMapImage";
import ChipBar from "./ChipBar";
import DetailPanel from "./DetailPanel";

export default function ProtectionMapFull() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activePoint = installPoints.find((p) => p.id === activeId) || null;

  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
      {/* Desktop: 3-column layout */}
      <div className="hidden lg:grid lg:grid-cols-[220px_1fr_340px] lg:gap-8 lg:items-start">
        {/* Left sidebar */}
        <div className="sticky top-28">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-text-secondary">
            8 Protection Points
          </p>
          <div className="space-y-0.5">
            {installPoints.map((point) => (
              <button
                key={point.id}
                onClick={() => setActiveId(activeId === point.id ? null : point.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200 ${
                  activeId === point.id
                    ? "border-l-2 border-blue bg-blue/[0.06]"
                    : "border-l-2 border-transparent hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full transition-all duration-200 ${
                    activeId === point.id ? "bg-blue" : "bg-blue/30"
                  }`}
                />
                <span
                  className={`text-[13px] transition-all duration-200 ${
                    activeId === point.id
                      ? "font-semibold text-text-primary"
                      : "text-text-secondary"
                  }`}
                >
                  {point.shortLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Center: Vehicle image */}
        <div>
          <VehicleMapImage activeId={activeId} onSelect={setActiveId} />
        </div>

        {/* Right: Detail panel */}
        <div className="sticky top-28">
          {activePoint ? (
            <DetailPanel
              point={activePoint}
              variant="full"
              onClose={() => setActiveId(null)}
            />
          ) : (
            <div className="rounded-xl border border-white/[0.08] bg-dark-tertiary p-10 text-center">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-blue/25"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8L12 12L15 14" />
              </svg>
              <p className="text-sm text-text-secondary">
                Select a protection point on the vehicle to see installation
                details.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="lg:hidden">
        <VehicleMapImage activeId={activeId} onSelect={setActiveId} />

        <div className="mt-4">
          <ChipBar activeId={activeId} onSelect={setActiveId} />
        </div>

        {activePoint && (
          <div className="mt-4">
            <DetailPanel
              point={activePoint}
              variant="full"
              onClose={() => setActiveId(null)}
            />
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-sm text-text-secondary">
          Every protection point uses self-healing film, made in the USA,
          backed by a 5-year warranty.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-blue px-8 py-3.5 text-sm font-semibold uppercase tracking-[1px] text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
          >
            Get a Quote
          </Link>
          <Link
            href="/partner-with-us"
            className="inline-flex items-center rounded-lg border-[1.5px] border-blue px-8 py-3.5 text-sm font-semibold uppercase tracking-[1px] text-blue transition-all hover:bg-blue hover:text-white"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
