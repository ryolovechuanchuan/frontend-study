# Day 87 - Expense Filter

🌐 **Languages / 語言 / 言語**

[繁體中文](#繁體中文) | [English](#english) | [日本語](#日本語)

---

# 繁體中文

## 📌 專案介紹

Day 87 延續 Day 86 的 **Expense Tracker（支出管理工具）**，新增「**依支出類別篩選資料**」功能。

使用者可以透過下拉選單選擇：

- 全部
- 餐飲
- 交通
- 購物
- 娛樂
- 其他

系統會使用 JavaScript / TypeScript 的 `filter()` 根據目前選擇的類別產生篩選結果，再重新渲染支出列表與總金額。

本專案同時保留 Day 86 完成的新增、刪除、`localStorage` 資料保存等功能。

---

## ✨ 功能

- 顯示所有支出紀錄
- 新增支出
- 刪除支出
- 依類別篩選支出
- 「全部」顯示完整支出資料
- 篩選後自動更新支出列表
- 篩選後自動重新計算總金額
- 無符合資料時顯示提示
- 使用 `localStorage` 保存資料
- 頁面重新整理後恢復資料
- Responsive Web Design
- 不使用 `innerHTML`

---

## 🛠 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- Array `filter()`
- Array `forEach()`
- Array `findIndex()`
- Array `splice()`
- Local Storage
- JSON
- Flexbox
- CSS Grid
- Responsive Web Design

---

## 📚 本日學習重點

### 1. 保存目前的篩選狀態

使用變數記錄使用者目前選擇的類別：

```ts
let currentFilter = '全部';
```

例如：

```text
currentFilter = "全部"
currentFilter = "餐飲"
currentFilter = "交通"
```

畫面會根據 `currentFilter` 決定需要顯示哪些資料。

---

### 2. 使用 change 事件

監聽 `<select>` 的值是否改變：

```ts
categoryFilter.addEventListener('change', () => {
  currentFilter = categoryFilter.value;

  renderExpenses();
  renderTotal();
});
```

當使用者切換類別時：

```text
使用者選擇類別
        ↓
change event
        ↓
取得 categoryFilter.value
        ↓
更新 currentFilter
        ↓
重新 Render
```

---

### 3. 使用 filter() 篩選資料

建立 `getFilteredExpenses()`：

```ts
function getFilteredExpenses(): Expense[] {
  if (currentFilter === '全部') {
    return expenses;
  }

  return expenses.filter((expense) => expense.category === currentFilter);
}
```

當選擇「全部」：

```ts
return expenses;
```

直接回傳完整資料。

當選擇「餐飲」：

```ts
expenses.filter((expense) => expense.category === '餐飲');
```

只產生符合「餐飲」條件的新陣列。

---

## 🔍 filter() 的概念

假設原始資料為：

```text
餐飲  NT$ 180
交通  NT$ 320
購物  NT$ 1,200
餐飲  NT$ 250
```

當：

```ts
currentFilter = '餐飲';
```

執行：

```ts
expenses.filter((expense) => expense.category === currentFilter);
```

結果：

```text
餐飲  NT$ 180
餐飲  NT$ 250
```

`filter()` 不會修改原始 `expenses`。

它會根據條件建立一個新的陣列。

---

## 4. 原始資料與顯示資料分離

Day 87 的重要概念之一，是區分：

```text
expenses
↓
真正的完整資料

getFilteredExpenses()
↓
目前畫面需要顯示的資料
```

例如：

```text
expenses

餐飲 180
交通 320
購物 1200
餐飲 250

        ↓

currentFilter = "餐飲"

        ↓

getFilteredExpenses()

        ↓

餐飲 180
餐飲 250
```

畫面只顯示篩選結果，但真正的 `expenses` 仍然保存完整資料。

---

## 5. Render 篩選後的資料

`renderExpenses()` 預設取得目前的篩選結果：

```ts
function renderExpenses(list = getFilteredExpenses()): void {
  // Render UI
}
```

使用：

```ts
list.forEach((expense) => {
  // 建立 Expense DOM
});
```

讓 Render function 不需要知道目前選擇的是哪個類別，只需要負責顯示收到的資料。

---

## 6. 篩選後的總金額

`renderTotal()` 同樣使用目前篩選後的資料：

```ts
function renderTotal(list = getFilteredExpenses()): void {
  let sum = 0;

  list.forEach((expense) => {
    sum += expense.amount;
  });

  totalExpense.textContent = `NT$ ${sum.toLocaleString()}`;
}
```

例如完整資料：

```text
餐飲 180
交通 320
購物 1200
餐飲 250
```

選擇：

```text
全部
```

總額：

```text
NT$ 1,950
```

選擇：

```text
餐飲
```

總額：

```text
NT$ 430
```

因此支出列表與總金額會保持同步。

---

## 7. 刪除篩選後的資料

畫面雖然使用篩選後的資料，但刪除時仍然需要修改真正的 `expenses`：

```ts
const index = expenses.findIndex((item) => expense.id === item.id);

if (index === -1) return;

expenses.splice(index, 1);
```

刪除後：

```ts
toSaveLocalStorage();
renderExpenses();
renderTotal();
```

因此資料、`localStorage` 和 UI 都會同步更新。

---

## 8. Local Storage

新增或刪除資料後，使用：

```ts
function toSaveLocalStorage(): void {
  localStorage.setItem('data', JSON.stringify(expenses));
}
```

將完整的 `expenses` 儲存至瀏覽器。

讀取時：

```ts
const data = localStorage.getItem('data');

const tempData: Expense[] | null = data ? JSON.parse(data) : null;
```

讓重新整理頁面後仍然可以保留支出資料。

---

## 🔄 Day 87 資料流程

```text
                expenses
            （完整原始資料）
                    │
                    │
              currentFilter
                    │
                    ▼
        getFilteredExpenses()
                    │
                    ▼
             filter()
                    │
                    ▼
            篩選後 Expense[]
               ↙          ↘
              ↓            ↓
     renderExpenses()  renderTotal()
              ↓            ↓
          支出列表        總金額
               ↘          ↙
                    UI
```

---

## 🐛 Debug 學習

本次練習也遇到了 DOM 元素不存在的問題。

TypeScript：

```ts
const categoryInput =
  document.querySelector('#category')
  as HTMLSelectElement;
```

如果 HTML 中沒有：

```html
<select id="category"></select>
```

實際執行時 `querySelector()` 仍然會得到：

```ts
null;
```

`as HTMLSelectElement` 只是 TypeScript 的型別斷言，不會讓不存在的 HTML 元素自動出現。

因此在 DOM 操作時，需要確認 HTML 的 `id` 與 TypeScript 的 selector 是否一致。

---

## 💡 學習心得

Day 87 最大的學習重點不只是 `filter()` 的語法，而是理解「**原始資料**」與「**畫面顯示資料**」之間的差別。

`expenses` 負責保存真正的完整資料，而 `currentFilter` 代表目前 UI 的篩選狀態。

透過 `getFilteredExpenses()`，可以從原始資料計算出目前畫面需要顯示的資料，再交給 `renderExpenses()` 和 `renderTotal()`。

這讓資料處理、篩選邏輯與 UI Render 的責任更加清楚。

---

# English

## 📌 Project Overview

Day 87 extends the **Expense Tracker** from Day 86 by adding **category-based expense filtering**.

Users can filter expenses by:

- All
- Food
- Transportation
- Shopping
- Entertainment
- Other

The application uses the TypeScript/JavaScript `filter()` method to create a filtered expense list based on the currently selected category.

The expense list and total amount are then re-rendered automatically.

Existing features such as adding expenses, deleting expenses, and `localStorage` persistence are also preserved.

---

## ✨ Features

- Display all expense records
- Add expenses
- Delete expenses
- Filter expenses by category
- Display all expenses with the "All" option
- Automatically update the expense list
- Automatically recalculate the filtered total
- Display an empty state when no records match
- Save data with `localStorage`
- Restore data after page refresh
- Responsive Web Design
- No `innerHTML`

---

## 🛠 Technologies

- HTML5
- CSS3
- TypeScript
- DOM API
- Array `filter()`
- Array `forEach()`
- Array `findIndex()`
- Array `splice()`
- Local Storage
- JSON
- Flexbox
- CSS Grid
- Responsive Web Design

---

## 📚 What I Learned

### Managing Filter State

The currently selected category is stored in:

```ts
let currentFilter = '全部';
```

This value represents the current UI filtering state.

---

### Handling Select Changes

The `change` event is used to detect when the user selects another category:

```ts
categoryFilter.addEventListener('change', () => {
  currentFilter = categoryFilter.value;

  renderExpenses();
  renderTotal();
});
```

Data flow:

```text
Select Category
      ↓
change event
      ↓
Update currentFilter
      ↓
Filter Data
      ↓
Re-render UI
```

---

### Filtering Data with filter()

Filtered expenses are calculated using:

```ts
function getFilteredExpenses(): Expense[] {
  if (currentFilter === '全部') {
    return expenses;
  }

  return expenses.filter((expense) => expense.category === currentFilter);
}
```

`filter()` does not modify the original array.

Instead, it creates a new array containing only the items that match the specified condition.

---

### Separating Source Data from Display Data

The complete expense data is stored in:

```ts
expenses;
```

The data currently displayed in the UI is derived from:

```ts
getFilteredExpenses();
```

Conceptually:

```text
expenses
   ↓
currentFilter
   ↓
getFilteredExpenses()
   ↓
filtered Expense[]
   ↓
UI
```

This keeps the original data separate from the current UI representation.

---

### Rendering Filtered Data

`renderExpenses()` receives the currently filtered list:

```ts
function renderExpenses(list = getFilteredExpenses()): void {
  // Render expenses
}
```

The function is responsible only for rendering the provided data.

---

### Calculating the Filtered Total

The total is calculated from the same filtered data:

```ts
function renderTotal(list = getFilteredExpenses()): void {
  let sum = 0;

  list.forEach((expense) => {
    sum += expense.amount;
  });

  totalExpense.textContent = `NT$ ${sum.toLocaleString()}`;
}
```

This keeps the displayed total synchronized with the current filter.

---

### Deleting from the Original Data

Although the UI displays filtered data, deletion must still modify the original `expenses` array:

```ts
const index = expenses.findIndex((item) => expense.id === item.id);

if (index === -1) return;

expenses.splice(index, 1);
```

After deletion, the application updates local storage and re-renders the UI.

---

### DOM Debugging

A TypeScript assertion such as:

```ts
document.querySelector('#category')
  as HTMLSelectElement;
```

does not guarantee that the element actually exists.

If the HTML does not contain an element with `id="category"`, `querySelector()` still returns `null` at runtime.

This exercise helped reinforce the difference between TypeScript's type system and actual runtime DOM values.

---

## 🔄 Data Flow

```text
              expenses
          Complete Data
                 │
                 ▼
          currentFilter
                 │
                 ▼
      getFilteredExpenses()
                 │
                 ▼
             filter()
                 │
                 ▼
        Filtered Expense[]
           ↙           ↘
          ↓             ↓
 renderExpenses()   renderTotal()
          ↓             ↓
     Expense List      Total
           ↘           ↙
                 UI
```

---

## 💡 Reflection

The most important lesson from Day 87 was not only learning the syntax of `filter()`, but understanding the difference between **source data** and **displayed data**.

The `expenses` array remains the source of truth, while `currentFilter` represents the current UI state.

`getFilteredExpenses()` derives the data required by the UI without modifying the original expense array.

This separation makes the code easier to understand, maintain, and extend.

---

# 日本語

## 📌 プロジェクト概要

Day 87 では、Day 86 で作成した **Expense Tracker（支出管理アプリ）** に「**カテゴリー別フィルター機能**」を追加しました。

ユーザーは以下のカテゴリーから表示する支出を選択できます。

- 全部
- 食費
- 交通
- 買い物
- 娯楽
- その他

TypeScript / JavaScript の `filter()` を利用し、現在選択されているカテゴリーに一致する支出データだけを取得します。

フィルター変更後は、支出一覧と合計金額を自動的に再描画します。

Day 86 で実装した支出追加・削除・`localStorage` によるデータ保存機能も引き続き利用しています。

---

## ✨ 主な機能

- 支出一覧の表示
- 支出の追加
- 支出の削除
- カテゴリー別フィルター
- 「全部」による全データ表示
- フィルター変更時の自動再描画
- フィルター後の合計金額計算
- 該当データがない場合のメッセージ表示
- `localStorage` によるデータ保存
- ページ更新後のデータ復元
- レスポンシブ対応
- `innerHTML` を使用しない DOM 操作

---

## 🛠 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- Array `filter()`
- Array `forEach()`
- Array `findIndex()`
- Array `splice()`
- Local Storage
- JSON
- Flexbox
- CSS Grid
- Responsive Web Design

---

## 📚 学習内容

### フィルター状態の管理

現在選択されているカテゴリーを変数で管理しました。

```ts
let currentFilter = '全部';
```

この変数が現在の UI の状態を表します。

---

### change イベント

`<select>` の値が変更されたときに `change` イベントを実行します。

```ts
categoryFilter.addEventListener('change', () => {
  currentFilter = categoryFilter.value;

  renderExpenses();
  renderTotal();
});
```

処理の流れ：

```text
カテゴリーを選択
        ↓
change event
        ↓
currentFilter を更新
        ↓
データをフィルター
        ↓
UI を再描画
```

---

### filter() によるデータ抽出

現在のカテゴリーに一致するデータを取得するために `filter()` を使用しました。

```ts
function getFilteredExpenses(): Expense[] {
  if (currentFilter === '全部') {
    return expenses;
  }

  return expenses.filter((expense) => expense.category === currentFilter);
}
```

`filter()` は元の配列を変更しません。

条件に一致するデータだけを含む新しい配列を作成します。

---

### 元データと表示データの分離

すべての支出データは：

```ts
expenses;
```

に保存されています。

一方、現在画面に表示するデータは：

```ts
getFilteredExpenses();
```

から取得します。

```text
expenses
   ↓
currentFilter
   ↓
getFilteredExpenses()
   ↓
filtered Expense[]
   ↓
UI
```

これにより、元データを変更せずに表示内容だけを変更できます。

---

### フィルター結果の描画

`renderExpenses()` は現在のフィルター結果を取得して画面を描画します。

```ts
function renderExpenses(list = getFilteredExpenses()): void {
  // DOM を生成
}
```

この関数は「どのカテゴリーが選択されているか」を直接判断せず、渡されたデータを表示する役割を担当します。

---

### フィルター後の合計金額

合計金額も同じフィルター結果から計算します。

```ts
function renderTotal(list = getFilteredExpenses()): void {
  let sum = 0;

  list.forEach((expense) => {
    sum += expense.amount;
  });

  totalExpense.textContent = `NT$ ${sum.toLocaleString()}`;
}
```

これにより、支出一覧と合計金額を同じ状態に保つことができます。

---

### 元データからの削除

画面にはフィルター後のデータを表示していますが、削除するときは元の `expenses` を変更します。

```ts
const index = expenses.findIndex((item) => expense.id === item.id);

if (index === -1) return;

expenses.splice(index, 1);
```

その後：

```ts
toSaveLocalStorage();
renderExpenses();
renderTotal();
```

を実行し、保存データと UI を更新します。

---

## 🐛 デバッグで学んだこと

今回、HTML に存在しない要素を TypeScript から取得しようとする問題も経験しました。

例えば：

```ts
const categoryInput =
  document.querySelector('#category')
  as HTMLSelectElement;
```

と書いても、HTML に：

```html
<select id="category"></select>
```

が存在しなければ、実行時の値は `null` になります。

`as HTMLSelectElement` は TypeScript に型を伝えるための型アサーションであり、DOM 要素の存在を保証するものではありません。

そのため、HTML の `id` と TypeScript の selector が一致しているか確認することが重要だと学びました。

---

## 🔄 データフロー

```text
              expenses
            全支出データ
                 │
                 ▼
          currentFilter
                 │
                 ▼
      getFilteredExpenses()
                 │
                 ▼
             filter()
                 │
                 ▼
          フィルター結果
            ↙         ↘
           ↓           ↓
 renderExpenses()  renderTotal()
           ↓           ↓
        支出一覧       合計金額
            ↘         ↙
                 UI
```

---

## 💡 振り返り

Day 87 では、`filter()` の使い方だけではなく、**元データと画面表示用データを分けて考えること**の重要性を学びました。

`expenses` をアプリケーションの元データとして保持し、`currentFilter` を現在の UI 状態として管理しています。

そして `getFilteredExpenses()` を利用して、元データから現在の画面に必要なデータを生成しています。

この構造にすることで、データ処理、フィルター処理、UI 描画の役割を分けることができました。

---

## 🚀 Next Step

**Day 88 - Expense Storage**

次回は `localStorage` の処理をさらに整理し、

- データの読み込み
- データの保存
- JSON の変換
- 初期データの管理
- 保存データの安全な取り扱い

について学習します。
