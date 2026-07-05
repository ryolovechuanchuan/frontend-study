async function agecheck(age) {
  try{
    if(age>=18){
      console.log("已成年");
    }else{
      console.log("未成年");
    }
  }catch(error){
    console.log("無法判斷");
  }
  
}
agecheck(15);

async function scorecheck(score) {
  try{
    if(score>=60){
      console.log("及格")
    }else{
      console.log("不及格")
    }
  }catch(error){
    console.log("無法判斷")
  }
}
scorecheck(50);


const input = document.getElementById("username");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click",async function(){
  const username = input.value.trim();
try{
      if(username === ""){
        result.innerText = "請輸入使用者名稱";
        return;
      }else{
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if(!response.ok){
          throw new Error("發生錯誤，請稍後再試");
        }

        const data = await response.json();
        result.innerHTML = 
         `
        <h2>${data.login}</h2>
        <img src="${data.avatar_url}" width="120">
        <p>Followers：${data.followers}</p>
        <p>Public Repos：${data.public_repos}</p>
        `;
        input.value = "";
      }
  }catch(error){
    result.innerText = (error.message);
    input.value = "";
  }    

})