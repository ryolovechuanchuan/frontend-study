# Day80 - Todo Storage

## 📌 Overview / 概要 / 概要

### 中文

Day80 延續 Day79 的 Todo UI，加入 `localStorage`，讓 Todo 資料可以保存在瀏覽器中。

Day79 的 Todo 資料只存在 JavaScript 執行期間，因此重新整理網頁後，新增、刪除與更新的資料都會消失。

Day80 使用：

- `localStorage.setItem()`
- `localStorage.getItem()`
- `JSON.stringify()`
- `JSON.parse()`

將 `Todo[]` 儲存到瀏覽器，並在重新載入網頁時讀取資料。

同時將 Storage 邏輯整合進 Todo Data Layer，讓 UI Layer 不需要直接處理資料保存。

---

### English

Day80 continues from the Todo UI built in Day79 and introduces `localStorage` to persist Todo data in the browser.

Previously, Todo data only existed in JavaScript memory, so added, deleted, or updated Todos were lost after refreshing the page.

In Day80, I used:

- `localStorage.setItem()`
- `localStorage.getItem()`
- `JSON.stringify()`
- `JSON.parse()`

to save `Todo[]` data in the browser and restore it when the application loads.

The storage logic is also integrated into the Todo Data Layer so that the UI Layer does not need to manage persistence directly.

---

### 日本語

Day80では、Day79で作成したTodo UIに `localStorage` を追加し、Todoデータをブラウザに保存できるようにしました。

Day79まではTodoデータがJavaScriptのメモリ上にしか存在しなかったため、ページを再読み込みすると追加・削除・更新したデータが失われていました。

Day80では、

- `localStorage.setItem()`
- `localStorage.getItem()`
- `JSON.stringify()`
- `JSON.parse()`

を使用して `Todo[]` をブラウザに保存し、ページ読み込み時にデータを復元する仕組みを実装しました。

また、Storage処理をTodo Data Layerに統合し、UI Layerからデータ保存処理を分離しました。

---

# 🎯 Learning Goals / 學習目標 / 学習目標

- Understand browser `localStorage`
- Save data with `localStorage.setItem()`
- Read data with `localStorage.getItem()`
- Understand Key / Value storage
- Convert arrays and objects using `JSON.stringify()`
- Restore JSON data using `JSON.parse()`
- Understand `string | null`
- Create `saveTodos()`
- Create `loadTodos()`
- Initialize Todo data from localStorage
- Save data after Create / Update / Delete
- Separate UI and Storage responsibilities
- Understand basic data persistence

---

# 🗂 Project Structure / 專案結構 / プロジェクト構成

```text
Day80_Todo_Storage/
│
├── index.html
├── style.css
│
└── src/
    ├── script.ts
    │
    ├── data/
    │   └── todoData.ts
    │
    └── models/
        └── models.ts
```

---

# 💾 Why Storage?

## 中文

Day79 的 Todo 資料存在 JavaScript Memory：

```text
Todo App
   ↓
Todo[]
   ↓
JavaScript Memory
```

重新整理：

```text
F5
↓
JavaScript 重新執行
↓
Memory Reset
↓
修改過的 Todo 消失 ❌
```

加入 localStorage：

```text
Todo[]
   ↓
localStorage
   ↓
F5
   ↓
localStorage
   ↓
Todo[]
```

因此資料可以保留下來。

---

## English

Before Day80, Todo data only existed in JavaScript memory.

Refreshing the page restarted the application and removed any changes.

With localStorage:

```text
Todo[]
   ↓
localStorage
   ↓
Refresh
   ↓
localStorage
   ↓
Todo[]
```

the data can persist between page reloads.

---

## 日本語

Day79まではTodoデータがJavaScriptのメモリ上にのみ存在していました。

ページを再読み込みするとJavaScriptが再実行されるため、変更したTodoデータが失われます。

localStorageを使用することで、

```text
Todo[]
   ↓
localStorage
   ↓
再読み込み
   ↓
localStorage
   ↓
Todo[]
```

という流れでデータを保持できます。

---

# 🔑 localStorage

localStorage stores data using:

```text
Key → Value
```

Example:

```ts
localStorage.setItem('username', 'Tom');
```

Result:

```text
Key         Value
------------------
username    Tom
```

Read:

```ts
const username = localStorage.getItem('username');

console.log(username);
```

---

# ⚠️ localStorage Stores Strings

Todo data is not a simple string.

For example:

```ts
const todos: Todo[] = [
  {
    id: 1,
    title: 'Study TypeScript',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn React',
    completed: true,
  },
];
```

