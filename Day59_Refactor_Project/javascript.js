const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const salaryInput = document.getElementById('salary');
const addBtn = document.getElementById('addBtn');
const errormessage = document.getElementById('errorMessage');
const list = document.getElementById('list');

let editingIndex = null;

const employees = JSON.parse(localStorage.getItem('employees')) || [];

function saveToLocalStorage() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

addBtn.addEventListener('click', () => {
  const success = createOrUpdateEmployee();
  if (!success) {
    return;
  }
  saveToLocalStorage();
  renderEmployees();
  cleanInput();
});

function renderEmployees() {
  if (employees.length === 0) {
    list.innerText = '目前無資料';
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

  bindEditButtons();
  bindDeleteButtons();
}

function cleanInputs() {
  nameInput.value = '';
  positionInput.value = '';
  salaryInput.value = '';

  errormessage.innerText = '';
  nameInput.focus();
}

function validateEmployee() {
  if (name === '') {
    errormessage.innerText = '請輸入名字';
    nameInput.focus();
    return false;
  }
  if (position === '') {
    errormessage.innerText = '請輸入職業';
    positionInput.focus();
    return false;
  }
  if (salaryText === '') {
    errormessage.innerText = '請輸入薪資';
    salaryInput.focus();
    return false;
  }

  if (Number.isNaN(salary)) {
    errormessage.innerText = '請輸入有效薪資';
    salaryInput.focus();
    return false;
  }

  if (salary < 0) {
    errormessage.innerText = '薪資不可為負值';
    salaryInput.focus();
    return false;
  }
}

function createOrUpdateEmployee() {
  const name = nameInput.value.trim();
  const position = positionInput.value.trim();

  const salaryText = salaryInput.value.trim();
  const salary = Number(salaryText);

  validateEmployee();

  errormessage.innerText = '';

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
  }

  addBtn.innerText = 'Add Employee';
  return true;
}

function bindEditButtons() {
  const editBtn = document.querySelectorAll('.edit-btn');
  editBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);

      const employee = employees[index];

      nameInput.value = employee.name;
      positionInput.value = employee.position;
      salaryInput.value = employee.salary;

      editingIndex = index;

      addBtn.innerText = 'Update Employee';
    });
  });
}

function bindDeleteButtons() {
  const delBtn = document.querySelectorAll('.delete-btn');
  delBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);

      const employee = employees[index];

      const shouldDelete = confirm(`確定要刪除${employee.name}嗎?`);

      if (!shouldDelete) {
        return;
      }

      employees.splice(index, 1);

      if (editingIndex === index) {
        resetEditMode();
      } else if (editingIndex !== null && index < editingIndex) {
        editingIndex -= 1;
      }
      saveToLocalStorage();
      renderEmployees();
    });
  });
}

function resetEditMode() {
  editingIndex = null;

  addBtn.innerText = 'Add Employee';
  cleanInputs();
}
renderEmployees();
