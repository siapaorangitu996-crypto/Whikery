import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3002';

  // Desktop Screenshot
  await page.setViewportSize({ width: 1440, height: 900 });
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    // Wait for animations to settle
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/home/jules/verification/screenshots/desktop_final.png', fullPage: true });
    console.log('Desktop screenshot saved.');
  } catch (e) {
    console.error('Failed to capture desktop screenshot:', e);
  }

  // Mobile Screenshot
  await page.setViewportSize({ width: 375, height: 812 });
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/home/jules/verification/screenshots/mobile_final.png', fullPage: true });
    console.log('Mobile screenshot saved.');

    // Test Mobile Menu
    await page.click('button[aria-label="Menu"]');
    await page.waitForTimeout(1000); // Wait for spring animation
    await page.screenshot({ path: '/home/jules/verification/screenshots/mobile_menu.png' });
    console.log('Mobile menu screenshot saved.');
  } catch (e) {
    console.error('Failed to capture mobile screenshots:', e);
  }

  await browser.close();
})();
