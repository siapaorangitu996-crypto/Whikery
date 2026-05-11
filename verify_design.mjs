import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function verify() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const verifyDir = path.join(process.cwd(), 'verification');
  if (!fs.existsSync(verifyDir)) {
    fs.mkdirSync(verifyDir);
  }

  console.log('Navigating to http://localhost:3005...');
  await page.goto('http://localhost:3005');

  // Wait for the page to be loaded
  await page.waitForLoadState('networkidle');

  // Desktop
  console.log('Setting desktop viewport...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for animations
  await page.screenshot({ path: 'verification/desktop_check.png', fullPage: true });
  console.log('Desktop screenshot saved.');

  // Mobile
  console.log('Setting mobile viewport...');
  await page.setViewportSize({ width: 375, height: 812 });
  await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for animations
  await page.screenshot({ path: 'verification/mobile_check.png', fullPage: true });
  console.log('Mobile screenshot saved.');

  // Check mobile menu
  console.log('Opening mobile menu...');
  await page.click('button[aria-label="Menu"]');
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for menu animation
  await page.screenshot({ path: 'verification/mobile_menu_check.png' });
  console.log('Mobile menu screenshot saved.');

  await browser.close();
}

verify().catch(err => {
  console.error(err);
  process.exit(1);
});
