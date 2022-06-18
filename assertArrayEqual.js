const eqArrays = require("./eqArray");

//assertArrayEqual
const assertArrayEqual = function(arr1, arr2) {
  //If statement will allow to call the eqArray function on the parameters to check if it evaluated to true
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Asseration Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Asseration Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArrayEqual;


