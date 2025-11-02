// Simple image optimization script using sharp
// Run with: node ./scripts/optimize-images.js
// Requires: npm install --save-dev sharp

const fs = require('fs')
const path = require('path')

async function run() {
  try {
    const sharp = require('sharp')
    const srcDir = path.join(__dirname, '..', 'src', 'Image')
    const input = path.join(srcDir, 'ProfileF.png')

    if (!fs.existsSync(input)) {
      console.error('Input image not found:', input)
      process.exit(1)
    }

    // ensure output dir exists (same as srcDir)
    // Create multiple optimized outputs
    const outputs = [
      { file: 'ProfileF-400.webp', width: 400, format: 'webp', quality: 80 },
      { file: 'ProfileF-800.webp', width: 800, format: 'webp', quality: 80 },
      { file: 'ProfileF.webp', width: 1200, format: 'webp', quality: 80 },
      { file: 'ProfileF-800.avif', width: 800, format: 'avif', quality: 50 }
    ]

    for (const out of outputs) {
      const outPath = path.join(srcDir, out.file)
      console.log('Writing', outPath)
      let p = sharp(input).resize({ width: out.width, withoutEnlargement: true })
      if (out.format === 'webp') p = p.webp({ quality: out.quality })
      if (out.format === 'avif') p = p.avif({ quality: out.quality })
      await p.toFile(outPath)
    }

    console.log('Image optimization complete.')
  } catch (err) {
    console.error('Error running optimize-images script. Did you install sharp?')
    console.error(err)
    process.exit(1)
  }
}

run()
