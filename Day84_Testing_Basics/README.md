# Day84_Testing_Basics

## 🇹🇼 中文

### 📚 今日重點

Day84 學習 TypeScript 的 Testing 基礎，以及如何使用 Vitest 建立 Unit Test（單元測試）。

Testing 的核心：

```text
執行程式
↓
取得實際結果 Actual
↓
與預期結果 Expected 比較
↓
PASS / FAIL
```

### 1. AAA Pattern

Unit Test 常見思考流程：

```text
Arrange → 準備測試資料
Act     → 執行要測試的程式
Assert  → 確認結果
```

```ts
const price = 100;
const quantity = 3;

const result = calculateTotal(price, quantity);

expect(result).toBe(300);
```

### 2. Vitest

安裝：

```bash
npm install -D vitest
```

基本使用：

```ts
import { describe, expect, test } from 'vitest';
```

### 3. test()

`test()` 代表一個 Test Case。

```ts
test('2 should be even', () => {
  expect(isEven(2)).toBe(true);
});
```

### 4. expect() + Matcher

基本格式：

```ts
expect(實際結果).Matcher(預期結果);
```

例如：

```ts
expect(isEven(2)).toBe(true);
```

### 5. 常用 Matcher

```text
toBe()
→ number / string / boolean

toEqual()
→ Object / Array

toBeUndefined()
→ undefined

toBeNull()
→ null

toContain()
→ Array / String 包含某個值

toThrow()
→ 是否拋出 Error
```

### 6. Object Test

```ts
test('user should be found', () => {
  expect(getUser(1)).toEqual({
    id: 1,
    name: 'John',
  });
});
```

### 7. undefined Test

`find()` 找不到資料會回傳 `undefined`。

```ts
test('user should be undefined', () => {
  expect(getUser(999)).toBeUndefined();
});
```

### 8. Error Test

```ts
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
}
```

測試 Error：

```ts
test('divide by zero should throw', () => {
  expect(() => divide(20, 0)).toThrow();
});
```

注意：

```ts
expect(() => divide(20, 0)).toThrow();
```

而不是：

```ts
expect(divide(20, 0)).toThrow();
```

### 9. describe()

將相關 Tests 分組：

```ts
describe('isEven', () => {
  test('2 is even', () => {
    expect(isEven(2)).toBe(true);
  });

  test('3 is not even', () => {
    expect(isEven(3)).toBe(false);
  });
});
```

### 10. Test Case 思考

不要只測正常資料，也要考慮：

```text
Normal Case   → 一般情況
Boundary Case → 邊界值
Edge Case     → 特殊情況
Error Case    → 錯誤情況
```

---

## 🇺🇸 English

### Key Points

Day84 focuses on Unit Testing with TypeScript and Vitest.

Testing compares the actual result with the expected result.

```text
Arrange → Prepare data
Act     → Execute code
Assert  → Verify result
```

Basic Vitest syntax:

```ts
test('2 should be even', () => {
  expect(isEven(2)).toBe(true);
});
```

Common Matchers:

```text
toBe()          → Primitive values
toEqual()       → Objects / Arrays
toBeUndefined() → undefined
toBeNull()      → null
toContain()     → Contains value
toThrow()       → Error
```

Tests should cover normal, boundary, edge, and error cases.

---

## 🇯🇵 日本語

### 今日のポイント

Day84ではTypeScriptとVitestを使ったUnit Test（単体テスト）の基礎を学習しました。

基本的な考え方：

```text
Arrange → テストデータを準備
Act     → 処理を実行
Assert  → 結果を確認
```

基本構文：

```ts
test('2 should be even', () => {
  expect(isEven(2)).toBe(true);
});
```

よく使うMatcher：

```text
toBe()          → 基本型
toEqual()       → Object / Array
toBeUndefined() → undefined
toBeNull()      → null
toContain()     → 値を含むか確認
toThrow()       → Errorを確認
```

正常なケースだけではなく、境界値やエラーケースもテストすることが重要です。

---

## Day84 Summary

```text
Unit Test
↓
Arrange / Act / Assert
↓
test()
↓
expect()
↓
Matcher
↓
PASS / FAIL
```

**Testing helps detect bugs automatically and prevents existing functionality from breaking after code changes.**

**テストによってバグを自動的に検出し、コード変更による既存機能の破壊を防ぐことができます。**

**測試可以自動發現錯誤，並降低修改程式後破壞既有功能的風險。**
