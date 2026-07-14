# Day47 - Promise Basics

## 🇹🇼 中文

### 📖 學習重點

今天學習了 JavaScript Promise 的基本概念，以及如何利用 Promise 解決非同步程式中的 Callback Hell 問題。

### 📚 學習內容

- Synchronous vs Asynchronous
- Callback
- Callback Hell
- Promise
- Promise States
  - Pending
  - Fulfilled
  - Rejected
- resolve()
- reject()
- .then()
- .catch()
- Promise Chain
- Promise + setTimeout()
- Passing Data with Promise
- Returning Values in Promise Chain

### 💻 練習內容

- 建立 Promise
- 使用 resolve() 回傳資料
- 使用 reject() 處理錯誤
- Promise + setTimeout()
- Promise 傳遞字串
- Promise 傳遞物件
- Promise Chain
- Data Transformation

### 🎯 學習心得

今天最大的收穫是理解 Promise 並不是新的執行方式，而是將 Callback 包裝成更容易閱讀的流程。也理解了 `.then()` 接收的是 Promise 完成後所傳遞的資料，以及 Promise Chain 如何一步一步傳遞資料。

---

## 🇺🇸 English

### 📖 Topics

Learned the fundamentals of JavaScript Promise and how it solves Callback Hell in asynchronous programming.

### 📚 Contents

- Synchronous vs Asynchronous
- Callback
- Callback Hell
- Promise
- Promise States
  - Pending
  - Fulfilled
  - Rejected
- resolve()
- reject()
- .then()
- .catch()
- Promise Chain
- Promise with setTimeout()
- Passing Data with Promise
- Returning Values in Promise Chain

### 💻 Practice

- Creating Promises
- Using resolve()
- Using reject()
- Promise with setTimeout()
- Passing strings
- Passing objects
- Promise Chain
- Data transformation

### 🎯 Reflection

Today I learned that Promise is not a new execution model. It is a cleaner way to manage callbacks. I also understood how `.then()` receives data from `resolve()` and how Promise Chain passes transformed data through multiple steps.

---

## 🇯🇵 日本語

### 📖 学習内容

JavaScript の Promise の基本概念と、非同期処理における Callback Hell を Promise によって解決する方法を学びました。

### 📚 学習項目

- 同期処理・非同期処理
- Callback
- Callback Hell
- Promise
- Promise の状態
  - Pending
  - Fulfilled
  - Rejected
- resolve()
- reject()
- .then()
- .catch()
- Promise Chain
- Promise と setTimeout()
- Promise によるデータ受け渡し
- Promise Chain の return

### 💻 練習内容

- Promise の作成
- resolve() の利用
- reject() の利用
- Promise + setTimeout()
- 文字列データの受け渡し
- オブジェクトの受け渡し
- Promise Chain
- データ変換

### 🎯 学習感想

Promise は新しい処理方式ではなく、Callback をより読みやすく管理する仕組みであることを理解しました。また、`.then()` が `resolve()` の値を受け取り、Promise Chain によってデータが順番に渡される仕組みも学びました。
