# Day89 - TypeScript Review / Mini Member Management

## 中文

### 📌 專案介紹

Day89 是 TypeScript 基礎複習與綜合實作。

本次使用 TypeScript 製作一個簡易的會員管理系統（Mini Member Management），將前面學習過的 DOM 操作、陣列方法、型別定義、篩選功能以及 LocalStorage 整合在同一個專案中。

### 🎯 學習目標

- 複習 TypeScript 基本型別
- 使用 `interface` 定義物件結構
- 使用 `Member[]` 管理會員資料
- 操作 DOM 元素
- 使用表單新增會員
- 使用 `filter()` 篩選資料
- 使用 `findIndex()` 尋找資料
- 使用 `splice()` 刪除資料
- 使用 LocalStorage 保存資料
- 使用 `JSON.stringify()` 與 `JSON.parse()`
- 使用 `try...catch` 處理錯誤
- 使用 `??` Nullish Coalescing Operator
- 練習 TypeScript 的 Union Type
- 不使用 `innerHTML` 動態建立畫面

### 🛠️ 使用技術

- HTML5
- TypeScript
- DOM API
- LocalStorage
- JSON

### 📋 Member 資料結構

```ts
interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
```

### ✨ 主要功能

1. 顯示會員列表
2. 新增會員
3. 刪除會員
4. Active / Inactive 狀態管理
5. 全部 / Active / Inactive 篩選
6. 顯示目前篩選結果的會員人數
7. LocalStorage 資料保存
8. 重新整理頁面後恢復會員資料
9. 沒有會員時顯示提示訊息
10. 表單基本驗證

### 🔍 TypeScript 重點

#### Interface

使用 `interface` 規定 Member 必須具有指定的資料結構。

```ts
interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
```

#### Array Type

```ts
const members: Member[] = [];
```

代表 `members` 陣列中的資料必須符合 `Member`。

#### Filter

```ts
members.filter((member) => member.isActive);
```

根據會員狀態取得符合條件的會員。

#### FindIndex

```ts
const index = members.findIndex((member) => member.id === targetId);
```

取得指定會員在陣列中的位置。

#### LocalStorage

```ts
localStorage.setItem('members', JSON.stringify(members));
```

讀取資料時：

```ts
const data = localStorage.getItem('members');

const members = JSON.parse(data);
```

#### Try...Catch

```ts
try {
  return JSON.parse(data);
} catch {
  return null;
}
```

避免 LocalStorage 中的 JSON 資料格式錯誤造成整個程式停止。

### 🔄 資料流程

```text
新增會員
Form
↓
建立 Member
↓
members.push()
↓
saveMembers()
↓
renderMembers()
```

```text
刪除會員
Delete Button
↓
findIndex()
↓
splice()
↓
saveMembers()
↓
renderMembers()
```

```text
篩選會員
Select Change
↓
currentFilter
↓
filter()
↓
renderMembers()
```

### 💡 今日學習心得

Day89 將前幾天學習的 TypeScript 內容重新整合。

除了型別本身之外，也更熟悉資料與畫面之間的關係：

**資料改變 → 儲存資料 → 重新 Render UI**

透過會員管理系統，也再次練習了 `filter()`、`findIndex()`、`splice()`、LocalStorage 與錯誤處理。

---

# English

## 📌 Project Overview

Day89 is a TypeScript review project focused on building a Mini Member Management application.

This project combines TypeScript types, DOM manipulation, array methods, filtering, LocalStorage, and error handling into one small application.

## 🎯 Learning Goals

- Review TypeScript basic types
- Define object structures with `interface`
- Manage data using `Member[]`
- Manipulate DOM elements
- Add members through a form
- Filter data with `filter()`
- Find data with `findIndex()`
- Delete data with `splice()`
- Save data with LocalStorage
- Use `JSON.stringify()` and `JSON.parse()`
- Handle errors with `try...catch`
- Review Union Types
- Use the Nullish Coalescing Operator `??`
- Render elements without using `innerHTML`

## 🛠️ Technologies

- HTML5
- TypeScript
- DOM API
- LocalStorage
- JSON

## 📋 Member Structure

```ts
interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
```

## ✨ Features

1. Display member list
2. Add new members
3. Delete members
4. Manage Active / Inactive status
5. Filter members by status
6. Display the number of filtered members
7. Save data to LocalStorage
8. Restore data after refreshing the page
9. Display an empty-state message
10. Basic form validation

## 🔍 TypeScript Concepts

### Interface

An `interface` defines the required structure of a Member object.

```ts
interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
```

### Array Type

```ts
const members: Member[] = [];
```

This means every item inside `members` must follow the `Member` structure.

