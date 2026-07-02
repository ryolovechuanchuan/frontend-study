const input = document.getElementById("todoInput");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");

const h1 = document.getElementById("h1")

input.addEventListener("keydown",
    function (event) {
    if (event.key === "Enter") {
      addbtn.click();
    }
    if (event.key === "Escape") {
      input.value = "";
    }
  }
);

addbtn.addEventListener("click",

    function(){
        
        const text = input.value.trim();

        if(text === ""){
            alert("請輸入內容");
            return;
        }
        const li = document.createElement("li");
        
        li.innerText = text;

        const finish = document.createElement("button");
        finish.innerText = "完成";

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "刪除";

        deleteBtn.addEventListener("click",
            function(){
                li.remove();
                h1.innerText = `共有${list.children.length}個任務`;
            }
        )
        li.append(deleteBtn);
        li.append(finish);
        list.append(li);
       
        h1.innerText = `共有${list.children.length}個任務`;

        finish.addEventListener("click",
            function(){
                li.style.color = "gray";
                li.style.textDecoration ="line-through";
            }
        )

        input.value = "";

    }
)