This is an:

```text
Array
│
├── Object
│   ├── id
│   ├── title
│   └── completed
│
└── Object
    ├── id
    ├── title
    └── completed
```

But localStorage stores strings.

Therefore:

```text
Todo[]
  ↓
JSON.stringify()
  ↓
string
  ↓
localStorage
```

---

# 🔄 JSON.stringify()

`JSON.stringify()` converts JavaScript data into a JSON string.

```ts
const jsonTodos = JSON.stringify(todos);
```

Before:

```ts
[
  {
    id: 1,
    title: 'Study TypeScript',
    completed: false,
  },
];
```

After:

```text
'[{"id":1,"title":"Study TypeScript","completed":false}]'
```

The result may look like an Array, but it is now a:

```text
string
```

---

## 中文

`JSON.stringify()` 主要用在「儲存之前」。

```text
Todo[]
↓
JSON.stringify()
↓
string
```

---

## English

`JSON.stringify()` is used before saving complex JavaScript data.

```text
Todo[]
↓
JSON.stringify()
↓
string
```

---

## 日本語

`JSON.stringify()` は、JavaScriptのデータを保存する前にJSON文字列へ変換するために使用します。

```text
Todo[]
↓
JSON.stringify()
↓
string
```

---

# 💾 Save Data

```ts
localStorage.setItem('todos', jsonTodos);
```

`setItem()` requires two values:

```ts
localStorage.setItem(key, value);
```

For the Todo App:

```text
key   → todos
value → JSON string
```

Example:

```ts
const jsonTodos = JSON.stringify(todos);

localStorage.setItem('todos', jsonTodos);
```

---

# 📥 localStorage.getItem()

To retrieve the saved Todo data:

```ts
const savedTodos = localStorage.getItem('todos');
```

The type is:

```ts
string | null;
```

Why `null`?

Because the browser may not have a `"todos"` key yet.

```text
todos exists
↓
string

todos does not exist
↓
null
```

Therefore we need to check the value before parsing it.

---

# 🔄 JSON.parse()

`JSON.parse()` performs the opposite operation of `JSON.stringify()`.

```text
JSON.stringify()

Todo[] → string


JSON.parse()

string → Todo[]
```

Example:

```ts
const savedTodos = localStorage.getItem('todos');

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);

  console.log(parsedTodos);
}
```

---

## Important

Remember:

```text
JSON.stringify()
= Before Save
= JavaScript Data → String

JSON.parse()
= After Load
= String → JavaScript Data
```

### 中文

可以記成：

> stringify = 存之前  
> parse = 拿出來之後

### 日本語

覚え方：

> stringify = 保存する前  
> parse = 読み込んだ後

---

# 💾 saveTodos()

Storage logic is placed inside the Data Layer.

```ts
function saveTodos() {
  const response = JSON.stringify(todos);

  localStorage.setItem('todos', response);
}
```

Flow:

```text
todos
  ↓
JSON.stringify()
  ↓
response
  ↓
localStorage.setItem()
  ↓
Browser Storage
```

---

## 中文

`saveTodos()` 負責將目前最新的 `todos` 保存到 localStorage。

注意：

```ts
JSON.stringify(todos);
```

要保存的是目前真正的 Todo 資料，而不是永遠保存 `defaultTodos`。

---

## English

`saveTodos()` stores the current Todo data in localStorage.

The current `todos` array must be saved rather than always saving the original default data.

---

## 日本語

`saveTodos()` は現在の `todos` をlocalStorageに保存します。

初期データ `defaultTodos` ではなく、追加・削除・更新後の最新の `todos` を保存することが重要です。

---

# 📥 loadTodos()

```ts
function loadTodos(): Todo[] {
  const savedTodos = localStorage.getItem('todos');

  if (savedTodos) {
    return JSON.parse(savedTodos);
  }

  return defaultTodos;
}
```

Flow:

```text
localStorage
      ↓
getItem('todos')
      ↓
string | null
      ↓
Does data exist?
   ↙       ↘
 YES        NO
 ↓           ↓
JSON.parse   defaultTodos
 ↓
Todo[]
```

---

# 🆕 Default Todos

When the application is opened for the first time, localStorage does not contain Todo data.

Therefore we prepare default data:

```ts
const defaultTodos: Todo[] = [
  {
    id: 1,
    title: 'Study TypeScript',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 3,
    title: 'Build Portfolio',
    completed: true,
  },
];
```

Then:

