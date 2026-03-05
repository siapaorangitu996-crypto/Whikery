import asyncio
from playwright.async_api import async_playwright
import os
import time

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})

        # Assume the server is running on localhost:3000
        try:
            await page.goto('http://localhost:3000', wait_until='networkidle')
            # Wait a bit for animations
            await asyncio.sleep(2)
            await page.screenshot(path='screenshot.png', full_page=True)
            print("Screenshot saved to screenshot.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
