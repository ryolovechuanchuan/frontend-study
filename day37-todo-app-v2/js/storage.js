/* ----------------------------- 讀取localStorage ----------------------------- */
export function loadTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

/* ----------------------------- 儲存localStorage ----------------------------- */
export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
