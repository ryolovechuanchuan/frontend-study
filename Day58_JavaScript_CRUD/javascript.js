const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const salaryInput = document.getElementById('salary');
const addBtn = document.getElementById('addBtn');
const errorMessage = document.getElementById('errorMessage');
const list = document.getElementById('list');

const employees = JSON.parse(localStorage.getItem('employees')) || [];

let editingIndex = null;

function saveToLocalStorage() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

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

  if (editingIndex === null) {
    employees.push(employee);
  } else {
    employees[editingIndex] = employee;

    editingIndex = null;

    addBtn.innerText = 'Add Employee';
  }

  saveToLocalStorage();
  renderEmployees();
  clearInputs();
});

function renderEmployees() {
  if (employees.length === 0) {
    list.innerHTML = `
      <p class="empty-message">目前沒有員工資料。</p>
    `;
    return;
  }

  list.innerHTML = employees
    .map(
      (employee, index) => `
        <div class="employee-card">
          <p class="employee-number">員工 #${index + 1}</p>

          <p><strong>姓名：</strong>${employee.name}</p>

          <p><strong>職位：</strong>${employee.position}</p>

          <p><strong>薪資：</strong>${employee.salary}</p>

          <div class="button-group">
            <button type="button" class="edit-btn" data-index="${index}">Edit</button>

            <button type="button" class="delete-btn" data-index="${index}">Delete</button>
          </div>
        </div>
      `,
    )
    .join('');

  const editButtons = document.querySelectorAll('.edit-btn');

  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);

      const employee = employees[index];

      if (!employee) {
        return;
      }

      nameInput.value = employee.name;
      positionInput.value = employee.position;
      salaryInput.value = employee.salary;
      editingIndex = index;

      addBtn.innerText = 'Update Employee';

      errorMessage.innerText = '';

      nameInput.focus();
    });
  });

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);

      const employee = employees[index];

      if (!employee) {
        return;
      }

      const shouldDelete = confirm(`確定要刪除員工「${employee.name}」嗎？`);

      if (!shouldDelete) {
        return;
      }

      employees.splice(index, 1);

      saveToLocalStorage();
      renderEmployees();
      clearInputs();
    });
  });
}

function clearInputs() {
  nameInput.value = '';
  positionInput.value = '';
  salaryInput.value = '';

  nameInput.focus();
}

renderEmployees();
