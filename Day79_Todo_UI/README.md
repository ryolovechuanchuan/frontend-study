# Day79 - Todo UI

## 📌 Overview / 概要 / 概要

### 中文

Day79 延續 Day78 的 Todo Data Layer，將重點放在 Todo App 的 UI 與資料狀態同步。

本次實作加入 Checkbox、完成狀態樣式、Todo 統計資訊，以及 All / Pending / Completed 篩選功能。

同時透過 `currentRenderAction` 保存目前的篩選狀態，使 Todo 在新增、刪除或更新後，可以依照目前選擇的 Filter 重新渲染。

透過這次練習，更進一步理解 Data State、UI State、DOM Rendering、Event Handling 與 Array `filter()` 的實際應用。

---

### English

Day79 continues from the Todo Data Layer built in Day78 and focuses on building the Todo App UI and synchronizing UI state with data.

This practice adds checkboxes, completed-task styling, Todo statistics, and All / Pending / Completed filtering.

A `currentRenderAction` function is also used to preserve the current filter state, allowing the Todo list to re-render correctly after adding, deleting, or updating a Todo.

Through this practice, I gained a better understanding of Data State, UI State, DOM Rendering, Event Handling, and practical usage of the Array `filter()` method.

---

### 日本語

Day79では、Day78で作成したTodo Data Layerを利用し、Todo AppのUIとデータ状態の同期を実装しました。

Checkbox、完了状態のスタイル、Todoの統計情報、All / Pending / Completedのフィルター機能を追加しました。

また、`currentRenderAction` を利用して現在選択しているフィルター状態を保持し、Todoの追加・削除・更新後も現在のFilterに合わせて再描画できるようにしました。

今回の練習を通して、Data State、UI State、DOM Rendering、Event Handling、Arrayの `filter()` の実践的な使い方について理解を深めました。

---

# 🎯 Learning Goals / 學習目標 / 学習目標

- Create Todo UI elements dynamically
- Create and control Checkbox elements
- Synchronize Todo data with Checkbox state
- Handle `change` events
- Update Todo completion status
- Apply styles based on Todo state
- Display Todo statistics
- Use `filter()` to calculate Todo counts
- Implement All / Pending / Completed filters
- Preserve the current filter state
- Re-render UI after data changes
- Separate Todo text from other UI elements using `span`
- Practice Data State and UI State management

---

# 🗂 Project Structure / 專案結構 / プロジェクト構成

```text
Day79_Todo_UI/
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

# 🖥 Todo UI

The Todo App contains:

```text
Todo Input
     ↓
Add Todo

[ All ] [ Pending ] [ Completed ]

Total: 3
Completed: 1
Pending: 2

☐ 1 Study TypeScript       [刪除]
☐ 2 Learn React            [刪除]
☑ 3 Build Portfolio        [刪除]
```

### 中文

UI 包含 Todo 輸入框、新增按鈕、篩選按鈕、統計資訊、Checkbox、Todo 文字與刪除按鈕。

### English

The UI contains a Todo input, Add button, filter buttons, statistics, checkboxes, Todo text, and Delete buttons.

### 日本語

UIにはTodo入力欄、追加ボタン、フィルターボタン、統計情報、Checkbox、Todoテキスト、削除ボタンがあります。

---

# ☑ Checkbox

## Create Checkbox

```ts
const checkbox = document.createElement('input');

checkbox.type = 'checkbox';
checkbox.checked = todo.completed;
```

### 中文

使用 JavaScript / TypeScript 動態建立 Checkbox。

`checkbox.checked` 使用 Boolean：

```text
false → ☐
true  → ☑
```

將：

```ts
checkbox.checked = todo.completed;
```

可以把 Data Layer 中的完成狀態同步到 UI。

### English

The checkbox is dynamically created with TypeScript.

The `checked` property uses a Boolean value:

```text
false → unchecked
true  → checked
```

Assigning `todo.completed` to `checkbox.checked` synchronizes the data state with the UI.

### 日本語

TypeScriptを使用してCheckboxを動的に作成しました。

`checked` はBoolean値を使用します。

```text
false → 未チェック
true  → チェック済み
```

`todo.completed` を `checkbox.checked` に設定することで、データの状態をUIに反映できます。

---

# 🔄 Checkbox Change Event

```ts
checkbox.addEventListener('change', () => {
  updateTodo(todo.id, checkbox.checked);

  renderTodos(currentRenderAction());
});
```

### 中文

當 Checkbox 狀態改變時，將最新的 `checkbox.checked` 傳入 `updateTodo()`。

```text
Checkbox
   ↓
checkbox.checked
   ↓
updateTodo()
   ↓
Data Layer
```

### English

When the checkbox changes, the latest `checkbox.checked` value is passed to `updateTodo()`.

This updates the Todo state in the Data Layer.

### 日本語

Checkboxの状態が変更されたとき、最新の `checkbox.checked` を `updateTodo()` に渡します。

これによりData LayerのTodo状態を更新します。

---

# 🔁 Data State ↔ UI State

```text
Data → UI

