interface GrainProps {
  tone?: "dark" | "light";
  className?: string;
}

/** Capa de grano fractal reutilizable. Decorativa y no interactiva. */
export function Grain({ tone = "dark", className = "" }: GrainProps) {
  return (
    <div
      aria-hidden
      className={`ap-grain ap-grain--${tone} ${className}`}
    />
  );
}
