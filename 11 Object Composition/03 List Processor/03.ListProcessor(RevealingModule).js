function solve(array) {
    let commandProcessor = (function () {
        let list = [];

        function add(item) {
            list.push(item);
        }

        function remove(item) {
            let index = list.indexOf(item);
            while (index !== -1) {
                list.splice(index, 1);
                index = list.indexOf(item);
            }
        }

        function print() {
            console.log(list.join(','))
        }

        return {add, remove, print};
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