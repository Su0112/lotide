const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]);
// should log "✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]"
assertArraysEqual([1, 2, 3], [3, 2, 1]);
// should log "🛑🛑🛑 Assertion Failed: [1,2,3] !== [3,2,1]"
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// should log "🛑🛑🛑 Assertion Failed: [1,2,3] !== [3,2,1]"