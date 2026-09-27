#!/usr/bin/env python3
"""Generate the Andrew neural English audio used throughout IngleX.

Install the one-time generator with: python3 -m pip install edge-tts
"""

import asyncio
import json
import subprocess
import sys
from pathlib import Path

import edge_tts


ROOT = Path(__file__).resolve().parent.parent
ADVENTURE_OUTPUT = ROOT / "assets" / "audio" / "adventures"
ENGLISH_OUTPUT = ROOT / "assets" / "audio" / "english"
VOICE = "en-US-AndrewMultilingualNeural"
FORCE = "--force" in sys.argv


def load_manifest():
    javascript = r"""
const fs=require('fs'),vm=require('vm');
const c={}; c.window=c; vm.createContext(c);
vm.runInContext(fs.readFileSync('content.js','utf8'),c);
vm.runInContext(fs.readFileSync('adventures.js','utf8'),c);
const adventures=[];
Object.values(c.INGLEX_CONTENT.adventures).flat().forEach(story =>
  story.scenes.forEach((scene,index) => adventures.push({
    file: story.id+'-s'+(index+1)+'.mp3', text: scene.line
  }))
);
function audioKey(text){
  let h=2166136261;
  for(let i=0;i<text.length;i++){
    h^=text.charCodeAt(i); h=Math.imul(h,16777619);
  }
  return (h>>>0).toString(16).padStart(8,'0');
}
const texts=[];
c.INGLEX_CONTENT.themes.forEach(theme => theme.words.forEach(word => texts.push(word.en)));
Object.values(c.INGLEX_CONTENT.sentences).flat().forEach(sentence => texts.push(sentence[0]));
const english=[...new Set(texts)].map(text => ({file:audioKey(text)+'.mp3',text}));
const collisions=new Map();
english.forEach(row => {
  if(collisions.has(row.file) && collisions.get(row.file)!==row.text) {
    throw new Error('Audio hash collision');
  }
  collisions.set(row.file,row.text);
});
process.stdout.write(JSON.stringify({adventures,english}));
"""
    raw = subprocess.check_output(["node", "-e", javascript], cwd=ROOT, text=True)
    return json.loads(raw)


async def generate(row, output, semaphore):
    destination = output / row["file"]
    if not FORCE and destination.exists() and destination.stat().st_size > 1_000:
        return
    temporary = destination.with_suffix(".tmp.mp3")
    async with semaphore:
        for attempt in range(3):
            try:
                await edge_tts.Communicate(row["text"], VOICE, rate="-5%").save(temporary)
                temporary.replace(destination)
                return
            except Exception:
                temporary.unlink(missing_ok=True)
                if attempt == 2:
                    raise
                await asyncio.sleep(1 + attempt)


async def main():
    manifest = load_manifest()
    ADVENTURE_OUTPUT.mkdir(parents=True, exist_ok=True)
    ENGLISH_OUTPUT.mkdir(parents=True, exist_ok=True)
    semaphore = asyncio.Semaphore(6)
    jobs = [generate(row, ADVENTURE_OUTPUT, semaphore) for row in manifest["adventures"]]
    jobs += [generate(row, ENGLISH_OUTPUT, semaphore) for row in manifest["english"]]
    await asyncio.gather(*jobs)
    adventure_files = list(ADVENTURE_OUTPUT.glob("*.mp3"))
    english_files = list(ENGLISH_OUTPUT.glob("*.mp3"))
    if len(adventure_files) != len(manifest["adventures"]):
        raise RuntimeError(
            f"Expected {len(manifest['adventures'])} adventure files, "
            f"found {len(adventure_files)}"
        )
    if len(english_files) != len(manifest["english"]):
        raise RuntimeError(
            f"Expected {len(manifest['english'])} English files, "
            f"found {len(english_files)}"
        )
    print(
        f"Generated {len(adventure_files)} adventure clips and "
        f"{len(english_files)} activity clips with {VOICE}"
    )


if __name__ == "__main__":
    asyncio.run(main())
