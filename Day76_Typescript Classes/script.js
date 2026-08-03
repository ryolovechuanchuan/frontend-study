"use strict";
class User {
    constructor(id, name, age, password) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
    }
    sayHello() {
        console.log("Hello I'm " + this.name);
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (age < 0) {
            console.log('Age cannot be negative');
        }
        else if (age >= 0) {
            this.age = age;
        }
    }
}
const amy = new User(1, 'Amy', 30, 'password');
amy.sayHello();
amy.setAge(35);
amy.getAge();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, company, salary) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.company = company;
        this.salary = salary;
    }
}
class Peoople extends Person {
}
const rose = new Peoople('Rose', 30);
const jack = new Employee('Jack', 28, 'Google', 80000);
console.log(rose.name);
console.log(rose.age);
console.log(jack.name);
console.log(jack.company);
console.log(jack.age);
console.log(jack.salary);
