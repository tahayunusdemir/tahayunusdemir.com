import { getIconData, iconToSVG, replaceIDs } from "@iconify/utils";
import lucide from "@iconify-json/lucide/icons.json" with { type: "json" };
import mdi from "@iconify-json/mdi/icons.json" with { type: "json" };

const sets = { lucide, mdi } as const;

/** "lucide:sun" gibi bir ad alıp SVG gövdesini ve viewBox'ı döndürür (build sırasında). */
export function getIcon(name: string) {
  const [prefix, iconName] = name.split(":") as [keyof typeof sets, string];
  const data = getIconData(sets[prefix] as never, iconName);
  if (!data) throw new Error(`Icon not found: ${name}`);
  const { attributes, body } = iconToSVG(data);
  return { viewBox: attributes.viewBox, body: replaceIDs(body) };
}
