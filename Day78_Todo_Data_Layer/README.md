# Day78 - Todo Data Layer

## 📌 Overview

### 中文

Day78 建立了一個使用 TypeScript 製作的 Todo Data Layer，將 Todo 的資料結構、CRUD 操作與 DOM 顯示邏輯分離。

本次練習從 `Todo` Interface 開始，建立 Todo 資料陣列，並實作新增、查詢、更新與刪除功能。

接著將 Data Layer 與 DOM 結合，讓使用者可以透過畫面新增 Todo、刪除 Todo，以及切換 Todo 的完成狀態。

透過這次練習，進一步理解資料層（Data Layer）、CRUD、模組拆分，以及資料更新後重新渲染 UI 的基本流程。

### English

In Day78, I built a Todo Data Layer using TypeScript and separated the Todo data structure, CRUD operations, and DOM rendering logic.

The practice started by defining a `Todo` interface and creating a Todo data array. CRUD functions were then implemented for creating, reading, updating, and deleting Todo items.

The Data Layer was also connected to the DOM so users can add Todos, delete Todos, and toggle their completion status through the UI.

This practice helped me understand the basic concepts of the Data Layer, CRUD operations, module separation, and re-rendering the UI after data changes.

### 日本語

Day78では、TypeScriptを使用してTodoのData Layerを作成し、Todoのデータ構造、CRUD処理、DOMの表示処理を分離しました。

まず `Todo` Interfaceを定義し、Todoデータの配列を作成しました。その後、Todoの追加・取得・更新・削除を行うCRUD機能を実装しました。

さらにData LayerとDOMを連携させ、画面からTodoの追加、削除、完了状態の切り替えができるようにしました。

今回の練習を通して、Data Layer、CRUD、モジュール分割、データ更新後にUIを再描画する基本的な流れについて理解を深めました。

---

## 🎯 Learning Goals / 學習目標 / 学習目標

- Understand how to define a Todo data model with TypeScript Interface
- Work with arrays of objects using `Todo[]`
- Build a simple Data Layer
- Implement CRUD operations
- Use `find()` and `findIndex()`
- Use `push()` and `splice()`
- Separate Model, Data Layer, and UI logic
- Use `import` / `export`
- Render Todo data to the DOM
- Create DOM elements dynamically
- Handle button click events
- Re-render the UI after data changes
- Toggle boolean values
- Generate IDs for new Todo items

---

## 🗂 Project Structure / 專案結構 / プロジェクト構成

```text
Day78_Todo_Data_Layer/
│
├── index.html
├── script.ts
│
├── data/
│   └── todoData.ts
│
└── models/
    └── models.ts
```
