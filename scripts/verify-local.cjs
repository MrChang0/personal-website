const { chromium } = require("playwright");

async function verify() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    deviceScaleFactor: 1
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const desktop = {
    title: await page.title(),
    h1: await page.locator("h1").innerText(),
    sections: await page.locator("section").count(),
    hasHorizontalOverflow: await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    )
  };

  await page.screenshot({ path: ".next/desktop-home.png", fullPage: true });

  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const mobile = {
    hasHorizontalOverflow: await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    ),
    h1Visible: await page.locator("h1").isVisible()
  };

  await page.screenshot({ path: ".next/mobile-home.png", fullPage: true });
  await browser.close();

  console.log(
    JSON.stringify(
      {
        desktop,
        mobile,
        screenshots: [".next/desktop-home.png", ".next/mobile-home.png"]
      },
      null,
      2
    )
  );
}

verify().catch((error) => {
  console.error(error);
  process.exit(1);
});
