# Day82_Debugging

## 🇹🇼 中文

### 📚 今日學習內容

Day82 主要學習 Debugging（除錯）的基本觀念與實務流程。

Debugging 不只是「看到錯誤就修改程式」，而是透過錯誤訊息、`console.log()`、Breakpoint、Call Stack、Network 等工具，一步一步縮小問題範圍，最後找到真正的 Bug 原因。

---

## 1. Debugging 是什麼？

Debugging 就是：

```text
發現 Bug
↓
確認錯誤
↓
找到錯誤位置
↓
檢查資料
↓
縮小問題範圍
↓
找到原因
↓
修正 Bug
```

重要的不是一直修改程式，而是先找出「為什麼錯」。

---

## 2. 常見的 Error 類型

今天學習了四種常見問題：

```text
Syntax Error
→ 語法錯誤

Type Error
→ 型別錯誤

Runtime Error
→ 執行時錯誤

Logic Error
→ 邏輯錯誤
```

---

### Syntax Error

程式語法本身不合法。

```ts
console.log('Hello';
```

少了 `)`。

正確：

```ts
console.log('Hello');
```

---

### Type Error

資料型別不符合 TypeScript 的規定。

```ts
let age: number = '30';
```

`age` 被指定為 `number`，但是卻放入 `string`。

---

### Runtime Error

程式語法可能沒有問題，但是執行時發生錯誤。

例如：

```ts
const button = null;

button.addEventListener('click', () => {});
```

實際上等於：

```text
null.addEventListener(...)
```

因此執行時會發生錯誤。

---

### Logic Error

程式可以正常執行，但是結果不符合預期。

```ts
function multiply(a: number, b: number): number {
  return a + b;
}
```

Function 名稱是 `multiply`，應該做乘法，但是實際卻做加法。

這種問題 TypeScript 不一定能幫我們找到。

---

## 3. console.log() Debugging

最基本也最常使用的 Debugging 方法之一：

```ts
console.log();
```

例如：

```ts
const price = 100;
const quantity = 3;

console.log(price);
console.log(quantity);

const total = price * quantity;

console.log(total);
```

可以一步一步確認資料是否正確。

```text
price 正確嗎？
↓
quantity 正確嗎？
↓
total 正確嗎？
```

---

## 4. 不要只看最後結果

假設：

```ts
const todo = getTodoById(10);

console.log(todo.title);
```

出現：

```text
Cannot read properties of undefined
```

不要直接修改整個程式。

先：

```ts
console.log(todo);
```

如果結果：

```text
undefined
```

就知道問題跟 `todo` 有關。

接著往資料來源檢查：

```ts
getTodoById(10);
```

---

## 5. 從資料來源往回 Debug

例如：

```ts
function getTodoById(id: number): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}
```

可以檢查：

```ts
console.log(id);
console.log(todos);
```

假設結果：

```text
id = 10

todos =
[
  { id: 1, ... },
  { id: 2, ... },
  { id: 3, ... }
]
```

就可以知道：

```text
尋找 id = 10
↓
todos 沒有 id = 10
↓
find() 找不到
↓
undefined
↓
todo.title
↓
Runtime Error
```

最後才修正：

```ts
const todo = getTodoById(10);

if (todo) {
  console.log(todo.title);
} else {
  console.log('Todo not found');
}
```

---

## 6. Error Message

遇到 Error 時，不要只看到一大片紅字。

先找三件事情：

```text
① 什麼錯誤？
② 為什麼？
③ 哪一行？
```

例如：

```text
Uncaught TypeError:
Cannot read properties of null
script.js:10
```

可以拆成：

```text
TypeError
↓
Cannot read properties of null
↓
script.js 第 10 行
```

先從第 10 行開始檢查。

---

## 7. Chrome DevTools

Chrome DevTools 是前端 Debugging 非常重要的工具。

開啟方式：

```text
F12
```

常用區域：

```text
Console
Sources
Network
```

用途：

```text
Console
→ 查看 Error / console.log()

Sources
→ Breakpoint / Debugger

Network
→ API Request / Response
```

---

## 8. Breakpoint

Breakpoint 可以讓程式執行到某一行時暫停。

例如：

