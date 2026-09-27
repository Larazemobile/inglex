#!/usr/bin/env python3
"""Generate the neural English audio used by every IngleX mini-adventure.

Install the one-time generator with: python3 -m pip install edge-tts
"""

import asyncio
import json
import subprocess
from pathlib import Path

import edge_tts


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "audio" / "adventures"

FEMALE_CHILDREN = {
    "amy", "ella", "emma", "eva", "ivy", "lily", "lina", "lucy", "maya",
    "mia", "nina", "nora", "ruby", "sara", "sister",
}
MALE_CHILDREN = {"ben", "leo", "max", "noah", "sam", "tom"}
FEMALE_ADULTS = {"aunt", "grandma", "librarian", "mum", "owner", "shop assistant", "teacher"}
MALE_ADULTS = {"coach", "dad", "grandad", "grandpa", "guide", "neighbour", "uncle", "waiter"}


def voice_for(speaker: str) -> str:
    name = speaker.lower()
    if name in FEMALE_CHILDREN:
        return "en-GB-MaisieNeural"
    if name in MALE_CHILDREN:
        return "en-GB-RyanNeural"
    if name in FEMALE_ADULTS or name.startswith("aunt"):
        return "en-GB-SoniaNeural"
    if name in MALE_ADULTS or name.startswith("uncle"):
        return "en-GB-ThomasNeural"
    return "en-GB-LibbyNeural"


def load_scenes():
    javascript = r"""
const fs=require('fs'),vm=require('vm');
const c={}; c.window=c; vm.createContext(c);
vm.runInContext(fs.readFileSync('content.js','utf8'),c);
vm.runInContext(fs.readFileSync('adventures.js','utf8'),c);
const rows=[];
Object.values(c.INGLEX_CONTENT.adventures).flat().forEach(story =>
  story.scenes.forEach((scene,index) => rows.push({
    file: story.id+'-s'+(index+1)+'.mp3', speaker: scene.speaker, text: scene.line
  }))
);
process.stdout.write(JSON.stringify(rows));
"""
    raw = subprocess.check_output(["node", "-e", javascript], cwd=ROOT, text=True)
    return json.loads(raw)


async def generate(row, semaphore):
    destination = OUTPUT / row["file"]
    if destination.exists() and destination.stat().st_size > 1_000:
        return
    temporary = destination.with_suffix(".tmp.mp3")
    async with semaphore:
        for attempt in range(3):
            try:
                await edge_tts.Communicate(
                    row["text"], voice_for(row["speaker"]), rate="-8%"
                ).save(temporary)
                temporary.replace(destination)
                return
            except Exception:
                temporary.unlink(missing_ok=True)
                if attempt == 2:
                    raise
                await asyncio.sleep(1 + attempt)


async def main():
    rows = load_scenes()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    semaphore = asyncio.Semaphore(6)
    await asyncio.gather(*(generate(row, semaphore) for row in rows))
    files = list(OUTPUT.glob("*.mp3"))
    if len(files) != len(rows):
        raise RuntimeError(f"Expected {len(rows)} audio files, found {len(files)}")
    print(f"Generated {len(files)} neural adventure clips in {OUTPUT}")


if __name__ == "__main__":
    asyncio.run(main())
