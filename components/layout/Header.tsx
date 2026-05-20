"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t("about") },
    { href: "/servicios", label: t("services") },
    { href: "/internacionalizacion", label: t("internationalization") },
    { href: "/equipo", label: t("team") },
    { href: "/#clients", label: t("clients") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy/90 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Aristizabal Plata"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/ap-logo.png"
            alt="Aristizabal Plata"
            width={150}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <LocaleSwitcher />
          <Link
            href="/contacto"
            className="rounded-[2px] bg-white px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold hover:text-white"
          >
            {t("cta")}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-white/25 lg:hidden"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-4 bg-white shadow-[0_-5px_0_white,0_5px_0_white]" />
        </button>
      </Container>

      {open && (
        <nav className="border-t border-white/10 bg-navy lg:hidden">
          <Container className="flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-white/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="py-4 font-medium text-gold"
            >
              {t("cta")}
            </Link>
            <div className="pt-2">
              <LocaleSwitcher />
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
