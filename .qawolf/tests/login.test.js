const { launch } = require("qawolf");
const selectors = require("../selectors/login");

describe('login', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://nytimes.com/" });
  });

  afterAll(() => browser.close());

  it('can click "Log In" button', async () => {
    await browser.click(selectors[0]);
  });

  it('can click "Create one" link', async () => {
    await browser.click(selectors[1]);
  });
});