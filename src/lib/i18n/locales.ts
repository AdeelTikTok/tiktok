export const LOCALES = ["en", "it", "ar", "es", "fr", "de", "pt", "ms"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const RTL_LOCALES: readonly Locale[] = ["ar"];

export const LOCALE_COOKIE = "locale";

export function isValidLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function isRtlLocale(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}
