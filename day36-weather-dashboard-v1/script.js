/* ================= DOM 元素 ================= */
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherList = document.getElementById("weatherList");
const message = document.getElementById("message");


/* ================= 預設城市 ================= */

const defaultCities = ["Tokyo","Taipei","Seoul","Osaka","New York"];


/* ================= 取得城市座標 ================= */
async function getLocation(city) {

  // 呼叫 Open Meteo 地理位置 API
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);

  const data = await response.json();

  // 找不到城市
  if (!data.results) {
    throw new Error("找不到這個城市");
  }

  // 回傳第一筆搜尋結果
  return data.results[0];
}

/* ================= 取得天氣資料 (經度,緯度) ================= */
async function getWeather(latitude, longitude) {

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);

  const data = await response.json();

  // 回傳目前天氣
  return data.current;
}

/* ================= 天氣狀態判斷 ================= */
function getWeatherStatus(weather) {

  let status = "";

  // 溫度判斷
  if (weather.temperature_2m >= 35) {
    status += "🥵 酷熱<br>";
  }
  else if (weather.temperature_2m >= 30) {
    status += "🔥 炎熱<br>";
  }
  else if (weather.temperature_2m <= 10) {
    status += "🥶 寒冷<br>";
  }
  else {
    status += "😊 舒適<br>";
  }

  // 風速判斷
  if (weather.wind_speed_10m >= 20) {
    status += "💨 強風<br>";
  }

  return status;
}


/* ================= 建立天氣卡片 ================= */
function renderWeather(city, weather) {

  // 建立 div
  const card = document.createElement("div");

  // 加入 class
  card.className = "card";

  // 卡片內容
  card.innerHTML = `
    <button class="delete-btn">刪除</button>

    <h2>${city}</h2>

    <p>🌡️ 溫度：${weather.temperature_2m}°C</p>

    <p>💧 濕度：${weather.relative_humidity_2m}%</p>

    <p>💨 風速：${weather.wind_speed_10m} km/h</p>

    <p>${getWeatherStatus(weather)}</p>
  `;

  // 取得刪除按鈕
  const deleteBtn = card.querySelector(".delete-btn");

  // 點擊刪除卡片
  deleteBtn.addEventListener("click",
    function () {
      card.remove();
    }
  );

  // 加入頁面
  weatherList.append(card);
}

/* ================= 搜尋城市 ================= */

async function searchCity(city) {

  try {

    message.innerText = "搜尋中...";

    // 取得座標
    const location = await getLocation(city);

    // 取得天氣
    const weather = await getWeather(location.latitude,location.longitude);

    // 顯示卡片
    renderWeather(location.name, weather);

    message.innerText = "";
  }
  catch (error) {
    message.innerText =
      error.message;
  }
}


/* ================= 搜尋按鈕 ================= */
searchBtn.addEventListener(
  "click",
  function () {

    const city = cityInput.value.trim();

    // 防止空字串
    if (city === "") {
      message.innerText = "請輸入城市名稱";
      return;
    }

    searchCity(city);

    // 清空輸入框
    cityInput.value = "";
  }
);


/* ================= 預設城市 ================= */
// 頁面載入時自動搜尋五個城市
defaultCities.forEach(
  function (city) {
    searchCity(city);
  }
);