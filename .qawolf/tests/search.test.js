const { launch } = require("qawolf");
const selectors = require("../selectors/search");

describe("search", () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://nytimes.com/" });
  });

  afterAll(() => browser.close());

  it('can click "SEARCH" button', async () => {
    await browser.click(selectors[0]);
  });

  it('can type into "query" input', async () => {
    await browser.type({ css: "[data-testid='search-input']" }, "github");
  });

  it("can Enter", async () => {
    await browser.type({ css: "[data-testid='search-input']" }, "↓Enter↑Enter");
  });

  it("can scroll", async () => {
    await browser.scroll(selectors[3], { x: 0, y: 2005 });
  });
});
