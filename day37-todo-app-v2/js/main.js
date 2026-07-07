import { taskInput, addBtn, searchInput, filter } from "./dom.js";

import { addTodo } from "./todo.js";

import { renderTodos } from "./render.js";

/* ---------------------------------- 新增按鈕 ---------------------------------- */
addBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  addTodo(task);

  renderTodos();

  taskInput.value = "";
});

/* ---------------------------- 搜尋按鈕(每輸入一個字就執行一次) --------------------------- */
searchInput.addEventListener("input", renderTodos);

/* -------------------------- 篩選(每當option發生改變就執行一次) ------------------------- */
filter.addEventListener("change", renderTodos);

// 初始化
renderTodos();
