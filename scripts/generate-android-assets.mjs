import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { renderSvg } from "./render-svg.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const res = join(root, "android", "app", "src", "main", "res");
const [icon, background, foreground, splash] = await Promise.all([
  readFile(join(root, "assets", "icon-only.svg"), "utf8"),
  readFile(join(root, "assets", "icon-background.svg"), "utf8"),
  readFile(join(root, "assets", "icon-foreground.svg"), "utf8"),
  readFile(join(root, "assets", "splash.svg"), "utf8")
]);

const densities = { ldpi: 36, mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
for (const [density, size] of Object.entries(densities)) {
  const dir = join(res, `mipmap-${density}`);
  await renderSvg(icon, join(dir, "ic_launcher.png"), size, size);
  await renderSvg(icon, join(dir, "ic_launcher_round.png"), size, size);
  await renderSvg(background, join(dir, "ic_launcher_background.png"), size, size);
  await renderSvg(foreground, join(dir, "ic_launcher_foreground.png"), size, size, { transparent: true });
}

const splashes = {
  "drawable/splash.png": [320, 480],
  "drawable-port-ldpi/splash.png": [240, 320],
  "drawable-port-mdpi/splash.png": [320, 480],
  "drawable-port-hdpi/splash.png": [480, 800],
  "drawable-port-xhdpi/splash.png": [720, 1280],
  "drawable-port-xxhdpi/splash.png": [960, 1600],
  "drawable-port-xxxhdpi/splash.png": [1280, 1920],
  "drawable-land-ldpi/splash.png": [320, 240],
  "drawable-land-mdpi/splash.png": [480, 320],
  "drawable-land-hdpi/splash.png": [800, 480],
  "drawable-land-xhdpi/splash.png": [1280, 720],
  "drawable-land-xxhdpi/splash.png": [1600, 960],
  "drawable-land-xxxhdpi/splash.png": [1920, 1280]
};
for (const [relative, dimensions] of Object.entries(splashes)) {
  await renderSvg(splash, join(res, relative), dimensions[0], dimensions[1], { cover: true });
}

await renderSvg(icon, join(root, "favicon-32.png"), 32, 32);
await renderSvg(icon, join(root, "apple-touch-icon.png"), 180, 180);
console.log("Iconos y pantallas de arranque de Android generados");