```ts
function loadTodos(): Todo[] {
  const savedTodos = localStorage.getItem('todos');

  if (savedTodos) {
    return JSON.parse(savedTodos);
  }

  return defaultTodos;
}
```

---

# 🚀 Initialize Todos

Instead of always starting from:

```ts
const todos: Todo[] = [
  // fixed data
];
```

Todo data is initialized from Storage:

```ts
let todos: Todo[] = loadTodos();
```

Now the application starts with:

```text
Application Start
       ↓
loadTodos()
       ↓
localStorage.getItem('todos')
       ↓
┌────────────────────────────┐
│ Saved data exists?         │
└────────────────────────────┘
       ↓              ↓
      YES             NO
       ↓              ↓
 JSON.parse()    defaultTodos
       ↓              ↓
       └──── Todo[] ──┘
```

---

# ➕ Save After Add

```ts
export function addTodo(todo: Todo): Todo[] {
  todos.push(todo);

  saveTodos();

  return todos;
}
```

Flow:

```text
Add Todo
↓
todos.push()
↓
Todo[] changed
↓
saveTodos()
↓
localStorage updated
```

---

# 🗑 Save After Delete

```ts
export function deleteTodo(id: number): Todo[] {
  const index = todos.findIndex((item) => item.id === id);

  if (index !== -1) {
    todos.splice(index, 1);

    saveTodos();
  }

  return todos;
}
```

Only save when the Todo actually exists and is deleted.

---

# 🔄 Save After Update

```ts
export function updateTodo(id: number, completed: boolean): Todo | undefined {
  const index = todos.findIndex((item) => item.id === id);

  if (index !== -1) {
    todos[index].completed = completed;

    saveTodos();
  }

  return todos[index];
}
```

Changing the Checkbox now updates both:

```text
UI
↓
updateTodo()
↓
todos[index].completed
↓
saveTodos()
↓
localStorage
```

Therefore the Checkbox state remains after refreshing the page.

---

# 📖 getTodos() Does Not Save

```ts
export function getTodos(): Todo[] {
  return todos;
}
```

We do NOT need:

```ts
saveTodos();
```

inside `getTodos()`.

Why?

Because `getTodos()` only reads data.

```text
getTodos()
↓
READ
↓
No data change
↓
No save required
```

---

# 🧠 CRUD and Storage

A useful rule:

```text
Create  → Data Changed → Save ✅
Read    → No Change    → Save ❌
Update  → Data Changed → Save ✅
Delete  → Data Changed → Save ✅
```

Or:

```text
C → saveTodos()
R → no save
U → saveTodos()
D → saveTodos()
```

---

# 🏗 Data Layer + Storage

Day80 keeps Storage logic inside the Data Layer.

```text
UI Layer
script.ts
   │
   ├── addTodo()
   ├── deleteTodo()
   └── updateTodo()
          │
          ▼
Data Layer
todoData.ts
   │
   ├── Modify todos
   │
   └── saveTodos()
          │
          ▼
localStorage
```

### 中文

`script.ts` 不需要知道資料如何被保存。

UI Layer 只負責：

```text
使用者操作
顯示畫面
呼叫 Data Layer
```

Data Layer 負責：

```text
資料
CRUD
Storage
```

---

### English

`script.ts` does not need to know how Todo data is stored.

The UI Layer handles user interaction and rendering, while the Data Layer manages Todo data and persistence.

---

### 日本語

`script.ts` はTodoデータの保存方法を知る必要がありません。

UI Layerはユーザー操作と画面描画を担当し、Data LayerはTodoデータのCRUDとStorageを担当します。

---

# 🔁 Complete Storage Flow

```text
              Todo App
                  │
                  ▼
              Todo[]
                  │
       ┌──────────┴──────────┐
       │                     │
       ▼                     ▼
   Add/Update/Delete      getTodos()
       │                     │
       ▼                     ▼
   Data Changed             Read
       │                     │
       ▼                     └── No Save
   saveTodos()
       │
       ▼
 JSON.stringify()
       │
       ▼
localStorage.setItem()
       │
       ▼
 ───── Refresh Page ─────
       │
       ▼
   loadTodos()
       │
       ▼
localStorage.getItem()
       │
       ▼
   string | null
       │
       ▼
   JSON.parse()
       │
       ▼
     Todo[]
       │
       ▼
   renderTodos()
```

---

# 🧪 Testing

Test the following operations:

### 1. Add Todo

```text
Add Todo
↓
Refresh F5
↓
Todo still exists ✅
```

### 2. Delete Todo

