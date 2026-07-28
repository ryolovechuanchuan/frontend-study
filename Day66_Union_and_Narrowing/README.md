# Day66_Union_and_Narrowing

---

# 🇹🇼 中文

## 📖 專案介紹

Day66 學習 TypeScript 的 **Union Type（聯集型別）** 與 **Type Narrowing（型別縮小）**。

本日重點在於理解如何讓一個變數擁有多種型別，以及如何透過 `typeof`、`if / else`、`in` Operator 等方式縮小型別範圍，安全地存取不同型別的屬性與方法。

---

## 🚀 學習目標

- 學習 Union Type
- 學習 Type Narrowing
- 學習 `typeof` Narrowing
- 學習 `if / else` Narrowing
- 學習 `in` Operator
- 學習 API Response 型別設計

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Union Type

```ts
let employeeId: number | string;

employeeId = 1001;
employeeId = 'EMP001';
```

一個變數可以接受多種型別。

---

### typeof Narrowing

```ts
let value: string | number;

value = 'TypeScript';

if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

透過 `typeof` 判斷基本型別。

---

### if / else Narrowing

```ts
let value: string | number;

value = Math.random() > 0.5 ? 'Hello' : 100;

if (typeof value === 'string') {
  console.log(value.toUpperCase());
} else {
  console.log(value.toFixed(2));
}
```

TypeScript 會自動推斷不同分支的型別。

---

### in Operator

```ts
interface Employee {
  name: string;
  salary: number;
}

interface Student {
  name: string;
  grade: number;
}

let person: Employee | Student;

if ('salary' in person) {
  console.log(person.salary);
}
```

利用物件屬性縮小型別。

---

### API Response（Discriminated Union）

```ts
interface SuccessResponse {
  success: true;
  data: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;
```

建立不同 API 回傳結果的型別。

---

## 📂 專案結構

```
Day66_Union_and_Narrowing
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

- 能建立 Union Type
- 能使用 `typeof` 進行型別縮小
- 能使用 `if / else` 進行型別判斷
- 能使用 `in` Operator 判斷物件型別
- 能建立 API Response 型別
- 能理解 Type Narrowing 在實務上的應用

---

# 🇺🇸 English

## 📖 Project Introduction

Day66 focuses on **Union Types** and **Type Narrowing** in TypeScript.

This project demonstrates how to define variables with multiple possible types and safely narrow them using `typeof`, `if / else`, and the `in` operator.

---

## 🚀 Learning Objectives

- Learn Union Types
- Learn Type Narrowing
- Learn `typeof` Narrowing
- Learn `if / else` Narrowing
- Learn the `in` Operator
- Learn API Response type design

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Union Type

```ts
let employeeId: number | string;
```

Allows multiple possible types.

---

### typeof Narrowing

```ts
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

Narrows primitive types.

---

### if / else Narrowing

```ts
if (typeof value === 'string') {
} else {
}
```

TypeScript automatically narrows each branch.

---

### in Operator

```ts
if ('salary' in person) {
  console.log(person.salary);
}
```

Narrows object types based on property existence.

---

### API Response (Discriminated Union)

```ts
interface SuccessResponse {
  success: true;
  data: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;
```

Models different API response types safely.

---

## 📂 Project Structure

```
Day66_Union_and_Narrowing
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

- Create Union Types
- Narrow types using `typeof`
- Narrow types using `if / else`
- Narrow object types using the `in` operator
- Design API response types
- Understand practical Type Narrowing

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day66では、TypeScript の **Union Type（ユニオン型）** と **Type Narrowing（型の絞り込み）** を学習しました。

`typeof`、`if / else`、`in` 演算子を利用して、安全に型を判定・絞り込む方法を学びます。また、API レスポンスの型設計についても理解します。

---

## 🚀 学習目標

- Union Type を学ぶ
- Type Narrowing を学ぶ
- `typeof` による型の絞り込みを学ぶ
- `if / else` による型の絞り込みを学ぶ
- `in` 演算子を学ぶ
- API レスポンスの型設計を学ぶ

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Union Type

```ts
let employeeId: number | string;
```

複数の型を許可します。

---

### typeof Narrowing

```ts
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

基本型を判定します。

---

### if / else Narrowing

```ts
if (typeof value === 'string') {
} else {
}
```

各分岐で型が自動的に絞り込まれます。

---

### in Operator

```ts
if ('salary' in person) {
  console.log(person.salary);
}
```

プロパティの存在によってオブジェクト型を判定します。

---

### API Response（Discriminated Union）

```ts
interface SuccessResponse {
  success: true;
  data: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;
```

API の成功・失敗レスポンスを安全に表現します。

---

## 📂 ディレクトリ構成

```
Day66_Union_and_Narrowing
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

- Union Type を利用できる
- `typeof` による型の絞り込みができる
- `if / else` による型判定ができる
- `in` 演算子でオブジェクト型を判定できる
- API レスポンスの型設計ができる
- Type Narrowing の実践的な使い方を理解できる
