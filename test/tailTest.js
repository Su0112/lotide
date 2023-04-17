const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  const tailWords = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual(tailWords.length, 3);
  });

});

