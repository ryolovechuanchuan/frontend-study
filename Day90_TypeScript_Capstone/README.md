# Day90 TypeScript Capstone - Task Management System

TypeScript 90 天學習計畫的綜合實作專案。  
這個專案整合了 TypeScript 型別系統、DOM 操作、事件處理、陣列操作、搜尋、複合篩選、LocalStorage 與 Responsive Web Design。

---

# 🇹🇼 中文

## 📌 專案介紹

Day90 是 TypeScript 學習階段的綜合實作。

本專案製作一個 Task Management System（任務管理系統），使用者可以新增任務、刪除任務、完成任務，並透過狀態、優先度與關鍵字進行複合篩選。

資料會儲存在瀏覽器的 LocalStorage，即使重新整理頁面，任務資料仍然可以保留。

---

## ✨ 功能

- 新增任務
- 刪除任務
- 將任務設定為完成
- 任務狀態篩選
  - Todo
  - Doing
  - Done
- 任務優先度篩選
  - Low
  - Medium
  - High
- 關鍵字搜尋
  - 搜尋標題
  - 搜尋類別
- 多條件複合篩選
- 即時計算目前顯示的任務數量
- LocalStorage 資料保存
- JSON 資料轉換
- 表單資料驗證
- 動態 DOM Render
- Responsive Web Design
- Desktop 三欄式 Dashboard
- Tablet / Mobile RWD

---

## 🛠️ 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- LocalStorage
- JSON
- CSS Grid
- Flexbox
- Media Queries

---

## 📚 TypeScript 練習內容

### Union Type

```ts
type Priority = 'low' | 'medium' | 'high';

type Status = 'todo' | 'doing' | 'done';
```

限制變數只能使用指定的字串。

### Interface

```ts
interface Task {
  id: number;
  title: string;
  category: string;
  priority: Priority;
  status: Status;
  dueDate: string;
}
```

透過 Interface 定義 Task 資料結構。

### Array Filter

```ts
return tasks.filter((task) => {
  const matchStatus = currentStatusFilter === 'all' || task.status === currentStatusFilter;

  const matchPriority = currentPriorityFilter === 'all' || task.priority === currentPriorityFilter;

  return matchStatus && matchPriority;
});
```

透過 Boolean 條件組合實作多條件篩選。

---

## 🔎 搜尋功能

```ts
const keyword = searchInput.value.trim().toLowerCase();

const matchSearch = keyword === '' || task.title.toLowerCase().includes(keyword) || task.category.toLowerCase().includes(keyword);
```

使用：

- `trim()`
- `toLowerCase()`
- `includes()`

完成不區分英文大小寫的即時搜尋。

---

## 💾 LocalStorage

儲存：

```ts
function saveTasks(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

讀取：

```ts
function loadTasks(): Task[] | null {
  const data = localStorage.getItem('tasks');

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as Task[];
  } catch {
    return null;
  }
}
```

透過 `JSON.stringify()` 將 Array 轉換成字串儲存，並使用 `JSON.parse()` 還原資料。

---

## 🖥️ Responsive Design

### Desktop

```text
新增任務 │ 篩選任務 │ 任務列表
```

### Tablet

```text
新增任務 │ 篩選任務
───────────────────
      任務列表
```

### Mobile

```text
新增任務
────────
篩選任務
────────
任務列表
```

---

## 🎯 Day90 學習成果

透過這個專案複習並整合：

- TypeScript Type
- Interface
- Union Type
- Type Assertion
- Array
- `filter()`
- `findIndex()`
- `splice()`
- DOM 操作
- Event Listener
- Form Submit
- LocalStorage
- JSON
- 搜尋
- 複合條件篩選
- RWD

這個專案也是進入 React / Vue 等前端框架前，對原生 TypeScript 與 DOM 操作的一次綜合練習。

---

# 🇺🇸 English

## 📌 Project Overview

Day90 is a TypeScript capstone project that combines the concepts learned throughout the previous lessons.

This project is a Task Management System that allows users to create, delete, complete, search, and filter tasks.

Task data is stored in LocalStorage so that the data remains available after refreshing the browser.

---

## ✨ Features

- Add tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by status
  - Todo
  - Doing
  - Done
- Filter tasks by priority
  - Low
  - Medium
  - High
- Search tasks by title
- Search tasks by category
- Multiple-condition filtering
- Display the number of filtered tasks
- LocalStorage persistence
- JSON serialization / deserialization
- Form validation
- Dynamic DOM rendering
- Responsive Web Design
- Three-column desktop dashboard
- Tablet and mobile layouts

---

## 🛠️ Technologies

- HTML5
- CSS3
- TypeScript
- DOM API
- LocalStorage
- JSON
- CSS Grid
- Flexbox
- Media Queries

---

## 📚 TypeScript Concepts

This project practices:

- Type aliases
- Union types
- Interfaces
- Type assertions
- Arrays
- `filter()`
- `findIndex()`
- `splice()`
- Event listeners
- DOM manipulation
- Form handling
- LocalStorage
- JSON
- Conditional filtering

---

## 🔎 Multiple Filters

The application combines multiple Boolean conditions:

```ts
return matchStatus && matchPriority && matchSearch;
```

A task is displayed only when all enabled conditions return `true`.

---

## 💾 Data Persistence

Tasks are converted into JSON before being stored:

```ts
JSON.stringify(tasks);
```

The stored JSON string is converted back into an array when the application loads:

```ts
JSON.parse(data);
```

Error handling is implemented with `try...catch` to prevent invalid LocalStorage data from breaking the application.

---

## 📱 Responsive Design

The application uses CSS Grid and Media Queries to provide different layouts depending on the screen size.

```text
Desktop
Add Task | Filters | Task List

