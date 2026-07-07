import { todoList, searchInput, filter } from "./dom.js";

import { todos, statusChange, deleteTodo } from "./todo.js";

export function renderTodos() {
  todoList.innerHTML = "";

  let filteredTodos = [...todos];

  /* ---------------------------------- 搜尋功能 ---------------------------------- */
  const keyword = searchInput.value.toLowerCase();
  filteredTodos = filteredTodos.filter((todo) =>
    todo.text.toLowerCase().includes(keyword),
  );
  /* -------------------------------- 篩選是否完成 -------------------------------- */
  if (filter.value === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  }

  if (filter.value === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  }

  filteredTodos.forEach((todo, index) => {
    const card = document.createElement("div");

    card.className = "card";

    if (todo.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <span>${todo.text}</span>

      <div>

        <button class="complete-btn">✔</button>

        <button class="delete-btn">✖</button>

      </div>
    `;

    const completeBtn = card.querySelector(".complete-btn");

    const deleteBtn = card.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
      statusChange(index);

      renderTodos();
    });

    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);

      renderTodos();
    });

    todoList.append(card);
  });
}
