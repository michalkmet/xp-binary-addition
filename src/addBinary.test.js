const addBinary = require('./addBinary');

describe('Story 1', () => {
  it('UAT1.1: When given empty array, return exception', () => {
    expect(() => addBinary([])).toThrow();
  });
  it('UAT1.2: When given boolean, return exception', () => {
    expect(() => addBinary(true)).toThrow();
  });
});
