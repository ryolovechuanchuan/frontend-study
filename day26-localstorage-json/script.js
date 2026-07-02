const input = document.getElementById("todoInput");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");
const h1 = document.getElementById("h1"); 

// 網頁重整時自動帶出資料
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 網頁一打開，自動把舊資料一筆筆畫出來
todos.forEach(text => createTodo(text));
h1.innerText = `共有${list.children.length}個資料`;


// 定義一個專門建立待辦事項畫面的函式
function createTodo(text) {
    const li = document.createElement("li");
    li.innerText = text;

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "刪除";

    const finishbtn = document.createElement("button");
    finishbtn.innerHTML = "完成";

    // 刪除按鈕
    deletebtn.addEventListener("click", function(){
        // 1. 先找出這個 li 在畫面上的「第幾個位置」(Index)
        const index = Array.from(list.children).indexOf(li);
        
        // 2. 精準刪除陣列裡該位置的資料
        todos.splice(index, 1);
        
        // 3. 同步到儲存空間
        localStorage.setItem("todos", JSON.stringify(todos));

        // 4. 移除畫面上的節點
        li.remove();
        h1.innerText = `共有${list.children.length}個資料`;
    });

    // 完成按鈕
    finishbtn.addEventListener("click", function(){
        li.style.color = "grey";
        li.style.textDecoration = "line-through";
    });

    li.append(deletebtn, finishbtn);
    list.append(li);
}


    // 新增按鈕
    addbtn.addEventListener("click", function(){
    const text = input.value.trim();
    if(text === "") return;

    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));

    createTodo(text); // 建立新畫面

    h1.innerText = `共有${list.children.length}個資料`;
    input.value = "";
});
