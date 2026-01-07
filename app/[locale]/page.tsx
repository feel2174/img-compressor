"use client";

import { useTranslations } from "next-intl";
import ImageCompressor from "@/components/ImageCompressor";
import AdSense from "@/components/AdSense";

export default function Home() {
  const t = useTranslations("common");

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <div className="max-w-7xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/50 p-6 sm:p-8 md:p-12 lg:p-16 my-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </header>

        <ImageCompressor />

        <AdSense slotId="YOUR_AD_SLOT_ID_2" position="bottom" />

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>{t("footer")}</p>
        </footer>
      </div>
    </main>
  );
}
