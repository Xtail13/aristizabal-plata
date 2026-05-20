import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Grain } from "@/components/shared/Grain";

export function ValuePillars() {
  const t = useTranslations("pillars");
  const keys = ["strategy", "legal", "international", "digital"] as const;

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-soft py-16 text-white sm:py-24 lg:py-28">
      <Grain tone="dark" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            tone="light"
          />
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {keys.map((k, i) => (
            <Reveal
              key={k}
              className="bg-navy p-5 transition-colors duration-300 hover:bg-navy-soft sm:p-8"
            >
              <span className="font-display text-sm text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-xl text-white">
                {t(`items.${k}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t(`items.${k}.text`)}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
