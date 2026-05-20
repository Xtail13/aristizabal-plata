import { EyebrowLabel } from "./EyebrowLabel";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const subColor = tone === "light" ? "text-white/65" : "text-ink-soft";
  return (
    <div className={`max-w-3xl ${className}`}>
      <EyebrowLabel tone={tone}>{eyebrow}</EyebrowLabel>
      <h2
        className={`mt-6 text-4xl leading-[1.05] sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
