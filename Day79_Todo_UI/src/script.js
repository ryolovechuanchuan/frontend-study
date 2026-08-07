import { addTodo, deleteTodo, getTodos, updateTodo } from './data/todoData.js';
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const Total = document.getElementById('totalcount');
const Completed = document.getElementById('completedcount');
const Pending = document.getElementById('pendingcount');
const addBtn = document.getElementById('addBtn');
const allBtn = document.getElementById('allBtn');
const completedBtn = document.getElementById('completedBtn');
const pendingdBtn = document.getElementById('pendingBtn');
let currentRenderAction = () => getTodos();
function renderTodos(todos = getTodos()) {
    if (todoList) {
        todoList.innerHTML = '';
    }
    // const todos = getTodos();
    todos.forEach((todo) => {
        const li = document.createElement('li');
        const deletBtn = document.createElement('button');
        deletBtn.textContent = '刪除';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        //checkbox
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            updateTodo(todo.id, checkbox.checked);
            renderTodos(currentRenderAction());
        });
        //deleteBtn
        deletBtn.addEventListener('click', function () {
            deleteTodo(todo.id);
            renderTodos(currentRenderAction());
        });
        const textSpan = document.createElement('span');
        checkbox.checked ? (textSpan.style.textDecoration = 'line-through') : (textSpan.style.textDecoration = 'none');
        textSpan.textContent = `${todo.id} ${todo.title}`;
        li.append(checkbox, textSpan, deletBtn);
        todoList?.appendChild(li);
    });
    if (Total) {
        Total.textContent = `Total:${getTodos().length}`;
    }
    if (Completed) {
        let completedCount = getTodos().filter((todo) => todo.completed).length;
        Completed.textContent = `Completed:${completedCount}`;
    }
    if (Pending) {
        let pedginCount = getTodos().filter((todo) => !todo.completed).length;
        Pending.textContent = `Pending:${pedginCount}`;
    }
}
allBtn?.addEventListener('click', () => {
    currentRenderAction = () => getTodos();
    renderTodos(currentRenderAction());
});
completedBtn?.addEventListener('click', () => {
    currentRenderAction = () => getTodos().filter((todo) => todo.completed === true);
    renderTodos(currentRenderAction());
});
pendingdBtn?.addEventListener('click', () => {
    currentRenderAction = () => getTodos().filter((todo) => todo.completed === false);
    renderTodos(currentRenderAction());
});
addBtn?.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        const title = todoInput.value.trim();
        const todos = getTodos();
        const index = todos.length;
        const id = todos.length === 0 ? 1 : todos[index - 1].id + 1;
        addTodo({
            id,
            title,
            completed: false,
        });
    }
    todoInput.textContent = '';
    renderTodos(currentRenderAction());
});
renderTodos(currentRenderAction());
