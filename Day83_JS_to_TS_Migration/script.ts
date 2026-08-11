function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  {
    name: 'keyboard',
    price: 1500,
  },
  {
    name: 'Mouse',
    price: 800,
  },
];

const quantity = 2;

function findProduct(name: string): Product | undefined {
  return products.find((product) => product.name === name);
}
console.log(findProduct('Mouse'));

const button = document.getElementById('addBtn') as HTMLButtonElement | null;

if (button) {
  button.addEventListener('click', (event) => {
    console.log(event.target);
  });
}

const input = document.getElementById('username') as HTMLInputElement | null;

if (input) {
  input.addEventListener('input', () => {
    console.log(input.value);
  });
}

interface User {
  id: number;
  name: string;
  email: string;
}

async function loadUsers(): Promise<void> {
  const response = await fetch('api/users');
  const users: User[] = await response.json();

  const list = document.getElementById('userList') as HTMLElement | null;

  if (list) {
    users.forEach((user) => {
      const li = document.createElement('li');

      li.textContent = user.name;

      list?.appendChild(li);
    });
  }
}

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
}

const users: User[] = [
  {
    id: 1,
    name: 'John',
    email: 'John@test.com',
  },
  {
    id: 2,
    name: 'Mary',
    email: 'Mary@test.com',
  },
];

function getUser(id: number): User | undefined {
  const user = users.find((item) => item.id === id);
  return user;
}

function searchUser(users: User[], name: string): string | null | undefined {
  const user = users.find((item) => item.name === name);
  if (user) {
    return user.email;
  }
  return null;
}
