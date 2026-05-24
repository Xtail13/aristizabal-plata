import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EditorialFrame } from "@/components/shared/EditorialFrame";

export function Events() {
  const t = useTranslations("events");
  const eventGuideImages = [
    "/images/guide/event-0.jpg",
    "/images/guide/event-1.jpg",
    "/images/guide/event-2.jpg",
  ];
  const idx = ["0", "1", "2"] as const;

  return (
    <section className="bg-navy-soft py-14 text-white sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          tone="light"
        />
      </Container>
      <Container>
        <div className="mt-8 sm:mt-14">
          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {idx.map((i) => {
              const meta = t(`items.${i}.meta`);
              const [, ...rest] = meta.split("·").map((s) => s.trim());

              return (
                <article
                  key={i}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-white/15 pt-4 md:block md:border-t-0 md:pt-0"
                >
                  <EditorialFrame
                    src={eventGuideImages[Number(i)]}
                    alt={t(`items.${i}.title`)}
                    ratio="aspect-[4/5] md:aspect-[4/3]"
                    caption={rest.join(" · ")}
                    className="min-h-32 md:min-h-0"
                  />
                  <div className="min-w-0 self-center md:pt-5">
                    <div className="text-[0.68rem] uppercase tracking-[0.18em] text-white/50">
                      {meta}
                    </div>
                    <h3 className="mt-2 text-lg leading-snug text-white md:mt-3 md:text-xl">
                      {t(`items.${i}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {t(`items.${i}.text`)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
