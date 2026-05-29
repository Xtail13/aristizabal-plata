"use client";

import Image from "next/image";
import { useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  function goToImage(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = (index + images.length) % images.length;
    track.scrollTo({ left: track.clientWidth * nextIndex, behavior: "smooth" });
    setActiveIndex(nextIndex);
  }

  function syncActiveImage() {
    const track = trackRef.current;
    if (!track) return;

    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="group relative">
      <div
        ref={trackRef}
        onScroll={syncActiveImage}
        className="flex aspect-[16/10] snap-x snap-mandatory overflow-x-auto rounded-[2px] bg-navy [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:aspect-[4/3]"
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="relative h-full w-full shrink-0 snap-start overflow-hidden bg-navy"
          >
            <Image
              src={src}
              alt={index === 0 ? alt : ""}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            aria-label="Fotografía anterior"
            onClick={() => goToImage(activeIndex - 1)}
            className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-navy/75 text-lg leading-none text-white shadow-md transition-colors hover:bg-navy"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Fotografía siguiente"
            onClick={() => goToImage(activeIndex + 1)}
            className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-navy/75 text-lg leading-none text-white shadow-md transition-colors hover:bg-navy"
          >
            ›
          </button>
          <div
            className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5"
            aria-hidden
          >
            {images.map((src, index) => (
              <span
                key={src}
                className={`h-1.5 w-1.5 rounded-full border border-white/60 ${
                  activeIndex === index ? "bg-white" : "bg-navy/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
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
                  className="border-t border-white/15 pt-4 md:block md:border-t-0 md:pt-0"
                >
                  <EventGallery
                    images={eventImages[Number(i)]}
                    alt={t(`items.${i}.title`)}
                  />
                  <div className="min-w-0 pt-4 md:pt-5">
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
