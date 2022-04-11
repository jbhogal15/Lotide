//Checks to see if both arrays are equal and returns a boolean true or fasle
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



//
const without = function(sourceArray, itemRemoved) {
  newArr = [];
  //create a loop that loops through the source array
  for (const item of sourceArray) {
    let result = true; //for each item we declare a variable and set it equal to true
    for (num of itemRemoved) { //iterate over the itemRemoved array
      if (item === num) { //
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


//Function asserting if two arrays are equal
const assertArrayEqual = function(actual, expected) {
  //If statement will allow to call the eqArray function on the parameters to check if it evaluated to true
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${actual} !== ${expected}`);
  }
};

//let arr1 = [1, 2, 3];
//let arr2 = [3];
//let arr3 = ["1", "2", "3"];
//let arr4 = [1, 2, "3", "4", 6, 4, 3];
//let arr5 = [1, 2, 3, 5, 4, 7, 8];
//let arr6 = [3, 5, 7];

//console.log(without(arr1, arr2));
//console.log(without(arr3, arr4));
//console.log(without(arr5, arr6));

console.log(assertArrayEqual(without(arr1, arr2), [1, 2]));
console.log(assertArrayEqual(without(arr3, arr4), ["1", "2"]));
console.log(assertArrayEqual(without(arr5, arr6), [1, 2, 4,8]));



