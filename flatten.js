const flatten = function(array) {
  let result = [];
  //Creating a for loop to loop through each element of the array
  for (let element of array) {
    //This if statement will check if the element at the current loop is an array 
    if (Array.isArray(element)) {
      //If the element is an array, then another for loop is created to loop through the element
      for (let i = 0; i < element.length; i++) {
        //Each element of the array will get pushed into the result array
        result.push(element[i]);
      }
    } else {
      //If the element is not an array, it will get pushed to the result array
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;