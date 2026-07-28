import Link from "next/link";
import Image from "next/image";
import type { InstallPoint } from "@/data/installPoints";

interface DetailPanelProps {
  point: InstallPoint;
  variant?: "compact" | "full";
  onClose?: () => void;
}

export default function DetailPanel({ point, variant = "compact", onClose }: DetailPanelProps) {
  if (variant === "compact") {
    return (
      <div className="animate-hero overflow-hidden rounded-xl border border-white/[0.08] border-l-[3px] border-l-blue bg-dark-tertiary">
        <div className="flex flex-col sm:flex-row">
          {/* Close-up image */}
          <div className="relative h-48 shrink-0 sm:h-auto sm:w-48">
            <Image
              src={point.image}
              alt={`${point.label} close-up`}
              fill
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="p-5">
            <h3 className="text-base font-bold text-text-primary">{point.label}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
              {point.description}
            </p>
            {point.slug && (
              <Link
                href={`/services/${point.slug}`}
                className="group mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue"
              >
                Learn More
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.08] border-l-[3px] border-l-blue bg-dark-tertiary">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-md bg-dark/60 p-1 text-text-secondary backdrop-blur-sm transition-colors hover:text-text-primary"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Close-up image */}
      <div className="relative h-48 w-full">
        <Image
          src={point.image}
          alt={`${point.label} close-up`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-tertiary via-transparent to-transparent" />
      </div>

      <div className="p-6 pt-2">
        <div className="mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-blue">
            Protection Point
          </span>
          <h3 className="mt-1 text-lg font-bold text-text-primary">{point.label}</h3>
        </div>

        <p className="text-sm leading-relaxed text-white/75">{point.description}</p>

        <div className="mt-4 rounded-lg border border-blue/10 bg-blue/[0.04] p-4">
          <span className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-blue">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
            </svg>
            Close-up Detail
          </span>
          <p className="text-[13px] leading-relaxed text-white/65">{point.detail}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {point.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue/15 bg-blue/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.8px] text-blue"
            >
              {tag}
            </span>
          ))}
        </div>

        {point.slug && (
          <Link
            href={`/services/${point.slug}`}
            className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
          >
            View Full Service Details
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
