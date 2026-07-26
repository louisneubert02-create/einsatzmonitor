const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080
  });

  await page.goto(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkREstv-RsPIW5mLUoslUtrjZBxdbetrB-ce7GaPm9WSfeH5-B8bjgeitE9LiGd3qh22AXWs0Ja_Mq/pubhtml?gid=238104781&single=true",
    {
      waitUntil: "networkidle2",
      timeout: 60000
    }
  );

  await page.screenshot({
    path: "einsatzplan.jpeg",
    type: "jpeg",
    quality: 100,
    fullPage: true
  });

  await browser.close();
})();
