# Day 88 - Expense Storage

🌐 **Languages / 語言 / 言語**

[繁體中文](#繁體中文) | [English](#english) | [日本語](#日本語)

---

# 繁體中文

## 📌 專案介紹

Day 88 延續 Day 86～87 的 **Expense Tracker（支出管理工具）**，本日重點是整理與強化瀏覽器端的資料保存功能。

透過 `localStorage` 保存支出資料，讓使用者重新整理或重新開啟頁面後，仍然可以保留之前新增的支出紀錄。

本日進一步將讀取與儲存邏輯封裝成獨立函式，並使用 `try...catch` 處理可能損壞或格式錯誤的 JSON 資料。

---

## ✨ 功能

- 使用 `localStorage` 保存支出資料
- 頁面重新整理後恢復資料
- 新增支出後自動保存
- 刪除支出後自動保存
- 將資料轉換為 JSON 字串
- 將 JSON 字串還原成 JavaScript 資料
- 封裝資料讀取功能
- 封裝資料儲存功能
- 使用 `try...catch` 處理 JSON 解析錯誤
- 沒有儲存資料時使用預設資料
- 正確保存空陣列 `[]`
- 與 Expense Filter 功能整合

---

## 🛠 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- Local Storage
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- `try...catch`
- Nullish Coalescing Operator `??`
- Array Methods
- Responsive Web Design

---

# 📚 本日學習重點

## 1. Local Storage 是什麼？

`localStorage` 是瀏覽器提供的 Web Storage API。

可以將資料保存在使用者的瀏覽器中。

例如：

```ts
localStorage.setItem('username', 'Tom');
```

重新整理頁面之後：

```ts
localStorage.getItem('username');
```

仍然可以取得：

```text
Tom
```

因此 Expense Tracker 可以利用 `localStorage` 保存使用者的支出紀錄。

---

## 2. localStorage 只能保存字串

Expense Tracker 的資料是：

```ts
Expense[]
```

例如：

```ts
[
  {
    id: 1,
    category: '餐飲',
    amount: 180,
    date: '2026-08-13',
    note: '午餐',
  },
];
```

但是 `localStorage` 儲存的是字串。

因此不能直接把陣列當成應用資料格式保存，而是需要先使用：

```ts
JSON.stringify();
```

轉換。

---

## 3. JSON.stringify()

使用：

```ts
JSON.stringify(expenses);
```

把：

```text
Expense[]
```

轉換成：

```text
JSON String
```

概念：

```text
JavaScript / TypeScript Data
            ↓
      JSON.stringify()
            ↓
         String
            ↓
      localStorage
```

---

## 4. 儲存 Expense

將儲存邏輯封裝成 function：

```ts
function saveStorage(): void {
  localStorage.setItem('data', JSON.stringify(expenses));
}
```

新增資料後：

```ts
expenses.push(newExpense);

saveStorage();
```

刪除資料後：

```ts
expenses.splice(index, 1);

saveStorage();
```

確保程式中的資料與瀏覽器保存的資料保持同步。

---

## 5. localStorage.getItem()

讀取資料使用：

```ts
const data = localStorage.getItem('data');
```

但 `getItem()` 的回傳型別是：

```ts
string | null;
```

因為可能存在兩種情況：

```text
有 data
↓
string

沒有 data
↓
null
```

因此必須先判斷：

```ts
if (!data) {
  return null;
}
```

---

## 6. JSON.parse()

從 `localStorage` 取得的資料是：

```text
String
```

但程式需要的是：

```text
Expense[]
```

因此使用：

```ts
JSON.parse(data);
```

概念：

```text
localStorage
     ↓
   String
     ↓
 JSON.parse()
     ↓
 Expense[]
     ↓
Application
```

---

# 7. 封裝 loadStorage()

將讀取資料的邏輯獨立成：

```ts
function loadStorage(): Expense[] | null {
  const data = localStorage.getItem('data');

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as Expense[];
  } catch {
    return null;
  }
}
```

現在：

```ts
loadStorage();
```

可能得到：

```text
Expense[]
```

或：

```text
null
```

---

# 8. try...catch

本日另一個重要學習內容是：

```ts
try {
} catch {}
```

`try` 的意思是：

> 嘗試執行可能發生錯誤的程式。

例如：

```ts
try {
  return JSON.parse(data) as Expense[];
}
```

只要程式執行到 `try`，就會執行裡面的程式。

---

## 什麼時候進入 catch？

只有當 `try` 裡面發生 Exception 時，才會進入 `catch`。

例如：

```ts
JSON.parse('hello');
```

`hello` 不是合法 JSON，因此：

```text
try
 ↓
JSON.parse()
 ↓
發生 SyntaxError
 ↓
catch
```

所以：

```ts
try {
  return JSON.parse(data) as Expense[];
} catch {
  return null;
}
```

代表：

```text
嘗試解析 JSON
     ↓
   成功？
  ↙    ↘
是      否
↓        ↓
資料    catch
         ↓
        null
```

---

# 9. 為什麼需要 try...catch？

正常情況下，我們自己透過：

```ts
JSON.stringify();
```

保存的資料通常可以正常解析。

但是 `localStorage` 可能因為：

- 使用者手動修改
- 開發測試資料
- 舊版本資料格式
- 不合法 JSON
- 其他程式修改資料

而出現錯誤內容。

如果直接：

```ts
JSON.parse(data);
```

整個程式可能因為解析錯誤而停止。

加入：

```ts
try...catch
```

後，可以在解析失敗時安全地回傳：

```ts
null;
```

---

# 10. 使用預設資料

先讀取 Storage：

```ts
const storedExpenses = loadStorage();
```

再決定使用哪一份資料：

```ts
const expenses: Expense[] = storedExpenses ?? defaultExpenses;
```

意思：

```text
storedExpenses 有資料
        ↓
使用 storedExpenses

storedExpenses 是 null / undefined
        ↓
使用 defaultExpenses
```

---

# 11. Nullish Coalescing Operator `??`

Day 88 也使用：

```ts
??
```

例如：

```ts
const expenses = storedExpenses ?? defaultExpenses;
```

`??` 只有左邊是：

```text
null
undefined
```

才會使用右邊。

這對 Expense Tracker 很重要。

因為：

```ts
[];
```

代表：

> 使用者真的沒有任何支出。

空陣列不是 `null`。

所以：

```ts
[] ?? defaultExpenses;
```

結果仍然是：

```ts
[];
```

不會把預設資料重新放回來。

---

# 12. 為什麼不能只判斷 length？

如果寫：

```ts
storedExpenses.length > 0 ? storedExpenses : defaultExpenses;
```

會有問題。

假設使用者刪掉所有資料：

```ts
[];
```

重新整理後：

```text
length = 0
↓
使用 defaultExpenses
```

結果原本刪除的資料又重新出現。

因此需要區分：

```text
null
→ 從來沒有 Storage 資料

[]
→ 有 Storage 資料，只是目前沒有 Expense
```

這是 Day 88 很重要的資料狀態觀念。

---

# 🔄 Storage 資料流程

## 儲存

```text
使用者新增 / 刪除 Expense
          ↓
      expenses[]
          ↓
    JSON.stringify()
          ↓
       String
          ↓
   localStorage.setItem()
          ↓
       Browser
```

## 讀取

```text
Browser
   ↓
localStorage.getItem()
   ↓
String | null
   ↓
try
   ↓
JSON.parse()
   ↓
Expense[]
   ↓
Application
   ↓
Render UI
```

---

# 🧠 Day 86～88 整體架構

```text
              localStorage
                   ↕
            JSON stringify
             / JSON parse
                   ↕
               expenses
                   │
          ┌────────┴────────┐
          │                 │
      Add/Delete       currentFilter
          │                 │
          │          getFilteredExpenses()
          │                 │
          └────────┬────────┘
                   ↓
             Render UI
            ↙         ↘
renderExpenses()   renderTotal()
```

---

# 💡 學習心得

Day 88 讓我更深入理解瀏覽器端資料保存的完整流程。

除了使用 `localStorage.setItem()` 和 `localStorage.getItem()`，也理解了 `localStorage` 實際保存的是字串，因此需要透過 `JSON.stringify()` 與 `JSON.parse()` 在程式資料與 Storage 資料之間進行轉換。

另外，我也學習了使用 `try...catch` 處理可能發生的 JSON 解析錯誤，避免錯誤資料造成整個應用程式停止執行。

透過 `Expense[] | null` 與 `??`，也進一步理解了「沒有資料」與「空陣列」是不同的程式狀態。

---

# English

## 📌 Project Overview

Day 88 continues the **Expense Tracker** project by improving its browser-side data persistence.

Expense records are stored using `localStorage`, allowing the application to restore data after a page refresh or browser restart.

The storage logic is separated into dedicated save and load functions. Error handling with `try...catch` is also introduced to prevent invalid JSON data from crashing the application.

---

## ✨ Features

- Save expenses to `localStorage`
- Restore expenses after page refresh
- Automatically save newly added expenses
- Automatically save after deleting expenses
- Convert application data into JSON
- Parse JSON back into application data
- Separate save and load functions
- Handle invalid JSON with `try...catch`
- Use default data when no stored data exists
- Correctly preserve an empty expense array
- Integrate storage with expense filtering

---

## 🛠 Technologies

- HTML5
- CSS3
- TypeScript
- DOM API
- Local Storage
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- `try...catch`
- Nullish Coalescing Operator `??`
- Array Methods
- Responsive Web Design

---

# 📚 What I Learned

## Saving Data

`localStorage` stores strings, so the expense array must first be converted into JSON:

```ts
function saveStorage(): void {
  localStorage.setItem('data', JSON.stringify(expenses));
}
```

Data flow:

```text
Expense[]
    ↓
JSON.stringify()
    ↓
String
    ↓
localStorage
```

---

## Loading Data

Stored data can be retrieved with:

```ts
const data = localStorage.getItem('data');
```

The return type is:

```ts
string | null;
```

because the requested key may not exist.

---

## Parsing JSON

Stored strings are converted back into application data using:

```ts
JSON.parse(data);
```

Data flow:

```text
localStorage
    ↓
String
    ↓
JSON.parse()
    ↓
Expense[]
```

---

## Creating loadStorage()

The loading logic is separated into a reusable function:

```ts
function loadStorage(): Expense[] | null {
  const data = localStorage.getItem('data');

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as Expense[];
  } catch {
    return null;
  }
}
```

The function returns either:

```text
Expense[]
```

or:

```text
null
```

---

## Understanding try...catch

The `try` block contains code that may throw an exception.

```ts
try {
  return JSON.parse(data) as Expense[];
}
```

If the operation succeeds, `catch` is skipped.

If an exception occurs:

```text
try
 ↓
JSON.parse()
 ↓
Error
 ↓
catch
```

The application can recover safely:

```ts
catch {
  return null;
}
```

---

## Why Error Handling Matters

Invalid data may exist in `localStorage` because of manual changes, old application versions, development data, or corrupted JSON.

Without error handling:

```ts
JSON.parse(data);
```

may throw an exception and interrupt the application.

Using `try...catch` allows the application to handle the failure safely.

---

## Nullish Coalescing Operator

Stored data can be combined with default data using:

```ts
const expenses: Expense[] = storedExpenses ?? defaultExpenses;
```

`??` uses the right-hand value only when the left-hand value is:

```text
null
or
undefined
```

An empty array:

```ts
[];
```

is still a valid value.

Therefore:

```ts
[] ?? defaultExpenses;
```

returns:

```ts
[];
```

This prevents deleted expenses from unexpectedly returning after a page refresh.

---

# 🔄 Data Flow

```text
Application
     ↓
 Expense[]
     ↓
JSON.stringify()
     ↓
localStorage
     ↓
localStorage.getItem()
     ↓
JSON.parse()
     ↓
 Expense[]
     ↓
Application
```

---

# 💡 Reflection

Day 88 helped me understand the complete browser-side data persistence process.

I learned that `localStorage` stores strings, which means application data must be serialized with `JSON.stringify()` and restored with `JSON.parse()`.

I also learned how `try...catch` can prevent invalid stored data from crashing the application.

Finally, using `Expense[] | null` and the nullish coalescing operator helped me understand the important difference between missing data and a valid empty array.

---

# 日本語

## 📌 プロジェクト概要

Day 88 では、これまで作成してきた **Expense Tracker（支出管理アプリ）** のデータ保存処理を整理・強化しました。

`localStorage` を利用して支出データをブラウザに保存することで、ページを更新した後でも以前の支出データを復元できます。

また、保存処理と読み込み処理をそれぞれ関数として分離し、`try...catch` を利用して不正な JSON データが存在する場合のエラー処理も実装しました。

---

## ✨ 主な機能

- `localStorage` による支出データ保存
- ページ更新後のデータ復元
- 支出追加後の自動保存
- 支出削除後の自動保存
- JSON 形式へのデータ変換
- JSON から支出データへの復元
- 保存処理の関数化
- 読み込み処理の関数化
- `try...catch` によるエラー処理
- 保存データがない場合の初期データ利用
- 空配列 `[]` の正しい保存
- フィルター機能との連携

---

## 🛠 使用技術

- HTML5
- CSS3
- TypeScript
- DOM API
- Local Storage
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- `try...catch`
- Nullish Coalescing Operator `??`
- Array Methods
- Responsive Web Design

---

# 📚 学習内容

## localStorage への保存

`localStorage` は文字列を保存するため、支出データを `JSON.stringify()` で変換します。

```ts
function saveStorage(): void {
  localStorage.setItem('data', JSON.stringify(expenses));
}
```

処理の流れ：

```text
Expense[]
    ↓
JSON.stringify()
    ↓
String
    ↓
localStorage
```

---

## localStorage からの読み込み

保存データは：

```ts
localStorage.getItem('data');
```

で取得できます。

返り値は：

```ts
string | null;
```

です。

保存データが存在しない場合は `null` が返されます。

---

## JSON.parse()

`localStorage` から取得した文字列をアプリケーションで利用するデータに戻すために：

```ts
JSON.parse(data);
```

を使用します。

```text
localStorage
    ↓
String
    ↓
JSON.parse()
    ↓
Expense[]
```

---

## loadStorage() の作成

読み込み処理を関数として分離しました。

```ts
function loadStorage(): Expense[] | null {
  const data = localStorage.getItem('data');

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as Expense[];
  } catch {
    return null;
  }
}
```

この関数は：

```text
Expense[]
```

または：

```text
null
```

を返します。

---

# try...catch

`try` にはエラーが発生する可能性がある処理を書きます。

```ts
try {
  return JSON.parse(data) as Expense[];
}
```

正常に処理できた場合：

```text
try
 ↓
JSON.parse()
 ↓
成功
 ↓
Expense[]
```

`catch` は実行されません。

エラーが発生した場合：

```text
try
 ↓
JSON.parse()
 ↓
エラー発生
 ↓
catch
 ↓
return null
```

となります。

---

## なぜ try...catch が必要なのか

`localStorage` のデータが常に正しいとは限りません。

例えば：

- 手動でデータが変更された
- 古いバージョンのデータが残っている
- 開発中のテストデータが残っている
- JSON の形式が壊れている

などの場合があります。

不正なデータに対して：

```ts
JSON.parse(data);
```

を実行するとエラーが発生する可能性があります。

そのため `try...catch` を使用し、アプリケーション全体が停止しないようにしました。

---

# Nullish Coalescing Operator `??`

読み込んだデータと初期データを組み合わせるために：

```ts
const expenses: Expense[] = storedExpenses ?? defaultExpenses;
```

を使用します。

`??` は左側が：

```text
null
undefined
```

の場合のみ右側を使用します。

そのため：

```ts
[];
```

は有効なデータとして扱われます。

```ts
[] ?? defaultExpenses;
```

の結果は：

```ts
[];
```

です。

これにより、すべての支出を削除した後にページを更新しても、初期データが勝手に復活することを防げます。

---

# 🔄 Storage のデータフロー

```text
ユーザー操作
     ↓
 expenses[]
     ↓
JSON.stringify()
     ↓
localStorage
     ↓
ページ更新
     ↓
localStorage.getItem()
     ↓
JSON.parse()
     ↓
 expenses[]
     ↓
Render UI
```

---

# 🧠 Day 88 で理解した構造

```text
               UI
                ↕
            expenses
                ↕
        JSON.stringify()
         JSON.parse()
                ↕
          localStorage
```

`expenses` がアプリケーション内のデータであり、`localStorage` はそのデータをブラウザに永続化する役割を担当します。

---

# 💡 振り返り

Day 88 では、単純に `localStorage` を利用するだけではなく、データ保存と読み込みの流れを整理することができました。

`JSON.stringify()` と `JSON.parse()` を利用して、TypeScript のデータとブラウザに保存する文字列を相互に変換する仕組みを理解しました。

また、`try...catch` を利用することで、予期しないデータが存在してもアプリケーションを安全に動作させる考え方を学びました。

さらに、`null` と空配列 `[]` の違いや `??` の使い方を通して、データの状態を正しく扱う重要性についても理解を深めることができました。

---

## 🚀 Next Step

**Day 89**

Day 86～88 で Expense Tracker の UI、Filter、Storage の基本機能が完成しました。

次のステップでは、これまで学習した TypeScript・DOM・データ管理の知識を利用して、さらにアプリケーションを発展させていきます。
