// FUNCTION IMPLEMENTATION
const flatten = function(arr) {
  let flatArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        flatArr.push(subElement);
      }
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

module.exports = flatten;

