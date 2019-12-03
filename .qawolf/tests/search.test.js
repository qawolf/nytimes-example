describe('search', () => {
  it('can click "SEARCH" button', async () => {
    await click(steps[0]);
  });

  it('can type into "query" input', async () => {
    await type(steps[1], "github");
  });

  it('can Enter', async () => {
    await type(steps[2], "↓Enter↑Enter");
  });

  it('can scroll', async () => {
    await scroll(steps[3], { x: 0, y: 1626 });
  });
});