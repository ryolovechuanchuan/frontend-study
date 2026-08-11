"use strict";
function calculateTotal(price, quantity) {
    return price * quantity;
}
const products = [
    {
        name: 'keyboard',
        price: 1500,
    },
    {
        name: 'Mouse',
        price: 800,
    },
];
const quantity = 2;
function findProduct(name) {
    return products.find((product) => product.name === name);
}
console.log(findProduct('Mouse'));
const button = document.getElementById('addBtn');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event.target);
    });
}
const input = document.getElementById('username');
if (input) {
    input.addEventListener('input', () => {
        console.log(input.value);
    });
}
async function loadUsers() {
    const response = await fetch('api/users');
    const users = await response.json();
    const list = document.getElementById('userList');
    if (list) {
        users.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = user.name;
            list?.appendChild(li);
        });
    }
}
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
}
const users = [
    {
        id: 1,
        name: 'John',
        email: 'John@test.com',
    },
    {
        id: 2,
        name: 'Mary',
        email: 'Mary@test.com',
    },
];
function getUser(id) {
    const user = users.find((item) => item.id === id);
    return user;
}
function searchUser(users, name) {
    const user = users.find((item) => item.name === name);
    if (user) {
        return user.email;
    }
    return null;
}
