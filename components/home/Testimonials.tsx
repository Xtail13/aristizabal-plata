import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

// Estructura lista para texto / imagen / video / embed de reseñas Google (fase 2).
export function Testimonials() {
  const t = useTranslations("testimonials");
  const idx = ["0", "1", "2"] as const;

  return (
    <section className="bg-bg py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
            />
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted sm:mt-8">
              {t("googleNote")}
            </p>
          </div>
          <div className="flex flex-col">
            {idx.map((i) => (
              <Reveal
                key={i}
                as="article"
                className="grid gap-6 border-t border-line py-7 last:border-b sm:gap-8 sm:grid-cols-[auto_1fr] sm:py-10"
              >
                <div className="text-[0.7rem] tracking-[0.35em] text-gold/80">
                  ★★★★★
                </div>
                <div>
                  <p className="font-display text-xl italic leading-relaxed text-ink">
                    &ldquo;{t(`items.${i}.quote`)}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-display text-sm text-white ring-1 ring-gold/40">
                      {t(`items.${i}.author`).charAt(0)}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-ink">
                        {t(`items.${i}.author`)}
                      </div>
                      <div className="text-xs text-muted">
                        {t(`items.${i}.role`)}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
