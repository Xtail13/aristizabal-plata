"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "ap-privacy-consent";
const OPEN_EVENT = "ap:open-privacy-consent";

type Consent = {
  necessary: true;
  analytics: boolean;
};

function saveConsent(analytics: boolean) {
  const consent: Consent = { necessary: true, analytics };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function PrivacyConsent() {
  const t = useTranslations("privacyConsent");
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setOpen(!localStorage.getItem(STORAGE_KEY));

    const reopen = () => {
      setSettings(true);
      setOpen(true);
    };

    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function closeWithConsent(value: boolean) {
    saveConsent(value);
    setAnalytics(value);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end bg-ink/45 p-3 sm:items-center sm:justify-center sm:p-6">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-consent-title"
        className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden border border-line bg-bg p-4 shadow-2xl sm:p-8"
      >
        <div className="overflow-y-auto">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {t("eyebrow")}
          </p>
          <h2
            id="privacy-consent-title"
            className="mt-2 font-display text-xl leading-tight text-ink sm:mt-3 sm:text-3xl"
          >
            {t("title")}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-ink-soft sm:mt-4 sm:text-sm">
            {t("cookies")}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:mt-3 sm:text-sm">
            {t("data")}
          </p>

          {settings && (
            <div className="mt-5 border-y border-line py-4">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-ink">{t("necessaryTitle")}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {t("necessaryText")}
                  </p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  {t("alwaysActive")}
                </span>
              </div>
              <label className="mt-4 flex cursor-pointer items-start justify-between gap-5 border-t border-line pt-4">
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {t("analyticsTitle")}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {t("analyticsText")}
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#a98a4b]"
                />
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted sm:mt-5">
            <Link href="/politicas/cookies" className="underline underline-offset-4 hover:text-ink">
              {t("cookiePolicy")}
            </Link>
            <Link
              href="/politicas/tratamiento-datos"
              className="underline underline-offset-4 hover:text-ink"
            >
              {t("dataPolicy")}
            </Link>
          </div>
        </div>

        <div className="mt-4 grid shrink-0 grid-cols-2 gap-2 border-t border-line pt-3 sm:mt-6 sm:flex sm:flex-wrap sm:justify-end">
          {!settings && (
            <button
              type="button"
              onClick={() => setSettings(true)}
              className="col-span-2 border border-line px-3 py-2.5 text-xs font-medium text-ink transition-colors hover:border-ink sm:px-4 sm:py-3 sm:text-sm"
            >
              {t("configure")}
            </button>
          )}
          <button
            type="button"
            onClick={() => closeWithConsent(false)}
            className="border border-line px-3 py-2.5 text-xs font-medium text-ink transition-colors hover:border-ink sm:px-4 sm:py-3 sm:text-sm"
          >
            {t("reject")}
          </button>
          <button
            type="button"
            onClick={() => closeWithConsent(settings ? analytics : true)}
            className="bg-ink px-3 py-2.5 text-xs font-medium text-bg transition-colors hover:bg-accent sm:px-5 sm:py-3 sm:text-sm"
          >
            {settings ? t("save") : t("accept")}
          </button>
        </div>
      </section>
    </div>
  );
}

export function PrivacySettingsButton() {
  const t = useTranslations("privacyConsent");

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="text-left hover:text-gold"
    >
      {t("manage")}
    </button>
  );
}
