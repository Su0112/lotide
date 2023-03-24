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
const middle = function(array) {
const middleIndex = Math.floor(array.length / 2);
if (array.length <= 2) {
return [];
} else if (array.length % 2 !== 0) {
return [array[middleIndex]];
} else {
return [array[middleIndex - 1], array[middleIndex]];
}
};


// Test case for empty array
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Test cases for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test cases for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
