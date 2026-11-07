export const SITE = {
  url: "https://tahayunusdemir.com",
  name: "Taha Yunus Demir",
  shortName: "TYD",
  email: "tahayunusdemir@gmail.com",
  github: "https://github.com/tahayunusdemir",
  githubUser: "tahayunusdemir",
  linkedin: "https://www.linkedin.com/in/taha-yunus-demir",
  repo: "https://github.com/tahayunusdemir/tahayunusdemir.com",
} as const;

export const LOCALES = ["tr", "en"] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = "tr";
