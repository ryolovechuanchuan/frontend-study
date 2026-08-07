import type { Todo } from '../models/models.js';

const todos: Todo[] = [
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

export function getTodos(): Todo[] {
  return todos;
}

export function getTodoById(id: number): Todo | undefined {
  return todos.find((item) => item.id === id);
}

export function addTodo(todo: Todo): Todo[] {
  todos.push(todo);
  return todos;
}

export function deleteTodo(id: number): Todo[] {
  const index = todos.findIndex((item) => item.id === id); //如果 findIndex找不到的話會回傳-1  (重要)
  if (index !== -1) {
    todos.splice(index, 1);
  }
  return todos;
}

export function updateTodo(id: number, completed: boolean): Todo | undefined {
  const index = todos.findIndex((item) => item.id === id);
  if (index !== -1) {
    todos[index].completed = !completed;
  }
  return todos[index];
}
