import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

// Listo para integrar Calendly (fase 2): rellenar siteConfig.calendly.*
function ScheduleCard({
  title,
  text,
  cta,
  url,
  soon,
}: {
  title: string;
  text: string;
  cta: string;
  url: string;
  soon: string;
}) {
  const available = url.length > 0;
  return (
    <div className="flex flex-col justify-between gap-8 border border-line bg-bg p-5 sm:p-9">
      <div>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
      </div>
      {available ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-[2px] bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
        >
          {cta} <span aria-hidden>↗</span>
        </a>
      ) : (
        <span className="inline-flex w-fit items-center rounded-[2px] border border-line px-6 py-3.5 text-sm text-muted">
          {soon}
        </span>
      )}
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
            soon={t("soon")}
          />
          <ScheduleCard
            title={t("juridico.title")}
            text={t("juridico.text")}
            cta={t("juridico.cta")}
            url={siteConfig.calendly.juridico}
            soon={t("soon")}
          />
        </div>
      </Container>
    </section>
  );
}
