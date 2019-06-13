function solution() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}

const myManipulator = solution();
myManipulator.append('hello');
myManipulator.append('again');
myManipulator.removeStart(3);
myManipulator.removeEnd(4);
myManipulator.print();  // expected result 'loa'



