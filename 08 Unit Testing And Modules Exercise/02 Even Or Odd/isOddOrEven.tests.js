const isOddOrEven = require('./isOddOrEven');
const expect = require('chai').expect;

describe('isOddOrEven', function () {

    // if the parameter is not  string(number)
    //  test with number parameter -> should return undefine
    it('should return undefined with a number parameter', function () {
        let expected = isOddOrEven(100);

        expect(expected).to.be.equal(undefined, 'Function did not return the correct result!');
    });

    // if the parameter is not string(object)
    //  test with object parameter -> should return undefine
    it('should return undefined with a object parameter', function () {
        let expected = isOddOrEven({name: 'Ivo'});

        expect(expected).to.be.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return EVEN with string parameter with even length', function () {
        let expected = isOddOrEven('JS4Ever!');

        expect(expected).to.equal('even', 'Function return correct result with even string length')
    });

    it('should return ODD with string parameter with odd length', function () {
        let expected = isOddOrEven('JS4Ever');

        expect(expected).to.equal('odd', 'Function return correct result with odd string length')
    });
});
