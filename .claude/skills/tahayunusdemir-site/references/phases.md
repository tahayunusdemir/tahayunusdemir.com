# Build phases

Status legend: ☐ todo · ◐ in progress · ☑ done. Update this file as work lands.

## Phase 0 — Foundations (no site code)
Entry: research done (`research/`).
- ☑ Toolchain verified: Node 24.21, pnpm, git 2.43, gh (logged in as `tahayunusdemir`), wrangler 4.158 via npx, Playwright Chromium for screenshots
- ☑ Research moved to `research/` (gitignored); repo layout decided
- ☑ Reference skills collected in `research/referans-skills/` (16 skills, licenses noted)
- ☑ Project skill written (this folder) + `CLAUDE.md`
- ◐ Content brief `docs/content-brief.md` + `docs/assets-inventory.md`
- ☐ Open questions answered by Taha (see `docs/phase-0.md`)
- ☐ Cloudflare: `wrangler login` done by Taha; Email Routing for `hello@` (Taha, dashboard)
- ☐ GitHub repo created (name/visibility per Taha) and initial commit
Exit: all ☐ above resolved.

## Phase 1 — Design brief and skeleton
- ☐ `docs/design-brief.md`: palette (4–6 named OKLCH/hex), type roles/scale, layout concept + ASCII wireframes for Home, Project, Post; principles; reviewed against AI-default tells
- ☐ Scaffold: `pnpm create cloudflare@latest` (Astro) or `shadcn init -t astro`, then `astro add cloudflare react mdx sitemap`; Tailwind v4; Base UI shadcn; Prettier
- ☐ Tokens in `src/styles/global.css`; fonts (Geist, latin-ext); light/dark with no FOUC
- ☐ i18n routing (`/`, `/tr/`), `t()` helper, language switch
- ☐ Base layout: header/nav, footer, skip link, `<Seo>` component, View Transitions
- ☐ Deploy preview to Cloudflare (with Taha's OK)

## Phase 2 — Content model and core pages
- ☐ Collections: `projects`, `blog` (Zod schemas, locale folders), `experience` data file
- ☐ Home (hero with real product UI, featured projects, experience timeline, latest posts, CTA)
- ☐ Projects index + case-study template (problem, role, decisions, architecture diagram, outcome, media, links)
- ☐ Case studies: Cinemention, AYIKA, Montanha Viva (+ shorter entries for internships)
- ☐ About (story, timeline, education, awards), `/uses`, CV page with EN/TR PDF download
- ☐ 404 (EN/TR)

## Phase 3 — Blog and SEO
- ☐ Blog index, tags, post layout (prose, Expressive Code, TOC, reading time)
- ☐ RSS per locale, sitemap, robots, `llms.txt`, JSON-LD graph, OG image generation
- ☐ Pagefind search + ⌘K command palette island
- ☐ First 2 posts (drafts by Taha, editing help by Claude)

## Phase 4 — Polish and launch
- ☐ Contact (Worker endpoint + Turnstile) or mailto fallback
- ☐ Cloudflare Web Analytics, security headers/CSP
- ☐ Full quality-gates pass; Playwright smoke tests; Lighthouse CI in GitHub Actions
- ☐ Custom domain `tahayunusdemir.com` + `www` redirect; Search Console
- ☐ Update CV, LinkedIn, GitHub profile links to the site

## Phase log
- 2026-11-05 — Phase 0 started: skill, research layout, reference skills.
