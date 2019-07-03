function solve(array) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: item => list.push(item),
            remove: function (item) {
                let index = list.indexOf(item);
                while (index !== -1) {
                    list.splice(index, 1);
                    index = list.indexOf(item);
                }
            },
            print: () => console.log(list.join(','))
        }
    })();

    for (const arrayElement of array) {
        let [command, item] = arrayElement.split(/\s+/);
        commandProcessor[command](item);
    }
}

solve(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
);

solve(
    ['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']
);