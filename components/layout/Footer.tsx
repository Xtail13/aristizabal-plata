import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg pt-24">
      <Container>
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/ap-logo.png"
              alt="Aristizabal Plata"
              width={120}
              height={44}
              className="mb-5 h-10 w-auto object-contain"
            />
            <p className="max-w-[32ch] text-sm leading-relaxed text-ink-soft">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h5 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {t("navTitle")}
            </h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-gold">{tn("about")}</Link></li>
              <li><Link href="/servicios" className="hover:text-gold">{tn("services")}</Link></li>
              <li><Link href="/equipo" className="hover:text-gold">{tn("team")}</Link></li>
              <li><Link href="/#clients" className="hover:text-gold">{tn("clients")}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {t("legalTitle")}
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politicas/tratamiento-datos" className="hover:text-gold">
                  {t("dataPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/politicas/cookies" className="hover:text-gold">
                  {t("cookiePolicy")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {t("contactTitle")}
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-gold">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-ink-soft">
                {siteConfig.city} · {siteConfig.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden pb-2" aria-hidden>
          <span className="block whitespace-nowrap font-display text-[clamp(3rem,11vw,9rem)] font-medium leading-[0.85] tracking-[-0.05em] text-ink">
            Aristizabal&nbsp;Plata
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-xs text-muted">
          <span>
            © {year} {siteConfig.name}. {t("rights")}
          </span>
          <span>{siteConfig.city} · {siteConfig.country}</span>
        </div>
      </Container>
    </footer>
  );
}
