function solution() {
    let typeCounter = {};

    for (const arg of arguments) {
        let type = typeof arg;

        if (type === 'object') {
            console.log(`${type}: `);
        } else {
            console.log(`${type}: ${arg}`);
        }

        if (typeCounter[type]) {
            typeCounter[type]++;
        } else {
            typeCounter[type] = 1;
        }
    }

    typeCounter = Object
        .entries(typeCounter)
        .sort((a, b) => b[1] -a[1])
        .forEach(element => console.log(`${element[0]} = ${element[1]}`));
}

solution('cat', 42, function () {console.log('Hello world!');});