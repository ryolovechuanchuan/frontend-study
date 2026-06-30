const title = document.getElementById("title");

title.style.color = "blue";
title.style.backgroundColor = "yellow";
title.style.fontSize = "30px";

const btn = document.getElementById("btn");

let isDark = false;

btn.addEventListener("click", 
    function(){
        if(isDark === false){
            document.body.style.backgroundColor = "gray";
            isDark = true;
        }else{
            document.body.style.backgroundColor = "white";
            isDark = false;
        }
       
        title.style.color = "red";
        title.innerText = "歡迎來到日本前端工程師之路!";
    }
)