import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Grain } from "@/components/shared/Grain";

export function Hero() {
  const t = useTranslations("hero");
  const stats = [
    { num: "04", label: t("stats.areas") },
    { num: "08", label: t("stats.team") },
    { num: "+12", label: t("stats.sectors") },
    { num: "2026", label: t("stats.vision") },
  ];

  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-36 text-white sm:pt-44">
      {/* Fotografía de guía — reemplazar src por imagen institucional final */}
      <Image
        src="/images/guide/hero.jpg"
        alt=""
        fill
        priority
        className="ap-duotone object-cover object-center"
        aria-hidden
      />
      {/* Overlay navy para asegurar legibilidad y unificar tono */}
      <div
        aria-hidden
        className="absolute inset-0 bg-navy/70"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,31,51,0.88) 0%, rgba(11,31,51,0.62) 55%, rgba(20,48,77,0.80) 100%)",
        }}
      />
      <span className="ap-architecture" aria-hidden />
      <Grain tone="dark" />
      <Container className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-10">
          <span className="text-xs uppercase tracking-[0.18em] text-white/55">
            {t("eyebrow")}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-white/40">
            Est. 2026
          </span>
        </div>

        <div className="mt-8 flex items-center gap-4 sm:mt-10">
          <Image
            src="/brand/ap-logo-header.png"
            alt=""
            width={54}
            height={76}
            className="h-16 w-auto object-contain"
            aria-hidden
          />
          <span className="font-display text-2xl text-white sm:text-3xl">
            AP Asociados
          </span>
        </div>

        <h1 className="mt-7 max-w-[18ch] font-display text-[clamp(2.6rem,8vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.035em] text-white sm:mt-10">
          {t("title")}
        </h1>

        <div className="mt-8 grid gap-10 sm:mt-12 lg:grid-cols-2 lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-white/75">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-3.5 lg:justify-end">
            <ButtonLink href="/contacto" variant="light">
              {t("ctaPrimary")} <span aria-hidden>↗</span>
            </ButtonLink>
            <ButtonLink
              href="/servicios"
              variant="ghost"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              {t("ctaSecondary")}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="ap-rule-gold" />
          <div className="grid grid-cols-2 pt-7 sm:pt-9 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-2 sm:gap-3 px-0 md:px-8 ${
                  i === 1 || i === 3 ? "border-l border-white/12 pl-5 sm:pl-6 md:pl-8" : ""
                } ${i === 2 ? "md:border-l md:border-white/12" : ""}`}
              >
                <span className="font-display text-[clamp(2.8rem,4.5vw,3.75rem)] leading-[0.85] tracking-[-0.02em] text-white">
                  {s.num}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
