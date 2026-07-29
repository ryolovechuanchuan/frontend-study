function identity<T>(value: T): T {
  return value;
}

function echo<T>(value: T): T {
  return value;
}

let names: Array<string> = ['Tom', 'Mary', 'John'];
let products: Array<string> = ['Laptop', 'keyboard', 'Mouse'];

interface Data<T> {
  data: T;
}

const user: Data<string> = {
  data: 'Tom',
};

const age: Data<number> = {
  data: 30,
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const response1: ApiResponse<string> = {
  success: true,
  data: 'Tom',
};

const response2: ApiResponse<number> = {
  success: true,
  data: 500,
};

const response3: ApiResponse<boolean> = {
  success: false,
  data: false,
};

type Result<T> = {
  success: boolean;
  data: T;
};

const userResult: Result<string> = {
  success: true,
  data: 'Mary',
};

const scoreResult: Result<number> = {
  success: true,
  data: 95,
};

function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = {
  value: 'Hello',
};

const numberBox: Box<number> = {
  value: 300,
};

type showResult<T> = {
  success: boolean;
  data: T;
};

const result1: Result<string> = {
  success: true,
  data: 'Typescript',
};

console.log(identity('Tom'));
console.log(identity(30));
console.log(identity(true));
console.log(products);

console.log(echo('Tom'));
console.log(echo(100));
console.log(echo(true));

console.log(user);
console.log(age);

console.log(response1);
console.log(response2);
console.log(response3);

console.log(userResult);
console.log(scoreResult);

printLength('Hello');
printLength([1, 2, 3]);
printLength(['A', 'B']);

console.log(numberBox);
console.log(stringBox);

console.log(result1);
