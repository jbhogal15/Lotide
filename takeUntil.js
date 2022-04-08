//EqArrays
const eqArrays = function(arr1, arr2) {
  //Check to see if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  //Loop through each element of first array and compare to second array
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
      //If once value doesn't match, it will break the loop and return false
    }
  }
  return true;
};




//AssertArraysEqual
const assertArrayEqual = function(arr1, arr2) {
  //If statement will allow to call the eqArray function on the parameters to check if it evaluated to true
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Asseration Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${arr1} !== ${arr2}`);
  }
};




//Acutal Function
const takeUntil = function(array, callback) {
  let output = [];
  for (item of array) {
    if (callback(item) === false) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};



//Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArrayEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArrayEqual(takeUntil(data2, x => x === 6), [1, 2, 3, 4, 5]);
assertArrayEqual(takeUntil(data3, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood']);



