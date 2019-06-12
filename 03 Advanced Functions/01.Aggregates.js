function aggregate(array) {
    function reducer(array, operator, initial) {
        let result = initial;

        for (let element of array) {
            result = operator(result, element);
        }

        return result;
    }

    console.log('Sum = ', reducer(array, (a, b) => a + b, 0));
    console.log('Min = ', reducer(array, (a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER));
    console.log('Max = ', reducer(array, (a, b) => Math.max(a, b), Number.MIN_SAFE_INTEGER));
    console.log('Product = ', reducer(array, (a, b) => a * b, 1));
    console.log('Join = ', reducer(array, (a, b) => `${a}${b}`, ''));
}

aggregate([5, -3, 20, 7, 0.5]);
