// 顯示載入中
export function showLoading(message, result) {
  // 顯示提示文字
  message.innerText = "載入中...";

  // 清空結果區，避免舊資料還留在畫面上
  result.innerHTML = "";
}

// 顯示錯誤訊息
// text 是要顯示給使用者看的錯誤文字
export function showError(message, text) {
  message.innerText = text;
}

// 清除訊息
export function clearMessage(message) {
  message.innerText = "";
}

// 渲染圖片卡片
// result：結果區
// title：卡片標題
// imageUrl：圖片網址
export function renderImage(result, title, imageUrl) {
  result.innerHTML = `
    <div class="card">
      <h2>${title}</h2>
      <img src="${imageUrl}" alt="${title}">
    </div>
  `;
}

// 渲染笑話卡片
// joke.setup 是笑話題目
// joke.punchline 是笑話答案
export function renderJoke(result, joke) {
  result.innerHTML = `
    <div class="card">
      <h2>😂 Joke</h2>
      <p>${joke.setup}</p>
      <strong>${joke.punchline}</strong>
    </div>
  `;
}

// 渲染電影列表
// movies 是 OMDb API 回傳的電影陣列
export function renderMovies(result, movies) {
  // 先清空結果區
  result.innerHTML = "";

  // 對每一部電影建立一張卡片
  movies.forEach(function (movie) {
    // 有些電影沒有海報，OMDb 會回傳 "N/A"
    // 這裡用三元運算子判斷：
    // 如果是 N/A，就用預設圖片；否則使用真正的電影海報
    const poster =
      movie.Poster === "N/A"
        ? "https://via.placeholder.com/200x300?text=No+Image"
        : movie.Poster;

    // 把電影卡片加到結果區
    result.innerHTML += `
      <div class="card">
        <img src="${poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;
  });
}
