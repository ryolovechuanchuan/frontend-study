const name = "Ryo";

function hello(){
    console.log(name);
}

hello();


function showage(){
    const age = 30;
    console.log(age);
}

showage();


if(true){
    var b = 10;
}

console.log(b);

function createCounter(){
    let count = 0;
     return function(){
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function cart(){
    let total = 0
    function addToCart(price){
        total += price;
        console.log(total);
    }
    return addToCart;
}

const buysomthing = cart();

buysomthing(100);
buysomthing(200);
buysomthing(300);

for (let i = 1; i <= 3; i++) { // 👈 這裡改成 let
  setTimeout(function () {
    console.log(i);
  }, 1000);
}   

function test() {

  console.log(a);

  const a = 10;
}

test();