function operate(x, y, operator) {
    if (typeof(x) === 'number' && typeof(y) === 'number') return operator(x, y);
    else return 'ERROR';
};

function add(x, y) {
    return x + y
};

function subtract(x, y) {
    return x - y
};

function multiply(x, y) {
    return x * y
};

function divide(x, y) {
    if (y !== 0) return x / y;
    else return 'ERROR'
}
