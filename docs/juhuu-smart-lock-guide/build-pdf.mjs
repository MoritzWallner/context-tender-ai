// Rendert guide.html als A4-PDF:  node build-pdf.mjs
// Benötigt Playwright (Chromium). Optional: --png erzeugt Vorschaubilder je Seite.
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(dir, "guide.html")).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: path.join(dir, "JUHUU-Smart-Lock-Anleitung.pdf"),
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
if (process.argv.includes("--png")) {
  await page.emulateMedia({ media: "print" });
  await page.setViewportSize({ width: 794, height: 1123 });
  const pages = await page.$$("section.page");
  for (const [i, el] of pages.entries()) {
    await el.screenshot({ path: path.join(dir, `preview-${i + 1}.png`) });
  }
}
await browser.close();
console.log("PDF erstellt: JUHUU-Smart-Lock-Anleitung.pdf");
