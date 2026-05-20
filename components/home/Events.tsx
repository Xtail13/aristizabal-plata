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
    <section className="bg-navy-soft py-16 text-white sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          tone="light"
        />
      </Container>
      {/* Mobile: scroll horizontal con snap. md+: grid 3 columnas dentro de Container */}
      <Container>
        <div className="mt-10 sm:mt-14">
          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5 sm:-mx-9 sm:px-9 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            {idx.map((i) => {
              const meta = t(`items.${i}.meta`);
              const [, ...rest] = meta.split("·").map((s) => s.trim());
              return (
              <article key={i} className="min-w-[82vw] flex-shrink-0 snap-start flex flex-col sm:min-w-[68vw] md:min-w-0">
                {/* Fotos de guía — reemplazar por imágenes reales de cada evento */}
                <EditorialFrame
                  src={eventGuideImages[Number(i)]}
                  alt={t(`items.${i}.title`)}
                  ratio="aspect-[4/3]"
                  caption={rest.join(" · ")}
                />
                <div className="pt-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {meta}
                  </div>
                  <h3 className="mt-3 text-xl text-white">
                    {t(`items.${i}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {t(`items.${i}.text`)}
                  </p>
                </div>
              </article>
              );
            })}
          </div>
          {/* Indicador de scroll solo en mobile */}
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            {idx.map((i) => (
              <div key={i} className="h-px w-5 bg-white/35 first:bg-white/70" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
