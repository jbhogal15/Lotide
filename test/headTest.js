const assert = require('chai').assert;
const head = require('../head');


describe("#head", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("should return 'Batman' for ['I', 'Am', 'Batman', 'Of', 'Gotham']", () => {
    assert.strictEqual(head(['I', 'Am', 'The', 'Batman', 'Of', 'Gotham']), 'I');
  });

  it("should return 1 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.strictEqual(head([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1);
  });
});
