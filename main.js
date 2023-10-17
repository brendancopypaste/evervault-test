const playwright = require("playwright");

module.exports.handler = async (event, context) => {
  console.log("Launching browser...");
  const browser = await playwright.chromium.launch();
  console.log("Creating new context...");
  const browserContext = await browser.newContext();
  console.log("Opening new page...");
  const page = await browserContext.newPage();
  console.log("Navigating to https://www.google.com...");
  await page.goto("https://www.google.com");
  console.log("Getting cookies...");
  const cookies = await browserContext.cookies();
  console.log("Closing browser...");
  await browser.close();
  console.log("Returning response...");
  return {
    statusCode: 200,
    body: JSON.stringify(cookies),
  };
};
