const eqObjects = require("./eqObjects");
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  //this line to import the library so that the function can use it
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

module.exports = assertObjectsEqual;