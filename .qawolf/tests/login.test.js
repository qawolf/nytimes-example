const qawolf = require("qawolf");
const selectors = require("../selectors/login.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("login", async () => {
  await page.goto("https://nytimes.com/");
  await page.click("[data-testid='login-button']");
  await page.click("[data-testid='switch-to-register']");
});
