function solution() {
    let string = '';

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.substr(n);
    }

    function removeEnd(n) {
        string = string.substring(0, string.length - n);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeEnd,
        removeStart,
        print
    }
}

const myManipulator = solution();
myManipulator.append('hello');
myManipulator.append('again');
myManipulator.removeStart(3);
myManipulator.removeEnd(4);
myManipulator.print();  // expected result 'loa'



