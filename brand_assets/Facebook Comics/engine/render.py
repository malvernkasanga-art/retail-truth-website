"""Render comics to images with headless Edge.

Usage: python render.py            (all comics)
       python render.py 1 3        (only these ids)
"""
import json, re, subprocess, sys
from pathlib import Path
from PIL import Image

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

src = (HERE / "comics.js").read_text(encoding="utf-8")
comics = [(int(i), t) for i, t in re.findall(r"id:\s*(\d+),\s*title:\s*'([^']*)'", src)]
want = {int(a) for a in sys.argv[1:]}

for cid, title in comics:
    if want and cid not in want:
        continue
    png = HERE / f"_render_{cid}.png"
    url = (HERE / "comic.html").as_uri() + f"?id={cid}"
    subprocess.run([EDGE, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=2",
                    "--window-size=1080,1620", "--virtual-time-budget=10000", f"--screenshot={png}", url],
                   check=True, capture_output=True)
    img = Image.open(png).convert("RGB")
    dest = OUT / f"Comic {cid:02d} - {title}.jpg"
    img.save(dest, quality=93, optimize=True)
    png.unlink()
    print(f"saved {dest.name} {img.size}")
