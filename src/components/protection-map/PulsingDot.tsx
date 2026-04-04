interface PulsingDotProps {
  x: number;
  y: number;
  active: boolean;
  label: string;
  onClick: () => void;
}

export default function PulsingDot({ x, y, active, label, onClick }: PulsingDotProps) {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-label={`View ${label} details`}
    >
      {/* Outer pulse ring */}
      {!active && (
        <span
          className="animate-pulse-ring absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-gold/60 md:h-10 md:w-10"
        />
      )}
      {/* Inner dot */}
      <span
        className={`relative block rounded-full border-2 transition-all duration-300 ${
          active
            ? "h-5 w-5 border-gold bg-gold shadow-[0_0_12px_rgba(201,168,76,0.5)] md:h-6 md:w-6"
            : "h-3.5 w-3.5 border-gold/60 bg-gold/40 hover:border-gold hover:bg-gold/60 md:h-4 md:w-4"
        }`}
      >
        {/* Center highlight */}
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            active
              ? "h-2 w-2 bg-white/90"
              : "h-1 w-1 bg-gold/70"
          }`}
        />
      </span>
    </button>
  );
}
