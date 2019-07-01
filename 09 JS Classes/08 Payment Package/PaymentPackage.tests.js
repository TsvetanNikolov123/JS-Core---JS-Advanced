const PaymentPackage = require('./PaymentPackage');
const assert = require('chai').assert;

describe('PaymentPackage', function () {
    let paymentPackage;

    beforeEach(function () {
        paymentPackage = new PaymentPackage('testName', 10);
    });

    describe('tests for "name"', function () {
        it('should trow error for non-string name', function () {
            assert.throws(() => {
                paymentPackage.name = false
            });
        });

        it('should throw error for empty string', function () {
            assert.throws(() => {
                paymentPackage.name = '';
            });
        });

        it('should set the value to the name', function () {
            paymentPackage.name = 'Ivan';
            assert.equal(paymentPackage.name, 'Ivan');
        });
    });

    describe('tests for "value"', function () {
        it('should trow error for non-number value', function () {
            assert.throws(() => {
                paymentPackage.value = false;
            });
        });

        it('should throw error for negative value number', function () {
            assert.throws(() => {
                paymentPackage.value = -1;
            });
        });

        it('should set value to value property', function () {
            paymentPackage.value = 50;
            assert.equal(paymentPackage.value, 50);
        });

        it('should work correct with value = 0', function () {
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });
    });

    describe('tests for "VAT"', function () {
        it('should throw error for non-number VAT', function () {
            assert.throws(() => {
                paymentPackage.VAT = false;
            });
        });

        it('should throw error for negative VAT number', function () {
            assert.throws(() => {
                paymentPackage.VAT = -1;
            });
        });

        it('should have default VAT value = 20', function () {
            assert.equal(paymentPackage.VAT, 20);
        });

        it('should set correct value to VAT property', function () {
            paymentPackage.VAT = 40;
            assert.equal(paymentPackage.VAT, 40);
        });
    });

    describe('tests for "active"', function () {
        it('should throw error for non-boolean value', function () {
            assert.throws(() => {
                paymentPackage.active = 'invalid';
            });
        });

        it('should by default to be true', function () {
            assert.isTrue(paymentPackage.active);
        });

        it('should set correct value to active property', function () {
            paymentPackage.active = false;
            assert.isFalse(paymentPackage.active);
        });
    });

    describe('tests for "toString"', function () {
        it('should print package info', function () {
            let expectedResult = 'Package: testName\n';
            expectedResult += '- Value (excl. VAT): 10\n';
            expectedResult += '- Value (VAT 20%): 12';

            assert.equal(paymentPackage.toString(), expectedResult);
        });

        it('should attach inactive label when active is false', function () {
            paymentPackage.active = false;
            let expectedResult = 'Package: testName (inactive)\n';
            expectedResult += '- Value (excl. VAT): 10\n';
            expectedResult += '- Value (VAT 20%): 12';

            assert.equal(paymentPackage.toString(), expectedResult);
        });
    });
});