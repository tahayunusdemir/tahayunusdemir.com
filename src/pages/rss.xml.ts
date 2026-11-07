import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, splitId } from "@/lib/content";
import { localizePath } from "@/i18n/utils";
import { ui } from "@/i18n/ui";

export async function GET(context: APIContext) {
  const posts = await getPosts("tr");
  return rss({
    title: ui.tr["meta.title"],
    description: ui.tr["blog.description"],
    site: context.site!,
    customData: "<language>tr-TR</language>",
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      categories: p.data.tags,
      link: localizePath(`/blog/${splitId(p.id).slug}/`, "tr"),
    })),
  });
}
