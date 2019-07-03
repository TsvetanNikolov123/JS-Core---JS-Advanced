const Warehouse = require('./Warehouse');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('revision() method test', function () {
    let warehouse;
    beforeEach(function () {
        warehouse = new Warehouse(5)
    });

    it('should give correct message for empty warehouse', function () {
        expect(warehouse.revision()).to.be.equal('The warehouse is empty')
    });
});

describe('Warehouse', function () {

    describe('tests for "constructor"', function () {
        it('should throw string error for negative number argument', function () {
            assert.throws(() => {
                new Warehouse(-1);
            });
        });

        it('should throw string error for 0 number argument', function () {
            assert.throws(() => {
                new Warehouse(0);
            });
        });

        it('should throw string error for non-number argument', function () {
            assert.throws(() => {
                new Warehouse('2');
            });
        });

        it('should set valid Warehouse with valid capacity', function () {
            const warehouse = new Warehouse(10);
            assert.equal(warehouse.capacity, 10);
            assert.equal(JSON.stringify(warehouse.availableProducts), '{"Food":{},"Drink":{}}');
        });
    });

    describe('tests for "addProduct"', function () {
        it('should throw string error for not enough space', function () {
            const warehouse = new Warehouse(1);
            assert.throws(() => {
                warehouse.addProduct('Drink', 'Coca-cola', 2);
            })
        });

        it('should add product when warehouse has enough free space', function () {
            let warehouse = new Warehouse(2);
            warehouse.addProduct('Drink', 'Coca-Cola', 1);
            warehouse.addProduct('Food', 'Pizza', 1);

            assert.hasAllKeys(warehouse.availableProducts.Food, ['Pizza']);
            assert.hasAllKeys(warehouse.availableProducts.Drink, ['Coca-Cola']);
        });

        it('should return successfully the object with the given type with already added products', function () {
            let warehouse = new Warehouse(2);
            assert.isObject(warehouse.addProduct('Food', 'Pizza', 1));
            assert.isObject(warehouse.addProduct('Drink', 'Coca-Cola', 1));
        });
    });

    describe('tests for "orderProducts"', function () {
        it('should sort foods in descending order by quantity', function () {
            let warehouse = new Warehouse(15);
            warehouse.addProduct('Food', 'Pizza', 2);
            warehouse.addProduct('Food', 'Spagetti', 1);
            warehouse.addProduct('Food', 'Apple', 5);
            warehouse.addProduct('Food', 'Banana', 3);
            warehouse.orderProducts('Food');

            let foods = JSON.stringify(warehouse.availableProducts.Food);

            assert.equal(foods, '{"Apple":5,"Banana":3,"Pizza":2,"Spagetti":1}');
        });

        it('should sort drinks in descending order by quantity', function () {
            let warehouse = new Warehouse(15);
            warehouse.addProduct('Drink', 'Juice', 1);
            warehouse.addProduct('Drink', 'Coca-Cola', 3);
            warehouse.addProduct('Drink', 'Pepsi', 2);
            warehouse.orderProducts('Drink');

            let drinks = JSON.stringify(warehouse.availableProducts.Drink);
            assert.equal(drinks, '{"Coca-Cola":3,"Pepsi":2,"Juice":1}');
        });
    });

    describe('tests for "occupiedCapacity"', function () {
        it('should return number, which represents the occupied places in warehouse', function () {
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Drink', 'Coca-Cola', 3);
            warehouse.addProduct('Food', 'Pizza', 8);

            assert.equal(warehouse.occupiedCapacity(), 11);
        });
    });

    describe('tests for "revision"', function () {
        it('should return string "The warehouse is empty" for 0 products', function () {
            let warehouse = new Warehouse(10);

            assert.equal(warehouse.revision(), 'The warehouse is empty');
        });

        it('should return string with all listed products', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'Pizza', 1);
            warehouse.addProduct('Food', 'Apple', 1);
            warehouse.addProduct('Drink', 'Coca-Cola', 2);
            warehouse.addProduct('Drink', 'Juice', 4);

            assert.equal(warehouse.revision(),
                'Product type - [Food]\n' +
                '- Pizza 1\n' +
                '- Apple 1\n' +
                'Product type - [Drink]\n' +
                '- Coca-Cola 2\n' +
                '- Juice 4');
        });

        it('should give correct message for empty warehouse', function () {
            let warehouse = new Warehouse(5);
            expect(warehouse.revision()).to.be.equal('The warehouse is empty')
        })
    });

    describe('tests for "scrapeAProduct"', function () {
        it('should trow error for non-existing type', function () {
            expect(() => {
                let warehouse = new Warehouse(5);
                warehouse.addProduct('Food', 'Pizza', 4);
                warehouse.addProduct('Drink', 'Coca-Cola', 1);
                warehouse.scrapeAProduct('Apple', 1);
            }).to.throw('Apple do not exists');
        });

        it('should reduce product quantity', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'Pizza', 10);
            warehouse.scrapeAProduct('Pizza', 9);

            assert.equal(warehouse.availableProducts.Food['Pizza'], 1);
        });

        it('should reduce product quantity', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'Pizza', 10);
            warehouse.scrapeAProduct('Pizza', 9);

            assert.equal(warehouse.availableProducts.Food['Pizza'], 1);
        });

        it('should reset product quantity if goes below 0', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'Pizza', 10);
            warehouse.scrapeAProduct('Pizza', 11);

            assert.equal(warehouse.availableProducts.Food['Pizza'], 0);
        });
    });
});