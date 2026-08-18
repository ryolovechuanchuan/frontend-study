# Day91 - React + TypeScript Basics

Day91 of my frontend development learning journey.

This project marks the beginning of React + TypeScript practice.  
The main goal is to understand React components, JSX, TypeScript interfaces, `useState`, event handling, and React's automatic re-rendering mechanism.

---

# 🇹🇼 中文

## 📌 專案介紹

Day91 正式開始學習 React + TypeScript。

在前面的 TypeScript 練習中，畫面更新主要透過：

- `document.querySelector()`
- `document.createElement()`
- `appendChild()`
- `addEventListener()`
- 手動建立 `render()` 函式

來操作 DOM。

進入 React 後，開始改用：

- JSX
- Function Component
- `useState`
- `onClick`
- State 驅動畫面更新

本日實作包含 User Profile、Counter，以及 Active / Inactive 狀態切換。

---

## ✨ 完成功能

- 建立 React Function Component
- 使用 JSX 顯示資料
- 建立 TypeScript `User` Interface
- 顯示 User Profile
- Counter 數字狀態
- `+1` 功能
- `-1` 功能
- Reset 功能
- Active / Inactive 狀態切換
- Boolean State
- 使用三元運算子切換顯示內容
- 使用 `onClick` 處理事件
- 使用 `useState` 管理 State
- State 更新後自動重新 Render

---

## 🛠️ 使用技術

- React
- TypeScript
- JSX / TSX
- React Hooks
- `useState`
- HTML
- CSS

---

## 📚 TypeScript Interface

使用 Interface 定義 User 的資料結構：

```tsx
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}
```

建立符合 `User` 型別的資料：

```tsx
const user: User = {
  id: 1,
  name: 'John',
  age: 25,
  isActive: true,
};
```

並透過 JSX 顯示資料：

```tsx
<p>{user.name}</p>
<p>{user.age}</p>
```

---

## 🔢 useState - Counter

使用 `useState` 建立 Counter State：

```tsx
const [count, setCount] = useState<number>(0);
```

其中：

```text
count
↓
目前的 State

setCount
↓
更新 State 的函式

0
↓
State 初始值
```

---

## ➕ Counter 操作

增加：

```tsx
<button onClick={() => setCount(count + 1)}>+1</button>
```

減少：

```tsx
<button onClick={() => setCount(count - 1)}>-1</button>
```

重設：

```tsx
<button onClick={() => setCount(0)}>Reset</button>
```

---

## 🔄 Boolean State

建立 Boolean State：

```tsx
const [active, setActive] = useState<boolean>(true);
```

切換狀態：

```tsx
<button onClick={() => setActive(!active)}>Change Active</button>
```

狀態變化：

```text
true
 ↓
!true
 ↓
false

再次點擊

false
 ↓
!false
 ↓
true
```

---

## 🔀 Conditional Rendering

使用三元運算子根據 State 顯示不同文字：

```tsx
<p>Status: {active ? 'Active' : 'Inactive'}</p>
```

當：

```text
active = true
→ Active

active = false
→ Inactive
```

---

## ⚛️ React State 的核心概念

Day90 原生 TypeScript：

```text
資料改變
   ↓
手動呼叫 renderTask()
   ↓
重新建立 DOM
   ↓
畫面更新
```

Day91 React：

```text
setState()
   ↓
State 改變
   ↓
React 自動重新 Render
   ↓
UI 更新
```

這是今天最重要的 React 基礎觀念。

---

## 🎯 Day91 學習成果

完成 Day91 後，我理解了：

- React Component 的基本結構
- JSX 基本語法
- JSX 中使用 `{}` 顯示資料
- TypeScript Interface
- `useState<number>`
- `useState<boolean>`
- State 與普通變數的差異
- `setState` 更新資料
- `onClick` 事件
- Arrow Function
- Boolean Toggle
- Conditional Rendering
- React 自動重新 Render

---

# 🇺🇸 English

## 📌 Project Overview

Day91 marks the beginning of my React + TypeScript learning journey.

Previously, DOM manipulation was handled manually with vanilla TypeScript using methods such as `querySelector`, `createElement`, `appendChild`, and `addEventListener`.

In React, the UI is instead driven by components and state.

This project implements a simple User Profile, Counter, and Active Status toggle.

---

## ✨ Features

- React Function Component
- JSX rendering
- TypeScript Interface
- User Profile
- Counter state
- Increase counter
- Decrease counter
- Reset counter
- Active / Inactive toggle
- Boolean state
- Conditional rendering
- React event handling
- Automatic UI re-rendering

---

## 🛠️ Technologies

- React
- TypeScript
- JSX / TSX
- React Hooks
- `useState`
- HTML
- CSS

---

## 📚 TypeScript Interface

```tsx
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}
```

