const qawolf = require("qawolf");
const selectors = require("../selectors/search.json");

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

test("search", async () => {
  await page.goto("https://nytimes.com/");
  await page.click(selectors["0_button"]);
  await page.type("[data-testid='search-input']", "github");
  await page.press("[data-testid='search-input']", "Enter");
  await qawolf.scroll(page, "html", { x: 0, y: 899 });
});
