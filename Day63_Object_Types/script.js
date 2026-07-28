"use strict";
const employee = {
    name: 'Tom',
    age: 30,
    isWorking: true,
};
const product = {
    title: 'keyboard',
    price: 2500,
};
const productWithDescription = {
    title: 'Mouse',
    price: 1200,
    description: 'wireless mouse',
};
const user = {
    id: 1,
    name: 'Tom',
};
const company = {
    name: 'OpenAi',
    address: {
        city: 'San Franciso',
        country: 'USA',
    },
};
const products = [
    {
        title: 'keyboard',
        price: 2500,
    },
    {
        title: 'Mouse',
        price: 1200,
    },
];
console.log(employee);
console.log(product);
console.log(productWithDescription);
console.log(company);
console.log(products);
console.log(products[0].title);
console.log(products[1].price);
