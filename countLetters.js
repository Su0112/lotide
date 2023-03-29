// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
    if (actual != expected){
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
    } else {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }

};

function countLetters(sentence) {
  const counts = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    //condional statement to count letters
       if (letter !== ' ') { //if the current character is not a space or empty:
      if (counts[letter]) { // if the counts object already has an entry for this character:
        counts[letter]++; //increment the count of the current character by 1
      } else {
        counts[letter] = 1; //else: set the count of the current character to 1
      }
    }
  }
  
  console.log('counts', counts);
  return counts;
}

const result = countLetters('lighthouse in the house');

assertEqual(result['l'], 1);
assertEqual(result['h'], 4);
assertEqual(result['e'], 3);