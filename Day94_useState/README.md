# Day 94 - React useState & State Management

## 📚 Overview / 學習概要 / 学習概要

Day 94 focuses on React `useState` with TypeScript, including primitive state, object state, array state, controlled inputs, conditional rendering, and state updates.

Day 94 主要練習 React `useState` 搭配 TypeScript，包含基本型別 State、Object State、Array State、受控輸入、條件渲染以及 State 更新。

Day 94では、Reactの`useState`とTypeScriptを使用し、基本型State、Object State、Array State、Controlled Input、条件付きレンダリング、Stateの更新方法を学習しました。

---

# 🇹🇼 中文

## 🎯 今日學習目標

- 理解 React `useState`
- 使用 `number`、`string`、`boolean` State
- 管理 Object State
- 管理 Array State
- 使用 Controlled Input
- 使用 `map()` 修改陣列資料
- 使用 `filter()` 刪除陣列資料
- 使用 Spread Operator 更新 State
- 理解 Functional Update
- 使用 Conditional Rendering
- 使用 Early Return 進行輸入驗證

## 🔹 基本 State

```tsx
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>('');
const [isVisible, setIsVisible] = useState<boolean>(true);
```

### Functional Update

當新的 State 依賴上一個 State 時：

```tsx
setCount((prev) => prev + 1);
setCount((prev) => prev - 1);

setIsVisible((prev) => !prev);
```

---

## 🔹 Controlled Input

```tsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

資料流程：

```text
使用者輸入
→ onChange
→ e.target.value
→ setName()
→ State 更新
→ React 重新渲染
```

---

## 🔹 Object State

```tsx
interface User {
  id: number;
  name: string;
  age: number;
}

const [user, setUser] = useState<User>({
  id: 1,
  name: 'John',
  age: 25,
});
```

修改 Object State：

```tsx
setUser({
  ...user,
  name: 'Mary',
});
```

`...user` 可以保留原本的其他屬性，只修改指定欄位。

---

## 🔹 Array State

```tsx
const [users, setUsers] = useState<User[]>([
  {
    id: 1,
    name: 'Mary',
    age: 30,
  },
  {
    id: 2,
    name: 'Jack',
    age: 25,
  },
  {
    id: 3,
    name: 'Willy',
    age: 36,
  },
]);
```

### 新增資料

```tsx
function handleAddUser() {
  const newUser: User = {
    id: Date.now(),
    name: 'Park',
    age: 40,
  };

  setUsers([...users, newUser]);
}
```

### 刪除資料

```tsx
function handleDeleteUser(id: number): void {
  const newUsers = users.filter((user) => user.id !== id);

  setUsers(newUsers);
}
```

### 修改資料

```tsx
function handleAgePlus(id: number): void {
  const newUsers = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        age: user.age + 1,
      };
    }

    return user;
  });

  setUsers(newUsers);
}
```

---

## 🔹 Conditional Rendering

```tsx
{
  isVisible && <p>Hello React</p>;
}
```

當 `isVisible` 為 `true` 時顯示內容，為 `false` 時不顯示。

---

## 🔹 Input Validation & Early Return

```tsx
if (name.trim() === '') {
  alert('請輸入姓名');
  return;
}
```

使用 `trim()` 避免只有空白的輸入。

使用 `return` 提前結束 Function。

---

## 💡 今日重點

```text
新增 Array → Spread Operator
刪除 Array → filter()
修改 Array → map()

修改 Object → Spread Operator

Input → value + onChange

依賴前一個 State
→ Functional Update

驗證失敗
→ Early Return
```

---

# 🇺🇸 English

## 🎯 Learning Goals

- Understand React `useState`
- Manage `number`, `string`, and `boolean` state
- Manage object state
- Manage array state
- Use controlled inputs
- Update array data with `map()`
- Delete array data with `filter()`
- Update state with the spread operator
- Understand functional updates
- Use conditional rendering
- Validate input with early returns

## 🔹 Basic State

```tsx
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>('');
const [isVisible, setIsVisible] = useState<boolean>(true);
```

### Functional Update

When the next state depends on the previous state:

```tsx
setCount((prev) => prev + 1);
setCount((prev) => prev - 1);

setIsVisible((prev) => !prev);
```

---

## 🔹 Controlled Input

```tsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

Data flow:

```text
User Input
→ onChange
→ e.target.value
→ setName()
→ State Update
→ Re-render
```

---

## 🔹 Object State

```tsx
interface User {
  id: number;
  name: string;
  age: number;
}

const [user, setUser] = useState<User>({
  id: 1,
  name: 'John',
  age: 25,
});
```

Updating object state:

```tsx
setUser({
  ...user,
  name: 'Mary',
});
```

The spread operator preserves the existing properties while replacing the property that needs to change.

---

## 🔹 Array State

```tsx
const [users, setUsers] = useState<User[]>([
  { id: 1, name: 'Mary', age: 30 },
  { id: 2, name: 'Jack', age: 25 },
  { id: 3, name: 'Willy', age: 36 },
]);
```

