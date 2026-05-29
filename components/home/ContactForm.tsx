"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { siteConfig } from "@/lib/siteConfig";
import { Link } from "@/i18n/navigation";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", siteConfig.web3formsKey);
    data.append("subject", "Nuevo contacto — Aristizabal Plata");
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldCls =
    "w-full border-b border-line bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink";
  const labelCls =
    "mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-muted";

  return (
    <section id="contact" className="scroll-mt-24 bg-bg py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <EyebrowLabel>{t("eyebrow")}</EyebrowLabel>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-lg text-base text-ink-soft">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <ul className="min-w-0 border-t border-line">
            {[
              { l: t("labels.email"), v: siteConfig.contactEmail },
              { l: t("labels.phone"), v: siteConfig.phone },
              { l: t("labels.city"), v: `${siteConfig.city} · ${siteConfig.country}` },
              { l: t("labels.hours"), v: siteConfig.hours },
            ].map((row) => (
              <li
                key={row.l}
                className="grid min-w-0 grid-cols-[96px_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-6 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-6"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  {row.l}
                </span>
                <span className="min-w-0 break-words font-display text-lg text-ink">
                  {row.v}
                </span>
              </li>
            ))}
          </ul>

          <form onSubmit={onSubmit} className="flex min-w-0 flex-col gap-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>
                  {t("form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder={t("form.namePlaceholder")}
                  className={fieldCls}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>
                  {t("form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.emailPlaceholder")}
                  className={fieldCls}
                />
              </div>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelCls}>
                  {t("form.phone")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder={t("form.phonePlaceholder")}
                  className={fieldCls}
                />
              </div>
              <div>
                <label htmlFor="company" className={labelCls}>
                  {t("form.company")}
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder={t("form.companyPlaceholder")}
                  className={fieldCls}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelCls}>
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={t("form.messagePlaceholder")}
                className={`${fieldCls} resize-y`}
              />
            </div>
            <label className="flex items-start gap-2 text-xs leading-relaxed text-muted">
              <input
                type="checkbox"
                name="data_consent"
                required
                className="mt-0.5 h-4 w-4 accent-[#a98a4b]"
              />
              <span>
                {t("form.consent")}{" "}
                <Link
                  href="/politicas/tratamiento-datos"
                  className="underline underline-offset-2 hover:text-ink"
                >
                  {t("form.dataPolicy")}
                </Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-fit items-center gap-2.5 rounded-[2px] bg-ink px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent disabled:opacity-60"
            >
              {status === "sending"
                ? t("form.sending")
                : status === "success"
                  ? t("form.success")
                  : t("form.submit")}
              {status !== "success" && <span aria-hidden>↗</span>}
            </button>

            {status === "error" && (
              <p role="alert" className="text-sm text-red-700">
                {t("form.error")}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
