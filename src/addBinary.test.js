const addBinary = require('./addBinary');

describe('Story 1', () => {
  it('UAT1.1: When given empty array, return exception', () => {
    expect(() => addBinary([])).toThrow();
  });
  it('UAT1.2: When given boolean, return exception', () => {
    expect(() => addBinary(true)).toThrow();
  });
  it('UAT1.3: When given only one number, return exception', () => {
    expect(() => addBinary(10)).toThrow();
  });
});

describe('Story 2', () => {
  it('UAT2.1: When given 0,0, return 0', () => {
    expect(addBinary(0,0)).toBe(0);
  });
});