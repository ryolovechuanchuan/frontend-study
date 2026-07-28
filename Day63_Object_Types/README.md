# Day63_Object_Types

---

# 🇹🇼 中文

## 📖 專案介紹

Day63 學習 TypeScript 的 **Object Types（物件型別）**。

本日重點為了解如何替物件建立型別，學習 Optional Property（可選屬性）、Readonly Property（唯讀屬性）、Nested Object（巢狀物件）以及 Object Array（物件陣列）的使用方式。

---

## 🚀 學習目標

- 學習 Object Type
- 學習 Optional Property（?）
- 學習 Readonly Property
- 學習 Nested Object
- 學習 Object Array
- 理解 TypeScript 如何限制物件型別

---

## 🛠️ 使用技術

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 學習內容

### Object Type

```ts
const employee: {
  name: string;
  age: number;
  isWorking: boolean;
} = {
  name: 'Tom',
  age: 30,
  isWorking: true,
};
```

---

### Optional Property

```ts
const user: {
  name: string;
  email?: string;
} = {
  name: 'Tom',
};
```

- 使用 `?`
- 屬性可存在也可不存在

---

### Readonly Property

```ts
const user: {
  readonly id: number;
  name: string;
} = {
  id: 1,
  name: 'Tom',
};
```

- 建立後不可修改
- 常用於 ID、建立時間等固定資料

---

### Nested Object

```ts
const company: {
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  name: 'OpenAI',
  address: {
    city: 'San Francisco',
    country: 'USA',
  },
};
```

---

### Object Array

```ts
const employees: {
  name: string;
  salary: number;
}[] = [
  {
    name: 'Tom',
    salary: 35000,
  },
  {
    name: 'Mary',
    salary: 42000,
  },
];
```

---

## 📂 專案結構

```
Day63_Object_Types
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

- 能建立 Object Type
- 能使用 Optional Property
- 能使用 Readonly Property
- 能建立 Nested Object
- 能建立 Object Array
- 能利用 TypeScript 提供完整型別檢查

---

# 🇺🇸 English

## 📖 Project Introduction

Day63 focuses on **Object Types** in TypeScript.

This project demonstrates how to define object types, use Optional Properties, Readonly Properties, Nested Objects, and Arrays of Objects.

---

## 🚀 Learning Objectives

- Learn Object Types
- Learn Optional Properties
- Learn Readonly Properties
- Learn Nested Objects
- Learn Arrays of Objects
- Improve object type safety

---

## 🛠️ Technologies

- TypeScript
- JavaScript (Compiled)
- HTML5
- VS Code

---

## 📚 Topics

### Object Type

```ts
const employee: {
  name: string;
  age: number;
  isWorking: boolean;
};
```

---

### Optional Property

```ts
email?: string
```

---

### Readonly Property

```ts
readonly id: number
```

---

### Nested Object

```ts
address: {
  city: string;
  country: string;
}
```

---

### Object Array

```ts
const employees: {
  name: string;
  salary: number;
}[] = [];
```

---

## 📂 Project Structure

```
Day63_Object_Types
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

- Define Object Types
- Use Optional Properties
- Use Readonly Properties
- Create Nested Objects
- Create Arrays of Objects
- Improve object type safety with TypeScript

---

# 🇯🇵 日本語

## 📖 プロジェクト概要

Day63では、TypeScriptの **Object Types（オブジェクト型）** を学習しました。

オブジェクトの型定義、Optional Property（オプショナルプロパティ）、Readonly Property（読み取り専用プロパティ）、Nested Object（ネストしたオブジェクト）、Object Array（オブジェクト配列）の使い方を学びます。

---

## 🚀 学習目標

- Object Type を学ぶ
- Optional Property を学ぶ
- Readonly Property を学ぶ
- Nested Object を学ぶ
- Object Array を学ぶ
- TypeScript の型安全性を理解する

---

## 🛠️ 使用技術

- TypeScript
- JavaScript（コンパイル後）
- HTML5
- VS Code

---

## 📚 学習内容

### Object Type

```ts
const employee: {
  name: string;
  age: number;
  isWorking: boolean;
};
```

---

### Optional Property

```ts
email?: string
```

---

### Readonly Property

```ts
readonly id: number
```

---

### Nested Object

```ts
address: {
  city: string;
  country: string;
}
```

---

### Object Array

```ts
const employees: {
  name: string;
  salary: number;
}[] = [];
```

---

## 📂 ディレクトリ構成

```
Day63_Object_Types
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

- Object Type を定義できる
- Optional Property を利用できる
- Readonly Property を利用できる
- Nested Object を作成できる
- Object Array を利用できる
- TypeScript の型安全性を理解できる
