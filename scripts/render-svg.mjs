import { mkdtemp, mkdir, rm, stat, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function runChrome(args, screenshot) {
  return new Promise((resolve, reject) => {
    const child = spawn(chrome, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    let ready = false;
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.on("error", reject);
    child.on("close", async code => {
      clearInterval(check);
      try {
        if ((await stat(screenshot)).size > 0) ready = true;
      } catch {}
      if (ready) resolve();
      else reject(new Error(stderr || `Chrome terminó con ${code}`));
    });
    const started = Date.now();
    const check = setInterval(async () => {
      try {
        if ((await stat(screenshot)).size > 0) {
          ready = true;
          clearInterval(check);
          child.kill("SIGTERM");
        }
      } catch {}
      if (!ready && Date.now() - started > 15000) {
        clearInterval(check);
        child.kill("SIGTERM");
        reject(new Error(`Chrome no generó ${screenshot}`));
      }
    }, 120);
  });
}

export async function renderSvg(svg, output, width, height, options = {}) {
  await mkdir(new URL(".", pathToFileURL(output)), { recursive: true });
  const temp = await mkdtemp(join(tmpdir(), "inglex-svg-"));
  const page = join(temp, "image.html");
  const profile = join(temp, "profile");
  const fit = options.cover ? "xMidYMid slice" : "xMidYMid meet";
  const prepared = svg.replace(/<svg\b/, `<svg preserveAspectRatio="${fit}"`);
  const background = options.transparent ? "transparent" : (options.background || "#bdf6ef");
  await writeFile(page, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:${width}px;height:${height}px;overflow:hidden;background:${background}}svg{display:block;width:100%;height:100%}</style>${prepared}`);
  await rm(output, { force: true });
  try {
    await runChrome([
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
      "--default-background-color=00000000", "--force-device-scale-factor=1",
      `--window-size=${width},${height}`, `--user-data-dir=${profile}`,
      `--screenshot=${output}`, pathToFileURL(page).href
    ], output);
  } finally {
    await new Promise(resolve => setTimeout(resolve, 250));
    await rm(temp, { recursive: true, force: true });
  }
}
