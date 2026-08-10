# Day81_TS_Strict_Mode

## 🇹🇼 中文

### 📚 今日學習內容

Day81 主要學習 TypeScript 的 Strict Mode，以及如何透過更嚴格的型別檢查，避免 `null`、`undefined`、錯誤型別等問題。

---

### 1. Function 參數與回傳型別

TypeScript 可以指定 Function 的參數型別與回傳型別。

```ts
function calculatePrice(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calculatePrice(100, 3));
```

---

### 2. void

當 Function 不需要回傳值時，可以使用 `void`。

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

`void` 代表 Function 可以正常執行結束，但是沒有回傳可使用的值。

---

### 3. null / undefined

有些資料不一定存在，因此可能出現：

```ts
string | null;
Todo | undefined;
```

例如：

```ts
function getTodoById(id: number): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}
```

因為 `find()` 不一定能找到資料，所以可能回傳 `undefined`。

---

### 4. Union Type

使用 `|` 表示一個變數可能有多種型別。

```ts
let email: string | null = 'test@gmail.com';

email = null;
```

代表：

```text
email 可以是 string
或
email 可以是 null
```

---

### 5. Type Narrowing

當資料可能是 `undefined` 或 `null` 時，可以先使用 `if` 判斷。

```ts
const todo = getTodoById(10);

if (todo) {
  console.log(todo.title);
}
```

原本：

```text
Todo | undefined
```

經過：

```ts
if (todo)
```

TypeScript 就知道 `if` 裡面的 `todo` 是：

```text
Todo
```

---

### 6. Optional Parameter

使用 `?` 表示參數可以不傳。

```ts
function createUser(name: string, age?: number): void {
  console.log(name, age);
}

createUser('John', 30);
createUser('Mary');
```

`age?: number` 可以理解為這個參數可能是：

```text
number | undefined
```

---

### 7. Optional Property

Interface 的 Property 也可以使用 `?`。

```ts
interface Product {
  id: number;
  name: string;
  description?: string;
}
```

代表 `description` 可以存在，也可以不存在。

```ts
const product1: Product = {
  id: 1,
  name: 'Keyboard',
  description: 'Mechanical Keyboard',
};

const product2: Product = {
  id: 2,
  name: 'Mouse',
};
```

兩種都合法。

---

### 8. Optional Property + Type Narrowing

因為：

```ts
description?: string;
```

代表讀取時可能是：

```text
string | undefined
```

所以可以先判斷：

```ts
if (product1.description) {
  console.log(product1.description.toUpperCase());
} else {
  console.log('description 不存在');
}
```

---

### 9. Optional Chaining `?.`

如果資料存在才繼續執行，可以使用：

```ts
console.log(product1.description?.toUpperCase());
```

如果 `description` 是 `undefined`，就不會執行 `toUpperCase()`。

DOM 中也很常使用：

```ts
addBtn?.addEventListener('click', () => {
  console.log('clicked');
});
```

---

### 10. Nullish Coalescing `??`

當資料是 `null` 或 `undefined` 時，可以提供預設值。

```ts
interface User {
  name: string;
  nickname?: string;
}

const user: User = {
  name: 'John',
};

const nickname = user.nickname ?? '無綽號';

console.log(nickname);
```

也可以和 `?.` 一起使用：

```ts
const nickname = user.nickname?.toUpperCase() ?? '無綽號';
```

---

### 11. DOM 與 null

`getElementById()` 不保證一定找得到元素。

```ts
const button = document.getElementById('submitBtn');
```

型別可能是：

```text
HTMLElement | null
```

所以可以：

```ts
if (button) {
  button.addEventListener('click', () => {
    console.log('clicked');
  });
}
```

---

### 12. HTMLInputElement

如果要使用 `<input>` 的 `.value`，需要使用 `HTMLInputElement`。

```ts
const emailInput = document.getElementById('email') as HTMLInputElement | null;

if (emailInput) {
  console.log(emailInput.value);
}
```

常見 DOM 型別：

```text
<input>   → HTMLInputElement
<button>  → HTMLButtonElement
<div>     → HTMLDivElement
一般元素   → HTMLElement
```

---

### 13. unknown

