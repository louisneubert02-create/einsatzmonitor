const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ]
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  });

  await page.goto(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkREstv-RsPIW5mLUoslUtrjZBxdbetrB-ce7GaPm9WSfeH5-B8bjgeitE9LiGd3qh22AXWs0Ja_Mq/pubhtml?gid=238104781&single=true",
    {
      waitUntil: "networkidle0",
      timeout: 120000
    }
  );

  // Warten, bis Google Sheets fertig gerendert ist
  await new Promise(resolve => setTimeout(resolve, 10000));

  await page.screenshot({
    path: "einsatzplan.jpeg",
    type: "jpeg",
    quality: 95,
    fullPage: false
  });

  await browser.close();
})();
