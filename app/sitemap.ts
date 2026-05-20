import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/siteConfig";

const paths = [
  "",
  "/servicios",
  "/internacionalizacion",
  "/equipo",
  "/contacto",
  "/politicas/tratamiento-datos",
  "/politicas/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
