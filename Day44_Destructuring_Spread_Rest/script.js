const user = {
  name: 'Tom',
  age: 25,
  city: 'Tokyo',
  job: 'Engineer',
};

const { name: userName, ...otherInfo } = user;
const numbers = [10, 20, 30, 40, 50];
const [first, ...rest] = numbers;

const fruits = ['Apple'];
const [firstfruits, secondfruits = 'banana'] = fruits;

const { name, age = 18 } = user;

let x = 100;
let y = 200;

[x, y] = [y, x];
const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor, thirdColor] = colors;

console.log(userName);
console.log(otherInfo);

console.log(first);
console.log(rest);

console.log(firstfruits);
console.log(secondfruits);

console.log(name);
console.log(age);

console.log(x);
console.log(y);

console.log(firstColor);
console.log(secondColor);
