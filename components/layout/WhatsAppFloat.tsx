"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/siteConfig";

export function WhatsAppFloat() {
  const t = useTranslations("footer");
  const text = encodeURIComponent(
    "Hola Aristizabal Plata, me gustaría agendar un diagnóstico.",
  );
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-[2px] bg-navy p-3 text-sm font-medium text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent sm:bottom-8 sm:right-8 sm:gap-4 sm:px-6 sm:py-4 sm:text-base"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] sm:h-9 sm:w-9">
        <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white sm:h-5 sm:w-5" aria-hidden>
          <path d="M16 3C9.4 3 4 8.4 4 15a11.9 11.9 0 0 0 1.6 6L4 29l8.2-1.6A12 12 0 0 0 16 28c6.6 0 12-5.4 12-13S22.6 3 16 3Zm0 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-4.9 1 1-4.7-.2-.4A9.8 9.8 0 0 1 6.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{t("whatsapp")}</span>
    </a>
  );
}
