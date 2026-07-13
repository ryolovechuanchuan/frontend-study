const greet = (name) => {
  console.log('Hello' + name);
};
greet('Tom');
greet('Mary');

const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
console.log(add(5, 8));

const isAdult = (age) => {
  return age >= 18;
};
console.log(isAdult(20));
console.log(isAdult(15));

const square = (num) => num * num;
console.log(square(5));

{
  var y = 20;
}

console.log(y);

let count = 1;

function test() {
  count++;
}

test();
test();

console.log(count);
