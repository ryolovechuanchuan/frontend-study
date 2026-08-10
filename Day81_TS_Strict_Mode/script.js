"use strict";
function greet(name) {
    return 'Hello' + name;
}
console.log(greet('John'));
function introduce(name, age) {
    return `My name is ${name}, i am ${age} years old`;
}
console.log(introduce('Mary', 25));
function calculatePrice(price, quantity) {
    //回傳值為number
    return price * quantity;
}
console.log(calculatePrice(100, 3));
function printTodo(title) {
    //void  沒有回傳值
    console.log(`Todo: ${title}`);
}
printTodo('study TypeScript');
let email = 'test@gmail.com';
function createUser(name, age) {
    console.log(name, age);
}
createUser('John', 30);
createUser('Mary');
const P1 = {
    id: 1,
    name: 'keyboard',
    description: 'Mechanical Keyboard',
};
const P2 = {
    id: 2,
    name: 'Mouse',
};
if (P1.description) {
    console.log(P1.description?.toUpperCase());
}
else {
    console.log('description 不存在');
}
const title = document.getElementById('title');
const usernameInput = document.getElementById('username');
if (usernameInput) {
    console.log(usernameInput.value);
}
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        if (emailInput) {
            console.log(emailInput.value);
        }
        else {
            console.log('Email imput not found');
        }
    });
}
let value = 'TypeScript';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
let data = 'john';
if (typeof data === 'string') {
    console.log(data.toUpperCase());
}
else if (typeof data === 'number') {
    console.log(data * 2);
}
else if (typeof data === 'boolean') {
    console.log(!data);
}
const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@gamil.com',
    },
    {
        id: 2,
        name: 'Mary',
    },
    {
        id: 3,
        name: 'Tom',
    },
];
function findUser(id) {
    return users.find((user) => user.id === id);
}
const user = findUser(3);
if (user) {
    if (user.email) {
        console.log(user.email.toUpperCase());
    }
    else {
        console.log('User has no email');
    }
}
else {
    console.log('User not found');
}
const names = ['John', 'Mary', 'Tom'];
const firstName = names[0];
if (firstName) {
    console.log(firstName.toUpperCase());
}
const students = [
    {
        id: 1,
        name: 'Jogn',
    },
    {
        id: 2,
        name: 'Mary',
    },
];
const S1 = students[1];
if (S1) {
    console.log(S1.name);
}
const fruits = ['apple', 'Banana', 'Orange'];
const fruit = fruits[1];
if (fruit) {
    console.log(fruit);
}
try {
    throw new Error('Something went wrong');
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
function getStatus(completed) {
    if (completed) {
        return 'completed';
    }
    else {
        return 'Pending';
    }
}
console.log(getStatus(true));
console.log(getStatus(false));
const todos = [
    {
        id: 1,
        title: 'Study TypeScript',
        completed: true,
    },
    {
        id: 2,
        title: 'Learn React',
        description: 'Study useEffect',
        completed: false,
    },
];
function findTodo(id) {
    return todos.find((todo) => todo.id === id);
}
const todo = findTodo(2);
if (todo) {
    console.log(todo.title);
    if (todo.description) {
        console.log(todo.description.toUpperCase());
    }
    else {
        console.log('No description');
    }
    if (todo.completed) {
        console.log('Completed');
    }
    else {
        console.log('Pending');
    }
}
else {
    console.log('Todo not found');
}
