// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
    if (actual != expected){
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
    } else {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }

};

function findKeyByValue(object, value){
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;

}


// const numbers = { 
//   one: 1,
//   two: 2,
//   three: 3
// };

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
//console.log(findKeyByValue(numbers, 3))
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);