Tablet
Add Task | Filters
------------------
    Task List

Mobile
Add Task
--------
Filters
--------
Task List
```

---

## 🎯 Learning Outcome

This project demonstrates how TypeScript can be used to build a small interactive application without a frontend framework.

It also provides practical experience with application state, rendering, filtering, data persistence, DOM events, and responsive UI design.

---

# 🇯🇵 日本語

## 📌 プロジェクト概要

Day90 は、これまで学習した TypeScript の内容をまとめた総合実践プロジェクトです。

このプロジェクトでは、Task Management System（タスク管理システム）を作成しました。

ユーザーはタスクの追加、削除、完了、検索、フィルタリングを行うことができます。

また、LocalStorage を利用しているため、ブラウザを再読み込みしてもタスクデータを保持できます。

---

## ✨ 主な機能

- タスク追加
- タスク削除
- タスク完了
- ステータスによる絞り込み
  - Todo
  - Doing
  - Done
- 優先度による絞り込み
  - Low
  - Medium
  - High
- タイトル検索
- カテゴリ検索
- 複数条件によるフィルタリング
- 表示中のタスク件数
- LocalStorage によるデータ保存
- JSON データ変換
- フォーム入力チェック
- DOM の動的生成
- レスポンシブデザイン
- PC 向け3カラムレイアウト
- タブレット・スマートフォン対応

---

## 🛠️ 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- LocalStorage
- JSON
- CSS Grid
- Flexbox
- Media Queries

---

## 📚 TypeScript 学習内容

このプロジェクトでは、以下の内容を復習しました。

- Type Alias
- Union Type
- Interface
- Type Assertion
- Array
- `filter()`
- `findIndex()`
- `splice()`
- DOM 操作
- Event Listener
- Form 処理
- LocalStorage
- JSON
- 複数条件フィルタリング

---

## 🔎 検索・フィルター

ステータス、優先度、検索キーワードの条件を組み合わせています。

```ts
return matchStatus && matchPriority && matchSearch;
```

すべての条件が `true` になったタスクだけを画面に表示します。

---

## 💾 LocalStorage

タスクを保存するときは、

```ts
JSON.stringify(tasks);
```

を使用して配列を JSON 文字列へ変換します。

データを読み込むときは、

```ts
JSON.parse(data);
```

を使用して JSON 文字列を配列へ戻します。

また、`try...catch` を利用して、不正なデータが存在する場合でもアプリケーションが停止しないようにしています。

---

## 📱 レスポンシブデザイン

PC、タブレット、スマートフォンの画面サイズに応じてレイアウトが変化します。

```text
PC

タスク追加 │ フィルター │ タスク一覧


Tablet

タスク追加 │ フィルター
────────────────────
      タスク一覧


Mobile

タスク追加
─────────
フィルター
─────────
タスク一覧
```

---

## 🎯 Day90 学習成果

このプロジェクトを通して、TypeScript の型定義だけではなく、

- データ管理
- DOM の動的生成
- イベント処理
- 検索
- 複数条件フィルター
- LocalStorage
- JSON
- レスポンシブデザイン

までを組み合わせた Web アプリケーションを実装しました。

React や Vue などのフロントエンドフレームワークへ進む前の、TypeScript と DOM 操作の総合復習プロジェクトです。

---

# 📂 Project Structure

```text
Day90_TypeScript_Capstone/
│
├── index.html
├── style.css
├── script.ts
├── script.js
└── README.md
```

---

# 🚀 Future Improvements

Future improvements may include:

- Edit task
- Sort by due date
- Sort by priority
- Overdue task detection
- Task statistics
- Dark mode
- Drag & Drop
- Category management
- Refactoring into modules
- React version
- Backend API integration

---

# Day90 Completed 🎉

HTML + CSS + TypeScript + LocalStorage + Search + Filter + RWD

**90 Days TypeScript / Frontend Learning Challenge**
