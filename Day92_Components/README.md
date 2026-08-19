# Day92 - React Components

## 中文

### 📌 今日學習主題

Day92 主要練習 React + TypeScript 的 Component 設計，將畫面與功能拆分成可重複使用的元件，並學習 Props、State、Callback Props、children 與 Component Composition。

---

### 🎯 學習目標

- 建立 React Function Component
- Component 的 import / export
- 使用 Props 傳遞資料
- 使用 TypeScript 定義 Props 型別
- Props Destructuring（Props 解構）
- Component 內使用 `useState`
- 建立可重複使用的 Component
- Function Props / Callback Props
- 帶參數的 Callback Function
- 使用 `children`
- 使用 `ReactNode`
- Component Composition

---

### 🧩 Component 結構

```text
Home
│
├── Header
│
├── Card
│   └── UserProfile
│       ├── Props
│       └── State
│
└── Card
    └── Counter
        ├── State
        ├── ActionButton
        │   └── () => void
        │
        └── ChangeButton
            └── (amount: number) => void
```
