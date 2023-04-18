const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  const input = [1, 2, 3];
  it("returns 2 for given input", () => {
    assert.strictEqual(tail(input).length, 2);
  });

});

