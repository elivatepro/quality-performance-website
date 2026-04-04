"use client";

import { useState } from "react";
import Link from "next/link";
import { installPoints } from "@/data/installPoints";
import VehicleMapImage from "./VehicleMapImage";
import ChipBar from "./ChipBar";
import DetailPanel from "./DetailPanel";

export default function ProtectionMapSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activePoint = installPoints.find((p) => p.id === activeId) || null;

  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-gold">
            How We Protect
          </p>
          <h2
            className="text-3xl font-bold text-text-primary md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Every Vulnerable Area, Covered
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-lg text-text-secondary">
            Tap any protection point to see exactly what we install and why it
            matters.
          </p>
        </div>

        {/* Vehicle Image */}
        <div className="mx-auto max-w-4xl">
          <VehicleMapImage activeId={activeId} onSelect={setActiveId} />
        </div>

        {/* Chip Bar */}
        <div className="mx-auto mt-6 max-w-4xl">
          <ChipBar activeId={activeId} onSelect={setActiveId} />
        </div>

        {/* Detail Panel (compact) */}
        {activePoint && (
          <div className="mx-auto mt-6 max-w-4xl">
            <DetailPanel point={activePoint} variant="compact" />
          </div>
        )}

        {/* Link to full page */}
        <div className="mt-10 text-center">
          <Link
            href="/protection-map"
            className="group inline-flex items-center gap-2 text-base font-semibold text-gold"
          >
            Explore Full Protection Map
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
