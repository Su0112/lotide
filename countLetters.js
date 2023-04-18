// FUNCTION IMPLEMENTATION
function countLetters(sentence) {
  const counts = {}; //initial count
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    //condional statement to count letters
    if (letter !== ' ') {
      //if the current character is not a space or empty:
      if (counts[letter]) {
        // if the counts object already has an entry for this character:
        counts[letter]++;
        //increment the count of the current character by 1
      } else {
        counts[letter] = 1;
        //else: set the count of the current character to 1
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