describe('nytimes', () => {
  it('can click "search" button', async () => {
    await click(steps[0]);
  });

  it('can type into "query" input', async () => {
    await type(steps[1], values[1]);
  });

  it('can Enter', async () => {
    await type(steps[2], values[2]);
  });

  it('can click "log in" button', async () => {
    await click(steps[3]);
  });

  it('can click "create one" link', async () => {
    await click(steps[4]);
  });
});