todo.completed
      ↓
checkbox.checked


UI → Data

checkbox.checked
      ↓
updateTodo()
      ↓
todo.completed
```

### 中文

Todo 的資料狀態與 Checkbox UI 狀態互相同步。

### English

The Todo data state and Checkbox UI state are synchronized.

### 日本語

Todoのデータ状態とCheckboxのUI状態を同期させています。

---

# ✏️ Completed Style

完成的 Todo 顯示刪除線：

```ts
checkbox.checked ? (textSpan.style.textDecoration = 'line-through') : (textSpan.style.textDecoration = 'none');
```

### 中文

當 Todo 完成時，只對 Todo 的文字加入刪除線。

因此另外建立：

```ts
const textSpan = document.createElement('span');
```

而不是直接對整個 `<li>` 加刪除線。

這樣 Checkbox 和刪除按鈕不會一起出現刪除線。

### English

When a Todo is completed, a line-through style is applied only to the Todo text.

A separate `span` element is used so the checkbox and Delete button are not affected by the text decoration.

### 日本語

Todoが完了した場合、Todoのテキスト部分だけに取り消し線を設定します。

`span` を別に作成することで、Checkboxや削除ボタンには取り消し線が適用されないようにしました。

---

# 🗑 Delete Todo

```ts
deleteBtn.addEventListener('click', () => {
  deleteTodo(todo.id);

  renderTodos(currentRenderAction());
});
```

### 中文

點擊刪除按鈕後，透過 Todo ID 呼叫 Data Layer 的 `deleteTodo()`。

刪除完成後，再依照目前的 Filter 重新 Render。

### English

When the Delete button is clicked, `deleteTodo()` removes the Todo using its ID.

The Todo list is then re-rendered using the current filter.

### 日本語

削除ボタンをクリックすると、Todo IDを使用して `deleteTodo()` を実行します。

削除後、現在のFilterに合わせてTodo Listを再描画します。

---

# 📊 Todo Statistics

Todo App 顯示三種統計：

```text
Total
Completed
Pending
```

## Total

```ts
Total.textContent = `Total: ${getTodos().length}`;
```

## Completed

```ts
const completedCount = getTodos().filter((todo) => todo.completed).length;

Completed.textContent = `Completed: ${completedCount}`;
```

## Pending

```ts
const pendingCount = getTodos().filter((todo) => !todo.completed).length;

Pending.textContent = `Pending: ${pendingCount}`;
```

### 中文

使用 `filter()` 根據 `completed` 狀態篩選資料，再透過 `.length` 計算數量。

### English

The `filter()` method selects Todos based on their completion state, and `.length` calculates the number of matching Todos.

### 日本語

`filter()` を使用して `completed` の状態でTodoを絞り込み、`.length` で件数を取得します。

---

# 🔍 Array filter()

Completed：

```ts
getTodos().filter((todo) => todo.completed);
```

Pending：

```ts
getTodos().filter((todo) => !todo.completed);
```

例如：

```text
Todo A → false
Todo B → true
Todo C → false
Todo D → true
```

Completed Filter：

```text
Todo B
Todo D
```

Pending Filter：

```text
Todo A
Todo C
```

### 中文

`filter()` 不會修改原本的 Array，而是根據條件產生一個新的 Array。

### English

`filter()` does not modify the original array. It creates a new array containing only the elements that match the condition.

### 日本語

`filter()` は元の配列を変更せず、条件に一致した要素だけを含む新しい配列を作成します。

---

# 🎛 Todo Filter

## All

```ts
allBtn?.addEventListener('click', () => {
  currentRenderAction = () => getTodos();

  renderTodos(currentRenderAction());
});
```

顯示所有 Todo。

---

## Completed

```ts
completedBtn?.addEventListener('click', () => {
  currentRenderAction = () => getTodos().filter((todo) => todo.completed === true);

  renderTodos(currentRenderAction());
});
```

只顯示：

```text
completed === true
```

---

## Pending

```ts
pendingBtn?.addEventListener('click', () => {
  currentRenderAction = () => getTodos().filter((todo) => todo.completed === false);

  renderTodos(currentRenderAction());
});
```

只顯示：

```text
completed === false
```

---

# 🧠 Current Filter State

```ts
let currentRenderAction = () => getTodos();
```

### 中文

`currentRenderAction` 用來保存目前的篩選方式。

例如使用者目前選擇：

```text
Completed
```

接著刪除一筆 Todo：

```text
Completed Filter
      ↓
Delete Todo
      ↓
renderTodos(currentRenderAction())
      ↓
