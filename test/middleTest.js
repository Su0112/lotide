
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
// Test case for empty array
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Test cases for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test cases for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);