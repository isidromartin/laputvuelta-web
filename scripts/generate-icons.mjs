import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/generate-icons.mjs <path-to-logo.png>");
  process.exit(1);
}

const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

// Ajusta esto si tu logo no es cuadrado:
// - `fit: "contain"` mantiene proporción y añade padding transparente
// - `fit: "cover"` recorta para cuadrar
const fitMode = "contain";

async function writePng(size, filename) {
  await sharp(input)
    .resize(size, size, {
      fit: fitMode,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, filename));
}

async function run() {
  await writePng(192, "icon-192.png");
  await writePng(512, "icon-512.png");
  await writePng(180, "apple-touch-icon.png");

  // Favicon: generamos un 48x48 PNG como base
  await writePng(48, "favicon-48.png");

  console.log("Generated icons in /public:");
  console.log("- icon-192.png");
  console.log("- icon-512.png");
  console.log("- apple-touch-icon.png");
  console.log("- favicon-48.png (use to create favicon.ico)");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
