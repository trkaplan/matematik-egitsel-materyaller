#!/usr/bin/env node

/**
 * HTML Screenshot Tool
 * Usage: node take-screenshot.js <html-file-path> <output-path> [width] [height]
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function takeScreenshot(htmlPath, outputPath, width = 1200, height = 900) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport size
    await page.setViewport({ width, height });

    // Load the HTML file
    const absolutePath = path.resolve(htmlPath);
    const fileUrl = `file://${absolutePath}`;

    console.log(`📸 Loading: ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Wait a bit for any animations
    await page.waitForTimeout(1000);

    // Take screenshot
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await page.screenshot({
      path: outputPath,
      fullPage: false
    });

    console.log(`✅ Screenshot saved: ${outputPath}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// CLI usage
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node take-screenshot.js <html-file> <output-file> [width] [height]');
  console.log('Example: node take-screenshot.js index.html screenshot.png 1200 900');
  process.exit(1);
}

const [htmlPath, outputPath, width, height] = args;
takeScreenshot(htmlPath, outputPath, parseInt(width) || 1200, parseInt(height) || 900)
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
