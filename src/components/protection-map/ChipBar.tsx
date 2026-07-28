import { installPoints } from "@/data/installPoints";

interface ChipBarProps {
  activeId: string | null;
  onSelect: (id: string | null) => void;
}

export default function ChipBar({ activeId, onSelect }: ChipBarProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto py-1"
      style={{ scrollbarWidth: "none" }}
    >
      {installPoints.map((point) => (
        <button
          key={point.id}
          onClick={() => onSelect(activeId === point.id ? null : point.id)}
          className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-medium transition-all duration-200 ${
            activeId === point.id
              ? "border-blue bg-blue/10 text-blue"
              : "border-border-dark text-text-secondary hover:border-blue/30 hover:text-text-primary"
          }`}
        >
          {point.shortLabel}
        </button>
      ))}
    </div>
  );
}
