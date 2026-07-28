"use strict";
let vaule;
vaule = 'Hello';
if (typeof vaule === 'string') {
    console.log(vaule.toUpperCase());
}
vaule = 100;
if (typeof vaule === 'number') {
    console.log(vaule.toFixed(2));
}
let message;
message = 'TypeScript';
if (typeof message === 'string') {
    console.log(message.toUpperCase());
}
message = 500;
if (typeof message === 'number') {
    console.log(message.toFixed(2));
}
let typeRandom;
typeRandom = Math.random() > 0.5 ? 'TypeScript' : 500;
if (typeof typeRandom === 'string') {
    console.log(typeRandom.toUpperCase());
}
else {
    console.log(typeRandom.toFixed(2));
}
let person;
person = {
    name: 'Tom',
    salary: 45000,
};
if ('salary' in person) {
    console.log(person.salary);
}
if ('grade' in person) {
    console.log(person.grade);
}
const response = {
    success: true,
    data: 'getApidata',
};
if ('data' in response) {
    console.log(response.data);
}
