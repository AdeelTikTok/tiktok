import "server-only";
import { COUNTRY_LOCALE_MAP } from "./country-locale-map";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locales";

// Next.js 15+ removed `request.geo`/`request.ip` from NextRequest — geolocation is
// now the hosting provider's responsibility. This site isn't on Vercel (no
// x-vercel-ip-country header), so country is resolved with a keyless IP lookup
// instead. Swap GEO_API_URL if this provider's rate limits ever become a problem.
const GEO_API_URL = process.env.GEO_IP_API_URL ?? "https://ipwho.is";
const GEO_LOOKUP_TIMEOUT_MS = 1500;

function getClientIp(headers: Headers): string | null {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return null;
}

function isPrivateOrLocalIp(ip: string): boolean {
  return (
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)
  );
}

async function lookupCountryCodeFromIp(ip: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), GEO_LOOKUP_TIMEOUT_MS);
    const response = await fetch(`${GEO_API_URL}/${ip}?fields=success,country_code`, {
      signal: controller.signal,
      headers: { accept: "application/json" },
    });
    clearTimeout(timeout);
    if (!response.ok) return null;
    const data = (await response.json()) as { success?: boolean; country_code?: string };
    if (data.success === false || !data.country_code) return null;
    return data.country_code.toUpperCase();
  } catch {
    // Network failure, timeout, or bad response — the caller falls back gracefully.
    return null;
  }
}

function localeFromAcceptLanguage(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .find(Boolean);
  if (!preferred) return null;
  const primary = preferred.split("-")[0];
  return (LOCALES as readonly string[]).includes(primary) ? (primary as Locale) : null;
}

export async function detectLocale(headers: Headers): Promise<Locale> {
  const ip = getClientIp(headers);
  if (ip && !isPrivateOrLocalIp(ip)) {
    const countryCode = await lookupCountryCodeFromIp(ip);
    if (countryCode && COUNTRY_LOCALE_MAP[countryCode]) {
      return COUNTRY_LOCALE_MAP[countryCode];
    }
  }

  // No usable geo signal (local dev, lookup failure, unmapped country) —
  // fall back to the browser's declared language before giving up to English.
  const languageLocale = localeFromAcceptLanguage(headers.get("accept-language"));
  return languageLocale ?? DEFAULT_LOCALE;
}
