const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertArraysEqual(eqArrays(["1", 2, "3"], [2, 3, 4]), false); // => pass
assertArraysEqual(eqArrays([4, 5, 6], [4, 5, 6]), true); // => pass