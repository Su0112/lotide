// FUNCTION IMPLEMENTATION

const assertEqual = function (actual, expected) {
  if (actual != expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }

};

function findKey(object, callback) {
  // scan, write a for loop
  for (let key in object) {
    if (callback(object[key])) {
      //return the first key for the callback a truthy
      return key;
    }
  }
  return undefined; //if no key then return undefined
};



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");


//Output: ✅✅✅ Assertion Passed: noma === noma