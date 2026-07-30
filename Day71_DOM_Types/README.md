# Day71_DOM_Types

---

# 🇹🇼 中文

## 📖 專案介紹

Day71 學習 **TypeScript DOM Types（DOM 型別）**。

本日重點在於了解 TypeScript 如何操作 HTML 元素，學習 DOM 元素的型別、事件型別，以及如何安全地存取 DOM 物件，為之後學習 React 的 `useRef`、事件處理（Event Handling）與表單操作打下基礎。

---

## 🚀 學習目標

- 學習 `getElementById()`
- 學習 `querySelector()`
- 學習 Null Check
- 學習 Type Assertion (`as`)
- 學習 MouseEvent
- 學習 KeyboardEvent
- 學習 Input Event
- 學習 SubmitEvent

---

## 🛠️ 使用技術

- TypeScript
- DOM API
- HTML5
- JavaScript (Compiled)
- VS Code

---

## 📚 學習內容

### getElementById()

```ts
const btn = document.getElementById('btn');
```

取得指定 id 的 HTML 元素。

---

### Null Check

```ts
const btn = document.getElementById('btn');

if (btn) {
  btn.addEventListener('click', () => {
    console.log('Button Click');
  });
}
```

避免元素不存在時發生錯誤。

---

### Type Assertion

```ts
const input = document.getElementById('username') as HTMLInputElement;

console.log(input.value);
```

指定元素型別，取得 Input 專屬屬性。

---

### querySelector()

```ts
const title = document.querySelector('h1');

if (title) {
  console.log(title.textContent);
}
```

取得第一個符合條件的元素。

---

### MouseEvent

```ts
btn?.addEventListener('click', (event: MouseEvent) => {
  console.log(event.clientX);
  console.log(event.clientY);
});
```

取得滑鼠點擊位置。

---

### KeyboardEvent

```ts
document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log(event.key);
});
```

取得按下的鍵盤按鍵。

---

### Input Event

```ts
input.addEventListener('input', () => {
  console.log(input.value);
});
```

即時取得輸入框內容。

---

### SubmitEvent

```ts
const form = document.getElementById('form');

if (form) {
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    console.log('Form Submitted');
  });
}
```

攔截表單送出事件。

---

## 📂 專案結構

```text
Day71_DOM_Types
│
├── index.html
├── script.ts
├── tsconfig.json
├── README.md
└── dist
    ├── script.js
    └── script.js.map
```

---

## ▶️ 執行方式

編譯

```bash
tsc
```

監聽模式

```bash
tsc --watch
```

---

## 🎯 學習成果

- 理解 DOM 元素型別
- 能安全使用 `getElementById()`
- 能使用 Null Check 避免錯誤
- 能使用 Type Assertion 指定元素型別
- 能操作 `querySelector()`
- 能使用 MouseEvent
- 能使用 KeyboardEvent
- 能使用 Input Event
- 能使用 SubmitEvent
- 理解 React `useRef` 與 DOM Types 的關聯

---

# 🇺🇸 English

## 📖 Project Introduction

Day71 focuses on **DOM Types in TypeScript**.

This project introduces DOM element types, event types, type assertions, and safe DOM manipulation. These concepts are essential before learning React's `useRef`, event handling, and form processing.

---

## 🚀 Learning Objectives

- Learn `getElementById()`
- Learn `querySelector()`
- Learn Null Check
- Learn Type Assertion (`as`)
- Learn MouseEvent
- Learn KeyboardEvent
- Learn Input Event
- Learn SubmitEvent

---

## 🛠️ Technologies

- TypeScript
- DOM API
- HTML5
- JavaScript (Compiled)
- VS Code

---

## 📚 Topics

### getElementById()

```ts
const btn = document.getElementById('btn');
```

Retrieve an element by its id.

---

### Null Check

```ts
if (btn) {
  btn.addEventListener('click', () => {
    console.log('Button Click');
  });
}
```

Prevent runtime errors when an element does not exist.

---

