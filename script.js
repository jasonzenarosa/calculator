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
let storedNum
let operator;

function numberButtonPress(num) {
    let cur = screen.innerHTML;
    if (cur === 'ERROR') cur = '0'; 
    if (cur.length < 8) {
        if (Number.isInteger(Number(cur)) && cur.slice(-1) !== '.') {
            cur = Number(cur) * 10 + num;
            cur = String(cur);
        } else {
            console.log('else')
            cur = cur + String(num);
        };
        screen.textContent = cur;
    };
};

function clearScreen() {
    screen.textContent = String(0)
};

function setScreen (num) {
    screen.textContent = String(num)
}

function getNumber() {
    return Number(screen.innerHTML)
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

const operatorStrings = {
    '.add': add,
    '.subtract': subtract,
    '.divide': divide,
    '.multiply': multiply,
};

for (let i = 0; i < 10; i++) {
    let numButton = document.querySelector(numberStrings[i]);
    numButton.addEventListener('click', _ => numberButtonPress(i));
};

for (const i in operatorStrings) {
    let operatorButton = document.querySelector(i);
    operatorButton.addEventListener('click', _ => {
        storedNum = getNumber();
        operator = operatorStrings[i];
        clearScreen();
    });
};

document.querySelector('.clear').addEventListener('click', clearScreen)

document.querySelector('.decimal').addEventListener('click', _ => {
    screen.textContent = screen.innerHTML + '.'
})

document.querySelector('.equals').addEventListener('click', _ => {
    let answer = operate(storedNum, getNumber(), operator)
    setScreen(answer)
});

