// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tahayunusdemir.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/og/"),
      i18n: { defaultLocale: "tr", locales: { tr: "tr-TR", en: "en-US" } },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: true,
    },
  },
  vite: { plugins: [tailwindcss()] },
});
