const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('CalculateNumber', function () {
  it(`expected value ${6}`, function () {
      assert.strictEqual(calculateNumber(3, 3), 6);
    });
    it(`expected value ${8}`, function () {
      assert.strictEqual(calculateNumber(5, 3.2), 8);
    });
    it(`expected value ${0}`, function () {
      assert.strictEqual(calculateNumber(2, -2.2), 0);
    });
    it(`expected value ${1}`, function () {
      assert.strictEqual(calculateNumber(-3, 3.5), 1);
    });
    it(`expected value ${6}`, function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it(`expected value ${5}`, function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
});
