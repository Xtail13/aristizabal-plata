const sharp = require("sharp");
const path = require("path");

async function convertToWhitePng(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .greyscale()
    .negate()
    .linear(8, 0)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    rgba[i * 4] = 255;
    rgba[i * 4 + 1] = 255;
    rgba[i * 4 + 2] = 255;
    rgba[i * 4 + 3] = data[i];
  }

  await sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log("Done:", path.basename(outputPath));
}

async function main() {
  const dir = path.join(__dirname, "../public/logos/clients");
  for (let i = 1; i <= 7; i++) {
    await convertToWhitePng(
      path.join(dir, `client-${i}.jpeg`),
      path.join(dir, `client-${i}-white.png`)
    );
  }
}

main().catch(console.error);
