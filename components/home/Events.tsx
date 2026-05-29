import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const eventImages = [
  ["/images/events/investment-breakfast.jpeg"],
  ["/images/events/labor-reform.jpeg"],
  [
    "/images/events/impact-transform-01.jpeg",
    "/images/events/impact-transform-02.jpeg",
  ],
  ["/images/events/idea-action-01.jpeg", "/images/events/idea-action-02.jpeg"],
  [
    "/images/events/macrorueda-01.jpeg",
    "/images/events/macrorueda-02.jpeg",
    "/images/events/macrorueda-03.jpeg",
  ],
  [
    "/images/events/team-management-01.jpeg",
    "/images/events/team-management-02.jpeg",
  ],
  [
    "/images/events/finances-seizures-01.jpeg",
    "/images/events/finances-seizures-02.jpeg",
    "/images/events/finances-seizures-03.jpeg",
  ],
  [
    "/images/events/high-tension-service-01.jpeg",
    "/images/events/high-tension-service-02.jpeg",
  ],
] as const;

function EventGallery({
  images,
  alt,
}: {
  images: readonly string[];
  alt: string;
}) {
  return (
    <div className="grid aspect-square grid-cols-2 grid-rows-2 gap-px overflow-hidden rounded-[2px] bg-white/15 md:aspect-[4/3]">
      {images.map((src, index) => (
        <div
          key={src}
          className={`relative overflow-hidden bg-navy ${
            images.length === 1
              ? "col-span-2 row-span-2"
              : images.length === 2
                ? "row-span-2"
                : index === 0
                  ? "row-span-2"
                  : ""
          }`}
        >
          <Image
            src={src}
            alt={index === 0 ? alt : ""}
            fill
            sizes="(max-width: 768px) 7rem, 33vw"
            className="object-cover grayscale contrast-105 brightness-90"
          />
          <span className="absolute inset-0 bg-navy/25 mix-blend-multiply" />
        </div>
      ))}
    </div>
  );
}

export function Events() {
  const t = useTranslations("events");
  const idx = ["0", "1", "2", "3", "4", "5", "6", "7"] as const;

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
          <div className="grid gap-4 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            {idx.map((i) => {
              const meta = t(`items.${i}.meta`);

              return (
                <article
                  key={i}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-white/15 pt-4 md:block md:border-t-0 md:pt-0"
                >
                  <EventGallery
                    images={eventImages[Number(i)]}
                    alt={t(`items.${i}.title`)}
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
