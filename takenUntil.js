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

const takenUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
      // for truthy value, current item is returned with the prev iteration result
    }
    result.push(item);
    //for a falsy value, add item to the end of the result
  }
  return result;
};
// Test Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takenUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

// Test Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takenUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takenUntil;
