interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const Products: Product[] = [
  {
    id: 1,
    name: 'Mouse',
    price: 300,
    description: 'Apple',
  },
  {
    id: 2,
    name: 'Keyboard',
    price: 500,
  },
];

let username: string | null = null;

const displayName = username ?? 'Guest';

interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

const memberForm = document.querySelector('#member-form') as HTMLFormElement;
const nameInput = document.querySelector('#name') as HTMLInputElement;
const ageInput = document.querySelector('#age') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const activeInput = document.querySelector('#isActive') as HTMLInputElement;
const statusFilter = document.querySelector('#status-filter') as HTMLSelectElement;
const memberCount = document.querySelector('#member-count') as HTMLParagraphElement;
const memberList = document.querySelector('#member-list') as HTMLDivElement;

let currentFilter = 'all';

function loadMembers(): Member[] | null {
  const data = localStorage.getItem('members');

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as Member[];
  } catch {
    return null;
  }
}

function saveMembers(): void {
  localStorage.setItem('members', JSON.stringify(members));
}

const members: Member[] = loadMembers() ?? [
  {
    id: 1,
    name: 'John',
    age: 30,
    email: 'John@test.com',
    isActive: true,
  },
  {
    id: 2,
    name: 'Mary',
    age: 25,
    email: 'Mary@test.com',
    isActive: false,
  },
];

function getFilteredMembers(): Member[] {
  if (currentFilter === 'active') {
    return members.filter((member) => member.isActive === true);
  }

  if (currentFilter === 'inactive') {
    return members.filter((member) => member.isActive === false);
  }

  return members;
}

function renderMembers(): void {
  memberList.replaceChildren();

  const filteredMembers = getFilteredMembers();

  if (filteredMembers.length === 0) {
    const emptyMessage = document.createElement('p');

    emptyMessage.textContent = '目前沒有會員';

    memberList.appendChild(emptyMessage);

    return;
  }

  filteredMembers.forEach((member) => {
    const item = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = member.name;

    const age = document.createElement('p');
    age.textContent = `年齡：${member.age}`;

    const email = document.createElement('p');
    email.textContent = `Email：${member.email}`;

    const status = document.createElement('p');

    status.textContent = member.isActive ? '狀態：Active' : '狀態：Inactive';

    const deleteButton = document.createElement('button');

    deleteButton.textContent = '刪除';

    deleteButton.addEventListener('click', () => {
      const index = members.findIndex((item) => item.id === member.id);

      if (index === -1) {
        return;
      }

      members.splice(index, 1);

      saveMembers();

      renderMembers();
      renderMemberCount();
    });

    item.appendChild(name);
    item.appendChild(age);
    item.appendChild(email);
    item.appendChild(status);
    item.appendChild(deleteButton);

    memberList.appendChild(item);
  });
}

function renderMemberCount(): void {
  const filteredMembers = getFilteredMembers();

  memberCount.textContent = `會員人數：${filteredMembers.length}`;
}

memberForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === '' || ageInput.value.trim() === '' || emailInput.value.trim() === '') {
    alert('資料有誤，請重新輸入');

    nameInput.focus();

    return;
  }

  const newMember: Member = {
    id: Date.now(),
    name: nameInput.value.trim(),
    age: Number(ageInput.value),
    email: emailInput.value.trim(),
    isActive: activeInput.checked,
  };

  members.push(newMember);

  saveMembers();

  renderMembers();
  renderMemberCount();

  memberForm.reset();
});

statusFilter.addEventListener('change', () => {
  currentFilter = statusFilter.value;

  renderMembers();
  renderMemberCount();
});

renderMembers();
renderMemberCount();
