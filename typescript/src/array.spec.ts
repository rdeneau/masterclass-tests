describe('Array', () => {
  it('should indicate the number of items', () => {
    const sut = ['Apple', 'Banana']; // sut = system under test
    expect(sut).toHaveLength(2);
  });

  it('should provide access to items by index', () => {
    const sut = ['Apple', 'Banana'];
    expect(sut[0]).toBe('Apple');
    expect(sut[1]).toBe('Banana');
  });
});
