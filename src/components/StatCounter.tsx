"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function StatCounter({ end, suffix = "", prefix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) { setStarted(true); observer.unobserve(el); }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 80;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (current >= steps) { setCount(end); setShowSuffix(true); clearInterval(timer); }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref}>
      <div className="tabular-nums text-3xl font-extrabold text-white sm:text-4xl">
        {prefix}{count.toLocaleString()}
        <span className={`transition-opacity duration-300 ${showSuffix ? "opacity-100" : "opacity-0"}`}>{suffix}</span>
      </div>
      <div className="mt-1.5 text-[13px] font-medium text-white/50">{label}</div>
    </div>
  );
}
