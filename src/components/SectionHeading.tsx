interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-gold">{label}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl" style={{ letterSpacing: "-0.02em" }}>{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">{description}</p>
      )}
    </div>
  );
}
