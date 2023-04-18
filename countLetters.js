// FUNCTION IMPLEMENTATION
function countLetters(sentence) {
  //initial count
  const counts = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    //condional statement to count letters
    //if the current character is not a space or empty
    if (letter !== ' ') {
      // if the counts object already has an entry for this character:
      if (counts[letter]) {
        //increment the count of the current character by 1
        counts[letter]++;
      } else {
        //else: set the count of the current character to 1
        counts[letter] = 1;
      }
    }
  }
  return counts;
}

const result = countLetters('lighthouse in the house');

result['l'];
result['h'];
result['e'];

module.exports = countLetters;