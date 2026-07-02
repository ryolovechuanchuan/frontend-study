const skills = ["HTML","CSS"];
const [first,second] = skills;
const newskills = [...skills,"Javascript"];
console.log(newskills);


console.log(first);
console.log(second);

const product = {
    name : "Iphone",
    price : 30000
};

const {name,price} = product;

console.log(name);
console.log(price);

const numbers = [1,2,3];
const newnumbers = [...numbers];
const result = [...numbers,4];

console.log(result);
console.log(newnumbers);


const users = [
  {
    name: "Ryo",
    age: 30
  },
  {
    name: "Tom",
    age: 18
  }
];

const newuser = users.map(users=>({...users,country : "Taiwan"}));
console.log(newuser);


function sum( ...numbers) {
    let total = 0;
    numbers.forEach(num=>{total+=num})
  return total;
}

console.log(sum(1, 2, 3, 4));

function multiply(...number){
    let total = 0
    numbers.forEach(num=>{total+=num})
    return total;
}
console.log(multiply(1, 2, 3));


function average(...numbers){
    let avg = 0;
    let total = 0;
    numbers.forEach(num=>total+=num);
    avg = total/numbers.length;
    return avg;
}

console.log(average(2,4,6,8,10));