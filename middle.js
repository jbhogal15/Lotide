const eqArrays = require("./eqArray");
const assertArrayEqual = require("./assertArrayEqual");


//middle
const middle = function(arr) {
  let middleElement = [];
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
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

module.exports = middle;




