import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Desktop verification
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(3000); // Wait for animations
  await page.screenshot({ path: '/home/jules/verification/screenshots/desktop_final.png' });

  // Mobile verification
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/mobile_final.png' });

  // Mobile Menu verification
  await page.click('button[aria-label="Menu"]');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/mobile_menu_final.png' });

  await browser.close();
})();
