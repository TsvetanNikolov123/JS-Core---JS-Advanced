function getFibonator() {
    let currentNumber = 1;
    let nextNumber = 1;

    return () => {
        const result = currentNumber;
        currentNumber = nextNumber;
        nextNumber = currentNumber + result;
        return result;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
