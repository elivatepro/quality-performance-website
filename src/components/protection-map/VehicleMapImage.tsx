import Image from "next/image";
import { installPoints } from "@/data/installPoints";
import PulsingDot from "./PulsingDot";

interface VehicleMapImageProps {
  activeId: string | null;
  onSelect: (id: string | null) => void;
}

export default function VehicleMapImage({ activeId, onSelect }: VehicleMapImageProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-dark-tertiary">
      <Image
        src="/images/vehicle-protection-map.png"
        alt="Luxury sedan with interactive protection points"
        width={1200}
        height={675}
        className="block w-full"
        priority
      />
      {/* Gradient overlay to blend bottom into bg */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-tertiary to-transparent" />
      {/* Hotspot dots */}
      <div className="absolute inset-0">
        {installPoints.map((point) => (
          <PulsingDot
            key={point.id}
            x={point.x}
            y={point.y}
            active={activeId === point.id}
            label={point.label}
            onClick={() => onSelect(activeId === point.id ? null : point.id)}
          />
        ))}
      </div>
      {/* Legend badge */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-dark/85 px-3 py-1.5 backdrop-blur-sm md:bottom-4 md:left-4">
        <span className="h-2 w-2 rounded-full bg-blue" />
        <span className="text-[10px] font-medium text-white/50">Tap dots to explore</span>
      </div>
    </div>
  );
}
