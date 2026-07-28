"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  image?: string;
}

const team: TeamMember[] = [
  { name: "Josh Gomes", role: "Owner", initials: "JG", color: "from-blue/80 to-blue/40", image: "/images/team-josh-gomes.jpeg" },
  { name: "Boko James", role: "Supervisor", initials: "BJ", color: "from-emerald-500/70 to-emerald-700/40" },
  { name: "Jason Blanco", role: "Supervisor", initials: "JB", color: "from-sky-500/70 to-sky-700/40" },
  { name: "Boko Elivate", role: "Admin", initials: "BE", color: "from-violet-500/70 to-violet-700/40" },
  { name: "Pooja Srivastava", role: "Assistant Admin", initials: "PS", color: "from-rose-500/70 to-rose-700/40" },
  { name: "Boko John", role: "Assistant Admin", initials: "BJ", color: "from-amber-500/70 to-amber-700/40" },
  { name: "Boko Isaac", role: "Installer", initials: "BI", color: "from-cyan-500/70 to-cyan-700/40" },
  { name: "Hamzah Algabyali", role: "Installer", initials: "HA", color: "from-indigo-500/70 to-indigo-700/40" },
  { name: "Isaac Hosu", role: "Installer", initials: "IH", color: "from-teal-500/70 to-teal-700/40" },
  { name: "John M Gomes", role: "Installer", initials: "JG", color: "from-orange-500/70 to-orange-700/40" },
  { name: "John J Gomes", role: "Installer", initials: "JG", color: "from-fuchsia-500/70 to-fuchsia-700/40" },
  { name: "Adolfo Yepez", role: "Installer", initials: "AY", color: "from-lime-500/70 to-lime-700/40" },
  { name: "Garrett Lynn", role: "Installer", initials: "GL", color: "from-pink-500/70 to-pink-700/40" },
  { name: "Legacy Installs", role: "Installer", initials: "LI", color: "from-slate-400/70 to-slate-600/40" },
];

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 300;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrows */}
      <div className="absolute -top-16 right-0 flex gap-2 md:-top-20">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.1] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/[0.12] disabled:hover:bg-white/[0.06] disabled:hover:text-white/60"
          aria-label="Scroll left"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.1] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/[0.12] disabled:hover:bg-white/[0.06] disabled:hover:text-white/60"
          aria-label="Scroll right"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {team.map((member, i) => (
          <div
            key={`${member.initials}-${i}`}
            className="w-[260px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-alt sm:w-[290px]"
          >
            {/* Avatar area */}
            <div className={`relative flex h-[320px] items-center justify-center bg-gradient-to-br ${member.color} sm:h-[360px]`}>
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <span className="select-none text-7xl font-bold text-white/90 sm:text-8xl">
                  {member.initials}
                </span>
              )}
            </div>
            {/* Info */}
            <div className="p-5">
              <p className="text-base font-semibold text-white">{member.name}</p>
              <p className="mt-1 text-sm text-white/50">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
