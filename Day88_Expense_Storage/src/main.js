"use strict";
const expenseList = document.querySelector('#expense-list');
const totalExpense = document.querySelector('#total-expense');
const expenseForm = document.querySelector('#expense-form');
const categoryInput = document.querySelector('#category');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const noteInput = document.querySelector('#note');
const categoryFilter = document.querySelector('#category-filter');
let currentFilter = '全部';
function toSaveLocalStorage() {
    localStorage.setItem('data', JSON.stringify(expenses));
}
function loadStorage() {
    const data = localStorage.getItem('data');
    if (!data) {
        return [];
    }
    try {
        return JSON.parse(data);
    }
    catch {
        return null;
    }
}
const storedExpense = loadStorage();
const expenses = storedExpense ?? [
    {
        id: 1,
        category: '餐飲',
        amount: 180,
        date: '2026-08-13',
        note: '午餐',
    },
    {
        id: 2,
        category: '交通',
        amount: 320,
        date: '2026-08-12',
        note: '高鐵',
    },
    {
        id: 3,
        category: '購物',
        amount: 1200,
        date: '2026-08-10',
        note: '生活用品',
    },
];
function renderExpenses(list = getFilteredExpenses()) {
    expenseList.replaceChildren();
    if (list.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = '目前沒有支出';
        expenseList.append(emptyMessage);
        return;
    }
    list.forEach((expense) => {
        const item = document.createElement('article');
        item.className = 'expense-item';
        const info = document.createElement('div');
        const category = document.createElement('h3');
        category.textContent = expense.category;
        const date = document.createElement('p');
        date.textContent = expense.date;
        const note = document.createElement('p');
        note.textContent = expense.note;
        const amount = document.createElement('strong');
        amount.textContent = `NT$ ${expense.amount.toLocaleString()}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '刪除';
        deleteButton.addEventListener('click', () => {
            const index = expenses.findIndex((item) => expense.id === item.id);
            if (index === -1)
                return;
            expenses.splice(index, 1);
            toSaveLocalStorage();
            renderExpenses();
            renderTotal();
        });
        info.appendChild(category);
        info.appendChild(date);
        info.appendChild(note);
        item.appendChild(info);
        item.appendChild(amount);
        item.appendChild(deleteButton);
        expenseList.appendChild(item);
    });
}
function renderTotal(expenses = getFilteredExpenses()) {
    let sum = 0;
    expenses.forEach((expense) => {
        sum += expense.amount;
    });
    totalExpense.textContent = `NT$ ${sum.toLocaleString()}`;
}
expenseForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const newExpense = {
        id: Date.now(),
        category: categoryInput.value,
        amount: Number(amountInput.value),
        date: dateInput.value,
        note: noteInput.value,
    };
    expenses.push(newExpense);
    toSaveLocalStorage();
    renderExpenses();
    renderTotal();
    expenseForm.reset();
});
categoryFilter.addEventListener('change', () => {
    currentFilter = categoryFilter.value;
    renderExpenses();
    renderTotal();
});
function getFilteredExpenses() {
    if (currentFilter === '全部') {
        return expenses;
    }
    return expenses.filter((expense) => expense.category === currentFilter);
}
renderExpenses();
renderTotal();
