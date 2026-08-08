const defaultTodos = [
    {
        id: 1,
        title: 'Study TypeScript',
        completed: false,
    },
    {
        id: 2,
        title: 'Learn React',
        completed: false,
    },
    {
        id: 3,
        title: 'Build Portfolio',
        completed: true,
    },
];
export function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        return JSON.parse(savedTodos);
    }
    return defaultTodos;
}
let todos = loadTodos();
function saveTodos() {
    const response = JSON.stringify(todos);
    localStorage.setItem('todos', response);
}
export function getTodos() {
    return todos;
}
export function getTodoById(id) {
    return todos.find((item) => item.id === id);
}
export function addTodo(todo) {
    todos.push(todo);
    saveTodos();
    return todos;
}
export function deleteTodo(id) {
    const index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        saveTodos();
    }
    return todos;
}
export function updateTodo(id, completed) {
    const index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
        todos[index].completed = completed;
        saveTodos();
    }
    return todos[index];
}
