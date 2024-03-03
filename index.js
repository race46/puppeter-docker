// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')


puppeteer.use(StealthPlugin())

// Function to take a screenshot
async function takeScreenshot() {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Create a new page
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  // Navigate to a website
  await page.goto('https://bot.sannysoft.com/');

  // Take a screenshot
  await page.screenshot({ path: 'files/screenshot.png' });

  // Close the browser
  await browser.close();
}

// Call the function
takeScreenshot();
