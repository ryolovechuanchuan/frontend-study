// Day 41 - Algorithm Basics: Array Traversal
// Practice
const numbers = [3, 8, 12, 5];
let sum = 0;
let count = 0;
let max = numbers[0];
let min = numbers[0];

// TODO 1: show arr[]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// TODO 2: show 1 2 3 4
for (let i = 0; i < numbers.length; i++) {
  console.log(i + 1);
}
// TODO 3: sum
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
// TODO 4:find max
for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
}
console.log(max);
// TODO 5: find min
for (let i = 0; i < numbers.length; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(min);

// TODO 6: average
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log(average);

// TODO 7: 大於5的數
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    count++;
  }
}
console.log(count);

// TODO 7: 找出第一個大於10的數
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
    break;
  }
}
