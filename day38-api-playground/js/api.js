// OMDb API 的 API Key，用來搜尋電影資料
const apiKey = "31f01aca";

// 取得狗狗圖片
// async function 代表這個函式裡面可以使用 await 等待非同步結果
export async function fetchDog() {
  // 使用 fetch 向 Dog API 發送請求，取得隨機狗狗圖片資料
  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  // 將 API 回傳的 JSON 資料轉成 JavaScript 物件
  const data = await response.json();

  // Dog API 的圖片網址放在 data.message
  return data.message;
}

// 取得貓咪圖片
export async function fetchCat() {
  // 使用 fetch 向 Cat API 發送請求
  const response = await fetch("https://api.thecatapi.com/v1/images/search");

  // 將 API 回傳的 JSON 資料轉成 JavaScript 物件
  const data = await response.json();

  // Cat API 回傳的是陣列，所以用 data[0].url 取得第一張圖片網址
  return data[0].url;
}

// 取得笑話
export async function fetchJoke() {
  // 使用 fetch 向 Joke API 發送請求
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  );

  // 將 API 回傳的 JSON 資料轉成 JavaScript 物件
  const data = await response.json();

  // 回傳整個笑話物件，之後 ui.js 會使用 setup 和 punchline
  return data;
}

// 搜尋電影
// keyword 是使用者輸入的電影關鍵字
export async function fetchMovies(keyword) {
  // 使用 OMDb API 搜尋電影，s=keyword 代表用關鍵字搜尋
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`,
  );

  // 將 API 回傳的 JSON 資料轉成 JavaScript 物件
  const data = await response.json();

  // 如果 OMDb API 找不到電影，Response 會是 "False"
  if (data.Response === "False") {
    // 主動丟出錯誤，讓 main.js 的 catch 可以接住並顯示錯誤訊息
    throw new Error("找不到電影");
  }

  // 回傳電影搜尋結果陣列
  return data.Search;
}
