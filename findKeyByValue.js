
//Test Object
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};


//Actual function
const findKeyByValue = function(object, value) {
  //loop through the keys of the object
  for (let property in object) {
    //if condition that checks if value at given key is equal to the parameter value
    if (object[property] === value) {
      //if its a match it will return the key that has the stored value and end the loop
      return property;
    }
  }
  //If above fails, it will return undefined
  return undefined;
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));




//Assert equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Asseration Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Asseration Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

