"use client";

import { useTranslations } from "next-intl";
import ImageCompressor from "@/components/ImageCompressor";
import AdSense from "@/components/AdSense";

export default function Home() {
  const t = useTranslations("common");

  return (
    <main className="min-h-screen py-8 px-4 flex justify-center items-start">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 my-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            🖼️ {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal">
            {t("subtitle")}
          </p>
        </header>

        <ImageCompressor />

        <AdSense slotId="YOUR_AD_SLOT_ID_2" position="bottom" />

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>{t("footer")}</p>
        </footer>
      </div>
    </main>
  );
}
