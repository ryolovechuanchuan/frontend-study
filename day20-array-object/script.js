const fruits = [
  "Apple",
  "Banana",
  "Orange"
];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

fruits[1] = "Grape";
fruits[2] = "Peach"

console.log(fruits);

fruits.push("Lemon");
console.log(fruits);

console.log(fruits.length);

const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React"
];
for(let i =0 ; i<skills.length ; i++){
    console.log(skills[i]);
}


for(let i = 0 ; i<skills.length ; i++){
    console.log(skills[i]);
}

const user ={
    name : "Ryo",
    age : 30,
    country : "Taiwan"
};

user.job = "Frontend Engineer"
user.age = 31;
user.language = "Japanese";

console.log(`我是${user.name}`);
console.log(`今年${user.age}歲`);
console.log(`目標是${user.job}`)
console.log(user.country);

const users = [{
    name : "Tom",
    age : 30
},
{
    name : "Amy",
    age : 25
},
{
    name : "John",
    age : 28
}]

console.log(users[1].name);
console.log(users[2].age);

const books = [
    {
        title : "Javascript",
        price : 500
    },{
        title : "React",
        price : 700
    }
];

console.log(books[1].title);


const products = [
  {
    name: "iPhone",
    price: 30000
  },
  {
    name: "MacBook",
    price: 50000
  },
  {
    name: "iPad",
    price: 20000
  }
];

for(let i = 0; i<products.length;i++){
    console.log(`${products[i].name}:${products[i].price}`)
}