const assertEqual = require('./assertEqual');




let arr = ["Hello", "Lighthouse", "Labs", "Software", "Engineer", "Developer"];


let tail = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  } let tailArr = newArray.slice(1);
  return tailArr;
};


module.exports = tail;
//console.log(tail(arr));
//console.log(assertEqual(arr.length, 6));

console.log(tail([]));