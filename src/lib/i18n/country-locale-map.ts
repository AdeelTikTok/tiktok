import type { Locale } from "./locales";

/**
 * ISO 3166-1 alpha-2 country code -> Locale.
 * Every country not listed here falls back to the default locale (English) —
 * that's a deliberate choice, not a gap: it's the only safe default for
 * markets we haven't shipped a translation for.
 */
export const COUNTRY_LOCALE_MAP: Record<string, Locale> = {
  // Italian
  IT: "it",
  SM: "it",
  VA: "it",

  // Arabic
  SA: "ar",
  AE: "ar",
  EG: "ar",
  QA: "ar",
  KW: "ar",
  BH: "ar",
  OM: "ar",
  JO: "ar",
  LB: "ar",
  IQ: "ar",
  SY: "ar",
  YE: "ar",
  LY: "ar",
  TN: "ar",
  DZ: "ar",
  MA: "ar",
  SD: "ar",
  PS: "ar",

  // Spanish
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  PR: "es",
  GQ: "es",

  // French
  FR: "fr",
  MC: "fr",
  LU: "fr",
  SN: "fr",
  CI: "fr",
  ML: "fr",
  BF: "fr",
  NE: "fr",
  TG: "fr",
  BJ: "fr",
  CM: "fr",
  GA: "fr",
  CD: "fr",
  CG: "fr",
  MG: "fr",
  HT: "fr",

  // German
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",

  // Portuguese
  PT: "pt",
  BR: "pt",
  AO: "pt",
  MZ: "pt",
  CV: "pt",
  GW: "pt",
  ST: "pt",
  TL: "pt",

  // Malay
  MY: "ms",
  BN: "ms",
};
