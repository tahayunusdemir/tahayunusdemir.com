# Quality gates

A phase is done only when every applicable box is checked. Record results (numbers, not "looks fine") in the phase log in `phases.md`.

## Build
- [ ] `pnpm astro check` → 0 errors, 0 warnings
- [ ] `pnpm build` clean; no unused-island or missing-image warnings
- [ ] `wrangler dev` / `astro preview` serves the built site locally on workerd

## Performance (mobile Lighthouse, home + one project + one post)
- [ ] Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100
- [ ] Home JS ≤ 50 KB (gzip) — check `dist/_astro/*.js` used by `/`
- [ ] LCP < 1.5 s, CLS < 0.05 (images have width/height; fonts preloaded with `font-display: swap` and size-adjusted fallbacks)
- [ ] Images through `astro:assets` (AVIF/WebP, `sizes` set)

## Accessibility
- [ ] Keyboard-only: every control reachable, visible focus ring, skip link to `<main>`
- [ ] One `h1` per page, ordered headings, landmarks (`header nav main footer`)
- [ ] Contrast AA in both themes (check tokens, not just screenshots)
- [ ] `prefers-reduced-motion` disables non-essential motion and view-transition animations
- [ ] Alt text describes content; decorative images `alt=""`
- [ ] Language: `<html lang>` correct per locale; switch keeps the same page

## Responsive and visual
- [ ] Screenshots at 390, 768, 1024, 1440 × light/dark reviewed against `docs/design-brief.md`
- [ ] No horizontal scroll at 390; tap targets ≥ 44 px
- [ ] No "AI default" tells from SKILL.md list

## SEO and sharing
- [ ] `site` set to `https://tahayunusdemir.com` in `astro.config`
- [ ] Unique title (≤ 60 chars) and description (≤ 155) per page, per locale
- [ ] Canonical + `hreflang` (en, tr, x-default)
- [ ] OG image generated per page; validates on opengraph.xyz
- [ ] JSON-LD: `Person`, `WebSite`; `BlogPosting` on posts; `CreativeWork`/`SoftwareApplication` on projects
- [ ] `sitemap-index.xml`, `robots.txt`, `rss.xml` (per locale), `llms.txt`
- [ ] 404 page in both languages

## Content integrity
- [ ] Every fact traceable to `docs/content-brief.md`
- [ ] No phone number, no private source links, no ⚠️ claims
- [ ] CV PDF links (EN/TR) point to current files

## Security and ops
- [ ] Security headers (CSP via Astro 7 CSP support, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`)
- [ ] No secrets in repo; `.dev.vars` gitignored
- [ ] Contact endpoint: Turnstile verified server-side, rate-limited, input validated
