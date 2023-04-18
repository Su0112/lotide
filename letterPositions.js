// FUNCTION IMPLEMENTATION
function letterPositions(sentence) {
  const results = {};
  //logic
  for (let i = 0; i < sentence.length; i++) {
    //condional statement to count letters
    if (sentence[i] !== ' ') {
      //if the current character is not a space or empty:
      if (results[sentence[i]]) {
        // if the counts object already has an entry for this character:
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
        //else: set the count of the current character to 1
      }
    }
  }
  return results;
}

module.exports = letterPositions;