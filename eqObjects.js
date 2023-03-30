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

const assertEqual = function (actual, expected) {
  if (actual != expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
//Alternative way of doing it without eqArrays
// const eqObjects = function (object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   //console.log(keys1, keys2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   } // firs step is to check if the number of the keys are equal
//   for (const key of keys1) {
//     if (keys1[key] !== keys2[key]) {
//       return false; // to check if the items are equal
//     }

//   }
//   return true;
// }

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

