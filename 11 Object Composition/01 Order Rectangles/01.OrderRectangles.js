function solution(rectangles) {
    function rectangle(width, height) {
        return {
            width: width,
            height: height,
            area: function (other) {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let index = other.area() - this.area();
                return index !== 0 ? index : other.width - this.width;
            }
        };
    }

    for (let i = 0; i < rectangles.length; i++) {
        let [width, height] = rectangles[i];
        rectangles[i] = rectangle(width, height);
    }

    return rectangles.sort((a, b) => a.compareTo(b));
}

console.log(solution(
    [
        [10, 5],
        [5, 12]
    ]
));
console.log();
console.log(solution(
    [
        [10, 5],
        [3, 20],
        [5, 12]
    ]
));