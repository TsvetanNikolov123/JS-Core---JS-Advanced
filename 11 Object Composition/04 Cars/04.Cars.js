function solution(array) {
    const carFactory = (function () {
        let cars = {};

        function create([name, inherit, parentName]) {
            if (inherit) {
                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        }

        function set([name, key, value]) {
            cars[name][key] = value;
        }

        function print([name]) {
            let car = cars[name];
            let allProperties = [];
            for (const property in car) {
                // noinspection JSUnfilteredForInLoop
                allProperties.push(`${property}:${car[property]}`);
            }
            console.log(allProperties.join(", "))
        }

        return {create, set, print}
    })();

    for (const arrayElement of array) {
        let tokens = arrayElement.split(/\s+/);
        carFactory[tokens.shift()](tokens);
    }
}

console.log(solution(
    ['create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2']
));