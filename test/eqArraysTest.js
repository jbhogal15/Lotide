const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArray");




console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2"]));
console.log(eqArrays(["2", "2", "3"], ["1", "2", 3]));
console.log(eqArrays(["1", "2", "3", "4"], ["1", "2", "3", "4"]));


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), false)); 