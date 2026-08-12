# Day85 - Expense Planner

A simple Expense Planner built with TypeScript.  
Practice DOM manipulation, array methods, filtering, state management, LocalStorage, and responsive UI.

TypeScriptで作成したシンプルな支出管理アプリです。  
DOM操作、配列操作、フィルター、状態管理、LocalStorage、RWDを練習しました。

使用 TypeScript 製作的簡易支出管理系統。  
練習 DOM 操作、陣列處理、分類篩選、狀態管理、LocalStorage 與 RWD。

---

## 📚 What I Learned / 學習內容 / 学習内容

### 1. Interface

```ts
interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}
```

- Define the structure of expense data.
- 定義支出資料的型別結構。
- 支出データの型を定義。

---

### 2. Expense Array

```ts
let expenses: Expense[] = [];
```

Use `Expense[]` to manage multiple expense objects.

使用 `Expense[]` 管理多筆支出資料。

`Expense[]` を使用して複数の支出データを管理。

---

### 3. Add Expense

```ts
function addExpense(expense: Expense): Expense[] {
  expenses.push(expense);
  return expenses;
}
```

Add new data with `push()`.

使用 `push()` 新增支出。

`push()` で新しい支出を追加。

---

### 4. Delete Expense

```ts
function deleteExpense(id: number): Expense[] {
  const index = expenses.findIndex((item) => item.id === id);

  if (index !== -1) {
    expenses.splice(index, 1);
  }

  return expenses;
}
```

Use `findIndex()` + `splice()` to delete an expense.

使用 `findIndex()` + `splice()` 刪除指定資料。

`findIndex()` + `splice()` で指定したデータを削除。

---

### 5. Calculate Total

```ts
function calculateTotalExpense(): number {
  let sum = 0;

  expenses.forEach((item) => {
    sum += item.amount;
  });

  return sum;
}
```

Use `forEach()` to calculate the total amount.

使用 `forEach()` 計算總支出。

`forEach()` で支出合計を計算。

---

### 6. Category Filter

```ts
function filterExpensesByCategory(category: string): Expense[] {
  return expenses.filter((item) => item.category === category);
}
```

Filter expenses by `Food` or `Transport`.

依照 `Food`、`Transport` 篩選資料。

`Food`、`Transport` ごとに支出を絞り込み。

---

### 7. Default Parameter & Render

```ts
function renderExpense(targetList = getExpense()): void {
  targetList.forEach((item) => {
    // Render expense
  });
}
```

If no argument is passed, `getExpense()` becomes the default value.

沒有傳入參數時，使用 `getExpense()` 的回傳值。

引数がない場合、`getExpense()` の戻り値を使用。

---

### 8. Current Filter State

```ts
let currentFilter = 'All';
```

Keep the current filter state when adding or deleting data.

新增或刪除後，保持目前的篩選狀態。

追加・削除後も現在のフィルター状態を維持。

```text
State
↓
Get filtered data
↓
Render UI
```

---

### 9. LocalStorage

Save:

```ts
localStorage.setItem('data', JSON.stringify(expenses));
```

Load:

```ts
const data = localStorage.getItem('data');

if (data) {
  expenses = JSON.parse(data);
}
```

`JSON.stringify()` converts data to string.  
`JSON.parse()` converts string back to data.

`JSON.stringify()` 將資料轉成字串。  
`JSON.parse()` 將字串還原成資料。

`JSON.stringify()` で文字列に変換。  
`JSON.parse()` でデータに戻す。

---

### 10. Responsive Layout

```css
.input-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 600px) {
  .input-area {
    grid-template-columns: 1fr;
  }
}
```

Desktop: 2 × 2  
Mobile: 1 × 4

桌面版：2 × 2  
手機版：1 × 4

PC：2 × 2  
スマホ：1 × 4

---

## 🔄 Application Flow

```text
User Input
↓
Create Expense Object
↓
addExpense()
↓
expenses[]
↓
saveLocalStorage()
↓
getCurrentExpenses()
↓
renderExpense()
↓
Update UI
```

---

## 🛠 Technologies

- HTML5
- CSS3
- TypeScript
- DOM API
- LocalStorage
- CSS Grid
- Responsive Design

---

## ✅ Features

- Add expense
- Delete expense
- Calculate total expenses
- Filter by category
- Maintain current filter
- Save data with LocalStorage
- Restore saved data
- Responsive 2×2 / 1×4 form
- Type-safe expense data

---

## 💡 Key Takeaway

Day85 connected multiple TypeScript concepts into one small application.

Day85 將 TypeScript、DOM、Array、State、LocalStorage 與 RWD 串成一個完整的小型實戰。

Day85では TypeScript、DOM、配列、State、LocalStorage、RWDを組み合わせ、実際に動作する小規模アプリを作成しました。
