# Day75 - TypeScript Modules

## 🇹🇼 中文

### 📚 學習內容

Day75 主要學習 TypeScript 的模組（Modules）概念，了解如何將程式拆分成多個檔案，提高程式的可維護性與重複使用性。

---

## 💡 本日重點

### 為什麼需要 Module？

如果所有程式都寫在一個檔案：

- 難以維護
- 難以閱讀
- 容易發生名稱衝突
- 不利團隊合作

透過 Module，可以依照功能拆分程式。

例如：

```text
src
│
├── script.ts
├── services
├── utils
├── models
└── components
```

---

### Named Export

使用 `export` 匯出指定的函式。

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

匯入方式：

```ts
import { add } from './utils/math.js';
```

---

### Multiple Exports

同一個檔案可以匯出多個函式。

```ts
export function add() {}

export function subtract() {}

export function multiply() {}
```

匯入：

```ts
import { add, subtract, multiply } from './utils/math.js';
```

---

### Alias

使用 `as` 重新命名。

```ts
import { add as plus } from './utils/math.js';
```

```ts
console.log(plus(10, 20));
```

---

### Module Folder Structure

建立不同職責的資料夾。

```text
src
│
├── services
│     ├── api.ts
│     └── post.ts
│
├── utils
│     ├── math.ts
│     └── string.ts
│
├── models
│     └── User.ts
│
└── script.ts
```

---

### Services

建立共用 API。

```ts
export function getUsers() {
  return [
    {
      id: 1,
      name: 'Tom',
    },
    {
      id: 2,
      name: 'Amy',
    },
  ];
}
```

---

### Utils

建立共用工具函式。

```ts
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
```

---

### Import Multiple Modules

```ts
import { add, subtract, multiply } from './utils/math.js';
import { capitalize } from './utils/string.js';
import { getUsers } from './services/api.js';
import { getPost } from './services/post.js';
```

---

### Practice

- 建立 math Module
- 建立 string Module
- 建立 api Module
- 建立 post Module
- 建立 User Model
- 練習 Named Export
- 練習 Import
- 練習 Alias
- 練習跨資料夾 Import

---

## 🎯 學習成果

- 理解 Module 的用途
- 熟悉 export 與 import
- 能建立共用 Utility Module
- 能建立共用 Service Module
- 理解大型專案資料夾結構
- 為 React 專案做好準備

---

# 🇺🇸 English

## 📚 Topics

Day75 focused on TypeScript Modules and project organization.

### Covered Topics

- Why Modules are important
- Named Export
- Multiple Exports
- Import
- Import Alias (`as`)
- Project Folder Structure
- Services
- Utilities
- Models

---

### Named Export

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

Import:

```ts
import { add } from './utils/math.js';
```

---

### Folder Structure

```text
src
│
├── services
├── utils
├── models
└── script.ts
```

---

### Practice

- Build reusable math utilities
- Create string helper functions
- Create API services
- Organize project folders
- Import multiple modules
- Use aliases
- Share interfaces across files

---

## 🎯 Learning Outcome

- Understand the Module system
- Write reusable functions
- Organize a TypeScript project
- Use Named Export and Import
- Prepare for React project architecture

---

# 🇯🇵 日本語

## 📚 学習内容

Day75では TypeScript の Module（モジュール）について学習しました。

### 学習項目

- Module の必要性
- export
- import
- Named Export
- Multiple Export
- Alias（as）
- Services
- Utils
- Models
- プロジェクト構成

---

### Named Export

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

読み込み：

```ts
import { add } from './utils/math.js';
```

---

### フォルダ構成

```text
src
│
├── services
├── utils
├── models
└── script.ts
```

---

### 練習内容

- math Module の作成
- string Utility の作成
- API Service の作成
- User Model の作成
- Named Export の利用
- Import の利用
- Module の分割
- フォルダ構成の整理

---

## 🎯 学習成果

- Module の基本を理解した
- export / import を使えるようになった
- 共通 Utility を作成できる
- Service Module を作成できる
- TypeScript プロジェクトを整理できる
- React 開発の基礎を身につけた
