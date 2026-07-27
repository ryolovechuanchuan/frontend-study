# Day62_Array_and_Tuple

---

# 🇹🇼 中文

## 📖 專案介紹

Day62 學習 TypeScript 中的 **Array（陣列）** 與 **Tuple（元組）**。

本日重點在於理解 TypeScript 如何利用型別限制陣列內容，並學習 Tuple（固定長度、固定順序、固定型別）與 Readonly Array（唯讀陣列）的使用方式。

---

## 🚀 學習目標

- 學習 Array Type
- 學習 Tuple
- 學習 Readonly Array
- 理解 Array 與 Tuple 的差異
- 熟悉 TypeScript 型別檢查

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Array

```ts
const students: string[] = ['Tom', 'Mary', 'John'];
```

- string[]
- number[]
- boolean[]
- Array<T>

---

### Tuple

```ts
const employee: [string, number, string] = ['Tom', 30000, 'Frontend'];
```

- 固定長度
- 固定順序
- 固定型別

---

### Readonly Array

```ts
const colors: readonly string[] = ['Red', 'Blue', 'Green'];
```

- 不可修改
- 可讀取
- React 常見寫法

---

## 📂 專案結構

```
Day62_Array_and_Tuple
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

自動編譯

```bash
tsc --watch
```

---

## 🎯 學習成果

- 能使用 Array Type
- 能建立 Tuple
- 能使用 Readonly Array
- 理解 Array 與 Tuple 的差異
- 能利用 TypeScript 提供型別安全

---

# 🇺🇸 English

## 📖 Project Introduction

Day62 focuses on learning **Array** and **Tuple** in TypeScript.

The project demonstrates how TypeScript enforces array types, introduces Tuple (fixed length, fixed order, fixed types), and explains Readonly Arrays.

---

## 🚀 Learning Objectives

- Learn Array Types
- Learn Tuple
- Learn Readonly Array
- Understand the differences between Array and Tuple
- Improve type safety with TypeScript

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Array

```ts
const students: string[] = ['Tom', 'Mary', 'John'];
```

- string[]
- number[]
- boolean[]
- Array<T>

---

### Tuple

```ts
const employee: [string, number, string] = ['Tom', 30000, 'Frontend'];
```

- Fixed length
- Fixed order
- Fixed types

---

### Readonly Array

```ts
const colors: readonly string[] = ['Red', 'Blue', 'Green'];
```

- Immutable
- Read-only
- Commonly used in React

---

## 📂 Project Structure

```
Day62_Array_and_Tuple
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

- Use Array Types
- Create Tuple Types
- Use Readonly Arrays
- Understand the differences between Array and Tuple
- Improve type safety with TypeScript

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day62では、TypeScriptの **Array（配列）** と **Tuple（タプル）** を学習しました。

配列の型指定方法、Tuple（固定長・固定順序・固定型）の考え方、Readonly Array の使い方を理解することが目的です。

---

## 🚀 学習目標

- Array Type を学ぶ
- Tuple を学ぶ
- Readonly Array を学ぶ
- Array と Tuple の違いを理解する
- TypeScript の型安全性を理解する

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Array

```ts
const students: string[] = ['Tom', 'Mary', 'John'];
```

- string[]
- number[]
- boolean[]
- Array<T>

---

### Tuple

```ts
const employee: [string, number, string] = ['Tom', 30000, 'Frontend'];
```

- 固定長
- 固定順序
- 固定型

---

### Readonly Array

```ts
const colors: readonly string[] = ['Red', 'Blue', 'Green'];
```

- 読み取り専用
- 変更不可
- Reactでよく利用される

---

## 📂 ディレクトリ構成

```
Day62_Array_and_Tuple
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

- Array Type を利用できる
- Tuple を作成できる
- Readonly Array を利用できる
- Array と Tuple の違いを理解できる
- TypeScript の型安全性を活用できる
