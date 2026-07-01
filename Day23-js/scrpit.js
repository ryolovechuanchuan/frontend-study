const input = document.getElementById("nameInput");

const btn = document.getElementById("btn");

const reslut = document.getElementById("result")



btn.addEventListener("click",
    function () {
        if(input.value.trim() !== ""){
            reslut.innerText = `你好,${input.value}`;
        }else{
            alert("請輸入姓名");
        }
        }
 )

const btn1 = document.getElementById("btn1");



btn1.addEventListener("click",
    function () {
        const age = ageInput.value;

        if(age.trim() === ""){
            result.innerHTML = "請重新輸入"
        }else if( Number(age) >= 18  ){
            result.innerText = "已成年"
        }else{
            result.innerHTML = "未成年"
        }
         console.log(age);
    }
)


    

btn2.addEventListener("click",
    function(){
        
        const weight = (document.getElementById("weight").value);
        const height = (document.getElementById("height").value);
        const BMI = weight/(height*height*0.0001);

        bmiresult.innerText = `BMI：${BMI.toFixed(2)}`;
        console.log(BMI);
    }
    
)

        const showname = document.getElementById("showname");
        const showage = document.getElementById("showage");
        const nameInput = document.getElementById("mynameInput");
        const ageInput = document.getElementById("myageInput");
        const btn3 = document.getElementById("btn3");

btn3.addEventListener("click",
    function() {
        
        const myname = nameInput.value;
        const myage = ageInput.value;

        showname.innerText = `我叫做${myname}`;
        showage.innerText = `我今年:${myage}歲`;
    }
)


const account = document.getElementById("account");
const password = document.getElementById("password");

login.addEventListener("click",
    function(){
        if(account.value === "aabb" && password.value === "123456"){
            islogin.innerText = "登入成功";
        }else{
            islogin.innerText = "登入失敗";
        }
    }
)