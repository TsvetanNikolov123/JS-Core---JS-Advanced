const rgbToHexColor = require('./rgb-to-hex');
const assert = require('chai').assert;

describe('rgbToHexColor(red, green, blue) returns hexadecimal color based on 3 integers', () => {
    describe('Special cases (invalid input)', () => {
        it('should return undefined for invalid red values', () => {
            const [redArr, green, blue] = [[2.5, -1, 256], 100, 100];
            for (const red of redArr) {
                assert.isUndefined(rgbToHexColor(red, green, blue));
            }
        });

        it('should return undefined for invalid green values', () => {
            const [red, greenArr, blue] = [100, [2.5, -1, 256], 100];
            for (const green of greenArr) {
                assert.isUndefined(rgbToHexColor(red, green, blue));
            }
        });

        it('should return undefined for invalid blue values', () => {
            const [red, green, blueArr] = [100, 100, [2.5, -1, 256]];
            for (const blue of blueArr) {
                assert.isUndefined(rgbToHexColor(red, green, blue));
            }
        })
    });

    describe('Normal cases (valid input)', () => {
        it('should return valid hexadecimal color when all input integers are valid and in range 0-255', () => {
            const validColors = [[0, 0, 0], [255, 255, 255], [255, 158, 170]];
            const expected = ['#000000', '#FFFFFF', '#FF9EAA'];
            validColors.forEach(([red, green, blue], i) => {
                assert.strictEqual(rgbToHexColor(red, green, blue), expected[i])
            })
        })
    })
});