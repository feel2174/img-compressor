"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import ImageCompressor from "@/components/ImageCompressor";
import type { Locale } from "@/i18n";

const featureIndexes = [0, 1, 2, 3];
const guideIndexes = [0, 1, 2, 3];
const privacyIndexes = [0, 1, 2, 3];

export default function Home() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const [isStartOpen, setIsStartOpen] = useState(false);

  const startItems = [
    { label: t("startMenu.compress"), href: "#compressor", badge: "JPG" },
    { label: t("startMenu.webp"), href: "#compressor", badge: "WEBP" },
    { label: t("startMenu.features"), href: "#features", badge: "DOC" },
    { label: t("startMenu.about"), href: `/${locale}/about`, badge: "INFO" },
    { label: t("startMenu.privacy"), href: `/${locale}/privacy`, badge: "TXT" },
    { label: t("startMenu.terms"), href: `/${locale}/terms`, badge: "LAW" },
    { label: t("startMenu.contact"), href: `/${locale}/contact`, badge: "MAIL" },
  ];

  return (
    <main className="xp-desktop">
      <div className="xp-wallpaper" aria-hidden="true" />

      <section className="xp-window" aria-labelledby="main-window-title">
        <div className="xp-titlebar">
          <div className="xp-titlebar-left">
            <span className="xp-window-icon" aria-hidden="true" />
            <span id="main-window-title">{t("windowTitle")}</span>
          </div>
          <div className="xp-window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="xp-menubar">
          <a href="#compressor">{t("menu.file")}</a>
          <a href="#features">{t("menu.tools")}</a>
          <Link href={`/${locale}/about`}>{t("menu.about")}</Link>
          <Link href={`/${locale}/privacy`}>{t("menu.privacy")}</Link>
          <Link href={`/${locale}/contact`}>{t("menu.contact")}</Link>
        </div>

        <div className="xp-window-body">
          <header className="xp-hero">
            <div>
              <p className="xp-kicker">{t("kicker")}</p>
              <h1>{t("title")}</h1>
              <p>{t("subtitle")}</p>
            </div>
            <div className="xp-status-card" aria-label={t("status.title")}>
              <strong>{t("status.title")}</strong>
              <span>{t("status.browser")}</span>
              <span>{t("status.private")}</span>
              <span>{t("status.free")}</span>
            </div>
          </header>

          <section id="compressor" className="xp-section">
            <div className="xp-section-heading">
              <span>{t("sections.compress.label")}</span>
              <h2>{t("sections.compress.title")}</h2>
              <p>{t("sections.compress.description")}</p>
            </div>
            <ImageCompressor />
          </section>

          <section id="features" className="xp-section xp-info-grid">
            <div className="xp-section-heading">
              <span>{t("sections.features.label")}</span>
              <h2>{t("sections.features.title")}</h2>
              <p>{t("sections.features.description")}</p>
            </div>
            <div className="xp-card-grid">
              {featureIndexes.map((index) => (
                <article className="xp-info-card" key={index}>
                  <strong>{t(`features.${index}.title`)}</strong>
                  <p>{t(`features.${index}.description`)}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="xp-section xp-two-column">
            <div className="xp-section-heading">
              <span>{t("sections.about.label")}</span>
              <h2>{t("sections.about.title")}</h2>
              <p>{t("sections.about.description")}</p>
            </div>
            <div className="xp-text-panel">
              <p>{t("about.body1")}</p>
              <p>{t("about.body2")}</p>
              <ol>
                {guideIndexes.map((index) => (
                  <li key={index}>{t(`guide.${index}`)}</li>
                ))}
              </ol>
            </div>
          </section>

          <section id="privacy" className="xp-section xp-two-column">
            <div className="xp-section-heading">
              <span>{t("sections.privacy.label")}</span>
              <h2>{t("sections.privacy.title")}</h2>
              <p>{t("sections.privacy.description")}</p>
            </div>
            <div className="xp-text-panel">
              {privacyIndexes.map((index) => (
                <p key={index}>{t(`privacy.${index}`)}</p>
              ))}
            </div>
          </section>

          <nav className="xp-footer-links" aria-label={t("footerNav.label")}>
            <Link href={`/${locale}/about`}>{t("footerNav.about")}</Link>
            <Link href={`/${locale}/privacy`}>{t("footerNav.privacy")}</Link>
            <Link href={`/${locale}/terms`}>{t("footerNav.terms")}</Link>
            <Link href={`/${locale}/contact`}>{t("footerNav.contact")}</Link>
          </nav>
        </div>
      </section>

      {isStartOpen && (
        <nav className="xp-start-menu" aria-label={t("startMenu.label")}>
          <div className="xp-start-header">{t("startMenu.title")}</div>
          {startItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsStartOpen(false)}
            >
              <span>{item.badge}</span>
              {item.label}
            </a>
          ))}
          <div className="xp-start-footer">{t("startMenu.footer")}</div>
        </nav>
      )}

      <footer className="xp-taskbar">
        <button
          type="button"
          className="xp-start-button"
          aria-expanded={isStartOpen}
          onClick={() => setIsStartOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          {t("start")}
        </button>
        <div className="xp-taskbar-item">{t("taskbarItem")}</div>
        <div className="xp-clock">{t("footer")}</div>
      </footer>
    </main>
  );
}
