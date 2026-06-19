
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const screenshotDir = '/home/jules/verification/screenshots';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  console.log('Navigating to http://localhost:3006...');

  try {
    // Increase timeout and wait for network idle
    await page.goto('http://localhost:3006', { waitUntil: 'networkidle', timeout: 60000 });

    // Wait for the hero section to be visible
    await page.waitForSelector('h1', { state: 'visible', timeout: 10000 });

    // Desktop screenshot
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(3000); // Wait for animations to finish
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_final.png') });
    console.log('Desktop screenshot saved.');

    // Mobile screenshot
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(screenshotDir, 'mobile_final.png') });
    console.log('Mobile screenshot saved.');

    // Mobile menu screenshot
    const menuButton = page.locator('button[aria-label="Menu"]');
    if (await menuButton.isVisible()) {
        await menuButton.click();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: path.join(screenshotDir, 'mobile_menu_final.png') });
        console.log('Mobile menu screenshot saved.');
    } else {
        console.log('Menu button not visible at this resolution.');
    }

  } catch (error) {
    console.error('Error during verification:', error);
    // Take a screenshot of the error state if possible
    await page.screenshot({ path: path.join(screenshotDir, 'error_state.png') });
  } finally {
    await browser.close();
  }
})();
