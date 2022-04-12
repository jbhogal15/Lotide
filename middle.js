const eqArrays = require("./eqArray");
const assertArrayEqual = require("./assertArrayEqual");





//Actual Function

const middle = function(arr) {
  let middleElement = [];
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  if (arr.length % 2 === 0) { 
    //checks if the array has even amount of elements
    let element = arr.length / 2; 
    //since the array has even amount of elements we need to extract two elements
    middleElement.push(arr[element - 1]); 
    middleElement.push(arr[element]);
  } if (arr.length % 2 !== 0) {
    //Since the array has off amount of elements, we can use math.floor to get a whole number
    let element = Math.floor(arr.length / 2);
    middleElement.push(arr[element]);
  }
  return middleElement;
};

module.exports = middle;

//console.log(middle([1, 2, 3, 4]));
  
//console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7]));
//console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]));
//console.log(assertArrayEqual(middle(["I", "Am", "The", "Batman", "Of", "Gotham", "City"]), ["Batman"]));



