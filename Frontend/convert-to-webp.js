import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  let sharp;
  try {
    const sharpModule = await import("sharp");
    sharp = sharpModule.default;
  } catch (err) {
    console.error("❌ 'sharp' package is not installed.");
    console.log("👉 Please run: npm install -D sharp");
    process.exit(1);
  }

  const directories = [
    path.join(__dirname, "public", "images"),
    path.join(__dirname, "public", "Cloudinary-images"),
  ];

  let totalOriginal = 0;
  let totalConverted = 0;
  let count = 0;

  console.log("🚀 Starting Bulk Image to WebP Conversion...\n");

  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

      const inputPath = path.join(dir, file);
      const baseName = path.basename(file, ext);
      const outputPath = path.join(dir, `${baseName}.webp`);

      const origSize = fs.statSync(inputPath).size;

      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 4 })
          .toFile(outputPath);

        const newSize = fs.statSync(outputPath).size;
        const savedPercent = Math.round(((origSize - newSize) / origSize) * 100);

        totalOriginal += origSize;
        totalConverted += newSize;
        count++;

        console.log(
          `✅ [${count}] ${file} (${(origSize / 1024 / 1024).toFixed(2)} MB) ➔ ${baseName}.webp (${(newSize / 1024).toFixed(1)} KB) [Saved ${savedPercent}%]`
        );
      } catch (e) {
        console.error(`⚠️ Failed to convert ${file}:`, e.message);
      }
    }
  }

  const totalSavedMb = ((totalOriginal - totalConverted) / 1024 / 1024).toFixed(2);
  const totalPercent = Math.round(((totalOriginal - totalConverted) / totalOriginal) * 100);

  console.log("\n══════════════════════════════════════════════════");
  console.log(`🎉 Total Images Converted: ${count}`);
  console.log(`📦 Original Total Size   : ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`⚡ Converted WebP Size   : ${(totalConverted / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🔥 Total Storage Saved   : ${totalSavedMb} MB (${totalPercent}% reduction!)`);
  console.log("══════════════════════════════════════════════════\n");
}

run();
