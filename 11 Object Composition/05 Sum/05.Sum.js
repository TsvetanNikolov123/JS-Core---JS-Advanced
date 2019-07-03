function solution() {
    let num1, num2, result;

    function init(selector1, selector2, resultSelector) {
        num1 = $(selector1);
        num2 = $(selector2);
        result = $(resultSelector);
    }

    function action(operation) {
        let val1 = Number(num1.val());
        let val2 = Number(num2.val());
        result.val(operation(val1, val2));
    }

    function add() {
        return action((a, b) => a + b)
    }

    function subtract() {
        return action((a, b) => a - b)
    }

    return {init, add, subtract};
}