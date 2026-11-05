# Stack — decisions and reasons

Full research: `research/reports/Portfolyo sitesi teknoloji seçimi 2026.md` and `research/reports/Frontend UI UX seçimleri 2026.md`.

| Layer | Choice | Why (one line) | Rejected |
|---|---|---|---|
| Framework | Astro 7.x (7.4 on 2026-10-15) | #1 satisfaction in State of JS 2025; zero JS by default; owned by Cloudflare since Jan 2026 | Next.js 16 (heavier, second-class on Cloudflare), SvelteKit/Nuxt (off-stack) |
| Language | TypeScript strict, `.astro`, MDX | Taha's main language; typed content schemas | Kotlin/Compose Web, Flutter Web (canvas → no SEO) |
| Islands | React 19 via `@astrojs/react` | shadcn ecosystem; matches Taha's Next.js work | Preact (compat gaps), Svelte/Solid (off-stack) |
| Components | shadcn/ui (`shadcn init -t astro`), Base UI base | Code ownership, biggest ecosystem, Base UI 1.0 stable Feb 2026 | MUI, Chakra, HeroUI, daisyUI, Bootstrap |
| Static widgets | Plain `.astro` (+ Starwind UI if needed) | No JS for menus/accordions | — |
| Styling | Tailwind CSS v4, OKLCH tokens in `@theme` | 78% usage (State of React 2025), shadcn's base | CSS-in-JS, UnoCSS, Panda |
| Content | Astro content collections + MDX + Zod | Type-safe frontmatter, components in posts | Headless CMS (not needed) |
| Code blocks | `astro-expressive-code` | Filenames, highlights, copy button, themes | raw Shiki |
| Animation | CSS View Transitions + scroll-driven; `motion` in islands | Platform first, MIT library when needed | GSAP, Lenis, Three.js |
| Icons | `@lucide/astro`, `lucide-react`, Simple Icons | shadcn default; brand logos for stack | Font Awesome |
| Fonts | Geist Sans + Geist Mono (Fontsource variable), optional Geist Serif for prose headings | Dev identity, mono pair, light | Google Fonts CDN (privacy) |
| Search | Pagefind | Static, zero server | Algolia |
| Comments | giscus (optional, Phase 4) | GitHub Discussions, free | Disqus |
| OG images | Satori-based build-time generation (e.g. `astro-og-canvas` or `@vercel/og`-style via satori + resvg) | Branded share cards per page | manual images |
| SEO | Hand-rolled `<Seo>` or `@jdevalk/astro-seo-graph`; `@astrojs/sitemap`; RSS `@astrojs/rss`; `llms.txt` | See astro-seo skill | — |
| Hosting | Cloudflare Workers + Static Assets, `wrangler.jsonc`, Workers Builds from GitHub | Domain already on Cloudflare; free tier | Pages (legacy path), Vercel |
| Analytics | Cloudflare Web Analytics | Cookieless, no banner | GA4 |
| Email | **tahayunusdemir@gmail.com** shown on site (Taha's decision 2026-11-05); Email Routing `hello@` optional later | Simple, no setup | — |
| Locales | EN at `/` (default), TR at `/tr/` (Taha's decision) | International reach | — |
| Photo | Small avatar on home + large on About (Taha's decision) | Trust | — |
| Contact form | Worker endpoint + Turnstile + email send (Resend or Cloudflare Email Workers) | Spam-safe | third-party form SaaS |
| Package manager | pnpm | Fast, strict | npm |
| Quality | `astro check`, Prettier (+ astro + tailwind plugins), ESLint (optional), Playwright smoke tests, Lighthouse CI | — | — |

Verify exact package names and CLI flags against current docs at install time; versions move fast.
