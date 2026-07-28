import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="animate-loading-in fixed inset-0 z-[100] flex items-center justify-center bg-dark/70 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing logo with glow ring */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-4 rounded-full bg-blue/10 blur-xl animate-logo-pulse" />
          {/* Shimmer ring */}
          <div className="absolute -inset-2 rounded-full animate-logo-shimmer" />
          {/* Logo */}
          <div className="relative animate-logo-pulse">
            <Image
              src="/images/qp-logo.png"
              alt="Loading..."
              width={64}
              height={64}
              className="h-16 w-16 drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              priority
            />
          </div>
        </div>

        {/* Loading bar */}
        <div className="h-[2px] w-24 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-full animate-logo-shimmer rounded-full bg-gradient-to-r from-transparent via-blue/60 to-transparent" style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </div>
  );
}
