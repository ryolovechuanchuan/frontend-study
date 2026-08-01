# Day74 - Unknown / Any / Never / Generics

## 🇹🇼 中文

### 📚 學習內容

Day74 主要學習 TypeScript 中較進階的型別概念，包含：

- unknown
- any
- never
- Generic Function
- Generic Interface
- Generic API Response

### 💡 本日重點

#### Unknown

- unknown 是比 any 更安全的型別。
- 使用前必須先進行型別判斷（Type Narrowing）。
- 常用於 `catch(error)` 或未知資料來源。

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

---

#### Any

- any 可以接受任何型別。
- TypeScript 不會再檢查型別。
- 雖然方便，但容易造成執行時錯誤，因此應避免過度使用。

```ts
let value: any = 'Tom';
value.toFixed(); // TypeScript 不會報錯
```

---

#### Never

- never 表示永遠不會回傳值。
- 常見於 throw Error 或無法執行完成的函式。

```ts
function throwError(): never {
  throw new Error('Error');
}
```

---

#### Generic Function

Generic 可以讓函式保持型別資訊，而不用使用 any。

```ts
function identity<T>(value: T): T {
  return value;
}
```

使用方式：

```ts
identity<number>(100);
identity<string>('Tom');
identity<boolean>(true);
```

---

#### Generic Interface

利用 Generic 建立可重複使用的 Interface。

```ts
interface Box<T> {
  item: T;
}
```

範例：

```ts
const apple: Box<string> = {
  item: 'Apple',
};

const age: Box<number> = {
  item: 30,
};
```

---

#### Generic API Response

建立可套用於不同 API 的回傳型別。

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
```

搭配 User：

```ts
const response: ApiResponse<User[]> = {
  data: [...],
  message: "Success",
  status: 200,
};
```

---

### 🛠️ 本日練習

- 練習 unknown 與 any 的差異
- 使用 never 建立錯誤函式
- 建立 Generic Function
- 建立 Generic Interface
- 建立 Generic API Response
- 練習 API 回傳型別設計

---

### 🎯 學習成果

- 理解 unknown、any、never 的用途
- 能建立 Generic Function
- 能建立 Generic Interface
- 能設計 Generic API Response
- 理解 Generic 在 React 中的重要性

---

## 🇺🇸 English

### 📚 Topics

- unknown
- any
- never
- Generic Functions
- Generic Interfaces
- Generic API Response

### 💡 Key Points

- Learn the differences between `unknown` and `any`.
- Understand how `never` represents functions that never return.
- Build reusable Generic Functions.
- Create reusable Generic Interfaces.
- Design Generic API response structures.

### Example

```ts
function identity<T>(value: T): T {
  return value;
}
```

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
```

### Practice

- Type narrowing
- Error handling
- Generic Functions
- Generic Interfaces
- API response modeling

### Learning Outcome

- Understand advanced TypeScript types.
- Write reusable Generic code.
- Build strongly typed API response models.
- Prepare for React + TypeScript development.

---

## 🇯🇵 日本語

### 📚 学習内容

Day74では TypeScript の応用的な型について学習しました。

- unknown
- any
- never
- Generic Function
- Generic Interface
- Generic API Response

### 💡 学習ポイント

#### unknown

- any より安全な型
- 使用前に型チェックが必要
- 主に `catch(error)` で使用される

#### any

- すべての型を許可する
- TypeScript の型チェックを無効化する

#### never

- 戻り値が存在しない型
- Error を throw する関数などで使用

#### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

#### Generic Interface

```ts
interface Box<T> {
  item: T;
}
```

#### Generic API Response

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
```

### 🛠️ 練習内容

- unknown と any の違い
- never の使用方法
- Generic Function の作成
- Generic Interface の作成
- Generic API Response の設計

### 🎯 学習成果

- unknown・any・never を理解
- Generic の基本概念を習得
- Generic Function を作成できる
- Generic Interface を作成できる
- React + TypeScript の基礎を身につけた
