# Day67_Function_Types

---

# 🇹🇼 中文

## 📖 專案介紹

Day67 學習 TypeScript 的 **Function Types（函式型別）**。

本日重點在於理解如何為函式的參數、回傳值及函式本身定義型別，並學習 Optional Parameters（可選參數）、Default Parameters（預設參數）以及 Callback Function（回呼函式），建立更安全、更容易維護的程式碼。

---

## 🚀 學習目標

- 學習 Function Parameter Types
- 學習 Return Types
- 學習 `void`
- 學習 Optional Parameters
- 學習 Default Parameters
- 學習 Function Types
- 學習 Callback Functions

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Function Parameter Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

為函式參數指定型別，避免錯誤的資料傳入。

---

### Return Types

```ts
function getUserName(): string {
  return 'Tom';
}
```

明確指定函式回傳值型別，提高程式可讀性與安全性。

---

### void

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

表示函式不會回傳任何值。

---

### Optional Parameters

```ts
function greet(name?: string): void {
  console.log(`Hello ${name ?? 'Guest'}`);
}
```

使用 `?` 讓參數可以省略。

---

### Default Parameters

```ts
function calculatePrice(price: number, tax: number = 0.05): number {
  return price * (1 + tax);
}
```

設定預設值，未傳入參數時會自動使用。

---

### Function Types

```ts
let calculate: (a: number, b: number) => number;

calculate = (a, b) => a + b;
```

將函式本身視為一種型別。

---

### Callback Function

```ts
function process(callback: (message: string) => void) {
  callback('Hello TypeScript');
}

process((message) => {
  console.log(message);
});
```

函式可以作為另一個函式的參數，提高程式的彈性與重用性。

---

## 📂 專案結構

```
Day67_Function_Types
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

- 能定義函式參數型別
- 能指定函式回傳型別
- 理解 `void` 的用途
- 能使用 Optional Parameters
- 能使用 Default Parameters
- 能定義 Function Types
- 能建立 Callback Functions
- 能理解 React 中函式型別的基本概念

---

# 🇺🇸 English

## 📖 Project Introduction

Day67 focuses on **Function Types** in TypeScript.

This project demonstrates how to define parameter types, return types, function types, optional parameters, default parameters, and callback functions to write safer and more maintainable code.

---

## 🚀 Learning Objectives

- Learn Function Parameter Types
- Learn Return Types
- Learn `void`
- Learn Optional Parameters
- Learn Default Parameters
- Learn Function Types
- Learn Callback Functions

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Function Parameter Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Define types for function parameters.

---

### Return Types

```ts
function getUserName(): string {
  return 'Tom';
}
```

Specify the return type explicitly.

---

### void

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

Represents a function that returns no value.

---

### Optional Parameters

```ts
function greet(name?: string): void {
  console.log(`Hello ${name ?? 'Guest'}`);
}
```

Allows parameters to be omitted.

---

### Default Parameters

```ts
function calculatePrice(price: number, tax: number = 0.05): number {
  return price * (1 + tax);
}
```

Uses a default value when no argument is provided.

---

### Function Types

```ts
let calculate: (a: number, b: number) => number;

calculate = (a, b) => a + b;
```

Treat functions as typed values.

---

### Callback Functions

```ts
function process(callback: (message: string) => void) {
  callback('Hello TypeScript');
}
```

Pass functions as arguments to other functions.

---

## 📂 Project Structure

```
Day67_Function_Types
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

- Define function parameter types
- Specify return types
- Understand `void`
- Use optional parameters
- Use default parameters
- Define function types
- Create callback functions
- Understand the foundation of function typing used in React

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day67では、TypeScript の **Function Types（関数型）** を学習しました。

関数の引数・戻り値・関数そのものに型を定義する方法や、Optional Parameters、Default Parameters、Callback Function の使い方を学び、安全で保守性の高いコードを書く基礎を身につけます。

---

## 🚀 学習目標

- Function Parameter Types を学ぶ
- Return Types を学ぶ
- `void` を学ぶ
- Optional Parameters を学ぶ
- Default Parameters を学ぶ
- Function Types を学ぶ
- Callback Functions を学ぶ

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Function Parameter Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

関数の引数に型を指定します。

---

### Return Types

```ts
function getUserName(): string {
  return 'Tom';
}
```

戻り値の型を明示的に指定します。

---

### void

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

戻り値がない関数を表します。

---

### Optional Parameters

```ts
function greet(name?: string): void {
  console.log(`Hello ${name ?? 'Guest'}`);
}
```

引数を省略できるようにします。

---

### Default Parameters

```ts
function calculatePrice(price: number, tax: number = 0.05): number {
  return price * (1 + tax);
}
```

引数が渡されない場合はデフォルト値を使用します。

---

### Function Types

```ts
let calculate: (a: number, b: number) => number;

calculate = (a, b) => a + b;
```

関数そのものに型を定義します。

---

### Callback Functions

```ts
function process(callback: (message: string) => void) {
  callback('Hello TypeScript');
}
```

関数を別の関数の引数として渡します。

---

## 📂 ディレクトリ構成

```
Day67_Function_Types
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

- 関数の引数に型を指定できる
- 戻り値の型を指定できる
- `void` の使い方を理解できる
- Optional Parameters を利用できる
- Default Parameters を利用できる
- Function Types を定義できる
- Callback Functions を作成できる
- React で使用される関数型の基礎を理解できる
