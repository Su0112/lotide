const assertEqual = function(actual, expected) {
    if (actual != expected){
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
    } else {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }

};
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS