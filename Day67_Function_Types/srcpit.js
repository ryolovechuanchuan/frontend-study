"use strict";
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function printEmployee(name) {
    console.log(name);
}
function add(a, b) {
    return a + b;
}
function greet(name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log('Hello Guest');
    }
}
function printEmployees(name, department) {
    if (department) {
        console.log(`${name} works in ${department}`);
    }
    else {
        console.log(`${name} has no department`);
    }
}
function calulatePice(price, tax = 0.05) {
    return price * (1 + tax);
}
// let calculate: (a: number, b: number) => number;
let calculate = function (a, b) {
    return a + b;
};
function process(callback) {
    callback('Hello Typescript');
}
function calculatePrice(price, callback) {
    callback(price * 1.05);
}
console.log(subtract(50, 20));
console.log(divide(50, 10));
printEmployee('Tom');
console.log(add(10, 20));
greet();
greet('Tom');
printEmployees('Tom', 'IT');
printEmployees('Marry');
console.log(calulatePice(1000));
console.log(calulatePice(1000, 0.1));
console.log(calculate(10, 20));
console.log(calculate(20, 30));
calculatePrice(1000, (result) => {
    console.log(result);
});
console.log(calculate(10, 20));
process((message) => {
    console.log(message);
});
