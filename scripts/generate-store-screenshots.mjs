import { cp, mkdtemp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "play-store", "screenshots", "raw");
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const temp = await mkdtemp(join(tmpdir(), "inglex-store-"));
await mkdir(output, { recursive: true });
await cp(join(root, "content.js"), join(temp, "content.js"));
await cp(join(root, "billing.js"), join(temp, "billing.js"));
await cp(join(root, "arcade.css"), join(temp, "arcade.css"));
await cp(join(root, "arcade-avatars.js"), join(temp, "arcade-avatars.js"));

const base = await readFile(join(root, "index.html"), "utf8");
const marker = "updateTop();renderHome();if(DATA.onboarded)$(\"splash\").style.display=\"none\";OrbitakidxAccess.init().then(renderHome);window.scrollTo(0,0);";
if (!base.includes(marker)) throw new Error("No se encontró el arranque de IngleX");

const scenarios = [
  {
    name: "01-bienvenida.png",
    boot: marker
  },
  {
    name: "02-inicio.png",
    boot: "DATA.name='Alex';DATA.grade=3;DATA.onboarded=true;$(\"splash\").style.display=\"none\";updateTop();renderHome();"
  },
  {
    name: "03-mundos.png",
    boot: "DATA.name='Alex';DATA.grade=3;DATA.onboarded=true;$(\"splash\").style.display=\"none\";updateTop();showThemes('study');"
  },
  {
    name: "04-reading.png",
    boot: "DATA.name='Alex';DATA.grade=3;DATA.onboarded=true;$(\"splash\").style.display=\"none\";updateTop();shuffle=function(a){return a.slice()};startReading();"
  }
];

function runChrome(args, screenshot) {
  return new Promise((resolve, reject) => {
    const child = spawn(chrome, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    let screenshotReady = false;
    let timedOut = false;
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.on("error", reject);
    child.on("close", async code => {
      clearInterval(check);
      try {
        if ((await stat(screenshot)).size > 0) screenshotReady = true;
      } catch {}
      if (screenshotReady) resolve();
      else if (timedOut) reject(new Error(`Chrome no generó ${screenshot}`));
      else code === 0 ? resolve() : reject(new Error(stderr || `Chrome terminó con ${code}`));
    });
    const started = Date.now();
    const check = setInterval(async () => {
      try {
        if ((await stat(screenshot)).size > 0) {
          screenshotReady = true;
          clearInterval(check);
          child.kill("SIGTERM");
        }
      } catch {}
      if (!screenshotReady && Date.now() - started > 15000) {
        timedOut = true;
        clearInterval(check);
        child.kill("SIGTERM");
      }
    }, 120);
  });
}

try {
  for (let i = 0; i < scenarios.length; i++) {
    const scenario = scenarios[i];
    const page = join(temp, `scenario-${i + 1}.html`);
    const profile = join(temp, `profile-${i + 1}`);
    await writeFile(page, base.replace(marker, scenario.boot));
    const screenshot = join(output, scenario.name);
    await rm(screenshot, { force: true });
    await runChrome([
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
      "--force-device-scale-factor=1", "--window-size=540,960", "--virtual-time-budget=1400",
      `--user-data-dir=${profile}`, `--screenshot=${screenshot}`,
      pathToFileURL(page).href
    ], screenshot);
  }
} finally {
  await new Promise(resolve => setTimeout(resolve, 500));
  await rm(temp, { recursive: true, force: true });
}

console.log("Capturas de Google Play generadas en 540 × 960 (9:16)");
