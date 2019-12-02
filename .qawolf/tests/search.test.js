describe('search', () => {
  it('can click "SEARCH" button', async () => {
    await click(steps[0]);
  });

  it('can type into "query" input', async () => {
    await type(steps[1], values[1]);
  });

  it('can Enter', async () => {
    await type(steps[2], values[2]);
  });

  it('can scroll', async () => {
    await scroll(steps[3], values[3]);
  });
});