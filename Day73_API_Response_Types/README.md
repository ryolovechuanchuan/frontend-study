# Day73 - API Response Types

## 中文

### 專案介紹

Day73 練習 TypeScript 與 Fetch API 的整合，學習如何取得 API 資料、建立 Interface 描述資料型別，以及利用型別斷言(Type Assertion)安全地存取 API 回傳內容。

此外，也練習了 HTTP Status Code、錯誤處理（try...catch）以及巢狀物件（Nested Object）的使用方式。

---

### 學習重點

- Fetch API
- async / await
- Response 物件
- response.json()
- Interface
- Type Assertion (`as`)
- Object vs Array
- User / User[]
- HTTP Status Code
- response.ok
- response.status
- try...catch
- throw new Error()
- Error Handling
- Nested Object
- Nested Interface

---

### 本日完成內容

- 使用 Fetch API 呼叫 REST API
- 使用 async / await 處理非同步
- 建立 Interface 定義 API 回傳資料
- 使用 `as User`
- 使用 `as User[]`
- 判斷 HTTP Status
- 使用 `response.ok`
- 使用 try...catch 處理例外
- 使用 `instanceof Error`
- 建立巢狀 Interface
- 讀取 Address、Geo、Company 等巢狀資料

---

### API

https://jsonplaceholder.typicode.com/

---

### 使用技術

- HTML
- TypeScript
- Fetch API

---

## English

### Project Overview

Day73 focuses on integrating TypeScript with the Fetch API. This project demonstrates how to fetch data from REST APIs, define data structures using interfaces, and safely access API responses with Type Assertions.

It also covers HTTP Status Codes, error handling using try...catch, and nested object structures.

---

### Learning Topics

- Fetch API
- async / await
- Response Object
- response.json()
- Interface
- Type Assertion (`as`)
- Object vs Array
- User / User[]
- HTTP Status Codes
- response.ok
- response.status
- try...catch
- throw new Error()
- Error Handling
- Nested Object
- Nested Interface

---

### Features

- Fetch data from REST APIs
- Handle asynchronous requests
- Define API response types with interfaces
- Use `as User`
- Use `as User[]`
- Check HTTP Status
- Validate responses using `response.ok`
- Handle errors with try...catch
- Use `instanceof Error`
- Create nested interfaces
- Access nested Address, Geo and Company objects

---

### API

https://jsonplaceholder.typicode.com/

---

### Technologies

- HTML
- TypeScript
- Fetch API

---

## 日本語

### プロジェクト概要

Day73では、TypeScript と Fetch API を組み合わせた API 通信について学習しました。

REST APIからデータを取得し、Interface を使ってレスポンスの型を定義し、Type Assertion を利用して安全にデータへアクセスする方法を練習しています。

また、HTTPステータスコード、例外処理（try...catch）、ネストしたオブジェクト（Nested Object）の扱いについても学習しました。

---

### 学習内容

- Fetch API
- async / await
- Response オブジェクト
- response.json()
- Interface
- Type Assertion（`as`）
- Object と Array
- User / User[]
- HTTP Status Code
- response.ok
- response.status
- try...catch
- throw new Error()
- エラーハンドリング
- ネストしたオブジェクト
- ネストした Interface

---

### 実装内容

- REST APIからデータ取得
- async / await の利用
- Interface による型定義
- `as User`
- `as User[]`
- HTTPステータスの確認
- `response.ok` による判定
- try...catch による例外処理
- `instanceof Error`
- ネストした Interface の作成
- Address・Geo・Company などのデータ取得

---

### API

https://jsonplaceholder.typicode.com/

---

### 使用技術

- HTML
- TypeScript
- Fetch API

---
