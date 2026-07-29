function subtract(a: number, b: number) {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

function printEmployee(name: string): void {
  console.log(name);
}

function add(a: number, b: number): number {
  return a + b;
}

function greet(name?: string): void {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log('Hello Guest');
  }
}

function printEmployees(name: string, department?: string): void {
  if (department) {
    console.log(`${name} works in ${department}`);
  } else {
    console.log(`${name} has no department`);
  }
}

function calulatePice(price: number, tax: number = 0.05): number {
  return price * (1 + tax);
}

// let calculate: (a: number, b: number) => number;
let calculate = function (a: number, b: number): number {
  return a + b;
};

function process(callback: (message: string) => void) {
  callback('Hello Typescript');
}

function calculatePrice(price: number, callback: (result: number) => void) {
  callback(price * 1.05);
}

type ButtonProps = {
  onClick: () => void;
};

console.log(subtract(50, 20));
console.log(divide(50, 10));
printEmployee('Tom');
console.log(add(10, 20));

greet();
greet('Tom');

printEmployees('Tom', 'IT');
printEmployees('Marry');

console.log(calulatePice(1000));
console.log(calulatePice(1000, 0.1));

console.log(calculate(10, 20));
console.log(calculate(20, 30));

calculatePrice(1000, (result) => {
  console.log(result);
});

console.log(calculate(10, 20));
process((message) => {
  console.log(message);
});
