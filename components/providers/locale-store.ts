"use client";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const COOKIE_KEY = "treza-locale";
const MAX_AGE = 60 * 60 * 24 * 365;

/**
 * A tiny external store for the active locale, backed by a cookie.
 * Used with `useSyncExternalStore` so the server snapshot is always the
 * default locale and the client snapshot reflects the cookie - no hydration
 * mismatch, no setState-in-effect.
 */
const listeners = new Set<() => void>();

function readCookie(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_KEY}=`));
  const value = match?.split("=")[1];
  return value && (locales as readonly string[]).includes(value)
    ? (value as Locale)
    : defaultLocale;
}

function writeCookie(next: Locale) {
  document.cookie = `${COOKIE_KEY}=${next};path=/;max-age=${MAX_AGE};samesite=lax`;
}

export const localeStore = {
  subscribe(callback: () => void) {
    listeners.add(callback);
    return () => listeners.delete(callback);
  },
  getSnapshot(): Locale {
    return readCookie();
  },
  getServerSnapshot(): Locale {
    return defaultLocale;
  },
  set(next: Locale) {
    writeCookie(next);
    document.documentElement.lang = next;
    listeners.forEach((cb) => cb());
  },
  /** Called on mount to sync <html lang> with the cookie. */
  syncDocumentLang() {
    document.documentElement.lang = readCookie();
  },
};
