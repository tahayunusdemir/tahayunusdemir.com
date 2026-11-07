import { SITE } from "@/consts";

export interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

let cache: Promise<{ total: number; days: Day[] } | null> | undefined;

/** Son bir yılın GitHub katkıları; build sırasında bir kez çekilir. Hata olursa null. */
export function getContributions() {
  cache ??= (async () => {
    try {
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${SITE.githubUser}?y=last`, {
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { total: { lastYear: number }; contributions: Day[] };
      return { total: data.total.lastYear, days: data.contributions };
    } catch {
      return null;
    }
  })();
  return cache;
}

/** Günleri haftalık sütunlara böler (Pazar başlangıçlı). */
export function toWeeks(days: Day[]): (Day | null)[][] {
  if (!days.length) return [];
  const weeks: (Day | null)[][] = [];
  const firstDow = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  let week: (Day | null)[] = Array(firstDow).fill(null);
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)]);
  return weeks;
}
