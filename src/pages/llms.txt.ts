import type { APIRoute } from "astro";
import { SITE } from "@/consts";
import { experience, summary } from "@/data/cv";
import { getProjects, splitId } from "@/lib/content";

// LLM'ler ve yapay zekâ arama motorları için sitenin kısa, makine okunur özeti (llmstxt.org).
export const GET: APIRoute = async () => {
  const projects = await getProjects("en");
  const body = `# ${SITE.name}

> ${summary.en}

Software Developer (Android and Full Stack Web) based in Ankara, Türkiye. Open to junior Android and full stack roles and to relocating to Istanbul.

- Email: ${SITE.email}
- GitHub: ${SITE.github}
- LinkedIn: ${SITE.linkedin}
- Resume (EN PDF): ${SITE.url}/cv/Taha_Yunus_Demir_CV_EN.pdf
- Resume (web): ${SITE.url}/en/cv/

## Experience

${experience.map((e) => `- ${e.company}: ${e.position.en} (${e.start} to ${e.end ?? "present"})`).join("\n")}

## Projects

${projects.map((p) => `- [${p.data.title}](${SITE.url}/en/projects/${splitId(p.id).slug}/): ${p.data.summary}`).join("\n")}

The site is also available in Turkish at ${SITE.url}/.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
