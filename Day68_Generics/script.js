"use strict";
function identity(value) {
    return value;
}
function echo(value) {
    return value;
}
let names = ['Tom', 'Mary', 'John'];
let products = ['Laptop', 'keyboard', 'Mouse'];
const user = {
    data: 'Tom',
};
const age = {
    data: 30,
};
const response1 = {
    success: true,
    data: 'Tom',
};
const response2 = {
    success: true,
    data: 500,
};
const response3 = {
    success: false,
    data: false,
};
const userResult = {
    success: true,
    data: 'Mary',
};
const scoreResult = {
    success: true,
    data: 95,
};
function printLength(value) {
    console.log(value.length);
}
const stringBox = {
    value: 'Hello',
};
const numberBox = {
    value: 300,
};
const result1 = {
    success: true,
    data: 'Typescript',
};
console.log(identity('Tom'));
console.log(identity(30));
console.log(identity(true));
console.log(products);
console.log(echo('Tom'));
console.log(echo(100));
console.log(echo(true));
console.log(user);
console.log(age);
console.log(response1);
console.log(response2);
console.log(response3);
console.log(userResult);
console.log(scoreResult);
printLength('Hello');
printLength([1, 2, 3]);
printLength(['A', 'B']);
console.log(numberBox);
console.log(stringBox);
console.log(result1);
