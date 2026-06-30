function hello(){
    console.log("Hello JavaScript");
}

hello();

function sayJapan() {
    console.log("Hello Japan");
}

sayJapan();

function hello(name){
    console.log(`Hello ${name}`);
}

hello("Ryo");

function introduce(name,age){
    console.log(`我是${name},今年${age}歲`);
}

introduce("Ryo",30);

function userInfo(name,country){
    console.log(`${name}來自${country}`)
}

userInfo("Ryo","Taiwan");

function add(
  a,
  b
) {
  return a + b;
}

const result =
  add(10, 20);

console.log(result);

function multiply(a,b){
    return(a*b)
}

console.log(multiply(2,3));

function getBMI(weight,height){
    return weight/(height*height);
}

console.log(getBMI(70,1.8));
console.log(getBMI(65,1.7));

const isAdult =(age) =>{
    if(age>=18){
        return true;
    }
    return false;
}
console.log(isAdult(20));

function isPass(score){
    if(score>=60){
        return true;
    }
    return false;
}

console.log(isPass(70));

const square = (num) =>{
     return (num*num);
}

console.log(square(5));

function getTotal(price,quantity){
    return (price*quantity);
}

console.log(getTotal(500,300));

function greet(name){
    return(`你好，${name}`)
}

console.log(greet("Ryo"));


function getGrade(score){
    if(score>=90){
        return "A"
    }else if(score>=80){
        return "B"
    }else if(score>=70){
        return "C"
    }else{
        return "D"
    }
}

console.log(getGrade(85));