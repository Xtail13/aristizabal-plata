import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import { PrivacySettingsButton } from "./PrivacyConsent";

const socialLinks = [
  {
    key: "instagram",
    href: siteConfig.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    href: siteConfig.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M5.2 7.5A2.3 2.3 0 1 0 5.2 3a2.3 2.3 0 0 0 0 4.5ZM3.3 21h3.8V9H3.3v12Zm6.1-12H13v1.65h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.45 4.45 5.65V21h-3.8v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v6H9.4V9Z" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    icon: (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M16 3C9.4 3 4 8.4 4 15a11.9 11.9 0 0 0 1.6 6L4 29l8.2-1.6A12 12 0 0 0 16 28c6.6 0 12-5.4 12-13S22.6 3 16 3Zm0 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-4.9 1 1-4.7-.2-.4A9.8 9.8 0 0 1 6.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8Z" />
      </svg>
    ),
  },
] as const;

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
              src="/media/brand/ap-logo-primary.png"
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
              <li>
                <PrivacySettingsButton />
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
            <div className="mt-7">
              <h5 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {t("socialTitle")}
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ key, href, icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(`social.${key}`)}
                    title={t(`social.${key}`)}
                    className="grid h-11 w-11 place-items-center rounded-[2px] border border-line text-ink-soft transition-colors hover:border-gold hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
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