```text
Delete Todo
↓
Refresh F5
↓
Todo is still deleted ✅
```

### 3. Update Completed

```text
Check Todo
↓
completed = true
↓
Refresh F5
↓
Checkbox remains checked ✅
```

If all three work:

```text
Create persistence ✅
Update persistence ✅
Delete persistence ✅
```

---

# ⚠️ Common Mistakes

## 1. Parsing a Function

Wrong:

```ts
JSON.parse(saveTodos);
```

`saveTodos` is a function, not a JSON string.

Correct:

```ts
const savedTodos = localStorage.getItem('todos');

if (savedTodos) {
  JSON.parse(savedTodos);
}
```

---

## 2. Parsing the Function Name as Text

Wrong:

```ts
JSON.parse('saveTodos');
```

This means:

```text
Parse the literal string "saveTodos"
```

It does NOT execute or read `saveTodos()`.

---

## 3. Saving defaultTodos Every Time

Wrong:

```ts
JSON.stringify(defaultTodos);
```

This always saves the original data.

Correct:

```ts
JSON.stringify(todos);
```

because `todos` contains the current application state.

---

## 4. Saving Inside getTodos()

Wrong:

```ts
export function getTodos(): Todo[] {
  saveTodos();

  return todos;
}
```

Correct:

```ts
export function getTodos(): Todo[] {
  return todos;
}
```

Reading data does not require saving.

---

# 🧠 Key Concepts

### 中文

Day80 主要學習：

- localStorage
- Key / Value
- `setItem()`
- `getItem()`
- `JSON.stringify()`
- `JSON.parse()`
- `string | null`
- `saveTodos()`
- `loadTodos()`
- Default Data
- Data Initialization
- Data Persistence
- CRUD 與 Storage
- Data Layer
- UI Layer
- 關注點分離

---

### English

Key concepts learned:

- localStorage
- Key / Value storage
- `setItem()`
- `getItem()`
- `JSON.stringify()`
- `JSON.parse()`
- `string | null`
- Saving data
- Loading data
- Default data
- Data initialization
- Data persistence
- CRUD persistence
- Data Layer
- UI Layer
- Separation of concerns

---

### 日本語

Day80で学習した主な内容：

- localStorage
- Key / Value
- `setItem()`
- `getItem()`
- `JSON.stringify()`
- `JSON.parse()`
- `string | null`
- データ保存
- データ読み込み
- 初期データ
- データ初期化
- データ永続化
- CRUDとStorage
- Data Layer
- UI Layer
- 責務の分離

---

# 💡 What I Learned

### 中文

Day80 讓我理解瀏覽器中的資料不一定只能存在 JavaScript Memory。

透過 `JSON.stringify()` 將 `Todo[]` 轉換成字串後，可以使用 localStorage 保存資料；讀取時則透過 `JSON.parse()` 將字串重新轉回 JavaScript 資料。

我也進一步理解「讀取資料」與「修改資料」的差異。`getTodos()` 只負責讀取，因此不需要保存；而 Add、Update、Delete 都會改變資料，因此需要呼叫 `saveTodos()`。

此外，將 localStorage 放在 Data Layer 中，也讓 UI Layer 不需要處理資料保存細節。

---

### English

Day80 helped me understand how browser data can persist beyond JavaScript memory.

By converting `Todo[]` into a string with `JSON.stringify()`, the data can be stored in localStorage. When loading the application, `JSON.parse()` restores the saved string back into JavaScript data.

I also learned the difference between reading and modifying data. `getTodos()` only reads data, while Add, Update, and Delete modify the state and therefore need to call `saveTodos()`.

Keeping localStorage logic inside the Data Layer also separates persistence logic from UI logic.

---

### 日本語

Day80では、TodoデータをJavaScriptのメモリだけではなく、ブラウザに永続的に保存する方法を学びました。

`JSON.stringify()` で `Todo[]` を文字列に変換してlocalStorageへ保存し、読み込み時には `JSON.parse()` を使用してJavaScriptのデータに戻します。

また、データの「読み取り」と「変更」の違いについても理解を深めました。`getTodos()` はデータを読むだけなので保存処理は不要ですが、Add・Update・Deleteではデータが変更されるため `saveTodos()` が必要です。

さらに、localStorageの処理をData Layerに配置することで、UI Layerとデータ保存処理の責務を分離することができました。

---

## 📅 Day80

**Topic:** Todo Storage  
**Language:** TypeScript  
**Focus:** localStorage / JSON / Data Persistence / Data Layer / CRUD
