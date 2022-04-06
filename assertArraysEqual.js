// eqArray function
const eqArrays = function(arr1, arr2) {
  //Check to see if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  //Loop through each element of first array and compare to second array
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
      //If one value doesn't match, it will break the loop and return false
    }
  }
  return true;
};





// assertArrayEqual
const assertArrayEqual = function(arr1, arr2) {
  //If statement will allow to call the eqArray function on the parameters to check if it evaluated to true
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Asseration Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${arr1} !== ${arr2}`);
  }
};

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));

