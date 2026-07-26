const STORAGE_KEY = 'transactions';

const userInput = document.getElementById('user');
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const categorySelect = document.getElementById('category');
const dateInput = document.getElementById('date');
const noteInput = document.getElementById('note');

const addBtn = document.getElementById('addBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const errorMessage = document.getElementById('errorMessage');
const transactionList = document.getElementById('transactionList');

// 以下三個統計元素可以放在 HTML。
// 如果 HTML 還沒有這些元素，程式也不會報錯。
const totalIncomeElement = document.getElementById('totalIncome');
const totalExpenseElement = document.getElementById('totalExpense');
const balanceElement = document.getElementById('balance');

// ---------- State ----------

// 從 Local Storage 讀取資料。
// 如果讀取失敗或沒有資料，就使用空陣列。
let transactions = loadTransactions();

// null 代表目前是新增模式。
// 有 id 時代表正在編輯該筆交易。
let editingId = null;

// ---------- Event Listeners ----------

// 新增或更新交易。
addBtn.addEventListener('click', handleSubmit);

// 使用事件委派處理動態產生的 Edit、Delete 按鈕。
transactionList.addEventListener('click', handleTransactionListClick);

// 如果 HTML 有取消編輯按鈕，才加入事件。
if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', resetEditMode);
}

// 在輸入欄位按 Enter 時送出。
// textarea 按 Enter 應該換行，所以排除 noteInput。
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement !== noteInput) {
    handleSubmit();
  }
});

// ---------- Main Submit Function ----------

function handleSubmit() {
  // 取得表單資料。
  const formData = getFormData();

  // 驗證資料。
  const isValid = validateFormData(formData);

  // 驗證失敗時停止。
  if (!isValid) {
    return;
  }

  // 根據目前模式執行新增或更新。
  if (editingId === null) {
    createTransaction(formData);
  } else {
    updateTransaction(formData);
  }

  // 將最新資料存入 Local Storage。
  saveTransactions();

  // 重新顯示交易清單與統計資料。
  renderTransactions();
  renderSummary();

  // 清空輸入框並恢復新增模式。
  resetEditMode();
}

// ---------- Form Data ----------

function getFormData() {
  const amountText = amountInput.value.trim();

  return {
    user: userInput.value.trim(),
    title: titleInput.value.trim(),
    amountText,
    amount: Number(amountText),
    type: typeSelect.value,
    category: categorySelect.value,
    date: dateInput.value,
    note: noteInput.value.trim(),
  };
}

// ---------- Validation ----------

function validateFormData(formData) {
  clearError();

  if (formData.user === '') {
    showError('請輸入使用者名稱。', userInput);
    return false;
  }

  if (formData.title === '') {
    showError('請輸入交易項目。', titleInput);
    return false;
  }

  if (formData.amountText === '') {
    showError('請輸入交易金額。', amountInput);
    return false;
  }

  if (Number.isNaN(formData.amount) || formData.amount <= 0) {
    showError('請輸入大於 0 的有效金額。', amountInput);
    return false;
  }

  if (formData.type !== 'income' && formData.type !== 'expense') {
    showError('請選擇收入或支出類型。', typeSelect);
    return false;
  }

  if (formData.category === '') {
    showError('請選擇交易分類。', categorySelect);
    return false;
  }

  if (formData.date === '') {
    showError('請選擇交易日期。', dateInput);
    return false;
  }

  return true;
}

function showError(message, element) {
  errorMessage.innerText = message;

  if (element) {
    element.focus();
  }
}

function clearError() {
  errorMessage.innerText = '';
}

// ---------- Create ----------

function createTransaction(formData) {
  const transaction = {
    id: createTransactionId(),
    user: formData.user,
    title: formData.title,
    amount: formData.amount,
    type: formData.type,
    category: formData.category,
    date: formData.date,
    note: formData.note,
    createdAt: new Date().toISOString(),
  };

  transactions.push(transaction);
}

// ---------- Update ----------

function updateTransaction(formData) {
  const transactionIndex = transactions.findIndex((transaction) => transaction.id === editingId);

  // 找不到正在編輯的資料時停止。
  if (transactionIndex === -1) {
    showError('找不到要更新的交易資料。');
    return;
  }

  // 保留原本的 id 與建立時間，更新其他欄位。
  transactions[transactionIndex] = {
    ...transactions[transactionIndex],
    user: formData.user,
    title: formData.title,
    amount: formData.amount,
    type: formData.type,
    category: formData.category,
    date: formData.date,
    note: formData.note,
    updatedAt: new Date().toISOString(),
  };
}

// ---------- Edit ----------

function startEditTransaction(id) {
  const transaction = transactions.find((transaction) => transaction.id === id);

  if (!transaction) {
    showError('找不到要編輯的交易資料。');
    return;
  }

  // 將原本資料放回輸入欄位。
  userInput.value = transaction.user;
  titleInput.value = transaction.title;
  amountInput.value = transaction.amount;
  typeSelect.value = transaction.type;
  categorySelect.value = transaction.category;
  dateInput.value = transaction.date;
  noteInput.value = transaction.note;

  // 記錄目前正在編輯的交易 id。
  editingId = transaction.id;

  // 改變按鈕文字。
  addBtn.innerText = 'Update Transaction';

  // 顯示取消編輯按鈕。
  if (cancelEditBtn) {
    cancelEditBtn.hidden = false;
  }

  clearError();
  userInput.focus();
}

