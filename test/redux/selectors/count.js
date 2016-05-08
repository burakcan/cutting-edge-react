import getCount from 'selectors/count';

describe('count selector', () => {
  it('Should select correct count', () => {
    const value = getCount({
      counter: { value: 42 },
    });

    expect(value).toEqual(42);
  });
});
