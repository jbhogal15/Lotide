//Assert Equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Asseration Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Asseration Failed: ${actual} !== ${expected}`;
  }
};


//allItems: an array of strings that we need to look through
//itemsToCount: an object specfifying what to count

//countOnly
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;