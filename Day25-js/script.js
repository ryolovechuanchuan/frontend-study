const input = document.getElementById("todoInput");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");

input.addEventListener("keydown",
    function(event){
        if(event.key === "Enter" && event.ctrlKey){
            addbtn.click();
        }
    }
)

input.addEventListener("keydown",
        function(event){
        if(event.key === "Delete"){
            if(list.children.length>0){
                list.lastElementChild.remove();
                h1.innerText = `共有${list.children.length}個資料`
            }
                }
            }
        )

input.addEventListener("keydown",
        function(event){
        if(event.key === "Escape"){
                input.value = " ";
            }
        })

addbtn.addEventListener("click",
    function(){
        const text = input.value.trim();
        if(text === " "){
            return;
        }
        const li = document.createElement("li");
        li.innerText = text;

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "刪除";

        const finish = document.createElement("button");
        finish.innerText = "完成";

        const h1 = document.getElementById("h1");
         

        deletebtn.addEventListener("click",
            function(){
                li.remove();
                h1.innerText = `共有${list.children.length}個資料`
            }
        )
        finish.addEventListener("click",
            function(){
                li.style.color = "gray";
                li.style.textDecoration = "line-through"
            }
        )
        li.append(deletebtn);
        li.append(finish);
        list.append(li);

        h1.innerText = `共有${list.children.length}個資料`;
        input.value = " ";
    }
    
    
)