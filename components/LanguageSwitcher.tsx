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
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          aria-label={t("switchLanguage")}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
            currentLocale === locale
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          {locale === "ko" ? t("korean") : t("english")}
        </button>
      ))}
    </div>
  );
}

