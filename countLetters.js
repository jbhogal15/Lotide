const countLetters = function(string) {
  //Create an empty object as we want to return an object as our output
  let results = {};
  //Create for of loop to loop through every letter in the string
  for (const letter of string) {
    //Set a condition where if string has a space, the code below won't run and go back to the loop
    if (letter !== " ")
    //If the results object has the letter at the current loop, increment that letter by 1
      if (results[letter]) {
        results[letter] += 1;
        //If the results object doesn't have the letter at the current loop, add it to the results object and set it equal to 1
      } else {
        results[letter] = 1;
      }
  }
  return results;
};

let count = countLetters("lighthouse in the house");
console.log(count);

