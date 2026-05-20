import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { clients } from "@/lib/clients";

export function ClientsMarquee() {
  const t = useTranslations("clients");
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="scroll-mt-24 overflow-hidden bg-navy py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          tone="light"
        />
      </Container>
      <Container>
        <div className="ap-rule-gold mt-10 sm:mt-14" />
      </Container>
      <div
        className="mt-8 overflow-hidden sm:mt-12"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="ap-marquee-track flex w-max items-center gap-10 sm:gap-16 lg:gap-24"
          style={{ animation: "ap-marquee 36s linear infinite" }}
        >
          {loop.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex w-28 shrink-0 items-center justify-center opacity-[0.65] transition-opacity duration-300 hover:opacity-100 sm:w-40 lg:w-56"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={240}
                height={88}
                className="max-h-20 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <Container>
        <div className="ap-rule-gold mt-8 sm:mt-12" />
      </Container>
    </section>
  );
}
