import playwright from 'playwright';
import fs from 'fs';

async function capture() {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  if (!fs.existsSync('verification')) {
    fs.mkdirSync('verification');
  }

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3005');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'verification/desktop.png' });
  console.log('Desktop screenshot saved.');

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3005');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'verification/mobile.png' });
  console.log('Mobile screenshot saved.');

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
