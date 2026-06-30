console.log(true && true);

const score = 80;
const attendance = true;

if(score>=60 && attendance){
    console.log("通過");
}

console.log(true || false);

const isAdmin = false;
const isVIP = true;
if(isAdmin || isVIP){
    console.log("允許進入")
}

const coupon = false;
const member = true;
if(coupon || member){
    console.log("可以打折")
}

console.log(!true);

const isOpen = false;
if(!isOpen){
    console.log("商店休息中")
}

const account = "ryo";
const password = "123456";
if(
    account === "ryo"&&
    password === "123456"
){
    console.log("登入成功")
}else{
    console.log("帳號或密碼錯誤")
}

const age = 20;
const parent = false;
if(age>=18 || parent){
    console.log("可以觀看")
}else{
    console.log("禁止觀看")
}

const day = 1;

switch(day){
    case 1:
        console.log("星期一")
        break;
    case 2:
        console.log("星期二")
        break;
    default:
        console.log("未知")
}

const month = 12;
switch(month){
    case 12:
        console.log("12月")
        break;

    default:
        console.log("未知")
}

const menu = 2;
switch(menu){
    case 1:
        console.log("開始遊戲")
        break;

    case 2:
        console.log("讀取存檔")
        break;

    case 3:
        console.log("設定")
        break;

    default:
        console.log("輸入錯誤")
}

const role = "admin";
const isLogin = true;

if(role === "admin" && isLogin){
    console.log("歡迎管理員")
}else{
    console.log("沒有權限")
}