```ts
function addTodo(title: string) {
  const todo = {
    id: 1,
    title: title,
    completed: false,
  };

  todos.push(todo);

  return todos;
}
```

在 Chrome DevTools：

```text
F12
↓
Sources
↓
找到 JavaScript
↓
點擊左側行號
↓
設定 Breakpoint
```

當程式執行到那一行：

```text
程式執行
↓
程式執行
↓
Breakpoint
↓
🛑 暫停
```

這時可以直接查看：

```text
title
todo
todos
```

目前的值。

---

## 9. Step Over

Debugger 暫停後，可以使用 Step Over。

例如：

```ts
const todo = getTodoById(3);
```

Step Over：

```text
執行 getTodoById(3)
↓
取得結果
↓
移動到下一行
```

不會進入 `getTodoById()` 裡面查看每一行。

---

## 10. Step Into

如果懷疑 Function 裡面有 Bug：

```ts
const todo = getTodoById(3);
```

可以使用：

```text
Step Into
```

進入：

```ts
function getTodoById(id: number) {
  return todos.find((todo) => todo.id === id);
}
```

逐步查看 Function 裡面的執行狀況。

---

## 11. Step Out

如果已經進入某個 Function，但是不想繼續逐行檢查，可以使用：

```text
Step Out
```

離開目前 Function，回到呼叫它的地方。

---

## 12. Resume

如果 Debugger 已經暫停，但是想讓程式繼續正常執行：

```text
Resume
```

程式會繼續執行，直到：

```text
下一個 Breakpoint
```

或程式執行完成。

---

## 13. Debugger 常用操作

```text
Resume
→ 繼續執行

Step Over
→ 執行目前這行，不進入 Function

Step Into
→ 進入 Function

Step Out
→ 離開目前 Function
```

---

## 14. Call Stack

Call Stack 可以查看：

> 程式是怎麼一路呼叫到目前這個位置的？

例如：

```ts
function A() {
  B();
}

function B() {
  C();
}

function C() {
  throw new Error('Failed');
}

A();
```

執行流程：

```text
A()
↓
B()
↓
C()
↓
Error
```

Call Stack 可以幫助我們理解：

```text
誰呼叫了誰？
↓
Bug 是怎麼一路發生的？
```

---

## 15. Network

之後使用 API 時，Network 是非常重要的 Debugging 工具。

Chrome：

```text
F12
↓
Network
↓
Fetch/XHR
```

例如：

```ts
fetch('/api/todos');
```

如果資料沒有出現，不要馬上修改 JavaScript。

先到 Network 檢查：

```text
Request URL
Request Method
Status Code
Request Payload
Response
```

---

## 16. HTTP Status Code

常見的 Status Code：

```text
200
→ 成功

400
→ Request 有問題

401
→ Authentication 問題
→ 尚未通過身分驗證

403
→ Forbidden
→ 沒有權限

404
→ Not Found
→ 找不到 URL / Resource

500
→ Internal Server Error
→ Server / Backend 發生錯誤
```

這些在之後學習：

```text
React
API
C#
Java
Spring Boot
ASP.NET
```

時都會經常遇到。

---

## 17. API Debugging 基本流程

假設：

```ts
fetch('/api/todos');
```

沒有取得資料。

Debugging：

```text
畫面沒有資料
↓
Console 有 Error 嗎？
↓
Network
↓
找到 API Request
↓
查看 Status Code
↓
查看 Response
↓
查看 Request URL
↓
判斷 Frontend 還是 Backend 問題
```

---

## 18. Debugging SOP

今天最重要的是建立自己的 Debugging 流程。

```text
Bug 出現
↓
① Console 有 Error 嗎？
↓
② Error 是什麼？
↓
③ 哪一行？
↓
④ 那一行有哪些變數？
↓
⑤ console.log() 檢查資料
↓
⑥ 資料從哪裡來？
↓
⑦ Breakpoint 暫停
↓
⑧ Step Into 可疑 Function
↓
⑨ 如果有 API → Network
↓
⑩ 找到真正原因
↓
修正
```

---

## 19. Debugging 最重要的思維

錯誤的 Debugging 方法：

