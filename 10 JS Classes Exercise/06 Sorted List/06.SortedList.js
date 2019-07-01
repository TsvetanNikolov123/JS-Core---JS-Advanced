class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(+element);
        this.size++;
        this.list.sort((a, b) => {
            return a - b
        });
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.list[index];
        }
    }
}

// example tests

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
