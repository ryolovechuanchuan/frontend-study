const expenseList = document.querySelector('#expense-list') as HTMLDivElement;
const totalExpense = document.querySelector('#total-expense') as HTMLHeadingElement;
const expenseForm = document.querySelector('#expense-form') as HTMLFormElement;
const categoryInput = document.querySelector('#category') as HTMLSelectElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;
const dateInput = document.querySelector('#date') as HTMLInputElement;
const noteInput = document.querySelector('#note') as HTMLInputElement;

type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
  note: string;
};

function toSaveLocalStorage() {
  localStorage.setItem('data', JSON.stringify(expenses));
}

const data: string | null = localStorage.getItem('data');
const tempData: Expense[] | null = data ? JSON.parse(data) : null;

const expenses: Expense[] = tempData
  ? tempData
  : [
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

const renderExpenses = (): void => {
  expenseList.replaceChildren();

  if (expenses.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = '目前沒有支出';
    expenseList.append(emptyMessage);
    return;
  }

  expenses.forEach((expense) => {
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
      if (index === -1) return;

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
};

function renderTotal() {
  let sum = 0;
  expenses.forEach((expense) => {
    sum += expense.amount;
  });
  totalExpense.textContent = `NT$ ${sum.toLocaleString()}`;
}

expenseForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const newExpense: Expense = {
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

renderExpenses();
renderTotal();
