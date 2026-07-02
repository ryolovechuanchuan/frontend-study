const fruits = ["Apple","Banana","Orange"];

for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}

fruits.forEach(fruits=>console.log(fruits)); /*forEach() 一個一個列出(沒有回傳)*/ 

const skills = ["HTML","CSS","JS"];

skills.forEach(skills=>console.log(skills));

const numbers = [1,2,3,4,5];

const result = numbers.map(num=>num*num); /*map() 一個一個列出(有回傳)*/ 

numbers.forEach(num=>console.log(num*num))

console.log(result);

const check = numbers.filter(num=>num>3);   /*filter() 找到全部符合條件的資料*/ 
console.log(check);

const find = numbers.find(num=>num>3);  /*find() 找到第一筆符合條件的資料*/ 
console.log(find);

const scores = [60,70,80];
const plus = scores.map(score=>score+10);
const pass = scores.filter(scores=>scores>=60);

console.log(pass);
console.log(plus);

const user = [
    {
        name:"Ryo",
        age:30
    },
    {
        name:"Tom",
        age:18
    },
    {
        name:"Mary",
        age:16
    }
];

const adult = user.filter(user=>user.age>=18);
const names = user.map(user=>user.name);
console.log(names);
console.log(adult);

const allnumber = [1,2,4,5,8,9,10,109];
const even = allnumber.filter(numbers=>numbers%2===0);
const more = allnumber.find(numbers=>numbers>=100);

console.log(even);
console.log(more);

const products = [
  {
    name: "iPhone",
    price: 30000
  },
  {
    name: "MacBook",
    price: 60000
  },
  {
    name: "iPad",
    price: 20000
  }
];

const more25000 = products.filter(products=>products.price>=25000);
products.forEach(products=>console.log(products.name));
const taget = products.find(products=>products.price>=50000);
console.log(more25000);
console.log(taget);