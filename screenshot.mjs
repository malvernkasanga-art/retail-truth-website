// node screenshot.mjs <url> [label] [width] [height] → ./temporary screenshots/screenshot-N[-label].png (headless Edge)
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const [url = 'http://localhost:3000', label, w = '1440', h = '900'] = process.argv.slice(2);
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const dir = join(process.cwd(), 'temporary screenshots');
mkdirSync(dir, { recursive: true });
const n = readdirSync(dir).filter(f => /^screenshot-\d+/.test(f)).length + 1;
const out = join(dir, `screenshot-${n}${label ? '-' + label : ''}.png`);
execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--window-size=${w},${h}`,
  '--timeout=7000', `--user-data-dir=${join(tmpdir(), 'rt-shot-profile')}`, '--no-first-run', `--screenshot=${out}`, url], { stdio: 'ignore', timeout: 60000 });
console.log(out);
