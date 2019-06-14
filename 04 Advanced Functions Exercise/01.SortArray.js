function solution(array, sortArg) {
    if (sortArg === 'asc') {
        return array.sort((a, b) => a - b);
    } else if (sortArg === 'desc') {
        return array.sort((a, b) => b - a);
    }
}

console.log(solution([14, 7, 17, 6, 8], 'asc'));