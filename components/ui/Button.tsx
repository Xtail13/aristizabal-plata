import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "solid" | "ghost" | "light";

const base =
  "inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide rounded-[2px] transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-bg hover:bg-accent",
  ghost: "border border-ink text-ink hover:bg-ink hover:text-bg",
  light: "bg-bg text-ink hover:bg-gold hover:text-white",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
