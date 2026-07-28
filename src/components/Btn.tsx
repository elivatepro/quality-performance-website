import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Site-wide button primitive.
 *
 * Shape system: interactive controls are 6px radius, cards 12px,
 * shells (nav, footer, media frames) 16px. Buttons never wrap.
 */
interface BtnProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
  external?: boolean;
  className?: string;
}

const base =
  "group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] font-semibold transition-all duration-200 ease-out active:scale-[0.98]";

const variants = {
  primary: "bg-blue text-white hover:bg-blue-hover",
  outline:
    "border border-white/20 text-white/85 hover:border-white/45 hover:text-white",
  ghost: "text-blue hover:text-blue-hover",
};

const sizes = {
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Btn({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  external = false,
  className = "",
}: BtnProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
