let Extensible = (function () {
    let idGenerator = 0;

    return class Extensible {
        constructor() {
            this.id = idGenerator++;
        }

        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function')
                    Extensible.prototype[prop] = template[prop];
                else
                    this[prop] = template[prop];
            }
        }
    }
})();


// simple input
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
