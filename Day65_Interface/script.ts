interface Employee {
  name: string;
  age: number;
  salary: number;
  email?: string;
}

const employee: Employee = {
  name: 'Tom',
  age: 30,
  salary: 45000,
};

interface User {
  name: string;
  email?: string;
}

const user1: User = {
  name: 'Tom',
};

const user2: User = {
  name: 'Mary',
  email: 'mary@test.com',
};

console.log(user1);
console.log(user2);

const employee1: Employee = {
  name: 'Tom',
  age: 30,
  salary: 45000,
};

const employee2: Employee = {
  name: 'Mary',
  age: 25,
  salary: 50000,
  email: 'mary@test.com',
};

console.log(employee1);
console.log(employee2);

interface Product {
  readonly id: number;
  title: string;
  price: number;
}

const keyboard: Product = {
  id: 1,
  title: 'keyboard',
  price: 2500,
};

keyboard.price = 3000;

interface Person {
  name: string;
  age: number;
}

interface People extends Person {
  salary: number;
}

const employee3: People = {
  name: 'Tom',
  age: 30,
  salary: 45000,
};
console.log(employee3);

interface Manger extends People {
  department: string;
}

const manager: Manger = {
  name: 'Tom',
  age: 35,
  salary: 80000,
  department: 'IT',
};

console.log(manager);
