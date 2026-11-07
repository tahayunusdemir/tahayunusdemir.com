import { DEFAULT_LANG, LOCALES, type Lang } from "@/consts";

/** Dile göre yol üretir: path("/blog", "en") -> "/en/blog", path("/blog", "tr") -> "/blog" */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/** Geçerli URL'den dili okur. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return (LOCALES as readonly string[]).includes(first) && first !== DEFAULT_LANG
    ? (first as Lang)
    : DEFAULT_LANG;
}

/** Dil önekini atıp dilden bağımsız yolu döndürür. */
export function stripLang(pathname: string): string {
  const parts = pathname.split("/");
  if ((LOCALES as readonly string[]).includes(parts[1]) && parts[1] !== DEFAULT_LANG) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "" ? "/" : rest;
  }
  return pathname || "/";
}

export const otherLang = (lang: Lang): Lang => (lang === "tr" ? "en" : "tr");

export const htmlLang = (lang: Lang) => (lang === "tr" ? "tr-TR" : "en-US");

export function formatDate(date: Date, lang: Lang, opts?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(htmlLang(lang), {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    ...opts,
  }).format(date);
}

/** "2026-08" -> "Ağu 2026" / "Aug 2026" */
export function formatMonth(ym: string | null, lang: Lang, presentLabel: string) {
  if (!ym) return presentLabel;
  const [y, m] = ym.split("-").map(Number);
  return new Intl.DateTimeFormat(htmlLang(lang), {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}
