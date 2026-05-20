import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamGrid } from "@/components/home/TeamGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.team" });
  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/equipo",
  });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "team" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <TeamGrid hideHeading />
    </>
  );
}
