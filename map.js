//inserting assertArraysEqual  and eqArrays
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

//Implementation of map and call backs
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //pushing 0th index of callback to the results
    results.push(callback(item));
  }
  return results;
};
//a simple test by adding the following code below the map function definition:
const results1 = map(words, (word) => word[0]);


// Test cases
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["red", "blue", "pink", "black"];


assertArraysEqual(map(words1, (word) => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words2, (word) => word.length), [5, 6, 6, 4]);
assertArraysEqual(map(words2, (word) => word.length), [3, 4, 4, 5]);

module.exports = map;