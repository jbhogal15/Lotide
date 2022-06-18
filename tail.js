const assertEqual = require('./assertEqual');

//tail
let tail = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  } let tailArr = newArray.slice(1);
  return tailArr;
};

module.exports = tail;
