class User {
  constructor(
    readonly id: number,
    public name: string,
    public age: number,
    private password: string,
  ) {}

  sayHello() {
    console.log("Hello I'm " + this.name);
  }

  getAge() {
    return this.age;
  }
  setAge(age: number) {
    if (age < 0) {
      console.log('Age cannot be negative');
    } else if (age >= 0) {
      this.age = age;
    }
  }
}

const amy = new User(1, 'Amy', 30, 'password');

amy.sayHello();

amy.setAge(35);
amy.getAge();

class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Employee extends Person {
  constructor(
    public name: string,
    public age: number,
    public company: string,
    public salary: number,
  ) {
    super(name, age);
  }
}

class Peoople extends Person {}

const rose = new Peoople('Rose', 30);
const jack = new Employee('Jack', 28, 'Google', 80000);

console.log(rose.name);
console.log(rose.age);

console.log(jack.name);
console.log(jack.company);
console.log(jack.age);
console.log(jack.salary);
