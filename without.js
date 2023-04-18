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
const without = function(sourceArray, itemsToRemoveArray) {
  // Create an empty array to hold the items that will remain in the source array
  const filteredArray = [];
  // Iterate over each item in the source array
  for (let item of sourceArray) {
    // If the item is not in the items to remove array, add it to the filtered array
    if (!itemsToRemoveArray.includes(item)) {
      filteredArray.push(item);
    }
  }
  // Return the filtered array
  return filteredArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// => should PASS
assertArraysEqual(without([], []), []);
// => should PASS
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// => should PASS
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);
// => should PASS
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
// => should PASS


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;