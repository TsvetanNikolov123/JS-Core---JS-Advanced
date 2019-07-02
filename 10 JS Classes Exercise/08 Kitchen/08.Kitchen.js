/* JS Advanced - Retake Exam: 18.11.2018      Judge -> 100/100 */

class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        products.forEach((product) => {
            const [productName, productQuantity, productPrice] = product.split(' ');

            if (this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = Number(productQuantity);
                } else {
                    this.productsInStock[productName] += Number(productQuantity);
                }

                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join('\n').trim();
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: neededProducts,
                price: price
            };

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let allProducts = '';
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            for (const product in this.menu) {
                allProducts += `${product} - $ ${this.menu[product].price}\n`;
            }
        }
        return allProducts.trim() + '\n';
    }

    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            let mealProducts = this.menu[meal].products;
            let allProductsAvailable = true;

            mealProducts.forEach((val) => {
                let [product, qty] = val.split(' ');

                if (!this.productsInStock.hasOwnProperty(product)) {
                    allProductsAvailable = false;
                } else {
                    if (this.productsInStock[product] >= qty) {
                        this.productsInStock[product] -= qty;
                    } else {
                        allProductsAvailable = false;
                    }
                }
                this.budget += this.menu[meal].price;
            });

            if (allProductsAvailable === false) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}

/* simple input */
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
/*  ->> result
    Successfully loaded 10 Banana
    Successfully loaded 20 Banana
    Successfully loaded 50 Strawberries
    Successfully loaded 10 Yogurt
    There was not enough money to load 500 Yogurt
    Successfully loaded 5 Honey
 */

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
/*
    Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas?
    Great idea! Now with the Pizza we have 2 meals on the menu, other ideas?
 */

console.log(kitchen.showTheMenu());
/*
    frozenYogurt - $ 9.99
    Pizza - $ 15.55
 */

console.log(kitchen.makeTheOrder('frozenYogurt'));
