// test/assertEqualTest.js

const assertEqual = require('../assertEqual');


console.log(assertEqual("word", "word"));
console.log(assertEqual("Jaskarn", "Jasan"));
console.log(assertEqual(5, 5));
console.log(assertEqual(1, 5));