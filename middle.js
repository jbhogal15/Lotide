//Test Assertion Functions
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



const assertArrayEqual = function(actual, expected) {
  //If statement will allow to call the eqArray function on the parameters to check if it evaluated to true
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${actual} !== ${expected}`);
  }
};





//Actual Function

const middle = function(arr) {
  let middleElement = [];
  if (arr.length % 2 === 0) {
    let element = arr.length / 2;
    middleElement.push(arr[element - 1]);
    middleElement.push(arr[element]);
  } if (arr.length % 2 !== 0) {
    let element = Math.floor(arr.length / 2);
    middleElement.push(arr[element]);
  }
  return middleElement;
};
  
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]));
console.log(assertArrayEqual(middle(["I", "Am", "The", "Batman", "Of", "Gotham", "City"]), ["Batman"]));



