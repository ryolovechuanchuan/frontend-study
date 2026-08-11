# Day83_JS_to_TS_Migration

## 🇹🇼 中文

### 📚 今日重點

Day83 學習如何把既有 JavaScript 程式逐步 Migration 成 TypeScript。

核心目的不是單純把 `.js` 改成 `.ts`，而是補上型別資訊並處理原本 JavaScript 中可能隱藏的錯誤。

---

### 1. Function Migration

JavaScript：

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

TypeScript：

```ts
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

---

### 2. Interface

Object 可以透過 `interface` 定義結構。

```ts
interface Product {
  name: string;
  price: number;
}

const product: Product = {
  name: 'Keyboard',
  price: 1500,
};
```

---

### 3. Array Type

```ts
const products: Product[] = [
  { name: 'Keyboard', price: 1500 },
  { name: 'Mouse', price: 800 },
];
```

TypeScript 可以從 `Product[]` 推論 callback 裡面的 `product` 型別。

---

### 4. find() 與 undefined

```ts
function findProduct(name: string): Product | undefined {
  return products.find((product) => product.name === name);
}
```

`find()` 找不到資料時會回傳 `undefined`。

---

### 5. DOM Migration

```ts
const button =
  document.getElementById('addBtn')
  as HTMLButtonElement | null;

if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked');
  });
}
```

DOM 元素可能是 `null`，使用前需要先確認。

---

### 6. Event Target

```ts
const input =
  document.getElementById('username')
  as HTMLInputElement | null;

if (input) {
  input.addEventListener('input', (event) => {
    const target =
      event.target as HTMLInputElement;

    console.log(target.value);
  });
}
```

---

### 7. async Function

普通 Function：

```ts
function getUsers(): User[] {}
```

async Function：

```ts
async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  const users: User[] = await response.json();

  return users;
}
```

沒有回傳資料時：

```ts
async function loadUsers(): Promise<void> {}
```

---

### 8. API Data Type

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

```ts
const users: User[] = await response.json();
```

TypeScript 型別不代表 API Runtime 資料一定正確，之後仍需要 Runtime Validation。

---

### 9. any → 明確型別

不建議：

```ts
function printUser(user: any) {
  console.log(user.name);
}
```

建議：

```ts
function printUser(user: User): void {
  console.log(user.name);
}
```

Migration 的重要目標之一就是減少 `any`。

---

### 10. Optional Property

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```

`email?: string` 代表：

```text
string | undefined
```

---

### 11. Return Type

```ts
function searchUser(users: User[], name: string): string | null {
  const user = users.find((item) => item.name === name);

  if (user) {
    return user.email ?? null;
  }

  return null;
}
```

統一使用 `null` 表示沒有資料，可以讓型別更簡單。

---

### 💡 Migration 流程

```text
.js → .ts
↓
修正 implicit any
↓
Parameter / Return Type
↓
Object → interface
↓
Array → Type[]
↓
處理 null / undefined
↓
處理 DOM Type
↓
async → Promise<T>
↓
API Data Type
↓
減少 any
↓
逐步開啟 Strict Mode
```

---

## 🇺🇸 English

### Key Points

Day83 focuses on gradually migrating JavaScript code to TypeScript.

The goal is not only changing `.js` files into `.ts`, but also adding type safety and fixing hidden JavaScript risks.

```ts
function findUser(id: number): User | undefined {
  return users.find((user) => user.id === id);
}
```

Important migration concepts:

```text
Function parameters → explicit types
Function returns → return types
Objects → interface / type
Arrays → User[]
find() → User | undefined
DOM → Element type | null
async → Promise<T>
Optional property → ?
any → specific types
```

TypeScript can infer many local types, so unnecessary annotations should be avoided.

```ts
const user = users.find((item) => item.id === id);
```

Instead of manually annotating everything, let TypeScript infer types when possible.

---

## 🇯🇵 日本語

### 今日のポイント

Day83では、既存のJavaScriptコードをTypeScriptへ段階的に移行する方法を学習しました。

目的は `.js` を `.ts` に変更するだけではなく、型情報を追加してコードをより安全にすることです。

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```

主なMigrationポイント：

```text
JavaScript → TypeScript
↓
implicit any を修正
↓
引数と戻り値の型を追加
↓
Object → interface
↓
Array → User[]
↓
null / undefined を処理
↓
DOM型を指定
↓
async → Promise<T>
↓
APIデータに型を追加
↓
any を減らす
```

`find()` はデータが見つからない場合 `undefined` を返します。

```ts
function getUser(id: number): User | undefined {
  return users.find((user) => user.id === id);
}
```

TypeScriptが推論できる型は、毎回手動で書く必要はありません。

---

## Day83 Summary

```text
.js → .ts
Function → Parameter + Return Type
Object → interface
Array → Type[]
DOM → HTMLxxxElement | null
find() → undefined
async → Promise<T>
Optional Property → ?
any → 明確な型
```

### Most Important Lesson

**Migration is not just converting syntax. It is adding type safety step by step.**

**Migrationは構文を変更するだけではなく、段階的に型安全性を追加することです。**

**Migration 不只是改副檔名，而是逐步把型別安全加入原本的 JavaScript。**
