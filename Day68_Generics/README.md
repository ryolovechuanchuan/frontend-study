# Day68_Generics

---

# 🇹🇼 中文

## 📖 專案介紹

Day68 學習 TypeScript 的 **Generics（泛型）**。

本日重點在於理解泛型的概念，以及如何透過 Generic Function、Generic Interface、Generic Type Alias 與 Generic Constraints 建立具有彈性且型別安全的程式碼，提高程式的重用性與可維護性。

---

## 🚀 學習目標

- 學習為什麼需要 Generics
- 學習 Generic Function
- 學習 Generic Array
- 學習 Generic Interface
- 學習 Generic Type Alias
- 學習 Generic Constraints (`extends`)

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Why Generics?

```ts
function echo<T>(value: T): T {
  return value;
}
```

泛型可以接受不同型別，同時保留型別資訊，避免使用 `any` 而失去型別檢查。

---

### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity('Tom'));
console.log(identity(30));
console.log(identity(true));
```

建立可重複使用且保有型別安全的函式。

---

### Generic Array

```ts
let products: Array<string> = ['Laptop', 'Keyboard', 'Mouse'];
```

使用 `Array<T>` 表示泛型陣列。

---

### Generic Interface

```ts
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 100,
};

const stringBox: Box<string> = {
  value: 'Hello',
};
```

建立可以套用不同型別的 Interface。

---

### Generic Type Alias

```ts
type Result<T> = {
  success: boolean;
  data: T;
};

const userResult: Result<string> = {
  success: true,
  data: 'Mary',
};
```

建立具有彈性的資料模型。

---

### Generic Constraints

```ts
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}
```

使用 `extends` 限制泛型必須符合指定條件。

---

## 📂 專案結構

```
Day68_Generics
│
├── index.html
├── script.ts
├── tsconfig.json
├── README.md
└── dist
    ├── script.js
    └── script.js.map
```

---

## ▶️ 執行方式

編譯

```bash
tsc
```

監聽模式

```bash
tsc --watch
```

---

## 🎯 學習成果

- 理解 Generics 的用途
- 能建立 Generic Function
- 能使用 Generic Array
- 能建立 Generic Interface
- 能建立 Generic Type Alias
- 能使用 Generic Constraints (`extends`)
- 理解 TypeScript 型別推斷（Type Inference）
- 能閱讀常見 React、Axios 泛型寫法

---

# 🇺🇸 English

## 📖 Project Introduction

Day68 focuses on **Generics** in TypeScript.

This project introduces generic programming concepts, including Generic Functions, Generic Arrays, Generic Interfaces, Generic Type Aliases, and Generic Constraints to create reusable, flexible, and type-safe code.

---

## 🚀 Learning Objectives

- Understand why Generics are needed
- Learn Generic Functions
- Learn Generic Arrays
- Learn Generic Interfaces
- Learn Generic Type Aliases
- Learn Generic Constraints (`extends`)

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Why Generics?

```ts
function echo<T>(value: T): T {
  return value;
}
```

Generics preserve type information while allowing multiple data types.

---

### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

Create reusable and type-safe functions.

---

### Generic Array

```ts
let products: Array<string> = ['Laptop', 'Keyboard', 'Mouse'];
```

Use `Array<T>` to represent generic arrays.

---

### Generic Interface

```ts
interface Box<T> {
  value: T;
}
```

Create reusable interfaces for different data types.

---

### Generic Type Alias

```ts
type Result<T> = {
  success: boolean;
  data: T;
};
```

Create flexible reusable data structures.

---

### Generic Constraints

```ts
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}
```

Restrict generic types using `extends`.

---

## 📂 Project Structure

```
Day68_Generics
│
├── index.html
├── script.ts
├── tsconfig.json
├── README.md
└── dist
    ├── script.js
    └── script.js.map
```

---

## ▶️ Run

Compile

```bash
tsc
```

Watch Mode

```bash
tsc --watch
```

---

## 🎯 Learning Outcomes

- Understand the purpose of Generics
- Create Generic Functions
- Use Generic Arrays
- Create Generic Interfaces
- Create Generic Type Aliases
- Apply Generic Constraints (`extends`)
- Understand Type Inference
- Read generic syntax used in React and Axios

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day68では、TypeScript の **Generics（ジェネリクス）** を学習しました。

Generic Function、Generic Interface、Generic Type Alias、Generic Constraints を通して、柔軟で再利用しやすく、型安全なコードを書く方法を学びます。

---

## 🚀 学習目標

- Generics が必要な理由を理解する
- Generic Function を学ぶ
- Generic Array を学ぶ
- Generic Interface を学ぶ
- Generic Type Alias を学ぶ
- Generic Constraints（`extends`）を学ぶ

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Why Generics?

```ts
function echo<T>(value: T): T {
  return value;
}
```

さまざまな型を扱いながら、型情報を保持できます。

---

### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

型安全で再利用可能な関数を作成します。

---

### Generic Array

```ts
let products: Array<string> = ['Laptop', 'Keyboard', 'Mouse'];
```

`Array<T>` を利用してジェネリック配列を表現します。

---

### Generic Interface

```ts
interface Box<T> {
  value: T;
}
```

さまざまな型に対応できる Interface を作成します。

---

### Generic Type Alias

```ts
type Result<T> = {
  success: boolean;
  data: T;
};
```

再利用可能なデータ構造を定義します。

---

### Generic Constraints

```ts
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}
```

`extends` を利用してジェネリクスの条件を制限します。

---

## 📂 ディレクトリ構成

```
Day68_Generics
│
├── index.html
├── script.ts
├── tsconfig.json
├── README.md
└── dist
    ├── script.js
    └── script.js.map
```

---

## ▶️ 実行方法

コンパイル

```bash
tsc
```

監視モード

```bash
tsc --watch
```

---

## 🎯 学習成果

- Generics の目的を理解できる
- Generic Function を作成できる
- Generic Array を利用できる
- Generic Interface を作成できる
- Generic Type Alias を作成できる
- Generic Constraints（`extends`）を利用できる
- Type Inference を理解できる
- React や Axios のジェネリクス構文を理解できる
