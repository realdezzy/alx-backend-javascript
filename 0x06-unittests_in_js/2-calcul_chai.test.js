const assert = require('assert');
const {expect} = require('chai');
const calculateNumber = require('./1-calcul');

describe('CalculateNumber', function () {
    describe('SUM', function () {
    it(`expected value ${6}`, function () {
        expect(calculateNumber('SUM', 3, 3)).to.equal(6);
        });
        it(`expected value ${8}`, function () {
        expect(calculateNumber('SUM', 5, 3.2)).to.equal(8);
        });
        it(`expected value ${0}`, function () {
        expect(calculateNumber('SUM', 2, -2.2)).to.equal(0);
        });
        it(`expected value ${1}`, function () {
        expect(calculateNumber('SUM', -3, 3.5)).to.equal(1);
        });
        it(`expected value ${6}`, function () {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });
        it(`expected value ${5}`, function () {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });
    });
    describe('SUBTRACT', function () {
    it(`expected value ${0}`, function () {
        expect(calculateNumber('SUBTRACT', 3, 3)).to.equal(0);
        });
        it(`expected value ${2}`, function () {
        expect(calculateNumber('SUBTRACT', 5, 3.2)).to.equal(2);
        });
        it(`expected value ${4}`, function () {
        expect(calculateNumber('SUBTRACT', 2, -2.2)).to.equal(4);
        });
        it(`expected value ${-7}`, function () {
        expect(calculateNumber('SUBTRACT', -3, 3.5)).to.equal(-7);
        });
        it(`expected value ${-2}`, function () {
        expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
        });
        it(`expected value ${-3}`, function () {
        expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
        });
    });

    describe('DIVIDE', function () {
    it(`expected value ${1}`, function () {
        expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
        });
        it(`expected value ${1.6}`, function () {
        expect(calculateNumber('DIVIDE', 5, 3.2)).to.equal(1.6666666666666667);
        });
        it(`expected value ${-1}`, function () {
        expect(calculateNumber('DIVIDE', 2, -2.2)).to.equal(-1);
        });
        it(`expected value ${-0.75}`, function () {
        expect(calculateNumber('DIVIDE', -3, 3.5)).to.equal(-0.75);
        });
        it(`expected value ${0.5}`, function () {
        expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
        });
        it(`expected value ${0.25}`, function () {
        expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
        });
    });
});
