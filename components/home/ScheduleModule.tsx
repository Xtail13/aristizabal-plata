import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

function ScheduleCard({
  title,
  text,
  cta,
  url,
  fallbackCta,
  availability,
}: {
  title: string;
  text: string;
  cta: string;
  url: string;
  fallbackCta: string;
  availability: string;
}) {
  const available = url.length > 0;
  const message = encodeURIComponent(`Hola AP Asociados, quiero agendar: ${title}.`);
  const targetUrl = available ? url : `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <div className="flex flex-col justify-between gap-8 border border-line bg-bg p-5 sm:p-9">
      <div>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
        <p className="mt-4 border-t border-line pt-4 text-xs uppercase tracking-[0.12em] text-gold">
          {availability}
        </p>
      </div>
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-[2px] bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
      >
        {available ? cta : fallbackCta} <span aria-hidden>↗</span>
      </a>
    </div>
  );
}

export function ScheduleModule() {
  const t = useTranslations("schedule");
  return (
    <section id="schedule" className="scroll-mt-24 bg-bg py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2">
          <ScheduleCard
            title={t("diagnostico.title")}
            text={t("diagnostico.text")}
            cta={t("diagnostico.cta")}
            url={siteConfig.calendly.diagnostico}
            fallbackCta={t("whatsappCta")}
            availability={t("diagnostico.availability")}
          />
          <ScheduleCard
            title={t("juridico.title")}
            text={t("juridico.text")}
            cta={t("juridico.cta")}
            url={siteConfig.calendly.juridico}
            fallbackCta={t("whatsappCta")}
            availability={t("juridico.availability")}
          />
          <ScheduleCard
            title={t("comercial.title")}
            text={t("comercial.text")}
            cta={t("comercial.cta")}
            url=""
            fallbackCta={t("whatsappCta")}
            availability={t("comercial.availability")}
          />
        </div>
      </Container>
    </section>
  );
}