仍然顯示 Completed
```

這樣刪除、更新或新增 Todo 後，不會自動跳回 All。

### English

`currentRenderAction` stores the currently selected filter.

For example, if the user is viewing Completed Todos and deletes a Todo, the list is re-rendered using the Completed filter instead of returning to All.

### 日本語

`currentRenderAction` は現在選択されているFilterを保持します。

Completedを表示している状態でTodoを削除・更新しても、Allに戻らず現在のFilterを維持できます。

---

# 🖼 renderTodos()

```ts
function renderTodos(todos = getTodos()) {
  if (!todoList) {
    return;
  }

  todoList.replaceChildren();

  todos.forEach((todo) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const textSpan = document.createElement('span');
    textSpan.textContent = `${todo.id} ${todo.title}`;

    textSpan.style.textDecoration = todo.completed ? 'line-through' : 'none';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '刪除';

    checkbox.addEventListener('change', () => {
      updateTodo(todo.id, checkbox.checked);

      renderTodos(currentRenderAction());
    });

    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);

      renderTodos(currentRenderAction());
    });

    li.append(checkbox, textSpan, deleteBtn);

    todoList.appendChild(li);
  });
}
```

---

# 💡 Default Parameter

```ts
function renderTodos(todos = getTodos());
```

### 中文

`getTodos()` 是 `todos` 的預設值。

因此：

```ts
renderTodos();
```

等同於使用全部 Todo。

但是也可以：

```ts
renderTodos(completedTodos);
```

顯示指定的 Todo Array。

### English

`getTodos()` is the default value of the `todos` parameter.

Calling:

```ts
renderTodos();
```

renders all Todos, while passing another Todo array allows the function to render filtered data.

### 日本語

`getTodos()` は `todos` パラメータのデフォルト値です。

```ts
renderTodos();
```

の場合はすべてのTodoを表示し、別のTodo配列を渡すことでフィルターされたデータを表示できます。

---

# 🧹 Clear Existing DOM

Instead of:

```ts
todoList.innerHTML = '';
```

we can use:

```ts
todoList.replaceChildren();
```

### 中文

`replaceChildren()` 可以移除目前 Element 裡的所有 Child Elements。

### English

`replaceChildren()` removes the existing child elements before the Todo list is rendered again.

### 日本語

`replaceChildren()` を使用して、再描画前に既存の子要素を削除できます。

---

# 🎨 CSS UI

Day79 also added styling for:

- Todo input
- Add button
- Filter buttons
- Todo statistics
- Todo list
- Checkbox
- Todo text
- Delete button
- Responsive layout

### 中文

透過 CSS 將 Todo App 從單純的功能練習整理成較完整的 UI。

### English

CSS was added to turn the functional Todo practice into a more complete Todo App interface.

### 日本語

CSSを追加し、機能だけのTodo練習から、より完成度の高いTodo App UIにしました。

---

# 🧠 Key Concepts

### 中文

Day79 主要學習：

- DOM Dynamic Rendering
- Checkbox
- `checked`
- `change` Event
- Data → UI
- UI → Data
- `filter()`
- Boolean 判斷
- Todo Statistics
- UI Filtering
- Default Parameters
- `replaceChildren()`
- UI State
- Data State
- Re-render
- Filter State 保存
- `span`
- Conditional Styling

---

### English

Key concepts learned:

- Dynamic DOM rendering
- Checkbox state
- `checked`
- `change` events
- Data-to-UI synchronization
- UI-to-Data synchronization
- Array `filter()`
- Boolean conditions
- Todo statistics
- UI filtering
- Default parameters
- `replaceChildren()`
- UI State
- Data State
- Re-rendering
- Preserving filter state
- Conditional styling

---

### 日本語

Day79で学習した主な内容：

- DOMの動的描画
- Checkbox
- `checked`
- `change` Event
- Data → UI の同期
- UI → Data の同期
- `filter()`
- Boolean判定
- Todo統計
- UI Filter
- デフォルト引数
- `replaceChildren()`
- UI State
- Data State
- 再描画
- Filter状態の保持
- 条件によるスタイル変更

---

# 💡 What I Learned

### 中文

Day79 將 Day78 建立的 Data Layer 與實際 UI 進一步結合。

透過 Checkbox，我理解了資料狀態與 UI 狀態之間如何互相同步；透過 `filter()`，實作了 Completed / Pending 的統計與畫面篩選。

另外，使用 `currentRenderAction` 保存目前的 Filter，讓我開始理解除了 Todo 資料本身之外，畫面目前選擇的狀態也是應用程式需要管理的一部分。

---

### English

In Day79, I connected the Data Layer from Day78 with a more complete Todo UI.

Using checkboxes helped me understand synchronization between data state and UI state, while `filter()` was used for Todo statistics and Completed / Pending filtering.

Using `currentRenderAction` also helped me understand that an application needs to manage not only its data, but also the current state of the UI.

---

### 日本語

Day79では、Day78で作成したData LayerとTodo UIをさらに連携させました。

Checkboxを通してデータ状態とUI状態の同期を学び、`filter()` を使用してCompleted / Pendingの統計とフィルター機能を実装しました。

また、`currentRenderAction` で現在のFilterを保持することで、Todoデータだけではなく「現在UIがどの状態なのか」を管理することもアプリケーション開発では重要だと理解できました。

---

## 📅 Day79

**Topic:** Todo UI  
**Language:** TypeScript  
**Focus:** DOM / Checkbox / Filter / UI State / Data State / Rendering / CSS
