interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = true,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-text-primary" : "text-white"
        }`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-text-secondary" : "text-white/60"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
