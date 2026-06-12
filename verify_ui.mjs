import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport for desktop
  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Ensure the directory exists
    const screenshotDir = '/home/jules/verification/screenshots';
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    await page.screenshot({ path: path.join(screenshotDir, 'desktop_verify.png'), fullPage: true });
    console.log('Desktop screenshot taken');

    // Set viewport for mobile
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: path.join(screenshotDir, 'mobile_verify.png'), fullPage: true });
    console.log('Mobile screenshot taken');

    // Open mobile menu
    await page.click('button[aria-label="Menu"]');
    await page.waitForTimeout(500); // Wait for animation
    await page.screenshot({ path: path.join(screenshotDir, 'mobile_menu_verify.png'), fullPage: true });
    console.log('Mobile menu screenshot taken');

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
})();
