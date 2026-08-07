import { addTodo, deleteTodo, getTodos, updateTodo } from './data/todoData.js';
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
function renderTodos() {
    if (todoList) {
        todoList.innerHTML = '';
    }
    const todos = getTodos();
    todos.forEach((todo) => {
        const li = document.createElement('li');
        const deletBtn = document.createElement('button');
        deletBtn.textContent = '刪除';
        const updateBtn = document.createElement('button');
        updateBtn.textContent = '更新';
        deletBtn.addEventListener('click', function () {
            deleteTodo(todo.id);
            renderTodos();
        });
        updateBtn.addEventListener('click', function () {
            updateTodo(todo.id, todo.completed);
            renderTodos();
        });
        li.textContent = `${todo.id}  ${todo.title}  ${todo.completed ? 'Completed' : 'Pending'}`;
        li.append(deletBtn, updateBtn);
        todoList?.appendChild(li);
    });
}
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
    renderTodos();
});
renderTodos();
