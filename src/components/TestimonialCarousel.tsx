"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: "mike-reynolds",
    name: "Mike Reynolds",
    role: "Service Director",
    company: "Reynolds Auto Group",
    quote:
      "Quality Performance transformed how we handle PPF across our dealership network. The portal tracking alone saved us hours every week, and the install quality is consistently outstanding.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Car Owner",
    company: "2024 BMW X5",
    quote:
      "I was skeptical about PPF until I saw the results on my X5. Six months later, my car still looks showroom-new. The self-healing film is genuinely incredible, a shopping cart scratch vanished in the sun.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "david-kowalski",
    name: "David Kowalski",
    role: "F&I Director",
    company: "Premier Automotive Group",
    quote:
      "We've partnered with QP across three locations. Their team is professional, on-time, and the automated billing through the dealer portal saves our accounting team hours every month.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length,
    );
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      {/* Dark overlay with subtle blur */}
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[2px] text-white/70 backdrop-blur-sm">
            Testimonials
          </span>
          <h2
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            What Our Partners Say
          </h2>
        </div>

        {/* Client name tabs */}
        <div className="mb-10 flex items-center justify-center gap-6 sm:gap-10">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(i)}
              className={`relative pb-3 text-[13px] font-medium tracking-wide transition-colors duration-300 sm:text-sm ${
                i === activeIndex
                  ? "text-white"
                  : "text-white/35 hover:text-white/55"
              }`}
              role="tab"
              aria-selected={i === activeIndex}
            >
              {t.name}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                  i === activeIndex
                    ? "scale-x-100 bg-blue"
                    : "scale-x-0 bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Glass Card */}
        <div className="mx-auto max-w-[960px]">
          <div className="overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="relative min-h-[320px] sm:min-h-[360px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={`grid items-stretch transition-all duration-500 ease-out md:grid-cols-[40%_60%] ${
                    i === activeIndex
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                  role="tabpanel"
                  aria-hidden={i !== activeIndex}
                >
                  {/* Photo */}
                  <div className="relative hidden h-full min-h-[360px] md:block">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Quote */}
                  <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
                    {/* Quote mark */}
                    <svg
                      className="mb-4 h-8 w-8 text-blue/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                    </svg>
                    <blockquote className="text-base leading-relaxed text-white/80 sm:text-lg sm:leading-[1.7]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6">
                      <div className="text-sm font-bold text-white">
                        {t.name}
                      </div>
                      <div className="text-[13px] text-white/50">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] text-white/50 transition-all duration-200 hover:border-blue hover:text-blue"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] text-white/50 transition-all duration-200 hover:border-blue hover:text-blue"
            aria-label="Next testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
