# Day49 - Fetch API

## 🇹🇼 中文

### 📖 學習重點

今天正式深入學習 Fetch API，了解瀏覽器如何透過 HTTP 與伺服器溝通，並學會 GET 與 POST Request 的完整流程，以及 JSON 資料的傳送與解析方式。

### 📚 學習內容

- Fetch API
- HTTP Request
- HTTP Response
- GET Request
- POST Request
- Fetch Options
- Response Object
- response.status
- response.ok
- response.json()
- JSON.stringify()
- JSON.parse()
- Request Headers
- Request Body
- Content-Type
- try...catch
- Error Handling

### 💻 練習內容

- 使用 Fetch API 發送 GET Request
- 使用 Fetch API 發送 POST Request
- 使用 JSON.stringify() 傳送 JSON 資料
- 使用 response.json() 解析 API 回傳資料
- 使用 response.status 判斷 HTTP 狀態碼
- 使用 response.ok 判斷請求是否成功
- 使用 try...catch 處理非同步錯誤
- 建立第一個完整的 POST API 範例

### 🎯 學習心得

今天真正理解了 Fetch API 的完整資料流程。學會了 GET 與 POST 的差異，也了解為什麼 POST 必須使用 JSON.stringify() 將 JavaScript Object 轉成 JSON 字串，再透過 HTTP 傳送給伺服器；而伺服器回傳資料後，再透過 response.json() 解析成 JavaScript Object。這讓我更清楚前端與後端之間的資料交換方式，也為後續的 API 專案建立了完整基礎。

---

## 🇺🇸 English

### 📖 Topics

Learned the complete Fetch API workflow, including HTTP requests and responses, GET and POST requests, JSON serialization and parsing, and error handling using async/await.

### 📚 Contents

- Fetch API
- HTTP Request
- HTTP Response
- GET Request
- POST Request
- Fetch Options
- Response Object
- response.status
- response.ok
- response.json()
- JSON.stringify()
- JSON.parse()
- Request Headers
- Request Body
- Content-Type
- try...catch
- Error Handling

### 💻 Practice

- Send GET requests using Fetch API
- Send POST requests using Fetch API
- Serialize JavaScript objects with JSON.stringify()
- Parse API responses using response.json()
- Check HTTP status with response.status
- Validate requests using response.ok
- Handle asynchronous errors with try...catch
- Build the first complete POST request example

### 🎯 Reflection

Today I gained a solid understanding of how the Fetch API works. I learned the difference between GET and POST requests, why JavaScript objects must be converted into JSON strings before being sent to a server, and how API responses are converted back into JavaScript objects. This knowledge forms the foundation for future frontend projects that interact with REST APIs.

---

## 🇯🇵 日本語

### 📖 学習内容

Fetch API の基本から応用まで学習し、HTTP 通信の流れ、GET・POST リクエスト、JSON データの送受信、エラーハンドリングについて理解しました。

### 📚 学習項目

- Fetch API
- HTTP リクエスト
- HTTP レスポンス
- GET リクエスト
- POST リクエスト
- Fetch Options
- Response オブジェクト
- response.status
- response.ok
- response.json()
- JSON.stringify()
- JSON.parse()
- Request Headers
- Request Body
- Content-Type
- try...catch
- エラーハンドリング

### 💻 練習内容

- Fetch API を利用した GET リクエスト
- Fetch API を利用した POST リクエスト
- JSON.stringify() による JSON データ送信
- response.json() によるレスポンス解析
- response.status による HTTP ステータス確認
- response.ok による成功判定
- try...catch を使った非同期エラー処理
- 完全な POST リクエストの作成

### 🎯 学習感想

Fetch API を使った HTTP 通信の流れを理解しました。GET と POST の違いだけでなく、JavaScript のオブジェクトを JSON.stringify() で JSON 文字列へ変換してサーバーへ送信し、response.json() で再び JavaScript オブジェクトへ変換する仕組みを学びました。今後の React や REST API を利用するアプリケーション開発の基礎となる重要な内容でした。
