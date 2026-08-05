class Animal {
  constructor(
    public name: string,
    public age: number,
  ) {}

  introduce() {
    return `
    My name is ${this.name}
    I am ${this.age} years old`;
  }
}

const dog = new Animal('Coco', 3);
console.log(dog.introduce());

class Car {
  constructor(
    public Brand: string,
    public Year: number,
  ) {}
  showInfo() {
    return `
    My car brand is ${this.Brand}
    make year is ${this.Year}`;
  }
}

const car = new Car('Toyota', 2023);

console.log(car.showInfo());

class Student {
  constructor(
    public name: string,
    public score: number,
  ) {}
  showScore() {
    return `
    ${this.name}'s score is ${this.score} `;
  }
}
const student = new Student('Amy', 95);

console.log(student.showScore());

class Book {
  constructor(
    public title: string,
    public author: string,
  ) {}
  showBook() {
    return `
    Book : ${this.title}
    Author : ${this.author}    `;
  }
}

const book = new Book('Harry Potter', 'J.K. Rowling');

console.log(book.showBook());

class Movie {
  constructor(
    public title: string,
    public year: number,
    public rating: number,
  ) {}
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
  constructor(
    public brand: string,
    public model: string,
    public price: number,
  ) {}
  showPhone() {
    return `
    ${this.brand} ${this.model}
    Price : ${this.price}`;
  }
}

const phone = new Phone('Apple', 'iPhone16', 42000);

console.log(phone.showPhone());

class BankAccount {
  constructor(
    public owner: string,
    private balance: number,
  ) {}
  getBlance() {
    return `
    ${this.balance}`;
  }
  deposit(amount: number) {
    if (amount < 0) {
      console.log('Amount must be positive');
    } else {
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
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Employee extends Person {
  constructor(
    name: string,
    age: number,
    public company: string,
    public salary: number,
  ) {
    super(name, age);
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

class Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {}

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
  constructor(public items: string[]) {}

  addItem(item: string) {
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
