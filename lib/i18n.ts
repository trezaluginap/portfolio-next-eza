import en from "@/content/dictionaries/en.json";
import id from "@/content/dictionaries/id.json";

export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const dictionaries = { en, id } as const;
export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

/** Pick the value for the active locale from a Record<Locale, T>. */
export function pick<T>(locale: Locale, value: Record<Locale, T>): T {
  return value[locale] ?? value[defaultLocale];
}
