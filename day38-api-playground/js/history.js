// 從 localStorage 讀取 movieHistory
// JSON.parse 會把字串轉回陣列
// 如果 localStorage 裡沒有資料，就使用空陣列 []
let searchHistory = JSON.parse(localStorage.getItem("movieHistory")) || [];

// 儲存搜尋紀錄
// keyword：使用者搜尋的電影關鍵字
// renderCallback：儲存完後，用來重新渲染畫面的函式
export function saveHistory(keyword, renderCallback) {
  // 如果搜尋紀錄裡還沒有這個關鍵字，才加入
  // 這樣可以避免重複顯示同一個搜尋詞
  if (!searchHistory.includes(keyword)) {
    // unshift 會把新資料加到陣列最前面
    searchHistory.unshift(keyword);
  }

  // 只保留最近 5 筆搜尋紀錄
  searchHistory = searchHistory.slice(0, 5);

  // localStorage 只能存字串，所以用 JSON.stringify 把陣列轉成字串
  localStorage.setItem("movieHistory", JSON.stringify(searchHistory));

  // 呼叫外部傳進來的 callback，更新搜尋紀錄畫面
  renderCallback(searchHistory);
}

// 渲染搜尋紀錄
// historyList：HTML 裡的搜尋紀錄容器
// onClick：點擊搜尋紀錄時要執行的函式
export function renderHistory(historyList, onClick) {
  // 先清空畫面，避免重複累加
  historyList.innerHTML = "";

  // 對每一筆搜尋紀錄建立一個 span
  searchHistory.forEach(function (keyword) {
    // 建立 span 元素
    const span = document.createElement("span");

    // 加上 CSS class，讓它套用 .history-item 樣式
    span.className = "history-item";

    // 顯示搜尋關鍵字
    span.innerText = keyword;

    // 點擊歷史紀錄時，把 keyword 傳回 main.js
    span.addEventListener("click", function () {
      onClick(keyword);
    });

    // 把 span 加到 historyList 裡
    historyList.append(span);
  });
}
