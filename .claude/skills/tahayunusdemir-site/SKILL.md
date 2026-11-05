---
name: tahayunusdemir-site
description: Build, extend, design, review or deploy tahayunusdemir.com — Taha Yunus Demir's bilingual (EN/TR) portfolio + blog on Astro 7, TypeScript, Tailwind v4, shadcn/ui (React islands) and Cloudflare Workers. Use for any work in this repo, including adding pages, projects, blog posts, components, styling, SEO, i18n, performance, or deployment, and whenever a phase in the build plan is started.
---

# tahayunusdemir.com — build skill

The site is the portfolio and blog of **Taha Yunus Demir**, a full-stack and Android developer (Next.js, React, TypeScript, Supabase/PostgreSQL, Kotlin, Jetpack Compose). Readers are recruiters and engineering leads (Türkiye and international) and potential freelance clients. The site's single job: **make them want to talk to Taha within 60 seconds**, through real projects and clear writing.

## Sources of truth (read before acting)

| What | Where |
|---|---|
| Facts about Taha (CV, projects, dates, metrics) | `docs/content-brief.md` → canonical source `/home/taha/projects/cv/cv-build/cv.html` |
| Media assets and ownership | `docs/assets-inventory.md` |
| Design tokens and art direction | `docs/design-brief.md` (create it in Phase 1 before any UI code) |
| Stack decisions and their reasons | `research/reports/*.md` (framework, UI/UX) — summarized in `references/stack.md` |
| Example repos (★, why) | `research/INDEX.md`, clones in `research/github/` |
| Upstream skills these rules came from | `research/referans-skills/` |
| Phase plan and status | `references/phases.md` |

**Never invent facts.** Every metric, date, role or claim on the site must exist in `docs/content-brief.md`. Claims marked ⚠️ in `/home/taha/projects/cv/references/README.md` are banned. The phone number never appears on the site.

## Fixed stack (don't re-litigate)

Astro 7 (static-first, `@astrojs/cloudflare`) · TypeScript strict · Tailwind CSS v4 (`@theme`, OKLCH tokens) · shadcn/ui via `shadcn init -t astro`, **Base UI** base · React 19 islands only where interactive · MDX + content collections (Zod) · Motion only inside React islands · Lucide + Simple Icons · Geist Sans/Mono via Fontsource (with `latin-ext`) · Expressive Code · Pagefind · Cloudflare Workers Static Assets · pnpm. Details and versions: `references/stack.md`.

## Rules

### Architecture (from astro-best-practices)
- `.astro` first. A React island only when it needs local state or client behavior. Keep islands leaf-sized; hydrate with `client:visible` / `client:idle`; `client:load` only for the theme toggle if needed.
- Everything prerendered by default. Server code only for the contact endpoint (and later, optional features).
- Content in `src/content/{projects,blog}/{en,tr}/*.mdx` with Zod schemas; never loose frontmatter.
- Predictable tree: `src/{components,layouts,pages,content,styles,assets,i18n,lib}`, `public/`.

### i18n
- English at `/`, Turkish at `/tr/` (Astro i18n routing, `prefixDefaultLocale: false`).
- UI strings in `src/i18n/{en,tr}.ts` with a typed `t()` helper. No hard-coded copy in components.
- Every page sets `<html lang>`, `hreflang` alternates and a language switch that maps to the counterpart URL.
- Turkish casing: use `toLocaleUpperCase('tr-TR')`; fonts must include `latin-ext` (ğ ş ı İ).

### Design (from frontend-design, refactoring-ui, taste-skill, web-design-guidelines)
- Plan before code: `docs/design-brief.md` holds 4–6 named colors, type roles and scale, layout concept with ASCII wireframes, and 3–5 principles. Review it against the "AI default" list below; revise anything generic before building.
- **Avoid the generated-site tells:** cream background + serif + terracotta; black + acid-green; identical rounded cards with the same soft shadow everywhere; ALL-CAPS eyebrow labels above every heading; one accented word in the headline; `01/02/03` markers when content isn't a sequence; `→` appended to every link; fade-up on every section; gradient blobs; "default shadcn" look left untouched.
- Spend boldness in one place (one memorable element per page). Everything else quiet.
- Hero opens with the most characteristic thing about Taha: real product UI (Cinemention screens, the Android app in a device frame), not a stat grid or a 3D gimmick.
- Typography carries personality: max two families, a clear scale, line length < 80ch, body ≥ 16px, blog prose via `@tailwindcss/typography`, tuned.
- Use semantic shadcn tokens (`bg-background`, `text-muted-foreground`); never raw palette classes in components; no manual `dark:` color overrides.
- shadcn usage rules: `gap-*` not `space-*`; `size-*` for squares; `cn()` for conditionals; full Card composition; Dialog/Sheet need a Title; icons in buttons via `data-icon`; check `shadcn info` for base (`render` prop for Base UI, not `asChild`).
- Motion: CSS first (View Transitions, scroll-driven animations). One orchestrated moment per page at most. Motion that answers user action is fine. Always honor `prefers-reduced-motion`.
- Copy: plain, specific, active voice, sentence case, no hype words ("passionate", "cutting-edge", "seamless"). Describe outcomes in the reader's terms.

### Quality floor (must pass before a phase is "done")
See `references/quality-gates.md`. Short version: `astro check` + build clean; Lighthouse ≥ 95 in all four categories on home, a project page and a blog post (mobile); home ships < 50 KB JS; keyboard-only navigation works with visible focus; no layout shift from images/fonts; responsive at 390, 768, 1024, 1440; both themes pass WCAG AA contrast; every page has title, description, canonical, OG image, hreflang; JSON-LD `Person` + `WebSite` (+ `BlogPosting`/`CreativeWork`).

### Workflow
1. Read `references/phases.md`, find the current phase, and confirm its entry criteria.
2. For UI work: update `docs/design-brief.md` first if the change affects tokens or layout.
3. Build in small, verifiable increments; run `pnpm astro check && pnpm build` after each.
4. Look at the result. Take screenshots with Playwright (Chromium at `~/.cache/ms-playwright/chromium-*/chrome-linux64/chrome`) at 390 and 1440 in both themes and critique against the design brief. Remove one accessory.
5. Run the review pass: fetch `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` and check changed files against it.
6. Update the phase checklist in `references/phases.md`.

### Safety
- Never commit `research/`, `.env*`, `.dev.vars`, or anything with tokens. The phone number and private repo source code never get published.
- Deploys (`wrangler deploy`), DNS changes, creating or publishing GitHub repos, and pushing need Taha's explicit OK each time.
- Private repos (Cinemention, RandevumOnline…) are described, never linked as source.

## Upstream skills to consult when relevant
`research/referans-skills/`: `shadcn-ui__shadcn` (component rules, `rules/*.md`), `jdevalk__astro-seo` + `static-seo` + `content-seo` (SEO audit), `incluud__content-collection` / `create-component`, `vercel-labs__react-view-transitions`, `vercel-labs__react-best-practices`, `addyosmani__performance-optimization` / `shipping-and-launch`, `edisonmbli__refactoring-ui`, `anthropics__frontend-design`, `Leonxlnx__taste-skill` (anti-generic checklist; its company-site house rules don't apply here).
