interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

/**
 * Section header. Left-aligned by default; labels (kickers) are rationed
 * sitewide, so pass `label` only where a section genuinely needs
 * categorization. Never on consecutive sections.
 */
export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`}>
      {label && <p className="type-label mb-4 text-blue-bright">{label}</p>}
      <h2 className="type-display text-[32px] text-text-primary md:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed text-text-secondary ${centered ? "mx-auto" : ""} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
