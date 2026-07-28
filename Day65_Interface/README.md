# Day65_Interface

---

# 🇹🇼 中文

## 📖 專案介紹

Day65 學習 TypeScript 的 **Interface（介面）**。

本日重點在於了解 Interface 的使用方式，並學習 Optional Property（可選屬性）、Readonly Property（唯讀屬性）以及 Interface Extension（介面繼承），理解 Interface 與 Type Alias 的差異及實際應用。

---

## 🚀 學習目標

- 學習 Interface
- 了解 Interface 與 Type Alias 的差異
- 學習 Optional Property（?）
- 學習 Readonly Property
- 學習 Interface Extension（extends）
- 提升 TypeScript 型別設計能力

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Interface

```ts
interface Employee {
  name: string;
  age: number;
  salary: number;
}

const employee: Employee = {
  name: 'Tom',
  age: 30,
  salary: 45000,
};
```

建立物件型別，提升程式碼可讀性與可維護性。

---

### Optional Property

```ts
interface User {
  name: string;
  email?: string;
}
```

- 使用 `?`
- 屬性可存在也可不存在

---

### Readonly Property

```ts
interface Product {
  readonly id: number;
  title: string;
  price: number;
}
```

- 建立後不可修改
- 常用於 ID、建立時間等固定資料

---

### Interface Extension

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

interface Manager extends Employee {
  department: string;
}
```

利用 `extends` 建立繼承關係，避免重複定義相同欄位。

---

### Interface vs Type

| Interface       | Type                                      |
| --------------- | ----------------------------------------- |
| 專門定義 Object | 可定義 Object、Union、Tuple、Primitive 等 |
| 支援 extends    | 使用 `&` 合併型別                         |
| React 專案常見  | 適用範圍較廣                              |

---

## 📂 專案結構

```
Day65_Interface
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

- 能建立 Interface
- 能使用 Optional Property
- 能使用 Readonly Property
- 能使用 Interface Extension
- 能理解 Interface 與 Type Alias 的差異
- 能建立更具可維護性的 TypeScript 程式碼

---

# 🇺🇸 English

## 📖 Project Introduction

Day65 focuses on **Interfaces** in TypeScript.

This project demonstrates how to define object structures using Interfaces, including Optional Properties, Readonly Properties, Interface Extension, and the differences between Interfaces and Type Aliases.

---

## 🚀 Learning Objectives

- Learn Interfaces
- Understand the differences between Interface and Type Alias
- Learn Optional Properties
- Learn Readonly Properties
- Learn Interface Extension (`extends`)
- Improve TypeScript type design

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Interface

```ts
interface Employee {
  name: string;
  age: number;
  salary: number;
}
```

---

### Optional Property

```ts
interface User {
  name: string;
  email?: string;
}
```

---

### Readonly Property

```ts
interface Product {
  readonly id: number;
  title: string;
  price: number;
}
```

---

### Interface Extension

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

interface Manager extends Employee {
  department: string;
}
```

---

### Interface vs Type

| Interface          | Type                                     |
| ------------------ | ---------------------------------------- |
| Object definitions | Objects, Unions, Tuples, Primitive types |
| Supports `extends` | Uses `&` for composition                 |
| Common in React    | More flexible                            |

---

## 📂 Project Structure

```
Day65_Interface
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

- Create Interfaces
- Use Optional Properties
- Use Readonly Properties
- Extend Interfaces
- Understand the differences between Interface and Type Alias
- Write maintainable TypeScript code

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day65では、TypeScript の **Interface（インターフェース）** を学習しました。

Interface の基本的な使い方に加え、Optional Property、Readonly Property、Interface Extension（継承）、そして Interface と Type Alias の違いについて学びます。

---

## 🚀 学習目標

- Interface を学ぶ
- Interface と Type Alias の違いを理解する
- Optional Property を学ぶ
- Readonly Property を学ぶ
- Interface Extension（extends）を学ぶ
- 保守性の高い型設計を理解する

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Interface

```ts
interface Employee {
  name: string;
  age: number;
  salary: number;
}
```

オブジェクトの型を定義します。

---

### Optional Property

```ts
interface User {
  name: string;
  email?: string;
}
```

- `?` を使用
- プロパティは省略可能

---

### Readonly Property

```ts
interface Product {
  readonly id: number;
  title: string;
  price: number;
}
```

- 作成後は変更不可
- ID や作成日時などに利用される

---

### Interface Extension

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

interface Manager extends Employee {
  department: string;
}
```

`extends` を利用してインターフェースを継承します。

---

### Interface と Type の比較

| Interface        | Type                                 |
| ---------------- | ------------------------------------ |
| オブジェクト向け | Object・Union・Tuple・Primitive など |
| `extends` を利用 | `&` を利用して結合                   |
| React でよく利用 | 幅広く利用可能                       |

---

## 📂 ディレクトリ構成

```
Day65_Interface
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

- Interface を定義できる
- Optional Property を利用できる
- Readonly Property を利用できる
- Interface Extension を利用できる
- Interface と Type Alias の違いを理解できる
- 保守性の高い TypeScript コードを書ける
