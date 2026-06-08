import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function verify() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const screenshotsDir = '/home/jules/verification/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('Visiting localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Wait for animations
    await page.waitForTimeout(3000);

    console.log('Taking desktop screenshot...');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.screenshot({ path: path.join(screenshotsDir, 'desktop_final.png'), fullPage: true });

    console.log('Taking mobile screenshot...');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: path.join(screenshotsDir, 'mobile_final.png'), fullPage: true });

    console.log('Verifying mobile menu...');
    await page.click('button[aria-label="Menu"]');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, 'mobile_menu_final.png') });

    console.log('Verification screenshots saved to /home/jules/verification/screenshots');
  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
}

verify();
