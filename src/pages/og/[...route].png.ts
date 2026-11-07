import type { APIRoute, GetStaticPaths } from "astro";
import { LOCALES, SITE } from "@/consts";
import { ui } from "@/i18n/ui";
import { getPosts, getProjects, splitId } from "@/lib/content";
import { renderOg } from "@/lib/og";

type OgProps = {
  title: string;
  kicker: string;
  footer: string;
};

export const getStaticPaths = (async () => {
  const paths: { params: { route: string }; props: OgProps }[] = [];
  for (const lang of LOCALES) {
    const u = ui[lang];
    const base = { kicker: SITE.name, footer: u.role };
    const pages: [string, string][] = [
      ["default", u["home.hello"]],
      ["projects", u["projects.title"]],
      ["blog", u["blog.title"]],
      ["cv", u["cv.title"]],
    ];
    for (const [key, title] of pages) paths.push({ params: { route: `${lang}/${key}` }, props: { ...base, title } });

    for (const post of await getPosts(lang)) {
      paths.push({
        params: { route: `${lang}/blog/${splitId(post.id).slug}` },
        props: { title: post.data.title, kicker: u["blog.title"], footer: SITE.name },
      });
    }
    for (const project of await getProjects(lang)) {
      paths.push({
        params: { route: `${lang}/projects/${splitId(project.id).slug}` },
        props: { title: project.data.title, kicker: u["projects.title"], footer: project.data.role },
      });
    }
  }
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as OgProps);
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
