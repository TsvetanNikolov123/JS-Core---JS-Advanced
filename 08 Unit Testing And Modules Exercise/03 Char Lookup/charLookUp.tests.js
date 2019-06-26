const lookupChar = require('./charLookUp');
const expect = require('chai').expect;

// check is first parameter not string -> should return undefined
// check is second parameter not integer -> should return undefined
// check the index (negative number or bigger number than str.length) -> should return 'Incorrect index';
// if all parameters are valid return char at specific index;

describe('lookupChar', function () {
    it('should return "undefined" with a non-string first parameter -> test with number for first param', function () {
        let expected = lookupChar(123, 1);
        expect(expected).to.equal(undefined, 'The function did not return correct format');
    });

    it('should return "undefined" with a non-integer second parameter -> test with string for second param', function () {
        let expected = lookupChar('JS4Ever', '1');
        expect(expected).to.equal(undefined, 'The function did not return correct format');
    });

    it('should return "undefined" with a non-integer second parameter -> test with floating point number', function () {
        let expected = lookupChar('JS4Ever', 1.5);
        expect(expected).to.equal(undefined, 'The function did not return correct format');
    });

    it('should return "incorrect index" with negative index', function () {
        let expected = lookupChar('JS4Ever', -1);
        expect(expected).to.be.equal('Incorrect index', 'The function did not return correct format');
    });

    it('should return "incorrect index" with bigger than length index', function () {
        let expected = lookupChar('JS4Ever', 22);
        expect(expected).to.be.equal('Incorrect index', 'The function did not return correct format');
    });

    it('should return correct character', function () {
        let expected = lookupChar('JS4Ever', 1);
        expect(expected).to.be.equal('S', 'The functions should return correct result');
    });
});
