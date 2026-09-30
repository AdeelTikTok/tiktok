import "server-only";
import type { Locale } from "./locales";
import type { Dictionary } from "./dictionaries/en";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  it: () => import("./dictionaries/it").then((m) => m.default),
  ar: () => import("./dictionaries/ar").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  pt: () => import("./dictionaries/pt").then((m) => m.default),
  ms: () => import("./dictionaries/ms").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = loaders[locale] ?? loaders.en;
  return loader();
}

export type { Dictionary };