`unknown` 可以接收不同型別的資料，但是使用之前必須先確認型別。

```ts
let value: unknown = 'TypeScript';

if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

---

### 14. any vs unknown

```ts
let a: any = 'Hello';

a.toUpperCase();
```

`any` 幾乎等於告訴 TypeScript：

```text
不要檢查我的型別
```

而：

```ts
let b: unknown = 'Hello';

if (typeof b === 'string') {
  b.toUpperCase();
}
```

`unknown` 代表：

```text
我不知道型別
→ 使用之前必須先確認
```

所以 `unknown` 比 `any` 更安全。

---

### 15. typeof Type Narrowing

可以使用 `typeof` 判斷基本型別。

```ts
let data: unknown = 100;

if (typeof data === 'string') {
  console.log(data.toUpperCase());
} else if (typeof data === 'number') {
  console.log(data * 2);
} else if (typeof data === 'boolean') {
  console.log(!data);
}
```

---

### 16. Type Annotation

Type Annotation 是直接規定變數的型別。

```ts
let price: number = 100;
let username: string = 'John';
let completed: boolean = false;
```

例如：

```ts
let age: number = 30;

age = 40; // OK
age = '40'; // Error
```

---

### 17. Type Assertion

Type Assertion 是告訴 TypeScript：

> 我知道這個資料是什麼型別。

```ts
let data: unknown = 'Hello';

const message = data as string;
```

DOM：

```ts
const emailInput = document.getElementById('email') as HTMLInputElement | null;
```

要注意：

```text
as 不會真的轉換資料
```

---

### 18. Type Conversion

如果真的要轉換資料型別，可以使用：

```ts
const num = 100;

const text = String(num);
```

結果：

```text
100
number

↓

"100"
string
```

也可以：

```ts
const text = '123';

const num = Number(text);
```

整理：

```text
Type Annotation
→ 規定型別

Type Assertion
→ 告訴 TypeScript 型別

Type Conversion
→ 真正轉換資料
```

---

### 19. Non-null Assertion `!`

如果確定資料一定不是 `null` 或 `undefined`，可以使用 `!`。

```ts
const button = document.getElementById('submitBtn')!;

button.addEventListener('click', () => {});
```

`!` 的意思：

```text
TypeScript，我保證它不是 null / undefined。
```

但這不會真的檢查資料，所以要小心。

較安全的方式：

```ts
if (button) {
  button.addEventListener('click', () => {});
}
```

或：

```ts
button?.addEventListener('click', () => {});
```

---

### 20. Array 與 undefined

陣列中的 index 不一定存在。

```ts
const fruits: string[] = ['Apple', 'Banana', 'Orange'];

const fruit = fruits[10];

