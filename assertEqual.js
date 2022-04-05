const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return "✅✅✅ Asseration Passed: " + actual + " === " + expected;
  } else {
    return "❌❌❌ Asseration Failed: " + actual + " !== " + expected;
  }
};

console.log(assertEqual("word", "word"));
console.log(assertEqual("Jaskarn", "Jasan"));
console.log(assertEqual(5, 5));
console.log(assertEqual(1, 5));
