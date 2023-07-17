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
  it('UAT2.2: When given 1,0, return 1', () => {
    expect(addBinary(1,0)).toBe(1);
  });
  it('UAT2.3: When given 1,1, return 10', () => {
    expect(addBinary(1,1)).toBe(10);
  });
  it('UAT2.4: When given 1,2, return 11', () => {
    expect(addBinary(1,2)).toBe(11);
  });
  it('UAT2.5: When given 2,2, return 100', () => {
    expect(addBinary(2,2)).toBe(100);
  });
});