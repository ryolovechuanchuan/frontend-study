console.log(10>5);

console.log(5>10);

console.log(1<2<3);
console.log(3>2>1); /*陷阱  3>2=>ture  ture>1=>false*/

console.log(18>=18);

console.log(10<=5);

console.log(5===5);
console.log(5===10);

const name = "Ryo";
console.log(name === "Ryo");

console.log(10!==5);

const password = "123456";
if(password==="123456"){
    console.log("登入成功")
}else{
    console.log("密碼錯誤")
}

const age = 30;
if(age>=30){
    console.log("30歲以上");
}else{
    console.log("未滿30歲");
}

const score = 85;

if (score >= 90) {
  console.log("A");
}
else if (score >= 80) {
  console.log("B");
}
else if (score >= 70) {
  console.log("C");
}
else {
  console.log("D");
}

const money = 1500;
if(money>=1000){
    console.log("可以買Switch")
}else{
    console.log("存錢中")
}