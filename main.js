const playwright = require("playwright");

module.exports.handler = async (event, context) => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com");
  const cookies = await context.cookies();
  await browser.close();
  return {
    statusCode: 200,
    body: JSON.stringify(cookies),
  };
};
