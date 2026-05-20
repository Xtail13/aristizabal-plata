import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.dataPolicy" });
  return buildMetadata({
    locale,
    title: t("title"),
    description: t("intro"),
    path: "/politicas/tratamiento-datos",
  });
}

export default async function DataPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.dataPolicy" });
  const tf = await getTranslations({ locale, namespace: "footer" });

  return (
    <>
      <PageHeader eyebrow={tf("legalTitle")} title={t("title")} />
      <section className="bg-bg py-24">
        <Container>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
            {t("intro")}
          </p>
          <p className="mt-8 max-w-2xl text-sm italic text-muted">
            {t("draftNote")}
          </p>
        </Container>
      </section>
    </>
  );
}
