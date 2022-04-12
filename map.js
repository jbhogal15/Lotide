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



//Actual Map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


/*
//Test Cases
const testArray1 = ["batman", "vengeance", "gotham"];
const testArray2 = [1, 2, 3, 4, 5, 6];
const testArray3 = [6, 5, 4, 3, 2, 1];
const testArray4 = ["lighthouse", "labs"];


assertArrayEqual(map(testArray1, word => word[1]), ["a", "e", "o"]);
assertArrayEqual(map(testArray2, num => num * 3), [3, 6, 9, 12, 15, 18]);
assertArrayEqual(map(testArray3, num => num > 3), [true, true, true, false, false, false]);
assertArrayEqual(map(testArray4, word => word.length), [10, 4]);
*/
module.exports = map;