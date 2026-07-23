const username = document.getElementById('username');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

searchBtn.addEventListener('click', getData);

username.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getData();
  }
});

async function getData() {
  result.innerText = '載入中...';
  searchBtn.disabled = true;
  const userdata = username.value.trim();
  if (userdata === '') {
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${userdata}`);
    if (!response.ok) {
      throw new Error('GitHub user not found.');
    }

    const data = await response.json();

    result.innerHTML = `
    <img src="${data.avatar_url}" alt="${data.login}">
    <p>name : ${data.name}</p>
    <p>login : ${data.login}</p>    
    <p>followers : ${data.followers}</p>
    <p>following : ${data.following}</p>
    <p>bio : ${data.bio ?? 'Not provided'}</p>
    <p>public_repos : ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">
        View GitHub Profile
  `;
  } catch (error) {
    result.innerText = error.message;
  } finally {
    searchBtn.disabled = false;
  }
}
