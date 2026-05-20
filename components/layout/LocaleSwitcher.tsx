"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

interface LocaleSwitcherProps {
  tone?: "dark" | "light";
}

export function LocaleSwitcher({ tone = "light" }: LocaleSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const active = tone === "light" ? "text-white" : "text-ink";
  const idle =
    tone === "light"
      ? "text-white/50 hover:text-white"
      : "text-muted hover:text-ink";

  return (
    <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted">/</span>}
          <button
            type="button"
            aria-current={loc === locale}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`transition-colors ${loc === locale ? active : idle}`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
