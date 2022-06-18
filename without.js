//eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



//without
const without = function(sourceArray, itemRemoved) {
  let newArr = [];
  for (const item of sourceArray) {
    let result = true;
    for (const num of itemRemoved) {
      if (item === num) {
        result = false;
        break;
      }
    }
    if (result) {
      newArr.push(item);
    }
  }
  return newArr;
};


//assertArrayEqual
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${actual} !== ${expected}`);
  }
};


module.exports = without;


