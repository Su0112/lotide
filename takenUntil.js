// FUNCTION IMPLEMENTATION
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

module.exports = takenUntil;
