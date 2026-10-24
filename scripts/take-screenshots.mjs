import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sites = [
  {
    url: 'https://safha-archive-test.velents.ai',
    filename: 'safha-archive.webp',
  },
  {
    url: 'https://platform.safha-ai.com',
    filename: 'safha-ai.webp',
  },
  {
    url: 'https://dev-ai-pen.atwdemo.com',
    filename: 'ai-penetration-tester.webp',
  },
];

const outputDirs = [
  path.join(__dirname, '../../portfolio/public'),
  path.join(__dirname, '../public'),
];

console.log('Starting screenshot capture...');
const browser = await chromium.launch({ headless: true });

for (const site of sites) {
  console.log(`\n📸 Visiting ${site.url}...`);
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  try {
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for page to fully render/animations to settle

    for (const dir of outputDirs) {
      const outputPath = path.join(dir, site.filename);
      await page.screenshot({ path: outputPath, type: 'jpeg', quality: 85, fullPage: false });
      console.log(`  ✅ Saved: ${outputPath}`);
    }
  } catch (err) {
    console.error(`  ❌ Failed: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log('\n🎉 All screenshots taken successfully!');
