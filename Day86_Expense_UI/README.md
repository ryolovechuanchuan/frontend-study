# Day 86 - Expense UI

🌐 **Languages / 語言 / 言語**

[繁體中文](#繁體中文) | [English](#english) | [日本語](#日本語)

---

# 繁體中文

## 📌 專案介紹

Day 86 的主題是 **Expense UI（支出管理介面）**。

本專案使用 **HTML、CSS、TypeScript 與 DOM API** 製作一個簡單的支出管理工具。

使用者可以新增與刪除支出紀錄，系統會自動重新計算總支出，並透過 `localStorage` 保存資料，即使重新整理頁面，資料仍然可以保留。

本專案不使用 `innerHTML`，所有動態 UI 元素皆透過 DOM API 建立與操作。

---

## ✨ 功能

- 顯示支出紀錄
- 新增支出
- 刪除支出
- 自動計算總支出
- 無資料時顯示提示訊息
- 使用 `localStorage` 保存資料
- 頁面重新整理後恢復資料
- 使用 HTML 表單驗證
- Responsive Web Design
- 不使用 `innerHTML`

---

## 🛠 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- Local Storage
- JSON
- Flexbox
- CSS Grid
- Responsive Web Design

---

## 📚 本日學習重點

### 1. TypeScript 型別

使用 `Expense` 型別定義每筆支出的資料結構：

```ts
type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
  note: string;
};
```

---

### 2. DOM 元素取得

使用 `querySelector()` 取得 HTML 元素，並指定對應的 TypeScript DOM 型別：

```ts
const expenseList = document.querySelector('#expense-list') as HTMLDivElement;

const expenseForm = document.querySelector('#expense-form') as HTMLFormElement;

const amountInput = document.querySelector('#amount') as HTMLInputElement;
```

---

### 3. 動態建立 UI

不使用 `innerHTML`，改用：

```ts
document.createElement();
element.textContent = '';
element.appendChild();
element.replaceChildren();
```

建立與更新畫面。

---

### 4. 新增支出

取得表單資料後建立新的 `Expense`：

```ts
const newExpense: Expense = {
  id: Date.now(),
  category: categoryInput.value,
  amount: Number(amountInput.value),
  date: dateInput.value,
  note: noteInput.value,
};

expenses.push(newExpense);
```

---

### 5. 刪除支出

使用 `findIndex()` 找到指定資料，再透過 `splice()` 刪除：

```ts
const index = expenses.findIndex((item) => expense.id === item.id);

if (index === -1) return;

expenses.splice(index, 1);
```

刪除資料後重新渲染 UI 與總金額。

---

### 6. Local Storage

使用 `JSON.stringify()` 將陣列轉換成 JSON 字串後保存：

```ts
localStorage.setItem('data', JSON.stringify(expenses));
```

讀取資料：

```ts
const data = localStorage.getItem('data');

const expenses: Expense[] = data ? JSON.parse(data) : defaultExpenses;
```

因此重新整理瀏覽器後，使用者的支出資料仍然可以保留。

---

## 🔄 資料流程

```text
使用者輸入表單
      ↓
Submit Event
      ↓
建立 Expense
      ↓
expenses.push()
      ↓
localStorage
      ↓
renderExpenses()
      ↓
renderTotal()
      ↓
更新畫面
```

刪除時：

```text
點擊刪除
    ↓
findIndex()
    ↓
splice()
    ↓
localStorage
    ↓
renderExpenses()
    ↓
renderTotal()
```

---

## 💡 學習心得

透過這次練習，我更熟悉 TypeScript 與 DOM 操作之間的關係。

除了使用 `createElement()`、`appendChild()` 和 `textContent` 動態建立 UI，也實際理解了資料與畫面應該分開管理。

新增或刪除支出時，先修改 `expenses` 資料，再重新渲染畫面，而不是只直接修改 DOM。

同時透過 `localStorage` 與 JSON，實作了簡單的資料持久化功能。

---

# English

## 📌 Project Overview

Day 86 focuses on building an **Expense UI**.

This project is a simple expense tracker built with **HTML, CSS, TypeScript, and the DOM API**.

Users can add and delete expenses, while the application automatically recalculates the total amount. Expense data is stored in `localStorage`, allowing it to persist after the page is refreshed.

The project does not use `innerHTML`. Dynamic UI elements are created and managed through DOM APIs.

---

## ✨ Features

- Display expense records
- Add new expenses
- Delete expenses
- Automatically calculate total expenses
- Display an empty-state message
- Store data with `localStorage`
- Restore data after page refresh
- HTML form validation
- Responsive Web Design
- No `innerHTML`

---

## 🛠 Technologies

- HTML5
- CSS3
- TypeScript
- DOM API
- Local Storage
- JSON
- Flexbox
- CSS Grid
- Responsive Web Design

---

## 📚 What I Learned

### TypeScript Data Modeling

Defined the structure of expense data using a custom type:

```ts
type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
  note: string;
};
```

### DOM Manipulation

Used typed DOM elements with `querySelector()` and dynamically created UI elements with:

```ts
document.createElement();
element.textContent = '';
element.appendChild();
element.replaceChildren();
```

### Adding Expenses

Form values are converted into an `Expense` object and added to the expense array.

```ts
expenses.push(newExpense);
```

### Deleting Expenses

Used `findIndex()` and `splice()` to remove the selected expense from the data source.

### Local Storage

Converted the expense array into JSON before storing it:

```ts
localStorage.setItem('data', JSON.stringify(expenses));
```

Stored data is restored using:

```ts
JSON.parse();
```

---

## 🔄 Data Flow

```text
Form Input
    ↓
Submit Event
    ↓
Create Expense
    ↓
Update expenses[]
    ↓
Save to localStorage
    ↓
Render Expense List
    ↓
Calculate Total
    ↓
Update UI
```

---

## 💡 Reflection

Through this project, I gained a better understanding of how TypeScript works with the DOM.

Instead of directly modifying only the displayed HTML, the application treats the `expenses` array as the main data source. When an expense is added or deleted, the data is updated first and the UI is rendered again.

I also practiced basic data persistence using `localStorage`, `JSON.stringify()`, and `JSON.parse()`.

---

# 日本語

## 📌 プロジェクト概要

Day 86 では、**Expense UI（支出管理画面）**を作成しました。

このプロジェクトは **HTML、CSS、TypeScript、DOM API** を使用したシンプルな支出管理アプリです。

支出の追加・削除ができ、支出データが変更されると合計金額も自動的に更新されます。

また、`localStorage` を利用してデータを保存しているため、ブラウザを更新しても支出データを保持できます。

`innerHTML` は使用せず、DOM API を利用して動的に画面を生成しています。

---

## ✨ 主な機能

- 支出一覧の表示
- 支出の追加
- 支出の削除
- 合計支出額の自動計算
- データがない場合のメッセージ表示
- `localStorage` によるデータ保存
- ページ更新後のデータ復元
- HTML フォームバリデーション
- レスポンシブ対応
- `innerHTML` を使用しない DOM 操作

---

## 🛠 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- Local Storage
- JSON
- Flexbox
- CSS Grid
- Responsive Web Design

---

## 📚 学習内容

### TypeScript によるデータ型の定義

`Expense` 型を作成し、支出データの構造を定義しました。

```ts
type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
  note: string;
};
```

### DOM 操作

`querySelector()` で HTML 要素を取得し、TypeScript の DOM 型を指定しました。

また、以下の DOM API を使用して画面を動的に生成しました。

```ts
document.createElement();
element.textContent = '';
element.appendChild();
element.replaceChildren();
```

### 支出の追加

フォームから入力値を取得し、新しい `Expense` オブジェクトを作成して配列に追加しました。

```ts
expenses.push(newExpense);
```

### 支出の削除

`findIndex()` で対象データを検索し、`splice()` で配列から削除しました。

データ削除後、支出一覧と合計金額を再描画しています。

### Local Storage

`JSON.stringify()` を利用して支出データを JSON 文字列に変換し、`localStorage` に保存しました。

```ts
localStorage.setItem('data', JSON.stringify(expenses));
```

ページ読み込み時には、

```ts
JSON.parse();
```

を使用して保存されたデータを復元しています。

---

## 🔄 データフロー

```text
フォーム入力
    ↓
Submit Event
    ↓
Expense を作成
    ↓
expenses[] を更新
    ↓
localStorage に保存
    ↓
支出一覧を再描画
    ↓
合計金額を再計算
    ↓
画面を更新
```

---

## 💡 振り返り

今回の課題を通して、TypeScript と DOM 操作の関係について理解を深めることができました。

画面上の DOM だけを直接変更するのではなく、`expenses` 配列をデータの基準として管理し、データを変更した後に UI を再描画する流れを実装しました。

また、`localStorage`、`JSON.stringify()`、`JSON.parse()` を利用することで、ブラウザ上での基本的なデータ永続化についても学習しました。

---

## 🚀 Next Step

**Day 87 - Expense Filter**

次回は `filter()` を利用して、カテゴリー別に支出データを絞り込む機能を実装します。
