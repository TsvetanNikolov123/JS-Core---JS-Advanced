const isSymmetric = require('./checkForSymmetry');
const assert = require('chai').assert;

describe('isSymetric(arr) checks if array is symmetrical', () => {
    it('should return false if the input is not an array', () => {
        const input = null;
        const value = isSymmetric(input);
        assert.isFalse(value)
    });

    it('should return false for an array of same data types that is not symmetrical', () => {
        const input = [1, 2, 3, 4, 5];
        const value = isSymmetric(input);
        assert.isFalse(value)
    });

    it('should return false for an array of different data types that is not symmetrical', () => {
        const input = [1, [], {}, true, 'str'];
        const value = isSymmetric(input);
        assert.isFalse(value)
    });

    it('should return true for an array of same data types that is symmetrical', () => {
        const input = [1, 2, 3, 2, 1];
        const value = isSymmetric(input);
        assert.isTrue(value)
    });

    it('should return true for an array of different data types that is symmetrical', () => {
        const input = [[], 5, 'str', {}, true, {}, 'str', 5, []];
        const value = isSymmetric(input);
        assert.isTrue(value)
    })
});