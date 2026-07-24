const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const salaryInput = document.getElementById('salary');
const addBtn = document.getElementById('addBtn');
const errorMessage = document.getElementById('errorMessage');
const list = document.getElementById('list');

const employees = [];

let editingIndex = null;

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const position = positionInput.value.trim();
  const salaryText = salaryInput.value.trim();

  const salary = Number(salaryText);

  errorMessage.innerText = '';

  if (name === '') {
    errorMessage.innerText = '請輸入員工姓名。';
    nameInput.focus();
    return;
  }
  if (position === '') {
    errorMessage.innerText = '請輸入員工職位。';
    positionInput.focus();
    return;
  }
  if (salaryText === '') {
    errorMessage.innerText = '請輸入員工薪資。';
    salaryInput.focus();
    return;
  }

  // Number.isNaN() 用來判斷轉換後的值是不是有效數字。
  // 例如輸入 abc，Number('abc') 會得到 NaN。
  if (Number.isNaN(salary)) {
    errorMessage.innerText = '薪資必須是有效數字。';
    salaryInput.focus();
    return;
  }
  if (salary < 0) {
    errorMessage.innerText = '薪資不能小於 0。';
    salaryInput.focus();
    return;
  }

  const employee = {
    name,
    position,
    salary,
  };

  // 如果 editingIndex 是 null，代表目前是新增模式。
  if (editingIndex === null) {
    // 將新的員工物件放進 employees 陣列最後面。
    employees.push(employee);
  } else {
    // 如果 editingIndex 不是 null，代表目前是更新模式。

    // 使用新的 employee 物件取代陣列中原本的資料。
    employees[editingIndex] = employee;

    // 更新完成後，離開編輯模式。
    editingIndex = null;

    // 將按鈕文字改回 Add Employe e。
    addBtn.innerText = 'Add Employee';
  }

  // 根據最新的 employees 陣列重新產生畫面。
  renderEmployees();

  // 新增或更新完成後，清空所有輸入框。
  clearInputs();
});

// 這個函式負責將 employees 陣列顯示到畫面。
function renderEmployees() {
  // 如果目前沒有任何員工資料，就顯示空狀態。
  if (employees.length === 0) {
    list.innerHTML = `
      <p class="empty-message">目前沒有員工資料。</p>
    `;

    // 顯示完空狀態後，停止函式。
    return;
  }

  // 使用 map() 將每一個員工物件轉換成 HTML 字串。
  // 最後使用 join('') 將所有 HTML 字串合併。
  list.innerHTML = employees
    .map(
      (employee, index) => `
        <div class="employee-card">
          <p class="employee-number">員工 #${index + 1}</p>

          <p>
            <strong>姓名：</strong>
            ${employee.name}
          </p>

          <p>
            <strong>職位：</strong>
            ${employee.position}
          </p>

          <p>
            <strong>薪資：</strong>
            ${employee.salary}
          </p>

          <div class="button-group">
            <button type="button" class="edit-btn" data-index="${index}">
              Edit
            </button>

            <button type="button" class="delete-btn" data-index="${index}">
              Delete
            </button>
          </div>
        </div>
      `,
    )
    .join('');

  // 取得這次 render 後產生的所有 Edit 按鈕。
  const editButtons = document.querySelectorAll('.edit-btn');

  // 逐一替每一顆 Edit 按鈕加入 click 事件。
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // dataset.index 取得的是 String，所以使用 Number() 轉成數字。
      const index = Number(button.dataset.index);

      // 取得使用者想編輯的員工物件。
      const employee = employees[index];

      // 防止 index 無效時繼續執行。
      if (!employee) {
        return;
      }

      nameInput.value = employee.name;
      positionInput.value = employee.position;
      salaryInput.value = employee.salary;
      editingIndex = index;

      // 將按鈕文字改成 Update Employee。
      addBtn.innerText = 'Update Employee';

      // 清除可能存在的錯誤訊息。
      errorMessage.innerText = '';

      // 將游標移到姓名輸入框，方便使用者直接修改。
      nameInput.focus();
    });
  });

  // 取得這次 render 後產生的所有 Delete 按鈕。
  const deleteButtons = document.querySelectorAll('.delete-btn');

  // 逐一替每一顆 Delete 按鈕加入 click 事件。
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // 取得這顆按鈕對應的員工 index。
      const index = Number(button.dataset.index);

      // 取得準備刪除的員工。
      const employee = employees[index];

      // 如果找不到員工資料，就停止執行。
      if (!employee) {
        return;
      }

      // 顯示確認視窗。
      // 使用者按取消時，confirm() 會回傳 false。
      const shouldDelete = confirm(`確定要刪除員工「${employee.name}」嗎？`);

      // 如果使用者取消，就停止刪除。
      if (!shouldDelete) {
        return;
      }

      // 從 employees 陣列中刪除指定 index 的一筆資料。
      employees.splice(index, 1);

      // 如果刪除的就是目前正在編輯的資料，
      // 必須離開編輯模式並清空輸入框。
      if (editingIndex === index) {
        resetEditMode();
      } else if (editingIndex !== null && index < editingIndex) {
        // 如果刪除位置在正在編輯的資料前面，
        // 後面的陣列 index 會往前移一格。
        editingIndex -= 1;
      }

      // 陣列修改後重新顯示畫面。
      renderEmployees();
    });
  });
}

// 這個函式負責清空三個輸入框。
function clearInputs() {
  nameInput.value = '';
  positionInput.value = '';
  salaryInput.value = '';

  nameInput.focus();
}

// 這個函式負責離開編輯模式。
function resetEditMode() {
  // 將 editingIndex 恢復成 null。
  editingIndex = null;

  // 將按鈕文字恢復成新增模式。
  addBtn.innerText = 'Add Employee';

  // 清空輸入框。
  clearInputs();

  // 清除錯誤訊息。
  errorMessage.innerText = '';
}

// 這個函式將特殊 HTML 字元轉換成安全文字。
// 避免使用者輸入 HTML 標籤後被瀏覽器當成真正的 HTML 執行。
function escapeHTML(value) {
  // 建立一個暫時的 div 元素。
  const div = document.createElement('div');

  // 使用 textContent 放入文字。
  // textContent 不會將使用者輸入解析成 HTML。
  div.textContent = value;

  // 回傳已安全轉換的 HTML 字串。
  return div.innerHTML;
}

// 頁面載入時先執行一次。
// 因為 employees 一開始是空陣列，所以會顯示空狀態。
renderEmployees();
