const assert = require('chai').assert;
const middle = require("../middle");
const eqArrays = require("../eqArray");
const assertArrayEqual = require("../assertArrayEqual");


describe("#middle", () => {
  it("should return 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return 6 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
  });

  it("should return 5, 6 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

  it("should return 6, 7 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
  });

  it("should return 'Batman' for ['I', 'Am', 'Batman', 'Of', 'Gotham']", () => {
    assert.deepEqual(middle(['I', 'Am', 'Batman', 'Of', 'Gotham']), ['Batman']);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});
