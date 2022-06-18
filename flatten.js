const flatten = function(array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        result.push(element[i]);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;