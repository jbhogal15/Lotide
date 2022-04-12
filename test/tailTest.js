const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("should return [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

  it("should return 'Am', 'The', 'Batman', 'Of', 'Gotham' for ['I', 'Am', 'Batman', 'Of', 'Gotham']", () => {
    assert.deepEqual(tail(['I', 'Am', 'The', 'Batman', 'Of', 'Gotham']), ['Am', 'The', 'Batman', 'Of', 'Gotham']);
  });

  it("should return 1 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});




//let arr = ["Hello", "Lighthouse", "Labs", "Software", "Engineer", "Developer"];
