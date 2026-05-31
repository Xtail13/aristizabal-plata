import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export function LinkedInSection() {
  const t = useTranslations("linkedin");

  return (
    <section className="border-b border-line bg-bg-alt py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 border-y border-line py-8 sm:py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div className="flex items-center gap-5 lg:border-r lg:border-line lg:py-5">
            <span
              className="grid h-16 w-16 shrink-0 place-items-center rounded-[4px] bg-[#0a66c2] text-2xl font-bold leading-none text-white sm:h-20 sm:w-20 sm:text-3xl"
              aria-hidden
            >
              in
            </span>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
                {t("eyebrow")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t("handle")}
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-2xl text-3xl leading-[1.08] text-ink sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {t("subtitle")}
            </p>
            <ButtonLink href={siteConfig.linkedin} external className="mt-6">
              {t("cta")}
              <span aria-hidden>&#8599;</span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
