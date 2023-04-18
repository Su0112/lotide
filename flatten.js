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

const flatten = function(arr) {
  let flatArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        flatArr.push(subElement);
      }
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// should pass
assertArraysEqual(flatten([1, [2, [3, [4]]]]), [1, 2, [3, [4]]]);
// should fail

module.exports = flatten;