### Filtering

```ts
members.filter((member) => member.isActive);
```

Used to retrieve members that match a specific condition.

### Finding an Index

```ts
const index = members.findIndex((member) => member.id === targetId);
```

Used to locate a member before deleting it.

### LocalStorage

```ts
localStorage.setItem('members', JSON.stringify(members));
```

Data can later be restored with:

```ts
const data = localStorage.getItem('members');

const members = JSON.parse(data);
```

### Error Handling

```ts
try {
  return JSON.parse(data);
} catch {
  return null;
}
```

This prevents invalid JSON data from stopping the application.

## 🔄 Data Flow

```text
Add Member
Form
↓
Create Member
↓
members.push()
↓
saveMembers()
↓
renderMembers()
```

```text
Delete Member
Delete Button
↓
findIndex()
↓
splice()
↓
saveMembers()
↓
renderMembers()
```

```text
Filter Members
Select Change
↓
currentFilter
↓
filter()
↓
renderMembers()
```

## 💡 What I Learned

In Day89, I reviewed the TypeScript concepts learned in previous projects and combined them into a member management application.

I gained a better understanding of the relationship between application data and the UI:

**Update Data → Save Data → Re-render UI**

I also reviewed array methods, DOM manipulation, LocalStorage, JSON conversion, and error handling.

---

# 日本語

## 📌 プロジェクト概要

Day89では、TypeScriptの復習として簡単な会員管理システム（Mini Member Management）を作成しました。

これまで学習した型定義、DOM操作、配列メソッド、フィルター機能、LocalStorage、エラー処理などを一つのプロジェクトで復習しました。

## 🎯 学習目標

- TypeScriptの基本的な型を復習する
- `interface` でオブジェクトの構造を定義する
- `Member[]` で会員データを管理する
- DOMを操作する
- フォームから会員を追加する
- `filter()` でデータを絞り込む
- `findIndex()` でデータを検索する
- `splice()` でデータを削除する
- LocalStorageにデータを保存する
- `JSON.stringify()` と `JSON.parse()` を使用する
- `try...catch` でエラーを処理する
- Union Typeを復習する
- `??` 演算子を使用する
- `innerHTML` を使用せずに画面を生成する

## 🛠️ 使用技術

- HTML5
- TypeScript
- DOM API
- LocalStorage
- JSON

## 📋 Memberのデータ構造

```ts
interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
```

## ✨ 主な機能

1. 会員一覧の表示
2. 新規会員の追加
3. 会員の削除
4. Active / Inactive 状態の管理
5. 全件 / Active / Inactive の絞り込み
6. 絞り込み後の会員数表示
7. LocalStorageへのデータ保存
8. ページ更新後のデータ復元
9. 会員が存在しない場合のメッセージ表示
10. フォームの基本的な入力チェック

## 🔍 TypeScriptのポイント

### Interface

`interface` を使用して、Memberオブジェクトに必要なデータ構造を定義しました。

```ts
interface Member {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
```

### 配列の型

```ts
const members: Member[] = [];
```

`members` の中には `Member` 型のデータだけを格納できます。

### Filter

```ts
members.filter((member) => member.isActive);
```

条件に一致する会員データを取得します。

### FindIndex

```ts
const index = members.findIndex((member) => member.id === targetId);
```

削除対象の会員が配列の何番目に存在するかを取得します。

### LocalStorage

```ts
localStorage.setItem('members', JSON.stringify(members));
```

オブジェクトや配列をJSON文字列に変換して保存します。

読み込み時には：

```ts
const data = localStorage.getItem('members');

const members = JSON.parse(data);
```

を使用して元のデータに戻します。

### Try...Catch

```ts
try {
  return JSON.parse(data);
} catch {
  return null;
}
```

JSONデータに問題があった場合でも、アプリケーション全体が停止しないようにエラー処理を行いました。

## 🔄 データの流れ

```text
会員追加
Form
↓
Memberを作成
↓
members.push()
↓
saveMembers()
↓
renderMembers()
```

```text
会員削除
Delete Button
↓
findIndex()
↓
splice()
↓
saveMembers()
↓
renderMembers()
```

```text
会員絞り込み
Select Change
↓
currentFilter
↓
filter()
↓
renderMembers()
```

## 💡 学んだこと

Day89では、これまで学習したTypeScriptの内容を一つのアプリケーションにまとめて復習しました。

特に、

**データを変更する → データを保存する → UIを再描画する**

という基本的なデータフローへの理解を深めることができました。

また、`filter()`、`findIndex()`、`splice()`、LocalStorage、JSON、`try...catch` など、Webアプリケーション開発でよく使用する処理についても復習しました。
