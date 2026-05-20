import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { StrategicAllies } from "@/components/home/StrategicAllies";
import { PortfolioDownload } from "@/components/home/PortfolioDownload";
import { Events } from "@/components/home/Events";
import { Testimonials } from "@/components/home/Testimonials";
import { TeamGrid } from "@/components/home/TeamGrid";
import { ScheduleModule } from "@/components/home/ScheduleModule";
import { ContactForm } from "@/components/home/ContactForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValuePillars />
      <About />
      <Services />
      <ClientsMarquee />
      <StrategicAllies />
      <PortfolioDownload />
      <Events />
      <Testimonials />
      <TeamGrid preview />
      <ScheduleModule />
      <ContactForm />
    </>
  );
}