```text
程式不能動
↓
不知道原因
↓
隨便改一行
↓
重新執行
↓
還是不行
↓
再改其他地方
```

比較好的方式：

```text
程式不能動
↓
查看 Error
↓
確認錯誤位置
↓
檢查變數
↓
追蹤資料來源
↓
縮小問題範圍
↓
找到原因
↓
修正
```

核心：

> 不要猜 Bug 在哪裡，要用資料一步一步證明 Bug 在哪裡。

---

# 🇺🇸 English

## 📚 What I Learned

Day82 focuses on debugging and learning how to systematically find the cause of bugs.

Debugging is not simply changing code until it works.

A better process is:

```text
Find the error
↓
Locate the problem
↓
Inspect the data
↓
Narrow down the problem
↓
Find the root cause
↓
Fix the bug
```

---

## Common Error Types

### Syntax Error

The code syntax is invalid.

```ts
console.log('Hello';
```

---

### Type Error

The value does not match the expected TypeScript type.

```ts
let age: number = '30';
```

---

### Runtime Error

The code fails while the program is running.

```ts
const button = null;

button.addEventListener('click', () => {});
```

---

### Logic Error

The program runs, but the result is incorrect.

```ts
function multiply(a: number, b: number): number {
  return a + b;
}
```

---

## console.log()

`console.log()` is one of the simplest debugging tools.

```ts
const todo = getTodoById(10);

console.log(todo);
```

Instead of guessing what is wrong, inspect the actual value.

---

## Trace the Data Source

If:

```ts
console.log(todo);
```

returns:

```text
undefined
```

check where the value came from:

```ts
getTodoById(10);
```

Then inspect:

```ts
console.log(id);
console.log(todos);
```

This helps narrow down the problem.

---

## Error Messages

When an error appears, check:

```text
What error happened?
↓
Why did it happen?
↓
Which line caused it?
```

Example:

```text
TypeError
Cannot read properties of null
script.js:10
```

Start debugging from the reported line.

---

## Chrome DevTools

Important DevTools panels:

```text
Console
→ Errors and logs

Sources
→ Breakpoints and debugging

Network
→ API requests and responses
```

---

## Breakpoints

A breakpoint pauses program execution at a specific line.

This allows us to inspect variables while the program is running.

```text
Run
↓
Run
↓
Breakpoint
↓
Pause
```

---

## Step Over

```text
Step Over
→ Execute the current line
→ Do not enter the function
```

---

## Step Into

```text
Step Into
→ Enter the called function
→ Debug inside the function
```

---

## Step Out

```text
Step Out
→ Leave the current function
→ Return to the caller
```

---

## Resume

```text
Resume
→ Continue program execution
```

---

## Call Stack

Call Stack shows how the program reached the current function.

```text
A()
↓
B()
↓
C()
↓
Error
```

It helps answer:

> Which function called this function?

---

## Network Debugging

For API problems:

```text
DevTools
↓
Network
↓
Fetch/XHR
```

Check:

```text
Request URL
Request Method
Status Code
Request Payload
Response
```

---

## Common HTTP Status Codes

```text
200 → Success

400 → Bad Request

401 → Unauthorized / Authentication required

403 → Forbidden / Permission denied

404 → Not Found

500 → Internal Server Error
```

---

## Debugging Workflow

```text
Bug
↓
Check Console
↓
Read Error Message
↓
Find Error Line
↓
Inspect Variables
↓
Use console.log()
↓
Trace Data Source
↓
Use Breakpoint
↓
Step Into suspicious functions
↓
Check Network for API problems
↓
Find Root Cause
↓
Fix
```

---

## Key Takeaway

Do not randomly change code when something breaks.

Instead:

> Use evidence to narrow down the problem until the root cause is found.

---

# 🇯🇵 日本語

## 📚 今日学んだこと

Day82ではDebugging（デバッグ）の基本的な考え方と、問題を効率的に見つける方法について学習しました。

Debuggingでは、コードを適当に変更するのではなく：

```text
エラーを確認
↓
発生場所を確認
↓
データを確認
↓
問題の範囲を絞る
↓
原因を特定
↓
修正
```

という流れが重要です。

---

## 主なエラーの種類

### Syntax Error

コードの文法自体が間違っている状態です。

