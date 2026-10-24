import { writeFile } from "node:fs/promises";
import sharp from "sharp";
import { BRAND_COLORS, BRAND_DESCRIPTION, BRAND_MARK_PATH, BRAND_NAME } from "../constants/branding.js";

const mark = `<path d="${BRAND_MARK_PATH}" fill="none" stroke="${BRAND_COLORS.ink}" stroke-width="1.7" stroke-linecap="round"/>`;
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="${BRAND_COLORS.paper}"/>${mark}</svg>`;

async function createPng(size) {
  return sharp(Buffer.from(iconSvg)).resize(size, size).png().toBuffer();
}

async function createIco() {
  const sizes = [16, 32, 48, 256];
  const images = await Promise.all(sizes.map(createPng));
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach((image, index) => {
    const start = 6 + index * 16;
    header[start] = sizes[index] % 256;
    header[start + 1] = sizes[index] % 256;
    header.writeUInt16LE(1, start + 4);
    header.writeUInt16LE(32, start + 6);
    header.writeUInt32LE(image.length, start + 8);
    header.writeUInt32LE(offset, start + 12);
    offset += image.length;
  });
  return Buffer.concat([header, ...images]);
}

try {
  const assets = [
    ["app/icon.png", 512],
    ["app/apple-icon.png", 180],
    ["public/favicon-16x16.png", 16],
    ["public/favicon-32x32.png", 32],
    ["public/apple-touch-icon.png", 180],
    ["public/android-chrome-192x192.png", 192],
    ["public/android-chrome-512x512.png", 512],
    ["public/echo-forge-icon.png", 512],
    ["public/echo-forge-icon-bg.png", 512],
  ];
  await Promise.all(assets.map(async ([path, size]) => writeFile(path, await createPng(size))));
  const ico = await createIco();
  await Promise.all(["app/favicon.ico", "public/favicon.ico"].map(path => writeFile(path, ico)));

  const socialSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${BRAND_COLORS.paper}"/><g transform="translate(76 100) scale(3.2)">${mark}</g><text x="80" y="375" fill="${BRAND_COLORS.ink}" font-family="Georgia, serif" font-size="100" letter-spacing="-4">${BRAND_NAME}</text><text x="85" y="445" fill="${BRAND_COLORS.ink}" font-family="Arial, sans-serif" font-size="28">${BRAND_DESCRIPTION}</text><text x="85" y="550" fill="${BRAND_COLORS.ink}" font-family="Arial, sans-serif" font-size="20">echoforge.to</text></svg>`;
  const social = await sharp(Buffer.from(socialSvg)).png().toBuffer();
  await Promise.all(["app/opengraph-image.png", "public/og-image.png"].map(path => writeFile(path, social)));
  console.log("Updated app icons, favicon variants, and social metadata images from the shared studio mark.");
} catch (error) {
  console.error("Failed to generate brand assets:", error);
  process.exitCode = 1;
}
