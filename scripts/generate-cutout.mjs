import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const input = path.join(root, 'public', 'photo_2026-02-24_14-23-58.jpg');
const output = path.join(root, 'public', 'profile-cutout.png');

function isRedBackground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max === 0 ? 0 : (max - min) / max;

  // Studio red backdrop: strong red channel, fairly saturated
  if (r > 95 && r > g * 1.35 && r > b * 1.35 && saturation > 0.28) return true;
  // Softer red / edge spill
  if (r > 75 && r > g * 1.2 && r > b * 1.2 && saturation > 0.18) return true;
  return false;
}

function idx(w, x, y) {
  return (y * w + x) * 4;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const pixels = Uint8ClampedArray.from(data);
const visited = new Uint8Array(width * height);
const queue = [];

// Flood-fill red from image edges
for (let x = 0; x < width; x++) {
  queue.push([x, 0], [x, height - 1]);
}
for (let y = 0; y < height; y++) {
  queue.push([0, y], [width - 1, y]);
}

while (queue.length) {
  const [x, y] = queue.pop();
  if (x < 0 || y < 0 || x >= width || y >= height) continue;

  const p = y * width + x;
  if (visited[p]) continue;
  visited[p] = 1;

  const i = idx(width, x, y);
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];

  if (!isRedBackground(r, g, b)) continue;

  pixels[i + 3] = 0;

  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

// Brighten subject slightly for dark clothing
for (let i = 0; i < pixels.length; i += 4) {
  if (pixels[i + 3] === 0) continue;
  pixels[i] = Math.min(255, pixels[i] * 1.14 + 12);
  pixels[i + 1] = Math.min(255, pixels[i + 1] * 1.14 + 12);
  pixels[i + 2] = Math.min(255, pixels[i + 2] * 1.14 + 12);
}

await sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } })
  .png()
  .toFile(output);

console.log(`Wrote ${output} (${width}x${height})`);
