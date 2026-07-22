const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

const query = window.location.search;
const params = new URLSearchParams(query);
const keyword = params.get('keyword');

function searchKeyword() {
  const search = searchInput.value.trim();

  if (!search) {
    alert('請輸入搜尋內容');
    return;
  }

  window.location.href = `index.html?keyword=${encodeURIComponent(search)}`;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchKeyword();
  }
});

if (keyword) {
  searchInput.value = keyword;
  result.innerHTML = `
    <h2>Search Result</h2>

<p>Keyword : ${keyword}</p>

<p>Found 0 results.</p>`;
} else {
  result.innerText = '請重新輸入搜尋內容';
}

searchBtn.addEventListener('click', searchKeyword);
