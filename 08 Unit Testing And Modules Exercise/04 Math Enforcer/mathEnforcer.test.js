const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer', function () {
    // addFive
    //  - positive number
    //  - negative number
    //  - floating point number
    //  - string

    describe('addFive', function () {
        it('should return number when add positive number + 5', function () {
            let expected = mathEnforcer.addFive(10);
            expect(expected).to.be.equal(15, 'the function returns result with positive number')
        });

        it('should return number when add negative number + 5', function () {
            let expected = mathEnforcer.addFive(-10);
            expect(expected).to.be.equal(-5, 'the function returns result with negative number')
        });

        it('should return number when add floating-point number + 5', function () {
            let expected = mathEnforcer.addFive(10.5);
            expect(expected).to.be.equal(15.5, 'the function returns result with floating-point number')
        });

        it('should return "undefined" with string as a parameter', function () {
            let expected = mathEnforcer.addFive('5');
            expect(expected).to.be.equal(undefined);
        });
    });

    describe('subtractTen', function () {
        it('should return number - 10 when subtract with positive number', function () {
            let expected = mathEnforcer.subtractTen(20);
            expect(expected).to.be.equal(10);
        });

        it('should return negative number when subtract from negative number', function () {
            let expected = mathEnforcer.subtractTen(-10);
            expect(expected).to.be.equal(-20);
        });

        it('should return floating-point number when subtract from float-point number', function () {
            let expected = mathEnforcer.subtractTen(10.8);
            expect(expected).to.be.closeTo(0.8, 0.01);
        });

        it('should return "undefine" when subtract from string', function () {
            let expected = mathEnforcer.subtractTen('20');
            expect(expected).to.be.equal(undefined);
        });
    });

    describe('sum', function () {
        it('should return sum of two positive numbers', function () {
            let expected = mathEnforcer.sum(1, 2);
            expect(expected).to.be.equal(3);
        });

        it('should return sum of two negative numbers', function () {
            let expected = mathEnforcer.sum(-1, -2);
            expect(expected).to.be.equal(-3);
        });

        it('should return sum of two floating-point numbers', function () {
            let expected = mathEnforcer.sum(1.1, 2.2);
            expect(expected).to.be.closeTo(3.3, 0.01);
        });

        it('should return "undefine" when sum number and string', function () {
            let expected = mathEnforcer.sum(1, '2');
            expect(expected).to.be.equal(undefined);
        });

        it('should return "undefine" when sum string and number', function () {
            let expected = mathEnforcer.sum('2', 1);
            expect(expected).to.be.equal(undefined);
        });
    });
});