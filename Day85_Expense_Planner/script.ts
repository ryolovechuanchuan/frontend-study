const expenseList = document.getElementById('expenseList') as HTMLUListElement | null;
const totalAmount = document.getElementById('totalAmount') as HTMLSpanElement | null;
const titleInput = document.getElementById('titleInput') as HTMLInputElement | null;
const amountInput = document.getElementById('amountInput') as HTMLInputElement | null;
const dateInput = document.getElementById('dateInput') as HTMLInputElement | null;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement | null;
const allBtn = document.getElementById('allBtn') as HTMLButtonElement | null;
const foodBtn = document.getElementById('foodBtn') as HTMLButtonElement | null;
const transportBtn = document.getElementById('transportBtn') as HTMLButtonElement | null;
const categorySelect = document.getElementById('categorySelect') as HTMLSelectElement | null;

let currentFilter = 'All';
const regex = /^\d{4}-\d{2}-\d{2}$/;

let expenses: Expense[] = [
  {
    id: 1,
    title: 'Lunch',
    amount: 120,
    category: 'Food',
    date: '2026-08-12',
  },
  {
    id: 2,
    title: 'MRT',
    amount: 30,
    category: 'Transport',
    date: '2026-08-12',
  },
];
interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

function saveLocalStorage(): void {
  localStorage.setItem('data', JSON.stringify(getExpense()));
}

const getData: string | null = localStorage.getItem('data');
const getDataArr: Expense[] | null = getData ? JSON.parse(getData) : null;
if (getDataArr) {
  expenses = getDataArr;
}

//getExpense
function getExpense(): Expense[] {
  return expenses;
}

//addExpense
function addExpense(expense: Expense): Expense[] {
  expenses.push(expense);

  return expenses;
}

//deleteExpense
function deleteExpense(id: number): Expense[] {
  const index = expenses.findIndex((item) => item.id === id);
  if (index !== -1) {
    expenses.splice(index, 1);
  }
  return expenses;
}

//calculateTotalExpense
function calculateTotalExpense(): number {
  let sum = 0;
  expenses.forEach((item) => {
    sum += item.amount;
  });
  return sum;
}
//篩選category
function filterExpensesByCategory(category: string): Expense[] {
  const filterExpenses = expenses.filter((item) => item.category === category);
  return filterExpenses;
}

//篩選category並解把amount加總
function calculateCategoryTotal(category: string): number {
  let sum = 0;

  const filterExpenses = expenses.filter((item) => item.category === category);

  filterExpenses.forEach((item) => {
    sum += item.amount;
  });
  return sum;
}

//targetlist = getExpense()  不管哪個回傳的值  都會被稱為 targetlist
function renderExpense(targetlist = getExpense()): void {
  if (expenseList) {
    expenseList.replaceChildren();

    targetlist.forEach((item) => {
      const li = document.createElement('li');
      const textSpan = document.createElement('span');
      const deleBtn = document.createElement('button');
      deleBtn.textContent = 'Delete';
      deleBtn.addEventListener('click', () => {
        deleteExpense(item.id);
        saveLocalStorage();
        renderExpense(getCurrentExpenses());
      });
      textSpan.textContent = `${item.title}-${item.amount}-${item.category}`;
      li.append(textSpan, deleBtn);
      expenseList?.append(li);
    });
  }

  if (totalAmount) {
    totalAmount.textContent = calculateTotalExpense().toString();
  }
}

addBtn?.addEventListener('click', () => {
  if (titleInput && amountInput && categorySelect && dateInput) {
    if (regex.test(dateInput.value)) {
      const index = expenses.length;
      const data: Expense = {
        id: expenses.length === 0 ? 1 : expenses[index - 1].id + 1,
        title: titleInput.value,
        amount: Number(amountInput.value) || 0,
        category: categorySelect.value,
        date: dateInput.value,
      };

      addExpense(data);
      saveLocalStorage();
      renderExpense(getCurrentExpenses());
      // clear inputs
      titleInput.value = '';
      amountInput.value = '';
      categorySelect.value = '請選擇分類';
      dateInput.value = '';
    } else {
      alert('日期格式有誤，請重新輸入');
      dateInput.value = '';
      dateInput.focus();
    }
  }
});

allBtn?.addEventListener('click', () => {
  currentFilter = 'All';
  renderExpense(getCurrentExpenses());
});

foodBtn?.addEventListener('click', () => {
  currentFilter = 'Food';
  const targetlist = filterExpensesByCategory(currentFilter);
  renderExpense(targetlist);
});

transportBtn?.addEventListener('click', () => {
  currentFilter = 'Transport';
  const targetlist = filterExpensesByCategory(currentFilter);
  renderExpense(targetlist);
});

function getCurrentExpenses(): Expense[] {
  if (currentFilter === 'Food') {
    return filterExpensesByCategory('Food');
  }

  if (currentFilter === 'Transport') {
    return filterExpensesByCategory('Transport');
  }

  return getExpense();
}
renderExpense(getCurrentExpenses());
