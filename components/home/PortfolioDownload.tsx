"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Grain } from "@/components/shared/Grain";
import { siteConfig } from "@/lib/siteConfig";

const portfolioUrl = "/portfolio/portafolio_AP_2026.pdf";

export function PortfolioDownload() {
  const t = useTranslations("portfolio");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!siteConfig.portfolioLeadEndpoint) {
      event.preventDefault();
      setStatus("error");
      return;
    }

    setStatus("success");
    window.open(portfolioUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-20 lg:py-24">
      <span className="ap-architecture" aria-hidden />
      <Grain tone="dark" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <EyebrowLabel tone="light">{t("eyebrow")}</EyebrowLabel>
            <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-lg text-white/65">{t("subtitle")}</p>
          </div>
          <form
            action={siteConfig.portfolioLeadEndpoint}
            method="POST"
            target="portfolio-lead-sink"
            onSubmit={handleSubmit}
            className="border border-white/15 bg-navy/70 p-4 sm:p-6"
          >
            <input type="hidden" name="origin" value="Sitio web - descarga de portafolio" />
            <input type="hidden" name="data_consent" value="accepted" />
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <label htmlFor="portfolio-email" className="text-sm font-medium text-white">
              {t("emailLabel")}
            </label>
            <p className="mt-1 text-xs leading-relaxed text-white/55">{t("emailNote")}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                id="portfolio-email"
                name="email"
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                className="min-w-0 flex-1 border border-white/25 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold"
              />
              <button
                type="submit"
                className="shrink-0 bg-white px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold hover:text-white"
              >
                {t("cta")}
              </button>
            </div>
            <label className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-white/60">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#a98a4b]" />
              <span>
                {t("consent")}{" "}
                <Link href="/politicas/tratamiento-datos" className="underline underline-offset-2 hover:text-white">
                  {t("dataPolicy")}
                </Link>
              </span>
            </label>
            {status === "success" && <p className="mt-3 text-xs text-gold">{t("success")}</p>}
            {status === "error" && <p className="mt-3 text-xs text-white/70">{t("error")}</p>}
          </form>
        </div>
      </Container>
      <iframe name="portfolio-lead-sink" title="Registro de descarga" className="hidden" />
    </section>
  );
}
