//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Asseration Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Asseration Failed: ${actual} !== ${expected}`;
  }
};


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


//eqObjects
const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (eqArrays(obj1[key], obj2[key]) === false) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true; //if the above if-statements or tests fail, that means that both objects are equal and we can return true;
};


module.exports = eqObjects;