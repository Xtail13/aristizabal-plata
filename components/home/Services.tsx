"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EditorialFrame } from "@/components/shared/EditorialFrame";
import { services } from "@/lib/services";
import type { Locale } from "@/i18n/routing";

const MOBILE_ITEMS_LIMIT = 5;

export function Services({ hideHeading = false }: { hideHeading?: boolean }) {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;
  const [active, setActive] = useState(0);
  const [showAllItems, setShowAllItems] = useState(false);
  const current = services[active];

  function handleTabChange(i: number) {
    setActive(i);
    setShowAllItems(false);
  }

  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-line-soft bg-bg-alt py-16 sm:py-24 lg:py-28"
    >
      <Container>
        {!hideHeading && (
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        )}

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-line sm:mt-14">
          {services.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleTabChange(i)}
              className={`flex items-center gap-3 border-t py-5 text-sm font-medium transition-colors ${
                i === active
                  ? "border-ink text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <span className="font-display text-xs text-gold">{s.number}</span>
              {s.title[locale]}
            </button>
          ))}
        </div>

        <div className="grid gap-8 pt-10 sm:pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pt-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Foto de guía por área. Foto final: añadir `image` por servicio en lib/services.ts */}
            <EditorialFrame
              src="/images/guide/service.jpg"
              alt={current.title[locale]}
              ratio="aspect-[4/3]"
              caption={`${t("areaLabel")} ${current.number}`}
              className="mb-8"
            />
            <div className="mb-6 text-sm uppercase tracking-[0.04em] text-muted">
              {t("areaLabel")} {current.number}
            </div>
            <h3 className="font-display text-3xl leading-tight sm:text-4xl">
              {current.title[locale]}
            </h3>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
              {current.summary[locale]}
            </p>
          </div>
          <div>
            <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {current.items[locale]
                .slice(0, showAllItems ? undefined : MOBILE_ITEMS_LIMIT)
                .map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-line py-4 text-sm text-ink-soft sm:py-5"
                  >
                    <span className="text-gold" aria-hidden>
                      →
                    </span>
                    {item}
                  </li>
                ))}
              {/* Mostrar el resto en sm+ siempre */}
              {!showAllItems &&
                current.items[locale].length > MOBILE_ITEMS_LIMIT &&
                current.items[locale]
                  .slice(MOBILE_ITEMS_LIMIT)
                  .map((item) => (
                    <li
                      key={item}
                      className="hidden items-center gap-4 border-b border-line py-4 text-sm text-ink-soft sm:flex sm:py-5"
                    >
                      <span className="text-gold" aria-hidden>
                        →
                      </span>
                      {item}
                    </li>
                  ))}
            </ul>
            {!showAllItems && current.items[locale].length > MOBILE_ITEMS_LIMIT && (
              <button
                type="button"
                onClick={() => setShowAllItems(true)}
                className="mt-4 text-sm text-gold underline-offset-2 hover:underline sm:hidden"
              >
                + {current.items[locale].length - MOBILE_ITEMS_LIMIT} {t("showMore")}
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