### Type Assertion

```ts
const input =
  document.getElementById("username")
  as HTMLInputElement;
```

Specify the element type to access input-specific properties.

---

### querySelector()

```ts
const title = document.querySelector('h1');
```

Retrieve the first matching element.

---

### MouseEvent

```ts
btn?.addEventListener('click', (event: MouseEvent) => {
  console.log(event.clientX);
  console.log(event.clientY);
});
```

Handle mouse events.

---

### KeyboardEvent

```ts
document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log(event.key);
});
```

Handle keyboard events.

---

### Input Event

```ts
input.addEventListener('input', () => {
  console.log(input.value);
});
```

Monitor changes in an input field.

---

### SubmitEvent

```ts
form?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
});
```

Handle form submission safely.

---

## 📂 Project Structure

```text
Day71_DOM_Types
│
├── index.html
├── script.ts
├── tsconfig.json
├── README.md
└── dist
    ├── script.js
    └── script.js.map
```

---

## ▶️ Run

Compile

```bash
tsc
```

Watch Mode

```bash
tsc --watch
```

---

## 🎯 Learning Outcomes

- Understand DOM element types
- Safely use `getElementById()`
- Apply Null Checks
- Use Type Assertions
- Work with `querySelector()`
- Handle Mouse Events
- Handle Keyboard Events
- Handle Input Events
- Handle Form Submit Events
- Understand the relationship between DOM Types and React `useRef`

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day71では **TypeScript の DOM Types（DOM 型）** を学習しました。

DOM 要素の型、安全な DOM 操作、イベント型、Type Assertion の使い方を学び、React の `useRef` やイベント処理、フォーム操作の基礎を身につけます。

---

## 🚀 学習目標

- `getElementById()` を学ぶ
- `querySelector()` を学ぶ
- Null Check を学ぶ
- Type Assertion (`as`) を学ぶ
- MouseEvent を学ぶ
- KeyboardEvent を学ぶ
- Input Event を学ぶ
- SubmitEvent を学ぶ

---

## 🛠️ 使用技術

- TypeScript
- DOM API
- HTML5
- JavaScript（コンパイル後）
- VS Code

---

## 📚 学習内容

### getElementById()

```ts
const btn = document.getElementById('btn');
```

ID を指定して要素を取得します。

---

### Null Check

```ts
if (btn) {
  btn.addEventListener('click', () => {
    console.log('Button Click');
  });
}
```

要素が存在しない場合のエラーを防ぎます。

---

### Type Assertion

```ts
const input =
  document.getElementById("username")
  as HTMLInputElement;
```

要素の型を指定します。

---

### querySelector()

```ts
const title = document.querySelector('h1');
```

最初に一致した要素を取得します。

---

### MouseEvent

```ts
btn?.addEventListener('click', (event: MouseEvent) => {
  console.log(event.clientX);
  console.log(event.clientY);
});
```

マウスイベントを処理します。

---

### KeyboardEvent

```ts
document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log(event.key);
});
```

キーボードイベントを処理します。

---

### Input Event

```ts
input.addEventListener('input', () => {
  console.log(input.value);
});
```

入力内容の変更を取得します。

---

### SubmitEvent

```ts
form?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
});
```

フォーム送信イベントを制御します。

---

## 📂 ディレクトリ構成

```text
Day71_DOM_Types
│
├── index.html
├── script.ts
├── tsconfig.json
├── README.md
└── dist
    ├── script.js
    └── script.js.map
```

---

## ▶️ 実行方法

コンパイル

```bash
tsc
```

監視モード

```bash
tsc --watch
```

---

## 🎯 学習成果

- DOM 要素の型を理解できる
- `getElementById()` を安全に利用できる
- Null Check を利用できる
- Type Assertion を利用できる
- `querySelector()` を利用できる
- MouseEvent を利用できる
- KeyboardEvent を利用できる
- Input Event を利用できる
- SubmitEvent を利用できる
- React の `useRef` と DOM Types の関係を理解できる
