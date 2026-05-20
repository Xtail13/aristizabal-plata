interface EyebrowLabelProps {
  children: string;
  tone?: "dark" | "light";
}

export function EyebrowLabel({ children, tone = "dark" }: EyebrowLabelProps) {
  const color = tone === "light" ? "text-white/60" : "text-ink-soft";
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${color}`}
    >
      <span className="font-semibold text-gold">{"//"}</span>
      {children}
    </span>
  );
}
