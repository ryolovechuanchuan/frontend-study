# Day 93 - React Props Practice

## 中文

### 今日主題

Day 93 主要練習 React + TypeScript 中的 Props，以及父元件與子元件之間的資料與函式傳遞。

### 今日學習內容

#### 1. 基本 Props

使用 `interface` 定義 Component 接收的 Props 型別。

```tsx
interface ProfileProps {
  name: string;
  age: number;
  isActive: boolean;
}

export default function Profile({ name, age, isActive }: ProfileProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```
