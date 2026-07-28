# Day64_Type_Alias

---

# 🇹🇼 中文

## 📖 專案介紹

Day64 學習 TypeScript 的 **Type Alias（型別別名）**。

本日重點在於利用 Type Alias 提高程式碼的可讀性與重用性，並學習如何搭配陣列、Union Type（聯集型別）以及 Intersection Type（交集型別）建立更完整的型別設計。

---

## 🚀 學習目標

- 學習 Type Alias
- 學習 Type Alias + Array
- 學習 Union Type（`|`）
- 學習 Intersection Type（`&`）
- 提升 TypeScript 型別設計能力

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Type Alias

```ts
type Employee = {
  name: string;
  age: number;
  salary: number;
};
```

建立型別別名，避免重複撰寫相同的 Object Type。

---

### Type Alias + Array

```ts
type Employee = {
  name: string;
  age: number;
  salary: number;
};

const employees: Employee[] = [];
```

建立物件陣列，提升程式可讀性。

---

### Union Type

```ts
let employeeId: number | string;

employeeId = 1001;
employeeId = 'EMP001';
```

一個變數可以接受多種型別。

---

### Intersection Type

```ts
type Employee = {
  name: string;
  age: number;
};

type Salary = {
  salary: number;
};

type Contact = {
  email: string;
};

type EmployeeDetail = Employee & Salary & Contact;
```

將多個 Type 合併成新的型別。

---

## 📂 專案結構

```
Day64_Type_Alias
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

- 能建立 Type Alias
- 能使用 Type Alias 建立 Array
- 能使用 Union Type
- 能使用 Intersection Type
- 能提升 TypeScript 型別重用性
- 能建立更乾淨且易維護的程式碼

---

# 🇺🇸 English

## 📖 Project Introduction

Day64 focuses on **Type Alias** in TypeScript.

This project demonstrates how to improve code readability and reusability using Type Aliases, Arrays of custom types, Union Types, and Intersection Types.

---

## 🚀 Learning Objectives

- Learn Type Alias
- Learn Type Alias with Arrays
- Learn Union Types (`|`)
- Learn Intersection Types (`&`)
- Improve TypeScript type design

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Type Alias

```ts
type Employee = {
  name: string;
  age: number;
  salary: number;
};
```

---

### Type Alias + Array

```ts
const employees: Employee[] = [];
```

---

### Union Type

```ts
let employeeId: number | string;
```

Allows multiple possible types.

---

### Intersection Type

```ts
type EmployeeDetail = Employee & Salary & Contact;
```

Combines multiple types into one.

---

## 📂 Project Structure

```
Day64_Type_Alias
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

- Create Type Aliases
- Build Arrays using custom types
- Use Union Types
- Use Intersection Types
- Improve code readability
- Reuse types efficiently

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day64では、TypeScript の **Type Alias（型エイリアス）** を学習しました。

Type Alias を利用して型を再利用する方法や、Array、Union Type、Intersection Type と組み合わせた実践的な型設計を学びます。

---

## 🚀 学習目標

- Type Alias を学ぶ
- Type Alias と配列を学ぶ
- Union Type（`|`）を学ぶ
- Intersection Type（`&`）を学ぶ
- 型の再利用方法を理解する

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Type Alias

```ts
type Employee = {
  name: string;
  age: number;
  salary: number;
};
```

型エイリアスを作成し、同じ型定義を再利用します。

---

### Type Alias + Array

```ts
const employees: Employee[] = [];
```

オブジェクト配列を簡潔に定義します。

---

### Union Type

```ts
let employeeId: number | string;
```

複数の型を許可します。

---

### Intersection Type

```ts
type EmployeeDetail = Employee & Salary & Contact;
```

複数の型を結合して新しい型を作成します。

---

## 📂 ディレクトリ構成

```
Day64_Type_Alias
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

- Type Alias を作成できる
- Type Alias を利用した配列を作成できる
- Union Type を利用できる
- Intersection Type を利用できる
- 型を効率よく再利用できる
- 保守性の高いコードを書ける
