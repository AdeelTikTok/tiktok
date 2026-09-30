import "server-only";
import { cookies } from "next/headers";
import { DEFAULT_LOCALE, isValidLocale, LOCALE_COOKIE, type Locale } from "./locales";

export async function getCurrentLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isValidLocale(value) ? value : DEFAULT_LOCALE;
}
