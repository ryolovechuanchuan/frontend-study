const now = new Date();
const showdate = document.getElementById("showdate");
const weekDays = ["日","一","二","三","四","五","六"];
const currentDay = weekDays[now.getDay()];
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1);  /*1月是0  2月是1 ..... 12月是11*/ 
console.log(now.getDate()); /*幾號*/ 
console.log(now.getDay());  /*禮拜幾*/ 
console.log(now.getHours()); 
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getFullYear()+"/"+(now.getMonth()+1)+"/"+(now.getDate()));
console.log((now.getMonth()+1)+"月"+(now.getDate())+"號"+"禮拜"+currentDay);
console.log("現在"+(now.getHours())+"點"+(now.getMinutes())+"分"+(now.getSeconds())+"秒");


const showclock = document.getElementById("showclock");

setInterval(
    function(){
        const now = new Date();
        const date = String(now.getDate()).padStart(2,"0");
        const month = String(now.getMonth()+1).padStart(2,"0");
        const hour = String(now.getHours()).padStart(2,"0");
        const minutes = String(now.getMinutes()).padStart(2,"0");
        const second = String(now.getSeconds()).padStart(2,"0");
        const time = 
        `${hour}:${minutes}:${second}`;
        const returndate = `${now.getFullYear()}年${month}月${date}日`;
        showdate.innerText = returndate;
        showclock.innerText = time;
},1000);