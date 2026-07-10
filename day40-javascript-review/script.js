const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const deletecompletedBtn = document.getElementById('deletecompletedBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const show = document.getElementById('show');
const filterSelect = document.getElementById('filterSelect');

let currentFilter = 'all'; //預設搜尋欄是"全部"
let editingId = null;

/* ------------------- localStorage設定 讓網頁重新整理或第一次登入可以撈取資料 ------------------- */
let todos = JSON.parse(localStorage.getItem('todos')) || [];
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

/* ------------------------ 選項變換 all active completed ----------------------- */
filterSelect.addEventListener('change', function (event) {
  currentFilter = event.target.value;
  render();
});

/* ---------------------------------- 更新畫面 ---------------------------------- */
function render() {
  let filterTodos = todos;
  const activeTodos = todos.filter((todo) => !todo.completed);
  const activeNumber = activeTodos.length;

  if (currentFilter === 'active') {
    filterTodos = todos.filter((todo) => !todo.completed);
  }

  if (currentFilter === 'completed') {
    filterTodos = todos.filter((todo) => todo.completed);
  }

  const html = filterTodos
    .map(
      (todo) => `
  <li>
    <span class = "${todo.completed ? 'completed' : ''}">${todo.text}</span>
    <button class = "edit-btn" data-id = "${todo.id}">編輯</button>
    <button class ="delete-btn" data-id = "${todo.id}">刪除</button>
    <button class = "complete-btn" data-id = "${todo.id}">✔</button>
  </li>
  `,
    )
    .join('');
  todoList.innerHTML = html;
  show.innerText = `現在有${activeNumber}個待辦事項`;
}

/* ---------------------------------- 新增選項 ---------------------------------- */
function addTodo() {
  const text = todoInput.value.trim();
  if (text === '') {
    return;
  }

  if (editingId !== null) {
    const todo = todos.find((todo) => todo.id === editingId);

    if (!todo) {
      return;
    }
    todo.text = text;
    editingId = null;
    cancelEditBtn.hidden = true;
    addBtn.innerText = '新增';

    saveTodos();
    render();
    todoInput.value = '';
    return;
  }

  todos.push({
    id: Date.now(),
    text: text,
    completed: false,
  });

  saveTodos();
  render();
  todoInput.value = '';
}
/* --------------------------------- 按下新增按鈕 --------------------------------- */
addBtn.addEventListener('click', addTodo);

/* --------------------------------- 取消編輯按鈕 --------------------------------- */
cancelEditBtn.addEventListener('click', function () {
  editingId = null;
  todoInput.value = '';
  addBtn.innerText = '新增';
  todoInput.focus();
  cancelEditBtn.hidden = true;
});

/* --------------------------------- 刪除已完成事項 -------------------------------- */
deletecompletedBtn.addEventListener('click', function () {
  // 只留下「未完成」的事項 (completed 為 false)
  todos = todos.filter((todo) => !todo.completed);

  editingId = null;
  todoInput.value = '';
  addBtn.innerText = '新增';
  cancelEditBtn.hidden = true;
  saveTodos();
  render();
});

/* ------------------------------- 刪除按鈕/已完成按鈕 ------------------------------- */
todoList.addEventListener('click', function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.classList.contains('delete-btn')) {
    todos = todos.filter((todo) => todo.id !== id);

    if (editingId === id) {
      editingId = null;
      todoInput.value = '';
      addBtn.innerText = '新增';
      cancelEditBtn.hidden = true;
    }
    saveTodos();
    render();
    return;
  }

  if (event.target.classList.contains('complete-btn')) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return;
    }
    todo.completed = !todo.completed;
    saveTodos();
    render();
  }

  if (event.target.classList.contains('edit-btn')) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return;
    }
    cancelEditBtn.hidden = false;
    todoInput.value = todo.text;
    editingId = todo.id;
    addBtn.innerText = '更新';
    todoInput.focus();

    return;
  }
});

/* -------------------------------- 按下ENTER新增 ------------------------------- */
todoInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

render();
