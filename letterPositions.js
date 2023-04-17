// FUNCTION IMPLEMENTATION

function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // If all elements are equal, the arrays are equal
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

function letterPositions(sentence) {
  const results = {};
  //logic
  for (let i = 0; i < sentence.length; i++) {
    //condional statement to count letters
    if (sentence[i] !== ' ') { //if the current character is not a space or empty:
      if (results[sentence[i]]) { // if the counts object already has an entry for this character:
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i]; //else: set the count of the current character to 1
      }
    }
  }
  return results;
}
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;