```ts
console.log('Hello';
```

---

### Type Error

TypeScriptで指定した型と値の型が一致していない状態です。

```ts
let age: number = '30';
```

---

### Runtime Error

コードを実行している途中で発生するエラーです。

```ts
const button = null;

button.addEventListener('click', () => {});
```

---

### Logic Error

プログラムは実行できますが、結果が想定と異なる状態です。

```ts
function multiply(a: number, b: number): number {
  return a + b;
}
```

---

## console.log()

最も基本的なDebugging方法の一つです。

```ts
const todo = getTodoById(10);

console.log(todo);
```

値を確認することで、問題の場所を絞り込むことができます。

---

## データの取得元を確認する

例えば：

```text
todo = undefined
```

だった場合：

```ts
getTodoById(10);
```

を確認します。

さらに：

```ts
console.log(id);
console.log(todos);
```

を使用して、データがどこからおかしくなったのか確認します。

---

## Error Message

エラーが発生した場合、まず：

```text
① どんなエラー？
② なぜ発生した？
③ 何行目？
```

を確認します。

例えば：

```text
TypeError
Cannot read properties of null
script.js:10
```

の場合、まず `script.js` の10行目を確認します。

---

## Chrome DevTools

よく使用する機能：

```text
Console
→ Error / console.log()

Sources
→ Breakpoint / Debugger

Network
→ API Request / Response
```

---

## Breakpoint

Breakpointを設定すると、指定した行でプログラムを一時停止できます。

```text
実行
↓
実行
↓
Breakpoint
↓
一時停止
```

その時点の変数の値を確認できます。

---

## Step Over

```text
Step Over
→ 現在の行を実行
→ Functionの中には入らない
```

---

## Step Into

```text
Step Into
→ 呼び出しているFunctionの中に入る
→ Function内部を確認する
```

---

## Step Out

```text
Step Out
→ 現在のFunctionから抜ける
→ 呼び出し元に戻る
```

---

## Resume

```text
Resume
→ プログラムの実行を再開する
```

---

## Call Stack

Call Stackでは：

> 現在のFunctionがどのような順番で呼び出されたのか

を確認できます。

```text
A()
↓
B()
↓
C()
↓
Error
```

---

## Network

APIを使用する場合、Networkは非常に重要です。

```text
F12
↓
Network
↓
Fetch/XHR
```

確認する項目：

```text
Request URL
Request Method
Status Code
Request Payload
Response
```

---

## HTTP Status Code

```text
200
→ 成功

400
→ Requestに問題がある

401
→ 認証が必要

403
→ 権限がない

404
→ 見つからない

500
→ Server側のエラー
```

---

## Debuggingの基本フロー

```text
Bug発生
↓
Consoleを確認
↓
Error Messageを確認
↓
エラー行を確認
↓
変数を確認
↓
console.log()
↓
データの取得元を確認
↓
Breakpoint
↓
Step Into
↓
APIの場合はNetwork
↓
原因を特定
↓
修正
```

---

## 💡 Day82の重要ポイント

Debuggingで重要なのは：

```text
「たぶんここが原因」
```

と推測して適当にコードを変更することではありません。

```text
Error Message
↓
Variable
↓
Data Source
↓
Function
↓
Network
```

のように、一つずつ確認しながら問題の範囲を狭くしていくことが重要です。

---

# Day82 Summary

```text
Syntax Error
→ 語法 / 文法錯誤

Type Error
→ 型別 / 型の問題

Runtime Error
→ 執行中 / 実行中のエラー

Logic Error
→ 邏輯 / ロジックの問題

console.log()
→ 檢查資料 / データ確認

Breakpoint
→ 暫停程式 / プログラムを一時停止

Step Over
→ 執行下一行，不進入 Function

Step Into
→ 進入 Function

Step Out
→ 離開 Function

Call Stack
→ 查看 Function 呼叫流程

Network
→ 檢查 API Request / Response
```

## Most Important Lesson

**Don't guess where the bug is. Find it step by step.**

**Bug がどこにあるか推測するのではなく、一つずつ確認して原因を特定する。**

**不要猜 Bug 在哪裡，要一步一步確認並找到真正的原因。**