### Add

```tsx
function handleAddUser() {
  const newUser: User = {
    id: Date.now(),
    name: 'Park',
    age: 40,
  };

  setUsers([...users, newUser]);
}
```

### Delete

```tsx
function handleDeleteUser(id: number): void {
  const newUsers = users.filter((user) => user.id !== id);

  setUsers(newUsers);
}
```

### Update

```tsx
function handleAgePlus(id: number): void {
  const newUsers = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        age: user.age + 1,
      };
    }

    return user;
  });

  setUsers(newUsers);
}
```

---

## 🔹 Conditional Rendering

```tsx
{
  isVisible && <p>Hello React</p>;
}
```

The content is rendered only when `isVisible` is `true`.

---

## 🔹 Input Validation & Early Return

```tsx
if (name.trim() === '') {
  alert('Please enter a name');
  return;
}
```

`trim()` prevents whitespace-only input.

`return` stops the function before invalid data is processed.

---

## 💡 Key Takeaways

```text
Add Array Item    → Spread Operator
Delete Array Item → filter()
Update Array Item → map()

Update Object     → Spread Operator

Controlled Input  → value + onChange

Previous State
→ Functional Update

Validation Failure
→ Early Return
```

---

# 🇯🇵 日本語

## 🎯 今日の学習目標

- Reactの`useState`を理解する
- `number`、`string`、`boolean`型のStateを管理する
- Object Stateを管理する
- Array Stateを管理する
- Controlled Inputを使用する
- `map()`で配列データを更新する
- `filter()`で配列データを削除する
- Spread OperatorでStateを更新する
- Functional Updateを理解する
- 条件付きレンダリングを使用する
- Early Returnで入力チェックを行う

## 🔹 基本的なState

```tsx
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>('');
const [isVisible, setIsVisible] = useState<boolean>(true);
```

### Functional Update

新しいStateが前のStateに依存する場合：

```tsx
setCount((prev) => prev + 1);
setCount((prev) => prev - 1);

setIsVisible((prev) => !prev);
```

---

## 🔹 Controlled Input

```tsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

データの流れ：

```text
ユーザー入力
→ onChange
→ e.target.value
→ setName()
→ State更新
→ 再レンダリング
```

---

## 🔹 Object State

```tsx
interface User {
  id: number;
  name: string;
  age: number;
}

const [user, setUser] = useState<User>({
  id: 1,
  name: 'John',
  age: 25,
});
```

Object Stateを更新：

```tsx
setUser({
  ...user,
  name: 'Mary',
});
```

`...user`を使用することで、既存のプロパティを保持しながら、必要なプロパティだけを変更できます。

---

## 🔹 Array State

```tsx
const [users, setUsers] = useState<User[]>([
  { id: 1, name: 'Mary', age: 30 },
  { id: 2, name: 'Jack', age: 25 },
  { id: 3, name: 'Willy', age: 36 },
]);
```

### データ追加

```tsx
function handleAddUser() {
  const newUser: User = {
    id: Date.now(),
    name: 'Park',
    age: 40,
  };

  setUsers([...users, newUser]);
}
```

### データ削除

```tsx
function handleDeleteUser(id: number): void {
  const newUsers = users.filter((user) => user.id !== id);

  setUsers(newUsers);
}
```

### データ更新

```tsx
function handleAgePlus(id: number): void {
  const newUsers = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        age: user.age + 1,
      };
    }

    return user;
  });

  setUsers(newUsers);
}
```

---

## 🔹 条件付きレンダリング

```tsx
{
  isVisible && <p>Hello React</p>;
}
```

`isVisible`が`true`の場合のみ内容を表示します。

---

## 🔹 入力チェックと Early Return

```tsx
if (name.trim() === '') {
  alert('名前を入力してください');
  return;
}
```

`trim()`を使用して、空白だけの入力を防ぎます。

`return`を使用すると、条件を満たさない場合にFunctionを途中で終了できます。

---

## 💡 今日の重要ポイント

```text
配列への追加 → Spread Operator
配列から削除 → filter()
配列の更新   → map()

Objectの更新 → Spread Operator

Controlled Input
→ value + onChange

前のStateに依存する更新
→ Functional Update

入力チェック
→ Early Return
```

---

# 🚀 Day 94 Summary

Today I learned how to manage React state with TypeScript and how to safely update objects and arrays without directly mutating state.

今天學習了如何使用 TypeScript 管理 React State，以及如何在不直接修改原始 State 的情況下安全地更新 Object 與 Array。

今日はTypeScriptを使ったReactのState管理と、元のStateを直接変更せずにObjectやArrayを安全に更新する方法を学習しました。

### Core Patterns / 核心模式 / 重要なパターン

```tsx
// Add
setUsers([...users, newUser]);

// Delete
setUsers(users.filter((user) => user.id !== id));

// Update
setUsers(users.map((user) => (user.id === id ? { ...user, age: user.age + 1 } : user)));
```

**Day 94 Complete ✅**
