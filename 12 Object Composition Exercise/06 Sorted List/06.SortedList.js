function sortedList() {
    let myObj = {
        list: [],
        size: 0,
        add: function (element) {
            this.list.push(element);
            this.size++;
            this.list = this.list.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            } else {
                throw new Error('Invalid index');
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        }
    };
    /*  local tests
        myObj.add(5);
        myObj.add(1);
        myObj.add(3);
        myObj.add(3);
        myObj.remove(1);
        myObj.get(0);
        return myObj.list;
      */
    return myObj;
}

console.log(sortedList());