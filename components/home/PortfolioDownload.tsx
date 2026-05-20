import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Grain } from "@/components/shared/Grain";

export function PortfolioDownload() {
  const t = useTranslations("portfolio");
  return (
    <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-20 lg:py-24">
      <span className="ap-architecture" aria-hidden />
      <Grain tone="dark" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <EyebrowLabel tone="light">{t("eyebrow")}</EyebrowLabel>
            <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-lg text-white/65">{t("subtitle")}</p>
          </div>
          <a
            href="/portfolio/portafolio_AP_2026.pdf"
            download
            className="inline-flex shrink-0 items-center gap-3 rounded-[2px] bg-white px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-gold hover:text-white"
          >
            {t("cta")}
            <span aria-hidden>↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
