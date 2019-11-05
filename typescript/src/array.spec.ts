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

  it('should push to the end', () => {
    const sut = ['Apple', 'Banana'];
    const newLength = sut.push('Orange');
    expect(sut[2]).toBe('Orange');
    expect(newLength).toBe(3);
  });

  it('should pop from the end', () => {
    const sut = ['Apple', 'Banana'];
    expect(sut.pop()).toBe('Banana');
    expect(sut.pop()).toBe('Apple');
    expect(sut.pop()).toBe(undefined);
  });

  it('should shift from the front', () => {
    const sut = ['Apple', 'Banana'];
    expect(sut.shift()).toBe('Apple');
    expect(sut.shift()).toBe('Banana');
    expect(sut.shift()).toBe(undefined);
  });

  it('should unshift to the front', () => {
    const sut = ['Strawberry'];
    const newLength = sut.unshift('Orange');
    expect(sut).toEqual(['Orange', 'Strawberry']);
    expect(newLength).toBe(2);
  });

  it('should return the index of an item', () => {
    const sut = ['Apple', 'Banana'];
    const expectedIndexOfItemNotFound = -1;
    expect(sut.indexOf('Apple')).toBe(0);
    expect(sut.indexOf('Banana')).toBe(1);
    expect(sut.indexOf('Strawberry')).toBe(expectedIndexOfItemNotFound);
  });

  it('should remove 1 item at index 0', () => {
    const sut = ['Apple', 'Banana', 'Orange'];
    const removedItems = sut.splice(0, 1);
    expect(removedItems).toEqual(['Apple']);
    expect(sut).toEqual(['Banana', 'Orange']);
  });

  it('should remove 1 item at index 1', () => {
    const sut = ['Apple', 'Banana', 'Orange'];
    const removedItems = sut.splice(1, 1);
    expect(removedItems).toEqual(['Banana']);
    expect(sut).toEqual(['Apple', 'Orange']);
  });

  it('should remove no item at index out of bound', () => {
    const sut = ['Apple', 'Banana', 'Orange'];
    const removedItems = sut.splice(3, 1);
    expect(removedItems).toEqual([]);
    expect(sut).toHaveLength(3);
  });

  it('should remove all items', () => {
    const sut = ['Apple', 'Banana', 'Orange'];
    const removedItems = sut.splice(0, 3);
    expect(removedItems).toEqual(['Apple', 'Banana', 'Orange']);
    expect(sut).toEqual([]);
  });
});
