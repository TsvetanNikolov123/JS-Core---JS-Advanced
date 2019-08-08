const PizzUni = require('./02. PizzUni');
const assert = require('chai').assert;
const expect = require('chai').expect;

/*
o	pizzas - "Italian Style", "Barbeque Classic" and "Classic Margherita"
o	drinks - "Coca-Cola", "Fanta" and "Water"

 */

describe('PizzUni tests', function () {

    describe('constructor', function () {

        it('registeredUsers - by default is an empty array ', function () {
            const pizzUni = new PizzUni();
            assert.isArray(pizzUni.registeredUsers);
        });

        it('registeredUsers - by default is an empty array ', function () {
            const pizzUni = new PizzUni();
            assert.isEmpty(pizzUni.registeredUsers);
        });

        it('availableProducts - by default is an object that must have only 2 properties', function () {
            const pizzUni = new PizzUni();
            const size = Object.keys(pizzUni.availableProducts).length;

            assert.equal(size, 2);
        });

        it('pizzas - array with 3 strings', function () {
            const pizzUni = new PizzUni();
            const size = Object.keys(pizzUni.availableProducts.pizzas).length;

            assert.equal(size, 3);
        });

        it('should have 3 pizzas names', function () {
            const pizzUni = new PizzUni();
            const pizzas = [
                "Italian Style",
                "Barbeque Classic",
                "Classic Margherita"];

            assert.deepEqual(pizzUni.availableProducts.pizzas, pizzas);
        });

        it('should have 3 drinks', function () {
            const pizzUni = new PizzUni();
            const size = Object.keys(pizzUni.availableProducts.drinks).length;

            assert.equal(size, 3);
        });

        it('should have 3 pizzas names', function () {
            const pizzUni = new PizzUni();
            const drinks = [
                "Coca-Cola",
                "Fanta",
                "Water"];

            assert.deepEqual(pizzUni.availableProducts.drinks, drinks);
        });
    });

    describe('registerUser({email})', function () {

        it('should throw error for already registered used', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');

            assert.throw(() => {
                pizzUni.registerUser('abv.bg');
            }, 'This email address (abv.bg) is already being used!');
        });
    });

    describe('makeAnOrder()', function () {

        it('should throw error if there is no registered user when make order', function () {
            const pizzUni = new PizzUni();

            assert.throw(() => {
                pizzUni.makeAnOrder('abv', 'Barbeque Classic', 'Water');
            }, 'You must be registered to make orders!');
        });

        it('should throw error if order incorrect pizza', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');
            assert.throw(() => {
                pizzUni.makeAnOrder('abv.bg', 'Some Pizza', 'Coca-Cola');
            }, 'You must order at least 1 Pizza to finish the order.');
        });

        it('should return correct drink in object property', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');
            pizzUni.makeAnOrder('abv.bg', 'Italian Style', 'Water');

            const user = pizzUni.registeredUsers.find(u => u.email === 'abv.bg');

            const expected = [
                {
                    orderedPizza: 'Italian Style',
                    orderedDrink: 'Water'
                }
            ];
            const actual = user.orderHistory;

            assert.deepEqual(actual, expected);
        });

        it('should return the index of currentOrder', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');

            const expected = 0;
            const actual = pizzUni.makeAnOrder('abv.bg', 'Italian Style');

            assert.equal(actual, expected);
        });
    });

    describe('completeOrder()', function () {
        it('should return correct obj and change status from pending to complete', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');
            pizzUni.makeAnOrder('abv.bg', 'Italian Style', 'Water');

            assert.equal(pizzUni.completeOrder().status, 'completed');
        });
    });

    describe('detailsAboutMyOrder(id)', function () {

        it('should return correct status message', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');
            pizzUni.makeAnOrder('abv.bg', 'Italian Style');
            const actual = pizzUni.detailsAboutMyOrder(0);
            const expected = 'Status of your order: pending';

            assert.equal(actual, expected, 'Status of your order: pending');
        });

        it('detailsAboutMyOrder return undefined if the order doesn\'t exist', function () {
            const pizzUni = new PizzUni();
            assert.isUndefined(pizzUni.detailsAboutMyOrder(-3));
        });
    });

    describe('doesTheUserExist(email)', function () {
        it('should return an object with registered user with that email', function () {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('abv.bg');
            pizzUni.makeAnOrder('abv.bg', 'Classic Margherita', 'Coca-Cola');

            assert.deepEqual(pizzUni.doesTheUserExist('abv.bg'), {
                "email": "abv.bg",
                "orderHistory": [
                    {
                        "orderedPizza": "Classic Margherita",
                        "orderedDrink": "Coca-Cola"
                    }
                ]
            });
        });
    });
});
