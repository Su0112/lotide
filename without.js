// FUNCTION IMPLEMENTATION
const without = function(sourceArray, itemsToRemoveArray) {
  // Create an empty array to hold the items that will remain in the source array
  const filteredArray = [];
  // Iterate over each item in the source array
  for (let item of sourceArray) {
    // If the item is not in the items to remove array, add it to the filtered array
    if (!itemsToRemoveArray.includes(item)) {
      filteredArray.push(item);
    }
  }
  // Return the filtered array
  return filteredArray;
};


module.exports = without;