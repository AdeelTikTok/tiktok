import type { Locale } from "./locales";

// Always shown in each language's own native name/script, regardless of the
// current locale — this is the standard convention for language switchers
// (a visitor should recognize their language even if they can't read the
// current one).
export const LOCALE_LABELS: Record<Locale, { native: string; code: string }> = {
  en: { native: "English", code: "EN" },
  it: { native: "Italiano", code: "IT" },
  ar: { native: "العربية", code: "AR" },
  es: { native: "Español", code: "ES" },
  fr: { native: "Français", code: "FR" },
  de: { native: "Deutsch", code: "DE" },
  pt: { native: "Português", code: "PT" },
  ms: { native: "Bahasa Melayu", code: "MS" },
};
