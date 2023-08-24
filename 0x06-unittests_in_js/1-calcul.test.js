const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./1-calcul');

describe('CalculateNumber', function () {
    describe('SUM', function () {
    it(`expected value ${6}`, function () {
        assert.strictEqual(calculateNumber('SUM', 3, 3), 6);
        });
        it(`expected value ${8}`, function () {
        assert.strictEqual(calculateNumber('SUM', 5, 3.2), 8);
        });
        it(`expected value ${0}`, function () {
        assert.strictEqual(calculateNumber('SUM', 2, -2.2), 0);
        });
        it(`expected value ${1}`, function () {
        assert.strictEqual(calculateNumber('SUM', -3, 3.5), 1);
        });
        it(`expected value ${6}`, function () {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        });
        it(`expected value ${5}`, function () {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });
    describe('SUBTRACT', function () {
    it(`expected value ${0}`, function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 3, 3), 0);
        });
        it(`expected value ${2}`, function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3.2), 2);
        });
        it(`expected value ${4}`, function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 2, -2.2), 4);
        });
        it(`expected value ${-7}`, function () {
        assert.strictEqual(calculateNumber('SUBTRACT', -3, 3.5), -7);
        });
        it(`expected value ${-2}`, function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
        });
        it(`expected value ${-3}`, function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        });
    });

    describe('DIVIDE', function () {
    it(`expected value ${1}`, function () {
        assert.strictEqual(calculateNumber('DIVIDE', 3, 3), 1);
        });
        it(`expected value ${1.6}`, function () {
        assert.strictEqual(calculateNumber('DIVIDE', 5, 3.2), 1.6666666666666667);
        });
        it(`expected value ${-1}`, function () {
        assert.strictEqual(calculateNumber('DIVIDE', 2, -2.2), -1);
        });
        it(`expected value ${-0.75}`, function () {
        assert.strictEqual(calculateNumber('DIVIDE', -3, 3.5), -0.75);
        });
        it(`expected value ${0.5}`, function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
        });
        it(`expected value ${0.25}`, function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
        });
    });
});
