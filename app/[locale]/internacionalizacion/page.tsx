import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "pages.internationalization",
  });
  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/internacionalizacion",
  });
}

export default async function InternationalizationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.internationalization" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const area = services.find((s) => s.id === "internacionalizacion")!;

  return (
    <>
      <PageHeader
        eyebrow={tn("internationalization")}
        title={t("title")}
        subtitle={t("description")}
      />
      <section className="bg-bg py-28">
        <Container>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            {area.summary[locale]}
          </p>
          <ul className="mt-14 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {area.items[locale].map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-line py-5 text-base text-ink-soft"
              >
                <span className="text-gold" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-16">
            <ButtonLink href="/contacto" variant="solid">
              {tn("cta")} <span aria-hidden>↗</span>
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
