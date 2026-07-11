const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const deletecompletedBtn = document.getElementById('deletecompletedBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const show = document.getElementById('show');
const filterSelect = document.getElementById('filterSelect');

let currentFilter = 'all'; //預設搜尋欄是"全部"
let editingId = null; //預設編輯狀態 null

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

  /* ------------------------ 如果清單中沒有已完成事項  讓清除已完成按鈕隱藏 ------------------------ */
  const completedTodos = todos.filter((todo) => todo.completed);
  deletecompletedBtn.disabled = completedTodos.length === 0;

  /* --------------------------------- 未完成狀態清單 -------------------------------- */
  if (currentFilter === 'active') {
    filterTodos = todos.filter((todo) => !todo.completed);
  }
  /* --------------------------------- 已完成狀態清單 -------------------------------- */
  if (currentFilter === 'completed') {
    filterTodos = todos.filter((todo) => todo.completed);
  }

  // 先處理空狀態
  if (filterTodos.length === 0) {
    let message = '';

    if (currentFilter === 'all') {
      message = '快新增第一個 Todo 吧！';
    }

    if (currentFilter === 'active') {
      message = '目前沒有未完成事項';
    }

    if (currentFilter === 'completed') {
      message = '目前沒有已完成事項';
    }

    todoList.innerHTML = `
      <li class="empty">${message}</li>
    `;
  } else {
    // 有資料時才建立 Todo HTML
    todoList.innerHTML = filterTodos
      .map(
        (todo) => `
          <li>
            <span class="${todo.completed ? 'completed' : ''}">
              ${todo.text}
            </span>

            <button class="edit-btn" data-id="${todo.id}">
              編輯
            </button>

            <button class="delete-btn" data-id="${todo.id}">
              刪除
            </button>

            <button class="complete-btn" data-id="${todo.id}">
              ✔
            </button>
          </li>
        `,
      )
      .join('');
  }

  show.innerText = `現在有 ${activeNumber} 個待辦事項`;
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
    resetEditMode();
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
  resetEditMode();
  todoInput.focus();
});

/* --------------------------------- 刪除已完成事項 -------------------------------- */
deletecompletedBtn.addEventListener('click', function () {
  if (!confirm('確定要刪除所有筆待辦事項嗎?')) {
    return;
  }

  // 只留下「未完成」的事項 (completed 為 false)
  todos = todos.filter((todo) => !todo.completed);

  resetEditMode();
  saveTodos();
  render();
});

/* ------------------------------- 刪除按鈕/已完成按鈕 ------------------------------- */
todoList.addEventListener('click', function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.classList.contains('delete-btn')) {
    if (!confirm('確定要刪除這筆待辦事項嗎?')) {
      return;
    }

    todos = todos.filter((todo) => todo.id !== id);

    if (editingId === id) {
      resetEditMode();
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
    return;
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

/* ------------------------------- 重製EditBtn狀態 ------------------------------ */
function resetEditMode() {
  editingId = null;
  todoInput.value = '';
  addBtn.innerText = '新增';
  cancelEditBtn.hidden = true;
}

render();