// ---------- Delete ----------

function deleteTransaction(id) {
  const transaction = transactions.find((transaction) => transaction.id === id);

  if (!transaction) {
    showError('找不到要刪除的交易資料。');
    return;
  }

  const shouldDelete = confirm(`確定要刪除「${transaction.title}」這筆交易嗎？`);

  if (!shouldDelete) {
    return;
  }

  transactions = transactions.filter((transaction) => transaction.id !== id);

  // 如果刪除的是目前正在編輯的資料，恢復新增模式。
  if (editingId === id) {
    resetEditMode();
  }

  saveTransactions();
  renderTransactions();
  renderSummary();
}

// ---------- Transaction List Events ----------

function handleTransactionListClick(event) {
  const editButton = event.target.closest('.edit-btn');
  const deleteButton = event.target.closest('.delete-btn');

  if (editButton) {
    const id = editButton.dataset.id;

    startEditTransaction(id);
    return;
  }

  if (deleteButton) {
    const id = deleteButton.dataset.id;

    deleteTransaction(id);
  }
}

// ---------- Render Transactions ----------

function renderTransactions() {
  if (transactions.length === 0) {
    transactionList.innerHTML = `
      <p class="empty-message">
        目前沒有交易資料。
      </p>
    `;

    return;
  }

  // 複製陣列後依日期排序，避免直接修改原陣列順序。
  const sortedTransactions = [...transactions].sort((transactionA, transactionB) => new Date(transactionB.date) - new Date(transactionA.date));

  transactionList.innerHTML = sortedTransactions
    .map((transaction) => {
      const typeText = transaction.type === 'income' ? '收入' : '支出';

      const amountSign = transaction.type === 'income' ? '+' : '-';

      return `
        <article
          class="transaction-card ${transaction.type}"
        >
          <div class="transaction-header">
            <div>
              <h2>
                ${escapeHTML(transaction.title)}
              </h2>

              <p class="transaction-user">
                使用者：${escapeHTML(transaction.user)}
              </p>
            </div>

            <p class="transaction-amount">
              ${amountSign} NT$ ${formatMoney(transaction.amount)}
            </p>
          </div>

          <div class="transaction-information">
            <p>
              <strong>類型：</strong>
              ${typeText}
            </p>

            <p>
              <strong>分類：</strong>
              ${escapeHTML(transaction.category)}
            </p>

            <p>
              <strong>日期：</strong>
              ${escapeHTML(transaction.date)}
            </p>

            <p>
              <strong>備註：</strong>
              ${transaction.note ? escapeHTML(transaction.note) : '無'}
            </p>
          </div>

          <div class="button-group">
            <button
              type="button"
              class="edit-btn"
              data-id="${transaction.id}"
            >
              Edit
            </button>

            <button
              type="button"
              class="delete-btn"
              data-id="${transaction.id}"
            >
              Delete
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

// ---------- Summary ----------

function renderSummary() {
  const totalIncome = transactions.filter((transaction) => transaction.type === 'income').reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions.filter((transaction) => transaction.type === 'expense').reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  // HTML 有對應元素時才更新。
  if (totalIncomeElement) {
    totalIncomeElement.innerText = `NT$ ${formatMoney(totalIncome)}`;
  }

  if (totalExpenseElement) {
    totalExpenseElement.innerText = `NT$ ${formatMoney(totalExpense)}`;
  }

  if (balanceElement) {
    balanceElement.innerText = `NT$ ${formatMoney(balance)}`;
  }
}

// ---------- Local Storage ----------

function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function loadTransactions() {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (!storedData) {
    return [];
  }

  try {
    const parsedData = JSON.parse(storedData);

    // 確保讀回來的資料是陣列。
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error('Failed to load transactions:', error);

    return [];
  }
}

// ---------- Reset Form ----------

function clearInputs() {
  userInput.value = '';
  titleInput.value = '';
  amountInput.value = '';
  noteInput.value = '';

  // 類型與分類恢復到第一個 option。
  typeSelect.selectedIndex = 0;
  categorySelect.selectedIndex = 0;

  // 日期預設為今天。
  setDefaultDate();

  clearError();
  userInput.focus();
}

function resetEditMode() {
  editingId = null;

  addBtn.innerText = 'Add Transaction';

  if (cancelEditBtn) {
    cancelEditBtn.hidden = true;
  }

  clearInputs();
}

// ---------- Helper Functions ----------

function createTransactionId() {
  // 瀏覽器支援 randomUUID 時優先使用。
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }

  // 舊瀏覽器的替代方案。
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatMoney(amount) {
  return Number(amount).toLocaleString('zh-TW');
}

function setDefaultDate() {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, '0');

  const day = String(today.getDate()).padStart(2, '0');

  dateInput.value = `${year}-${month}-${day}`;
}

// 防止使用者輸入 HTML 後被 innerHTML 執行。
function escapeHTML(value) {
  const div = document.createElement('div');

  div.textContent = String(value);

  return div.innerHTML;
}

// ---------- Initialize ----------

setDefaultDate();
renderTransactions();
renderSummary();