if (fruit) {
  console.log(fruit.toUpperCase());
} else {
  console.log('Fruit not found');
}
```

如果希望 TypeScript 更嚴格檢查 Array Index，可以設定：

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

---

### 21. catch + unknown

`catch` 裡面的 Error 不應該直接假設一定是 `Error`。

```ts
try {
  throw new Error('Something went wrong');
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

---

### 22. instanceof

`instanceof` 可以用來判斷某個物件是不是某個 Class 的 instance。

```ts
const value: unknown = new Date();

if (value instanceof Date) {
  console.log(value.getFullYear());
}
```

基本型別通常使用：

```text
typeof
```

Class / Object Instance 通常使用：

```text
instanceof
```

---

### 23. Strict Function Return

如果 Function 宣告回傳 `string`：

```ts
function getStatus(completed: boolean): string {
```

所有正常執行路徑都應該回傳 `string`。

```ts
function getStatus(completed: boolean): string {
  if (completed) {
    return 'Completed';
  } else {
    return 'Pending';
  }
}

console.log(getStatus(true));
console.log(getStatus(false));
```

也可以簡化：

```ts
function getStatus(completed: boolean): string {
  if (completed) {
    return 'Completed';
  }

  return 'Pending';
}
```

---

### 24. never

`never` 表示 Function 永遠不會正常執行結束。

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

也可能是無限迴圈：

```ts
function runForever(): never {
  while (true) {
    console.log('Running...');
  }
}
```

差別：

```text
void
→ Function 正常結束
→ 沒有回傳可使用的值

never
→ Function 不會正常結束
→ throw / 無限迴圈
```

---

### 25. Strict Mode 綜合練習

```ts
interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    title: 'Study TypeScript',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn React',
    description: 'Study useEffect',
    completed: false,
  },
];

function findTodo(id: number): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}

const todo = findTodo(2);

if (todo) {
  console.log(todo.title);

  if (todo.description) {
    console.log(todo.description.toUpperCase());
  } else {
    console.log('No description');
  }

  if (todo.completed) {
    console.log('Completed');
  } else {
    console.log('Pending');
  }
} else {
  console.log('Todo not found');
}
```

---

### 💡 Day81 重點

```text
資料有可能不存在嗎？
        ↓
       YES
        ↓
使用之前先判斷
        ↓
Type Narrowing
        ↓
安全使用
```

Strict Mode 的核心不是單純讓 TypeScript 更嚴格，而是讓我們在寫程式時主動考慮：

- 資料是否可能不存在
- 型別是否正確
- Function 是否一定有回傳值
- DOM 是否真的存在
- API / 外部資料是否安全

---

# 🇺🇸 English

## 📚 What I Learned

Day81 focuses on TypeScript Strict Mode and type-safe programming.

### Main Topics

- Function parameter types
- Function return types
- `void`
- `null` and `undefined`
- Union Types
- Type Narrowing
- Optional Parameters `?`
- Optional Properties `?`
- Optional Chaining `?.`
- Nullish Coalescing `??`
- DOM null checking
- `HTMLInputElement`
- `unknown` vs `any`
- `typeof`
- `instanceof`
- Type Annotation
- Type Assertion
- Type Conversion
- Non-null Assertion `!`
- Array index safety
- `catch` error handling
- `never`

---

### Type Narrowing

```ts
const todo = getTodoById(10);

if (todo) {
  console.log(todo.title);
}
```

TypeScript narrows:

```text
Todo | undefined
↓
Todo
```

---

### Optional Parameter

```ts
function createUser(name: string, age?: number): void {
  console.log(name, age);
}
```

---

### Optional Property

```ts
interface Product {
  id: number;
  name: string;
  description?: string;
}
```

---

### Optional Chaining

```ts
product.description?.toUpperCase();
```

The operation continues only when the value is not `null` or `undefined`.

---

### Nullish Coalescing

```ts
const nickname = user.nickname ?? 'No nickname';
```

A default value is used when the original value is `null` or `undefined`.

---

### DOM Type Safety

```ts
const emailInput =
  document.getElementById('email')
  as HTMLInputElement | null;

if (emailInput) {
  console.log(emailInput.value);
}
```

`getElementById()` may return `null`, so the element should be checked before use.

---

### unknown vs any

```ts
let data: unknown = 'Hello';

if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
```

`unknown` requires type checking before use, making it safer than `any`.

---

### Type Annotation

```ts
let age: number = 30;
```

Defines the expected type of a variable.

---

### Type Assertion

```ts
const message = data as string;
```

Tells TypeScript what type the value should be treated as.

It does not actually convert the value.

---

### Type Conversion

```ts
const number = Number('100');
const text = String(100);
```

This actually converts the value.

```text
Annotation → defines the type
Assertion  → tells TypeScript the type
Conversion → converts the actual value
```

---

### Non-null Assertion

```ts
const button = document.getElementById('submitBtn')!;
```

`!` tells TypeScript that the value is not `null` or `undefined`.

However, it does not perform a runtime check.

---

### typeof

```ts
if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
```

Useful for narrowing primitive types.

---

### instanceof

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

Useful for checking class instances and objects.

---

### void vs never

```ts
function printMessage(): void {
  console.log('Hello');
}
```

`void` means the function finishes normally without returning a usable value.

```ts
function throwError(): never {
  throw new Error('Failed');
}
```

`never` means the function never finishes normally.

---

### Key Takeaway

The most important idea of Strict Mode is:

```text
Could this value be missing?
↓
Check it first
↓
Narrow the type
↓
Use it safely
```

Strict TypeScript helps prevent runtime errors and makes code safer and easier to maintain.

---

# 🇯🇵 日本語

## 📚 今日学んだこと

Day81ではTypeScriptのStrict Modeと、型安全なコードを書く方法について学習しました。

### 主な学習内容

- 関数の引数の型
- 戻り値の型
- `void`
- `null` / `undefined`
- Union Type
- Type Narrowing
- Optional Parameter `?`
- Optional Property `?`
- Optional Chaining `?.`
- Nullish Coalescing `??`
- DOMのnullチェック
- `HTMLInputElement`
- `unknown` と `any`
- `typeof`
- `instanceof`
- Type Annotation
- Type Assertion
- Type Conversion
- Non-null Assertion `!`
- 配列の安全なアクセス
- `catch` のエラー処理
- `never`

---

### Type Narrowing

```ts
const todo = getTodoById(10);

if (todo) {
  console.log(todo.title);
}
```

`if` で値の存在を確認することで：

```text
Todo | undefined
↓
Todo
```

のように型を絞り込むことができます。

---

### Optional Parameter

```ts
function createUser(name: string, age?: number): void {
  console.log(name, age);
}
```

`?` を付けることで、引数を省略可能にできます。

---

### Optional Property

```ts
interface Product {
  id: number;
  name: string;
  description?: string;
}
```

`description` は存在しても、存在しなくても問題ありません。

---

### Optional Chaining

```ts
product.description?.toUpperCase();
```

値が `null` または `undefined` ではない場合のみ処理を続けます。

---

### Nullish Coalescing

```ts
const nickname = user.nickname ?? 'ニックネームなし';
```

値が `null` または `undefined` の場合にデフォルト値を使用します。

---

### DOMの型安全

```ts
const emailInput =
  document.getElementById('email')
  as HTMLInputElement | null;

if (emailInput) {
  console.log(emailInput.value);
}
```

`getElementById()` は `null` を返す可能性があるため、使用する前に確認することが重要です。

---

### unknown と any

```ts
let data: unknown = 'Hello';

if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
```

`unknown` は使用前に型を確認する必要があるため、`any` より安全です。

---

### Type Annotation

```ts
let age: number = 30;
```

変数の型を指定します。

---

### Type Assertion

```ts
const message = data as string;
```

TypeScriptに「この値をこの型として扱う」と伝えます。

実際の値を変換するわけではありません。

---

### Type Conversion

```ts
const number = Number('100');
const text = String(100);
```

実際に値を別の型へ変換します。

```text
Annotation
→ 型を指定する

Assertion
→ TypeScriptに型を伝える

Conversion
→ 実際に値を変換する
```

---

### Non-null Assertion

```ts
const button = document.getElementById('submitBtn')!;
```

`!` はTypeScriptに：

```text
この値は null / undefined ではない
```

と伝えます。

ただし、実際に値の存在を確認するわけではないため注意が必要です。

---

### typeof

```ts
if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
```

基本型のType Narrowingに使用できます。

---

### instanceof

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

ClassやObjectのInstanceを確認するときに使用できます。

---

### void と never

```ts
function printMessage(): void {
  console.log('Hello');
}
```

`void`：

```text
関数は正常に終了する
↓
使用できる戻り値がない
```

```ts
function throwError(): never {
  throw new Error('Failed');
}
```

`never`：

```text
関数が正常に終了しない
↓
throw / 無限ループなど
```

---

### 💡 Day81の重要ポイント

Strict Modeでは：

```text
値が存在するか？
↓
型は正しいか？
↓
使用しても安全か？
```

を考えることが重要です。

TypeScriptの型チェックを活用することで、実行時エラーを減らし、より安全で保守しやすいコードを書くことができます。

---

# Day81 Summary

```text
null / undefined
→ 使用前にチェック

unknown
→ Type Narrowingしてから使用

?.
→ 値が存在するときだけ処理

??
→ null / undefined のときデフォルト値

as
→ Type Assertion

!
→ Non-null Assertion

void
→ 正常終了するが使用できる戻り値がない

never
→ 正常終了しない
```

## Most Important Lesson

**Don't assume a value exists. Check it before using it.**

**値が必ず存在すると決めつけず、使用する前に確認する。**

**不要假設資料一定存在，使用之前先確認。**
