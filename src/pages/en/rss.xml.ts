import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, splitId } from "@/lib/content";
import { localizePath } from "@/i18n/utils";
import { ui } from "@/i18n/ui";

export async function GET(context: APIContext) {
  const posts = await getPosts("en");
  return rss({
    title: ui.en["meta.title"],
    description: ui.en["blog.description"],
    site: context.site!,
    customData: "<language>en-US</language>",
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      categories: p.data.tags,
      link: localizePath(`/blog/${splitId(p.id).slug}/`, "en"),
    })),
  });
}
