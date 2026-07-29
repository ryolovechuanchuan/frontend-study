# Day70_Utility_Types

---

# 🇹🇼 中文

## 📖 專案介紹

Day70 學習 TypeScript 的 **Utility Types（工具型別）**。

本日重點在於學習 TypeScript 內建的 Utility Types，包括 `Partial`、`Required`、`Readonly`、`Pick`、`Omit` 與 `Record`，並了解如何在實際開發中建立更具彈性、可重複使用且型別安全的資料結構。

---

## 🚀 學習目標

- 學習 Utility Types
- 學習 `Partial<T>`
- 學習 `Required<T>`
- 學習 `Readonly<T>`
- 學習 `Pick<T, K>`
- 學習 `Omit<T, K>`
- 學習 `Record<K, V>`

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Partial

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser: Partial<User> = {
  name: 'Tom',
};
```

將所有屬性變成可選（Optional），適合更新資料。

---

### Required

```ts
interface Book {
  title?: string;
  author?: string;
}

const myBook: Required<Book> = {
  title: 'TypeScript Guide',
  author: 'John',
};
```

將所有可選屬性變成必填。

---

### Readonly

```ts
interface Settings {
  language: string;
  theme: string;
}

const appSettings: Readonly<Settings> = {
  language: 'zh-TW',
  theme: 'dark',
};
```

建立不可修改的物件。

---

### Pick

```ts
interface Product {
  id: number;
  title: string;
  price: number;
}

const productInfo: Pick<Product, 'title' | 'price'> = {
  title: 'Keyboard',
  price: 1200,
};
```

從原有型別中挑選指定屬性。

---

### Omit

```ts
interface Employee {
  id: number;
  name: string;
  department: string;
}

const employee: Omit<Employee, 'id'> = {
  name: 'John',
  department: 'IT',
};
```

排除指定屬性，建立新的型別。

---

### Record

```ts
const countries: Record<string, string> = {
  TW: 'Taiwan',
  JP: 'Japan',
  US: 'United States',
};
```

建立具有固定 Key 與 Value 型別的物件。

---

## 📂 專案結構

```text
Day70_Utility_Types
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

- 理解 Utility Types 的用途
- 能使用 `Partial<T>` 更新資料
- 能使用 `Required<T>` 建立必填型別
- 能使用 `Readonly<T>` 建立唯讀物件
- 能使用 `Pick<T, K>` 擷取指定屬性
- 能使用 `Omit<T, K>` 排除指定屬性
- 能使用 `Record<K, V>` 建立鍵值對資料
- 理解 Utility Types 在 React 與 API 開發中的應用

---

# 🇺🇸 English

## 📖 Project Introduction

Day70 focuses on **Utility Types** in TypeScript.

This project introduces TypeScript's built-in Utility Types, including `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, and `Record`, to create flexible, reusable, and type-safe data structures.

---

## 🚀 Learning Objectives

- Learn Utility Types
- Learn `Partial<T>`
- Learn `Required<T>`
- Learn `Readonly<T>`
- Learn `Pick<T, K>`
- Learn `Omit<T, K>`
- Learn `Record<K, V>`

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Partial

```ts
const updateUser: Partial<User> = {
  name: 'Tom',
};
```

Makes all properties optional.

---

### Required

```ts
const myBook: Required<Book> = {
  title: 'TypeScript Guide',
  author: 'John',
};
```

Makes all properties required.

---

### Readonly

```ts
const appSettings: Readonly<Settings> = {
  language: 'zh-TW',
  theme: 'dark',
};
```

Creates immutable objects.

---

### Pick

```ts
const productInfo: Pick<Product, 'title' | 'price'> = {
  title: 'Keyboard',
  price: 1200,
};
```

Selects specific properties from a type.

---

### Omit

```ts
const employee: Omit<Employee, 'id'> = {
  name: 'John',
  department: 'IT',
};
```

Creates a type by excluding specific properties.

---

### Record

```ts
const countries: Record<string, string> = {
  TW: 'Taiwan',
  JP: 'Japan',
  US: 'United States',
};
```

Creates an object with consistent key and value types.

---

## 📂 Project Structure

```text
Day70_Utility_Types
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

- Understand Utility Types
- Use `Partial<T>` for update operations
- Use `Required<T>` for mandatory fields
- Use `Readonly<T>` for immutable objects
- Use `Pick<T, K>` to select properties
- Use `Omit<T, K>` to exclude properties
- Use `Record<K, V>` to build key-value mappings
- Understand real-world usage in React and API development

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day70では、TypeScript の **Utility Types（ユーティリティ型）** を学習しました。

`Partial`、`Required`、`Readonly`、`Pick`、`Omit`、`Record` の使い方を学び、柔軟で再利用しやすく、型安全なデータ構造を作成する方法を理解します。

---

## 🚀 学習目標

- Utility Types を学ぶ
- `Partial<T>` を学ぶ
- `Required<T>` を学ぶ
- `Readonly<T>` を学ぶ
- `Pick<T, K>` を学ぶ
- `Omit<T, K>` を学ぶ
- `Record<K, V>` を学ぶ

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Partial

```ts
const updateUser: Partial<User> = {
  name: 'Tom',
};
```

すべてのプロパティをオプションにします。

---

### Required

```ts
const myBook: Required<Book> = {
  title: 'TypeScript Guide',
  author: 'John',
};
```

すべてのプロパティを必須にします。

---

### Readonly

```ts
const appSettings: Readonly<Settings> = {
  language: 'zh-TW',
  theme: 'dark',
};
```

変更できないオブジェクトを作成します。

---

### Pick

```ts
const productInfo: Pick<Product, 'title' | 'price'> = {
  title: 'Keyboard',
  price: 1200,
};
```

必要なプロパティだけを選択します。

---

### Omit

```ts
const employee: Omit<Employee, 'id'> = {
  name: 'John',
  department: 'IT',
};
```

指定したプロパティを除外した型を作成します。

---

### Record

```ts
const countries: Record<string, string> = {
  TW: 'Taiwan',
  JP: 'Japan',
  US: 'United States',
};
```

キーと値の型を指定したオブジェクトを作成します。

---

## 📂 ディレクトリ構成

```text
Day70_Utility_Types
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

- Utility Types の役割を理解できる
- `Partial<T>` を利用できる
- `Required<T>` を利用できる
- `Readonly<T>` を利用できる
- `Pick<T, K>` を利用できる
- `Omit<T, K>` を利用できる
- `Record<K, V>` を利用できる
- React や API 開発での Utility Types の活用方法を理解できる
