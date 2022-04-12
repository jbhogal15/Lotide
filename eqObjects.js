const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Asseration Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Asseration Failed: ${actual} !== ${expected}`;
  }
};



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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  //takes all the key values in obj1 and put thems in an array
  let keys2 = Object.keys(obj2);
  //takes all the key values in obj2 and put thems in an array
  if (keys1.length !== keys2.length) {
    return false;
  } //Once key values of both objects (obj1 and obj1) are in an array, if the length of both arrays dont match, we can confirm that both of these objects are not equal and end the function right here
  for (const key of keys1) {
    //looping through each key value in one of the arrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      //This determines if the current key value at the loop is an array for both objects
      if (eqArrays(obj1[key], obj2[key]) === false) {
        //if the current key value at the loop happens to be an array in both objects, we can call the eqArrays function to test whether both arrays are equal
        return false;
        //if the eqArrays function evaluates to false, we can end the function right here to return false
      }
    } else if (obj1[key] !== obj2[key]) {
      //if the code reaches this else if statement, that means that the key value could be an array in just one of the objects or, that the key value is not an array in both objects,
      //this will determine if key values are identical in both objects
      return false;
      //if values stored in the key at the current loop don't match between both objects, we can end the function right here to return false
    }
  }
  return true; //if the above if-statements or tests fail, that means that both objects are equal and we can return true;
};




/*
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


//console.log(eqObjects(ab, ba));
//console.log(eqObjects(ab, abc));

//console.log(eqObjects(cd, dc));
//console.log(eqObjects(cd, cd2));


console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));
console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
*/

module.exports = eqObjects;