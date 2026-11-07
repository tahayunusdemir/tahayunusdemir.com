import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string(),
      period: z.string(),
      order: z.number(),
      featured: z.boolean().default(false),
      status: z.string().optional(),
      stack: z.array(z.string()),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      links: z
        .object({
          repo: z.url().optional(),
          live: z.url().optional(),
          demo: z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { blog, projects };
