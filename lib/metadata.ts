import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";
import { routing, type Locale } from "@/i18n/routing";

interface PageMetaInput {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
}: PageMetaInput): Metadata {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}${path}`;
  }

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${locale}${path}`,
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
