import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/consts";

/** "tr/merhaba-dunya" -> { lang: "tr", slug: "merhaba-dunya" } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split("/");
  return { lang: lang as Lang, slug: rest.join("/") };
}

export async function getProjects(lang: Lang) {
  const items = await getCollection("projects", (p) => splitId(p.id).lang === lang);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function hasTranslation(collection: "projects", slug: string, lang: Lang) {
  const all = await getCollection(collection);
  return all.some((e) => e.id === `${lang}/${slug}`);
}

export type Project = CollectionEntry<"projects">;

