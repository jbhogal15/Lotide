//Eq arrays
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



//Assert arrays equal
const assertArrayEqual = function(arr1, arr2) {
  //If statement will allow to call the eqArray function on the parameters to check if it evaluated to true
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Asseration Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${arr1} !== ${arr2}`);
  }
};




//Letter Positions function
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ")
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
  }
  return results;
};

/*
console.log(letterPositions("lighthouse in the house"));


assertArrayEqual(letterPositions("hello").e, [1]);
*/

module.exports = letterPositions;