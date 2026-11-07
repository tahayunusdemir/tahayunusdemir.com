import fs from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";

const fontDir = path.resolve("node_modules/@fontsource/inter/files");
let fonts: Awaited<ReturnType<typeof loadFonts>> | undefined;

async function loadFonts() {
  const load = (f: string) => fs.readFile(path.join(fontDir, f));
  const [r, b, rx, bx] = await Promise.all([
    load("inter-latin-400-normal.woff"),
    load("inter-latin-700-normal.woff"),
    load("inter-latin-ext-400-normal.woff"),
    load("inter-latin-ext-700-normal.woff"),
  ]);
  return [
    { name: "Inter", data: r, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: b, weight: 700 as const, style: "normal" as const },
    { name: "Inter Ext", data: rx, weight: 400 as const, style: "normal" as const },
    { name: "Inter Ext", data: bx, weight: 700 as const, style: "normal" as const },
  ];
}

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export async function renderOg({ title, kicker, footer }: { title: string; kicker: string; footer: string }) {
  fonts ??= await loadFonts();
  const tree = h(
    "div",
    {
      // Satori dolguyu boyuta ekliyor (content-box): 1200x630 = 1040x486 + dolgu.
      width: 1040,
      height: 486,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 80px",
      backgroundColor: "#09090b",
      backgroundImage: "linear-gradient(135deg, #09090b 0%, #18181b 55%, #0b3b2e 100%)",
      color: "#fafafa",
      fontFamily: "Inter, Inter Ext",
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: "18px" }, [
        h(
          "div",
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "14px",
            background: "#fafafa",
            color: "#09090b",
            fontSize: "22px",
            fontWeight: 700,
          },
          "TYD",
        ),
        h("div", { display: "flex", fontSize: "28px", color: "#a1a1aa" }, kicker),
      ]),
      h(
        "div",
        {
          display: "flex",
          fontSize: title.length > 60 ? "56px" : "68px",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          maxWidth: "1000px",
        },
        title,
      ),
      h("div", { display: "flex", justifyContent: "space-between", fontSize: "26px", color: "#a1a1aa" }, [
        h("div", { display: "flex" }, footer),
        h("div", { display: "flex", color: "#34d399" }, "tahayunusdemir.com"),
      ]),
    ],
  );
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
