const assertEqual = function(actual, expected) {
    if (actual != expected){
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
    } else {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }

};
// FUNCTION IMPLEMENTATION
const tail = function(arr){
    let newArray = arr.slice(1);
    return newArray;
}
assertEqual(tail(["Hello", "Lighthouse"]), "Lighthouse")