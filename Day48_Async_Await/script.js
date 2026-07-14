const show = document.getElementById('show');
const userid = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const picture = document.getElementById('picture');
const btn = document.getElementById('btn');

Promise.resolve(100).then((num) => {
  console.log(num);
});

async function test() {
  try {
    const num = await Promise.resolve(100);
    console.log(num);
  } catch (error) {
    console.log(error);
  }
}

Promise.resolve({
  name: 'Tom',
  age: 25,
}).then((user) => {
  console.log(user.name);
  console.log(user.age);
});

async function test2() {
  const user = await Promise.resolve({
    name: 'Tom',
    age: 25,
  });
  try {
    console.log(user.name);
    console.log(user.age);
  } catch (error) {
    console.log(error);
  }
}
test2();

async function test3() {
  let num = await Promise.resolve(10);
  num = num * 2;
  console.log(num);
}
test3();

Promise.resolve(5)
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num + 5;
  })
  .then((num) => {
    console.log(num);
  });

async function test4() {
  let num = await Promise.resolve(5);
  num = num * 2;
  num = num + 5;
  console.log(num);
}
test4();

async function test5() {
  try {
    const user = await Promise.resolve({
      name: 'Tom',
      age: 25,
    });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
test5();

async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('找不到使用者');
    }
    const data = await response.json();
    console.log(data.name);
    console.log(data.username);
    console.log(data.email);
  } catch (error) {
    console.log(error.message);
  }
}
getUser();

async function getUser2() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    console.log(data.results[0].name.first);
    console.log(data.results[0].email);
    console.log(data.results[0].location.country);
    console.log(data.results[0].picture.large);

    userid.textContent = data.results[0].name.first;
    email.textContent = data.results[0].email;
    country.textContent = data.results[0].location.country;
    picture.src = data.results[0].picture.large;
  } catch (error) {
    console.log(error);
  }
}

getUser2();

btn.addEventListener('click', () => {
  getUser2();
});
