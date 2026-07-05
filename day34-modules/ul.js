export function showLoading(resultElement) {
  resultElement.innerText = "搜尋中...";
}

export function showError(resultElement,message) {
  resultElement.innerText = message;
}

export function showUser(resultElement,user) {
  resultElement.innerHTML =
    `
    <h2>${user.login}</h2>
    <img src="${user.avatar_url}" width="120" alt="${user.login}">
    <p>Followers：${user.followers}</p>
    <p>Following：${user.following}</p>
    <p>Public Repos：${user.public_repos}</p>
    `;
}