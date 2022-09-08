function operate(x, y, operator) {
    if (typeof(x) === 'number' && typeof(y) === 'number') return operator(x, y);
    else return 'ERROR';
};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if (y !== 0) return x / y;
    else return 'ERROR';
};

let screen = document.querySelector('.screen');
let num1;
let num2;
let operator;

function numberButtonPress(num) {
    let cur = screen.innerHTML;
    cur = Number(cur) * 10 + num;
    cur = String(cur);
    screen.textContent = cur;
};

const numberStrings = [
    '.zero',
    '.one',
    '.two',
    '.three',
    '.four',
    '.five',
    '.six',
    '.seven',
    '.eight',
    '.nine',
];

for (let i = 0; i < 10; i++) {
    let numButton = document.querySelector(numberStrings[i]);
    numButton.addEventListener('click', _ => numberButtonPress(i));
};

// const operatorStrings = {
//     '.add': add,
//     '.subtract': subtract,
//     '.divide': divide,
//     '.multiply': multiply,
// };

// for (const i in operatorStrings) {
//     let operatorButton = document.querySelector(i);
//     operatorButton.addEventListener('click', _ => {
    
//     });
// };

