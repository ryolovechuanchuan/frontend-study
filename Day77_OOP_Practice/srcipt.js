"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `
    My name is ${this.name}
    I am ${this.age} years old`;
    }
}
const dog = new Animal('Coco', 3);
console.log(dog.introduce());
class Car {
    constructor(Brand, Year) {
        this.Brand = Brand;
        this.Year = Year;
    }
    showInfo() {
        return `
    My car brand is ${this.Brand}
    make year is ${this.Year}`;
    }
}
const car = new Car('Toyota', 2023);
console.log(car.showInfo());
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    showScore() {
        return `
    ${this.name}'s score is ${this.score} `;
    }
}
const student = new Student('Amy', 95);
console.log(student.showScore());
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    showBook() {
        return `
    Book : ${this.title}
    Author : ${this.author}    `;
    }
}
const book = new Book('Harry Potter', 'J.K. Rowling');
console.log(book.showBook());
class Movie {
    constructor(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    showMovie() {
        return `
    Movie : ${this.title}
    Year : ${this.year}
    Rating : ${this.rating}`;
    }
}
const movie = new Movie('Interstellar', 2014, 9.5);
console.log(movie.showMovie());
class Phone {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    showPhone() {
        return `
    ${this.brand} ${this.model}
    Price : ${this.price}`;
    }
}
const phone = new Phone('Apple', 'iPhone16', 42000);
console.log(phone.showPhone());
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    getBlance() {
        return `
    ${this.balance}`;
    }
    deposit(amount) {
        if (amount < 0) {
            console.log('Amount must be positive');
        }
        else {
            this.balance = this.balance + amount;
        }
    }
}
const bankaccount = new BankAccount('Tom', 1000);
console.log(bankaccount.getBlance());
const account = new BankAccount('John', 1000);
account.deposit(500);
console.log(account.getBlance());
account.deposit(-100);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, company, salary) {
        super(name, age);
        this.company = company;
        this.salary = salary;
    }
    introduce() {
        return `
    Hello,I'm ${this.name}
    I am ${this.age} years old
    I work at ${this.company}
    My salary is ${this.salary}`;
    }
}
const jack = new Employee('Jack', 28, 'Google', 80000);
console.log(jack.introduce());
//rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
        return (this.height + this.width) * 2;
    }
}
const rect = new Rectangle(10, 20);
console.log(rect.getArea());
console.log(rect.getPerimeter());
class ShoppingCart {
    constructor(items) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    showItems() {
        let result = '';
        this.items.forEach((item, index) => {
            result += `${index + 1} ${item} \n`;
        });
        return result;
    }
}
const cart = new ShoppingCart([]);
cart.addItem('Apple');
cart.addItem('Banana');
cart.addItem('Milk');
console.log(cart.showItems());
//todolist
let result = '';
class TodoList {
    constructor(todos) {
        this.todos = todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    showTodos() {
        this.todos.forEach((item, index) => {
            result += index + 1 + '.' + item + '\n';
        });
        return result;
    }
    removeTodo(index) {
        this.todos.splice(index, 1);
    }
}
const todoList = new TodoList([]);
todoList.addTodo('Study TypeScript');
todoList.addTodo('Learn React');
todoList.addTodo('Build Porfolio');
console.log(todoList.showTodos());
todoList.removeTodo(1);
console.log(todoList.showTodos());
//Library
let bookResult = '';
class Library {
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(index) {
        this.books.splice(index, 1);
    }
    showBook() {
        this.books.forEach((item, index) => {
            bookResult += index + 1 + '.' + item + '\n';
        });
        return bookResult;
    }
}
const library = new Library([]);
library.addBook('Java');
library.addBook('Spring Boot');
library.addBook('TypeScript');
library.showBook();
library.removeBook(1);
library.showBook();
