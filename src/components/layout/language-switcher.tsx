"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_COOKIE, type Locale } from "@/lib/i18n/locales";
import { LOCALE_LABELS } from "@/lib/i18n/locale-names";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year — matches the proxy's own cookie lifetime

export function LanguageSwitcher({
  currentLocale,
  dark,
}: {
  currentLocale: Locale;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function selectLocale(locale: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    setOpen(false);
    window.location.reload();
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
          dark
            ? "border-paper/25 text-paper/70 hover:border-gold hover:text-gold"
            : "border-line text-paper/70 hover:border-gold hover:text-gold"
        }`}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
        </svg>
        {LOCALE_LABELS[currentLocale].code}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-ink-2 py-1.5 shadow-2xl"
        >
          {LOCALES.map((locale) => (
            <li key={locale}>
              <button
                role="option"
                aria-selected={locale === currentLocale}
                onClick={() => selectLocale(locale)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  locale === currentLocale
                    ? "text-gold"
                    : "text-paper/70 hover:bg-paper/[0.06] hover:text-paper"
                }`}
              >
                <span>{LOCALE_LABELS[locale].native}</span>
                <span className="text-[10px] uppercase tracking-[0.1em] opacity-50">
                  {LOCALE_LABELS[locale].code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
