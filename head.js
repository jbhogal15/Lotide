
const assertEqual = require('./assertEqual');

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
};
*/


let head = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[0];
  }
};

module.exports = head;

//console.log(assertEqual(head([5,6,7]), 5));
//console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

