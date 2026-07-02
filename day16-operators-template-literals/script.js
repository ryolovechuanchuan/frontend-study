const a = 10;
const b = 20;

console.log(a+b);

const money = 500;
const cost = 120;

console.log(money-cost);

console.log(a*b);

console.log(5%2);

console.log(15%4);

let count = 1;
count++;
console.log(count);

const Name = "Ryo";
const lastName = "Chen";
const age = 30;
const goal = "在日本當前端工程師"
const country = "Taiwan";

console.log(`我的名字是:${Name},今年${age}歲`);
console.log(`我是${Name},我的目標是${goal}`);
console.log(`我是${Name},我今年${age}歲,來自${country}`);

const salary = 50000;
const bouns = 10000;

const yearlyIncome = (salary+bouns)*12;

console.log(`年收入是:${yearlyIncome}`);

const x = 95;
let isPrime = true;
for (let i = 2; i <= x ** 0.5; i++) {
    if (x % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(`${x}是質數`);
} else {
    console.log(`${x}不是質數`);
}