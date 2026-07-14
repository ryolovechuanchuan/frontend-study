const picture = document.getElementById('picture');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const country = document.getElementById('country');
const btn = document.getElementById('btn');

async function getUser() {
  btn.disabled = true;
  btn.innerText = '取得中...';
  try {
    userName.innerText = 'Loading...';
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error('找不到使用者');
    }
    const data = await response.json();
    const userData = data.results[0];
    renderUser(userData);
  } catch (error) {
    userName.innerText = error.message;
  } finally {
    btn.disabled = false;
    btn.innerText = '取得新使用者';
  }
}

function renderUser(userData) {
  picture.src = userData.picture.large;
  userName.innerText = userData.name.first + ' ' + userData.name.last;
  email.innerText = userData.email;
  country.innerText = userData.location.country;
}

getUser();
btn.addEventListener('click', getUser);
