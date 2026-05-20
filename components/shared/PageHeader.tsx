import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "./EyebrowLabel";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-navy pb-20 pt-36 text-white sm:pt-44">
      <Container>
        <EyebrowLabel tone="light">{eyebrow}</EyebrowLabel>
        <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] tracking-[-0.03em]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
