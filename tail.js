const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Asseration Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Asseration Failed: ${actual} !== ${expected}`;
  }
};




let arr = ["Hello", "Lighthouse", "Labs", "Software", "Engineer", "Developer"];


let tail = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  } let tailArr = newArray.slice(1);
  return tailArr;
};

console.log(tail(arr));
console.log(assertEqual(arr.length, 6));