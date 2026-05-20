import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Link } from "@/i18n/navigation";
import { team } from "@/lib/team";
import type { Locale } from "@/i18n/routing";

interface TeamGridProps {
  preview?: boolean;
  hideHeading?: boolean;
}

export function TeamGrid({ preview = false, hideHeading = false }: TeamGridProps) {
  const t = useTranslations("team");
  const locale = useLocale() as Locale;
  const members = preview ? team.slice(0, 8) : team;

  return (
    <section id="team" className="scroll-mt-24 bg-bg-alt py-16 sm:py-24 lg:py-28">
      <Container>
        {!hideHeading && (
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
            />
            {preview && (
              <Link
                href="/equipo"
                className="text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline"
              >
                {t("viewAll")} →
              </Link>
            )}
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.slug} as="article" className={`group${preview && i >= 4 ? " hidden sm:block" : ""}`}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-navy">
                <span className="absolute left-4 top-4 z-20 font-display text-xs text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                {/* Velo inferior: homogeniza fondos/luz dispares
                    mientras llegan los retratos finales. */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-navy/55 to-transparent"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-display text-lg leading-tight">{m.name}</h3>
                <div className="ap-rule-gold mt-3 w-8 !bg-gold/40" />
                <div className="mt-1.5 text-xs uppercase leading-relaxed tracking-[0.12em] text-muted">
                  {m.role[locale]}
                </div>
                {!preview && (
                  <ul className="mt-4 space-y-1 border-t border-line pt-4 text-xs leading-relaxed text-ink-soft">
                    {m.credentials[locale].map((c) => (
                      <li key={c}>· {c}</li>
                    ))}
                  </ul>
                )}
                {!preview && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {m.bio[locale]}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
