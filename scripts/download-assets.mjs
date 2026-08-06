#!/usr/bin/env node
// Downloads all real assets discovered during reconnaissance of
// https://www.themissyproject.org/ into public/images, preserving a
// flat, descriptive naming scheme referenced by the component specs.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "public", "images");

const ASSETS = [
  // logos
  ["https://www.themissyproject.org/hs-fs/hubfs/Logos%20300/The%20Missy%20Project-Primary%20Logo-Bright%20Blue300.png", "logo-primary-blue.png"],
  ["https://www.themissyproject.org/hubfs/Logo%2072/The%20Missy%20Project-Primary%20Logo-Bright%20Blue72.png", "logo-primary-blue-72.png"],
  ["https://www.themissyproject.org/hubfs/Logo%2072/The%20Missy%20Project-Icon%20Logo-Bright%20Blue72.png", "logo-icon-blue-72.png"],
  ["https://www.themissyproject.org/hubfs/Logos%20300/The%20Missy%20Project-Icon%20Logo-Sky300.png", "flower-logo-sky.png"],
  ["https://www.themissyproject.org/hubfs/Logos%20300/The%20Missy%20Project-Icon%20Logo-Bright%20Blue300.png", "flower-logo-blue.png"],

  // line icons (Impact cards + Research at the Heart)
  ["https://www.themissyproject.org/hubfs/Icons/TMP-The%20Missy%20Project-Icon-Megaphone-Full%20Color.svg", "icon-megaphone.svg"],
  ["https://www.themissyproject.org/hubfs/Icons/TMP-The%20Missy%20Project-Icon-DonationBox-Full%20Color.svg", "icon-donationbox.svg"],
  ["https://www.themissyproject.org/hubfs/Icons/TMP-The%20Missy%20Project-Icon-Hospital-Full%20Color.svg", "icon-hospital.svg"],
  ["https://www.themissyproject.org/hubfs/Icons/TMP-The%20Missy%20Project-Icon-Compassion1-Full%20Color.svg", "icon-compassion.svg"],

  // photography / composite backgrounds
  ["https://www.themissyproject.org/hs-fs/hubfs/TMP%20Photos/TMP%20ASSETS%20(1).png", "hero-photo-collage.png"],
  ["https://www.themissyproject.org/hs-fs/hubfs/Copy%20of%20TMP%20-%20Social%20Media%20-%201350x1080.png", "family-vintage-photo.png"],
  ["https://www.themissyproject.org/hs-fs/hubfs/Stock%20Photo/home_hero_image%20(4).png", "aneurysm-photo.png"],
  ["https://www.themissyproject.org/hubfs/Video%20thumbnails/home%20video%20thumbnail%20%281%29.png", "video-thumbnail.png"],
  ["https://www.themissyproject.org/hubfs/Background/Untitled%20design%20%286%29.png", "flowers-decorative-white.png"],
  ["https://www.themissyproject.org/hubfs/Background/Untitled%20design%20%288%29.png", "flowers-decorative-navy.png"],

  // thin vertical connector line used 3x in the "How To Save a Life" stepper
  ["https://www.themissyproject.org/hs-fs/hubfs/rillet%20icon.png", "stepper-connector-line.png"],
];

async function download(url, filename) {
  const dest = path.join(OUT_DIR, filename);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK  ${filename}  (${buf.length} bytes)`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const BATCH = 4;
  for (let i = 0; i < ASSETS.length; i += BATCH) {
    await Promise.all(ASSETS.slice(i, i + BATCH).map(([url, name]) => download(url, name)));
  }
}

main();
