import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/consts";

/** "tr/merhaba-dunya" -> { lang: "tr", slug: "merhaba-dunya" } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split("/");
  return { lang: lang as Lang, slug: rest.join("/") };
}

export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    "blog",
    (p) => splitId(p.id).lang === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects(lang: Lang) {
  const items = await getCollection("projects", (p) => splitId(p.id).lang === lang);
  return items.sort((a, b) => a.data.order - b.data.order);
}

/** Yaklaşık okuma süresi (dakika), dakikada 200 kelime. */
export function readingTime(body = ""): number {
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_>`\[\]()!-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function hasTranslation(collection: "blog" | "projects", slug: string, lang: Lang) {
  const all = await getCollection(collection);
  return all.some((e) => e.id === `${lang}/${slug}` && !("draft" in e.data && e.data.draft));
}

export type Post = CollectionEntry<"blog">;
export type Project = CollectionEntry<"projects">;

export const tagSlug = (tag: string) =>
  tag
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