The interface defines the structure and types of a user object.

```tsx
const user: User = {
  id: 1,
  name: 'John',
  age: 25,
  isActive: true,
};
```

---

## 🔢 React State

A counter state is created using `useState`:

```tsx
const [count, setCount] = useState<number>(0);
```

`count` represents the current state value.

`setCount` is used to update the state.

---

## ➕ Counter

Increase:

```tsx
setCount(count + 1);
```

Decrease:

```tsx
setCount(count - 1);
```

Reset:

```tsx
setCount(0);
```

When the state changes, React automatically re-renders the component.

---

## 🔄 Boolean State

```tsx
const [active, setActive] = useState<boolean>(true);
```

The value can be toggled with:

```tsx
setActive(!active);
```

Result:

```text
true → false → true → false ...
```

---

## 🔀 Conditional Rendering

A ternary operator is used to display different content depending on the state:

```tsx
<p>Status: {active ? 'Active' : 'Inactive'}</p>
```

---

## ⚛️ React Rendering Concept

Vanilla TypeScript:

```text
Update Data
    ↓
Call render()
    ↓
Manipulate DOM
    ↓
Update UI
```

React:

```text
Update State
    ↓
React detects the change
    ↓
Component re-renders
    ↓
UI updates automatically
```

---

## 🎯 Learning Outcomes

Through Day91, I learned:

- React Function Components
- JSX syntax
- Rendering JavaScript values in JSX
- TypeScript Interfaces
- `useState`
- Number State
- Boolean State
- Event handling
- Arrow functions
- State updates
- Boolean toggling
- Conditional rendering
- React re-rendering

---

# 🇯🇵 日本語

## 📌 プロジェクト概要

Day91 から React + TypeScript の学習を開始しました。

これまでの TypeScript では、`querySelector`、`createElement`、`appendChild`、`addEventListener` などを使用して DOM を直接操作していました。

React では Component、JSX、State を利用して UI を管理します。

今回は User Profile、Counter、Active / Inactive の切り替え機能を実装しました。

---

## ✨ 実装機能

- React Function Component
- JSX によるデータ表示
- TypeScript Interface
- User Profile 表示
- Counter
- +1
- -1
- Reset
- Active / Inactive 切り替え
- Boolean State
- 条件付きレンダリング
- `onClick` イベント
- `useState`
- State 更新による自動再レンダリング

---

## 🛠️ 使用技術

- React
- TypeScript
- JSX / TSX
- React Hooks
- `useState`
- HTML
- CSS

---

## 📚 TypeScript Interface

User データの型を Interface で定義しました。

```tsx
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}
```

User オブジェクト：

```tsx
const user: User = {
  id: 1,
  name: 'John',
  age: 25,
  isActive: true,
};
```

---

## 🔢 useState

Counter の State：

```tsx
const [count, setCount] = useState<number>(0);
```

`count` は現在の値です。

`setCount` を利用して State を更新します。

---

## ➕ Counter

+1：

```tsx
setCount(count + 1);
```

-1：

```tsx
setCount(count - 1);
```

Reset：

```tsx
setCount(0);
```

State が変更されると React が自動的に Component を再レンダリングします。

---

## 🔄 Boolean State

```tsx
const [active, setActive] = useState<boolean>(true);
```

以下のコードで状態を反転できます。

```tsx
setActive(!active);
```

```text
true
 ↓
false
 ↓
true
 ↓
false
```

---

## 🔀 条件付きレンダリング

三項演算子を利用して、状態によって表示内容を変更しました。

```tsx
<p>Status: {active ? 'Active' : 'Inactive'}</p>
```

```text
true  → Active
false → Inactive
```

---

## ⚛️ React の重要な考え方

Vanilla TypeScript：

```text
データ変更
   ↓
render() を実行
   ↓
DOM を更新
   ↓
画面更新
```

React：

```text
State 更新
   ↓
React が変更を検知
   ↓
Component 再レンダリング
   ↓
UI 自動更新
```

---

## 🎯 Day91 学習成果

Day91 では以下の内容を学習しました。

- React Component
- JSX
- TypeScript Interface
- `useState`
- Number State
- Boolean State
- State の更新
- `onClick`
- Arrow Function
- Boolean Toggle
- 三項演算子
- Conditional Rendering
- React の再レンダリング

React では DOM を直接操作するのではなく、**State を更新することで UI を更新する**という基本的な考え方を学びました。

---

# 📂 Project Structure

```text
Day91_React_TypeScript/
│
├── src/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🚀 Next Step

Day92:

```text
React + TypeScript
        ↓
Object State
        ↓
Form Input
        ↓
Controlled Components
        ↓
value + onChange
```

---

# Day91 Completed ✅

**React + TypeScript + JSX + useState + Event Handling + Conditional Rendering**
