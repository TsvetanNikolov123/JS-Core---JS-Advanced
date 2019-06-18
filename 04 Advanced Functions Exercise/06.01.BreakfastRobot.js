let manager = (function () {
    let ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    function prepare(tokens) {
        let recipe = tokens[0];
        let quantity = Number(tokens[1]);
        let message = '';
        switch (recipe) {
            case 'apple':
                if (ingredients.flavour < quantity * 2) {
                    message = 'Error: not enough protein in stock';
                }
                if (ingredients.carbohydrate < quantity) {
                    message = 'Error: not enough carbohydrate in stock';
                }
                if (message === '') {
                    ingredients.flavour -= quantity * 2;
                    ingredients.carbohydrate -= quantity;
                    return 'Success';
                }
                return message;
            case 'lemonade':
                if (ingredients.flavour < quantity * 20) {
                    message = 'Error: not enough flavour in stock.';
                }
                if (ingredients.carbohydrate < quantity * 20) {
                    message = 'Error: not enough carbohydrate in stock';
                }
                if (message === '') {
                    ingredients.flavour -= quantity * 20;
                    ingredients.carbohydrate -= quantity * 10;
                    return 'Success';
                }
                return message;
            case 'burger':
                if (ingredients.flavour < quantity * 3) {
                    message = 'Error: not enough flavour in stock';
                }
                if (ingredients.fat < quantity * 7) {
                    message = 'Error: not enough fat in stock';
                }
                if (ingredients.carbohydrate < quantity * 5) {
                    message = 'Error: not enough carbohydrate in stock';
                }
                if (message === '') {
                    ingredients.flavour -= quantity * 3;
                    ingredients.fat -= quantity * 7;
                    ingredients.carbohydrate -= quantity * 5;
                    return 'Success';
                }
                return message;
            case 'eggs':
                if (ingredients.flavour < quantity) {
                    message = 'Error: not enough flavour in stock';
                }
                if (ingredients.fat < quantity) {
                    message = 'Error: not enough fat in stock';
                }
                if (ingredients.protein < quantity * 5) {
                    message = 'Error: not enough protein in stock';
                }
                if (message === '') {
                    ingredients.flavour -= quantity;
                    ingredients.fat -= quantity;
                    ingredients.protein -= quantity * 5;
                    return 'Success';
                }
                return message;
            case 'turkey':
                if (ingredients.flavour < quantity * 10) {
                    message = 'Error: not enough flavour in stock';
                }
                if (ingredients.fat < quantity * 10) {
                    message = 'Error: not enough fat in stock';
                }
                if (ingredients.carbohydrate < quantity * 10) {
                    message = 'Error: not enough carbohydrate in stock';
                }
                if (ingredients.protein < quantity * 10) {
                    message = 'Error: not enough protein in stock';
                }
                if (message === '') {
                    ingredients.flavour -= quantity * 10;
                    ingredients.fat -= quantity * 10;
                    ingredients.carbohydrate -= quantity * 10;
                    ingredients.protein -= quantity * 10;
                    return 'Success';
                }
                return message;
        }
    }

    function restock(tokens) {
        let microelement = tokens[0];
        let quantity = Number(tokens[1]);
        ingredients[microelement] += quantity;
        return 'Success';
    }

    function report() {
        return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
    }

    return function (command) {
        let tokens = command.split(' ');
        let action = tokens.shift();
        switch (action) {
            case 'prepare':
                return prepare(tokens);
            case 'restock':
                return restock(tokens);
            case 'report':
                return report();
        }
    }
})();


// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));


// console.log(manager('restock protein 100'));
// console.log(manager('restock carbohydrate 100'));
// console.log(manager('restock fat 100'));
// console.log(manager('restock flavour 100'));
// console.log(manager('report'));

// console.log(manager('restock protein 100'));
// console.log(manager('restock carbohydrate 100'));
// console.log(manager('restock fat 100'));
// console.log(manager('restock flavour 100'));
// console.log(manager('report'));
// console.log(manager('prepare eggs 2'));
// console.log(manager('report'));
// console.log(manager('prepare eggs 1'));
// console.log(manager('report'));