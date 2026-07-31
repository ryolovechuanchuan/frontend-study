const showName = document.getElementById('name');
const showAge = document.getElementById('age');
const showEmail = document.getElementById('email');
const showCountry = document.getElementById('country');
const showPrice = document.getElementById('price');
const showResult = document.getElementById('result');

const changeShow = document.getElementById('changeShow');

let count = 0;

changeShow?.addEventListener('click', () => {
  if (count % 2 === 1) {
    showUser();
  } else {
    showCart();
  }
  count++;
});

function showUser() {
  if (showResult) showResult.innerHTML = '';
  const user = {
    id: 1,
    name: 'Tom',
    age: 30,
    email: 'tom@test.com',
    country: 'taipei',
    isAdmin: false,
  };

  localStorage.setItem('users', JSON.stringify(user));

  const data = localStorage.getItem('users');

  if (data && showName && showAge && showEmail && showCountry) {
    const respond = JSON.parse(data);
    showName.textContent = '';
    showAge.textContent = '';
    showEmail.textContent = '';
    showCountry.textContent = '';
    showName.textContent = respond.name;
    showAge.textContent = String(respond.age);
    showEmail.textContent = respond.email;
    showCountry.textContent = respond.country;
  }
}

function showCart() {
  if (showName) showName.textContent = '';
  if (showAge) showAge.textContent = '';
  if (showEmail) showEmail.textContent = '';
  if (showCountry) showCountry.textContent = '';
  const cart = [
    {
      id: 1,
      name: 'iPhone 17',
      price: 42900,
      quantity: 1,
    },
    {
      id: 2,
      name: 'AirPods Pro',
      price: 7490,
      quantity: 2,
    },
  ];

  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

  localStorage.setItem('carts', JSON.stringify(cart));

  const data = localStorage.getItem('carts');

  if (data && showResult) {
    const response = JSON.parse(data) as CartItem[];
    showResult.innerHTML = '';
    response.forEach((item) => {
      showResult.innerHTML += `
        <p>商品 = ${item.name}</p>
        <p>價格 = ${String(item.price)}</p>
        `;
    });
  }
}
