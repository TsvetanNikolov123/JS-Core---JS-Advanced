let sum = require('./SumOfNumbers');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('sum', function () {
    it('should return sum', function () {
        let arr = [4, 5, 6];

        let result = sum(arr);

        assert.equal(result, 15);
    });

    it('should return sum', function () {
        let arr = [1];

        let result = sum(arr);

        assert.equal(result, 1);
    });

    it('should return sum', function () {
        let arr = [];

        let result = sum(arr);

        assert.equal(result, 0);
    });
});