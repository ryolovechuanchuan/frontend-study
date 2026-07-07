import { loadTodos, saveTodos } from "./storage.js";

/* ------------------- 建立Todo陣列，在第一次網頁載入時去抓取localStorage內容 ------------------ */
export let todos = loadTodos();

// 新增 Todo
export function addTodo(text) {
  todos.push({
    text,
    completed: false,
  });

  saveTodos(todos);
}

/* -------------------------------- 切換已完成/未完成 ------------------------------- */
export function statusChange(index) {
  todos[index].completed = !todos[index].completed;

  saveTodos(todos);
}

/* ----------------------------------- 刪除 ----------------------------------- */
export function deleteTodo(index) {
  todos.splice(index, 1);

  saveTodos(todos);
}
