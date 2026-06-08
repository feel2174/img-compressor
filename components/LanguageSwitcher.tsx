"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { locales, type Locale } from "@/i18n";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const t = useTranslations("language");
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="fixed right-3 top-3 z-50 flex gap-1 rounded border border-white/70 bg-[#dce9ff] p-1 shadow-[inset_1px_1px_0_#fff,0_2px_8px_rgba(0,0,0,0.25)]">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          aria-label={t("switchLanguage")}
          className={`min-w-10 rounded-sm px-3 py-1 text-xs font-bold transition ${
            currentLocale === locale
              ? "bg-[#245edb] text-white shadow-[inset_1px_1px_0_rgba(255,255,255,0.45)]"
              : "bg-[#f4f7ff] text-[#103a83] hover:bg-white"
          }`}
        >
          {locale === "ko" ? t("korean") : t("english")}
        </button>
      ))}
    </div>
  );
}

