import { fetchDog, fetchCat, fetchJoke, fetchMovies } from "./api.js";

import {
  showLoading,
  showError,
  clearMessage,
  renderImage,
  renderJoke,
  renderMovies,
} from "./ui.js";

import { saveHistory, renderHistory } from "./history.js";

import { setupTheme } from "./theme.js";

const dogBtn = document.getElementById("dogBtn");
const catBtn = document.getElementById("catBtn");
const jokeBtn = document.getElementById("jokeBtn");
const movieBtn = document.getElementById("movieBtn");
const themeBtn = document.getElementById("themeBtn");
const movieInput = document.getElementById("movieInput");
const result = document.getElementById("result");
const message = document.getElementById("message");
const historyList = document.getElementById("historyList");

// 狗狗 API
dogBtn.addEventListener("click", async function () {
  try {
    // 顯示「載入中...」，並清空舊結果
    showLoading(message, result);

    // 等待 fetchDog() 取得狗狗圖片網址
    const imageUrl = await fetchDog();

    // 成功取得資料後清除訊息
    clearMessage(message);

    // 把圖片渲染到畫面上
    renderImage(result, "🐶 Random Dog", imageUrl);
  } catch {
    // 如果 API 或網路發生錯誤，就顯示錯誤訊息
    showError(message, "狗狗圖片讀取失敗");
  }
});

// 貓咪 API
// 點擊貓咪按鈕後，呼叫 Cat API 並顯示圖片
catBtn.addEventListener("click", async function () {
  try {
    // 顯示載入狀態
    showLoading(message, result);

    // 等待 fetchCat() 取得貓咪圖片網址
    const imageUrl = await fetchCat();

    // 清除提示訊息
    clearMessage(message);

    // 把圖片顯示到畫面上
    renderImage(result, "😺 Random Cat", imageUrl);
  } catch {
    // 如果 API 或網路發生錯誤，就顯示錯誤訊息
    showError(message, "貓咪圖片讀取失敗");
  }
});

// 笑話 API
// 點擊笑話按鈕後，呼叫 Joke API 並顯示笑話
jokeBtn.addEventListener("click", async function () {
  try {
    // 顯示載入狀態
    showLoading(message, result);

    // 等待 fetchJoke() 取得笑話資料
    const joke = await fetchJoke();

    // 清除提示訊息
    clearMessage(message);

    // 把笑話顯示到畫面上
    renderJoke(result, joke);
  } catch {
    // 如果 API 或網路發生錯誤，就顯示錯誤訊息
    showError(message, "笑話讀取失敗");
  }
});

// 電影搜尋
// 這個函式會被「搜尋按鈕」和「Enter 鍵」共用
async function searchMovie() {
  // 取得輸入框內容，trim() 會移除前後空白
  const keyword = movieInput.value.trim();

  // 如果使用者沒有輸入內容，就顯示錯誤並停止函式
  if (keyword === "") {
    showError(message, "請輸入電影名稱");
    return;
  }

  try {
    // 顯示載入中，並清空舊結果
    showLoading(message, result);

    // 呼叫 OMDb API 搜尋電影
    const movies = await fetchMovies(keyword);

    // 成功取得資料後清除訊息
    clearMessage(message);

    // 將電影列表渲染到畫面上
    renderMovies(result, movies);

    // 儲存搜尋紀錄
    saveHistory(keyword, function () {
      // 儲存後重新渲染搜尋紀錄
      renderHistory(historyList, function (historyKeyword) {
        // 點擊歷史紀錄時，把該關鍵字放回輸入框
        movieInput.value = historyKeyword;

        // 再次執行搜尋
        searchMovie();
      });
    });

    // 搜尋完成後清空輸入框
    movieInput.value = "";
  } catch (error) {
    // 如果 fetchMovies 丟出錯誤，就顯示錯誤訊息
    showError(message, error.message);
  }
}

// 點擊搜尋按鈕時，執行電影搜尋
movieBtn.addEventListener("click", searchMovie);

// 在輸入框按下鍵盤時觸發
movieInput.addEventListener("keydown", function (event) {
  // 如果按下的是 Enter 鍵，就執行搜尋
  if (event.key === "Enter") {
    searchMovie();
  }
});

// 初始化深色模式功能
setupTheme(themeBtn);

// 頁面載入時，先渲染 localStorage 裡已有的搜尋紀錄
renderHistory(historyList, function (keyword) {
  // 點擊歷史紀錄時，把 keyword 放回輸入框
  movieInput.value = keyword;

  // 自動重新搜尋
  searchMovie();
});
