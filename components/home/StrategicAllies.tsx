import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { strategicAllies } from "@/lib/clients";

function AllyIcon({ index }: { index: number }) {
  const cls = "h-6 w-6 text-gold";
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
        <path d="M3 6l3 1m0 0-3 9a5 5 0 0 0 6.001 0M6 7l3 9M6 7l6-2m6 2 3-1m-3 1-3 9a5 5 0 0 0 6.001 0M18 7l3 9m-3-9-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
        <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3M3 12h18" />
    </svg>
  );
}

export function StrategicAllies() {
  const t = useTranslations("allies");
  const tagline = t("tagline");
  const bold = t("taglineBold");
  const parts = tagline.split(bold);

  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-24 lg:py-28">
      <Container className="relative">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {strategicAllies.map((a, i) => (
            <Reveal
              key={a.name}
              as="article"
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
            >
              {/* Icono + número decorativo */}
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy">
                  <AllyIcon index={i} />
                </div>
                <span
                  className="select-none font-display text-[5.5rem] leading-none text-ink/[0.07]"
                  aria-hidden
                >
                  0{i + 1}
                </span>
              </div>

              {/* Contenido */}
              <div className="mt-5 flex flex-col flex-1">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
                  {t(`items.${i}.field`)}
                </span>
                <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
                  {a.name}
                </h3>
                <div className="ap-rule-gold mt-4 w-10 !bg-gold/50" />
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {t(`items.${i}.contribution`)}
                </p>
              </div>

              {/* Flecha */}
              <div className="mt-6 pt-2 border-t border-line/60">
                <span className="text-lg text-ink/30 transition-colors duration-300 group-hover:text-gold">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer institucional */}
        <Reveal className="mt-10 flex flex-col items-center gap-3 border-t border-line pt-8 text-center sm:mt-12">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-gold/60"
            aria-hidden
          >
            <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          <p className="max-w-sm text-sm text-ink-soft">
            {parts[0]}
            <strong className="font-semibold text-ink">{bold}</strong>
            {parts[1]}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
