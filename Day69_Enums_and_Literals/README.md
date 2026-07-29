# Day69_Enums_and_Literals

---

# 🇹🇼 中文

## 📖 專案介紹

Day69 學習 TypeScript 的 **Enums（列舉）** 與 **Literal Types（字面值型別）**。

本日重點在於理解 Enum 的使用方式，以及 Literal Types 和 Union Literal Types 的設計理念，並了解為什麼現代 TypeScript 專案更常使用 Literal Types 來建立更安全且容易維護的程式碼。

---

## 🚀 學習目標

- 學習 Numeric Enum
- 學習 String Enum
- 學習 Literal Types
- 學習 Union Literal Types
- 學習 Literal Types 在函式中的應用
- 了解 Enum 與 Literal Types 的差異

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Numeric Enum

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
console.log(Direction.Right);
```

建立數值列舉，預設由 `0` 開始。

---

### String Enum

```ts
enum Theme {
  Light = 'LIGHT',
  Dark = 'DARK',
}

console.log(Theme.Light);
console.log(Theme.Dark);
```

使用字串列舉，提高程式可讀性。

---

### Literal Types

```ts
let color: 'red';

color = 'red';
```

限制變數只能是指定的固定值。

---

### Union Literal Types

```ts
type ButtonSize = 'small' | 'medium' | 'large';

let size: ButtonSize = 'medium';
```

限制變數只能是多個指定值之一。

---

### Literal Types in Functions

```ts
function setTheme(theme: 'light' | 'dark'): void {
  console.log(theme);
}

setTheme('light');
```

利用 Literal Types 限制函式參數。

---

### Practical Example

```ts
type UserRole = 'Admin' | 'User' | 'Guest';

let role: UserRole = 'Admin';
```

建立更安全的角色型別，避免傳入未定義的值。

---

## 📂 專案結構

```
Day69_Enums_and_Literals
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

- 能建立 Numeric Enum
- 能建立 String Enum
- 能使用 Literal Types
- 能使用 Union Literal Types
- 能限制函式參數為指定值
- 理解 Enum 與 Literal Types 的差異
- 理解現代 React + TypeScript 專案偏好 Literal Types 的原因

---

# 🇺🇸 English

## 📖 Project Introduction

Day69 focuses on **Enums** and **Literal Types** in TypeScript.

This project introduces Numeric Enums, String Enums, Literal Types, Union Literal Types, and their practical usage. It also explains why modern TypeScript projects often prefer Literal Types over Enums.

---

## 🚀 Learning Objectives

- Learn Numeric Enums
- Learn String Enums
- Learn Literal Types
- Learn Union Literal Types
- Learn Literal Types in Functions
- Understand the difference between Enums and Literal Types

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Numeric Enum

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

Create numeric enums starting from `0`.

---

### String Enum

```ts
enum Theme {
  Light = 'LIGHT',
  Dark = 'DARK',
}
```

Improve readability using string values.

---

### Literal Types

```ts
let color: 'red';
```

Restrict a variable to one specific value.

---

### Union Literal Types

```ts
type ButtonSize = 'small' | 'medium' | 'large';
```

Restrict variables to a predefined set of values.

---

### Literal Types in Functions

```ts
function setTheme(theme: 'light' | 'dark'): void {
  console.log(theme);
}
```

Use literal types to validate function parameters.

---

### Practical Example

```ts
type UserRole = 'Admin' | 'User' | 'Guest';
```

Create safer and more maintainable role definitions.

---

## 📂 Project Structure

```
Day69_Enums_and_Literals
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

- Create Numeric Enums
- Create String Enums
- Use Literal Types
- Use Union Literal Types
- Restrict function parameters with Literal Types
- Understand the differences between Enums and Literal Types
- Understand why modern React + TypeScript projects prefer Literal Types

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day69では、TypeScript の **Enums（列挙型）** と **Literal Types（リテラル型）** を学習しました。

Numeric Enum、String Enum、Literal Types、Union Literal Types の使い方を理解し、現代の TypeScript 開発で Literal Types がよく利用される理由についても学びます。

---

## 🚀 学習目標

- Numeric Enum を学ぶ
- String Enum を学ぶ
- Literal Types を学ぶ
- Union Literal Types を学ぶ
- 関数での Literal Types の利用方法を学ぶ
- Enum と Literal Types の違いを理解する

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Numeric Enum

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

0 から始まる数値の列挙型を作成します。

---

### String Enum

```ts
enum Theme {
  Light = 'LIGHT',
  Dark = 'DARK',
}
```

文字列を利用して可読性を向上させます。

---

### Literal Types

```ts
let color: 'red';
```

変数を特定の値だけに制限します。

---

### Union Literal Types

```ts
type ButtonSize = 'small' | 'medium' | 'large';
```

複数の決められた値だけを許可します。

---

### Literal Types in Functions

```ts
function setTheme(theme: 'light' | 'dark'): void {
  console.log(theme);
}
```

関数の引数をリテラル型で制限します。

---

### Practical Example

```ts
type UserRole = 'Admin' | 'User' | 'Guest';
```

安全で保守しやすいロール定義を作成します。

---

## 📂 ディレクトリ構成

```
Day69_Enums_and_Literals
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

- Numeric Enum を作成できる
- String Enum を作成できる
- Literal Types を利用できる
- Union Literal Types を利用できる
- 関数の引数を Literal Types で制限できる
- Enum と Literal Types の違いを理解できる
- 現代の React + TypeScript で Literal Types がよく使われる理由を理解できる

```

```
