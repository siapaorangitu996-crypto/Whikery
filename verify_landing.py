import asyncio
from playwright.async_api import async_playwright
import os

async def capture_screenshots():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Wait for dev server to be ready
        await page.goto("http://localhost:3000")
        await page.wait_for_load_state("networkidle")

        # Ensure verification directory exists
        os.makedirs("verification", exist_ok=True)

        # Desktop view
        await page.set_viewport_size({"width": 1440, "height": 900})
        await asyncio.sleep(2) # Wait for animations
        await page.screenshot(path="verification/desktop.png", full_page=True)
        print("Desktop screenshot captured.")

        # Mobile view
        await page.set_viewport_size({"width": 375, "height": 812})
        await asyncio.sleep(2) # Wait for animations
        await page.screenshot(path="verification/mobile.png", full_page=True)
        print("Mobile screenshot captured.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture_screenshots())
