import type { Todo } from '../models/models.js';

const defaultTodos: Todo[] = [
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

export function loadTodos(): Todo[] {
  const savedTodos = localStorage.getItem('todos');

  if (savedTodos) {
    return JSON.parse(savedTodos);
  }

  return defaultTodos;
}

let todos: Todo[] = loadTodos();

function saveTodos() {
  const response = JSON.stringify(todos);

  localStorage.setItem('todos', response);
}

export function getTodos(): Todo[] {
  return todos;
}

export function getTodoById(id: number): Todo | undefined {
  return todos.find((item) => item.id === id);
}

export function addTodo(todo: Todo): Todo[] {
  todos.push(todo);

  saveTodos();

  return todos;
}

export function deleteTodo(id: number): Todo[] {
  const index = todos.findIndex((item) => item.id === id);

  if (index !== -1) {
    todos.splice(index, 1);

    saveTodos();
  }

  return todos;
}

export function updateTodo(id: number, completed: boolean): Todo | undefined {
  const index = todos.findIndex((item) => item.id === id);

  if (index !== -1) {
    todos[index].completed = completed;

    saveTodos();
  }

  return todos[index];
}
