import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Reveal } from "@/components/shared/Reveal";
import { EditorialFrame } from "@/components/shared/EditorialFrame";

export function About() {
  const t = useTranslations("about");
  return (
    <section id="about" className="scroll-mt-24 bg-bg py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <Reveal>
            <EyebrowLabel>{t("eyebrow")}</EyebrowLabel>
            <h2 className="mt-4 max-w-[20ch] text-4xl leading-[1.05] sm:mt-6 sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-7">
              {t("body")}
            </p>
          </Reveal>
          <Reveal className="flex flex-col gap-6 sm:gap-10 lg:pt-12">
            {/* Foto de guía — reemplazar por retrato editorial final del equipo directivo */}
            <EditorialFrame
              src="/images/guide/about.jpg"
              alt="Espacio corporativo de Aristizabal Plata"
              ratio="aspect-[4/5]"
            />
            <div className="relative border-l border-gold/40 pl-8">
              <span className="absolute -left-1 -top-6 font-display text-7xl leading-none text-gold/40">
                &ldquo;
              </span>
              <blockquote className="font-display text-2xl italic leading-snug text-ink">
                {t("quote")}
              </blockquote>
              <div className="mt-8 text-xs uppercase tracking-[0.18em] text-muted">
                {t("signature")}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
