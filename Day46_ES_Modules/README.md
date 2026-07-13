# Day46 - ES Modules

## 📚 中文

### 今日學習內容

- ES Modules 概念
- export
- import
- Named Export
- Default Export
- Named Import
- Default Import
- Import Alias (`as`)
- Namespace Import (`* as`)
- 模組拆分與管理

### 學習重點

#### 1. Named Export

使用 `export { ... }` 匯出多個函式或變數。

```javascript
export { add, subtract, multiply };
```

匯入：

```javascript
import { add, subtract } from './math.js';
```

---

#### 2. Default Export

一個檔案只有一個主要內容時使用。

```javascript
export default user;
```

匯入：

```javascript
import user from './user.js';
```

---

#### 3. Import Alias

避免名稱衝突。

```javascript
import { add as sum } from './math.js';
```

---

#### 4. Namespace Import

一次匯入所有 Named Export。

```javascript
import * as MathUtils from './math.js';

MathUtils.add(10, 20);
MathUtils.subtract(20, 5);
```

---

### 今日成果

✅ 建立多個 JavaScript Modules

✅ 使用 Named Export

✅ 使用 Default Export

✅ 使用 Alias (`as`)

✅ 使用 Namespace Import (`* as`)

✅ 熟悉 ES Modules 專案結構

---

## 📖 English

### Topics Learned

- ES Modules
- export
- import
- Named Export
- Default Export
- Named Import
- Default Import
- Import Alias
- Namespace Import
- Module Organization

### Key Concepts

#### Named Export

```javascript
export { add, subtract };
```

```javascript
import { add } from './math.js';
```

---

#### Default Export

```javascript
export default user;
```

```javascript
import user from './user.js';
```

---

#### Import Alias

```javascript
import { add as sum } from './math.js';
```

---

#### Namespace Import

```javascript
import * as MathUtils from './math.js';

MathUtils.add(10, 20);
```

---

### Achievement

- Built multiple JavaScript modules
- Learned Named Export
- Learned Default Export
- Used Import Alias
- Used Namespace Import
- Organized project structure with ES Modules

---

## 📕 日本語

### 今日学んだこと

- ES Modules
- export
- import
- Named Export
- Default Export
- Named Import
- Default Import
- Import Alias（`as`）
- Namespace Import（`* as`）
- モジュール分割

### 学習内容

#### Named Export

```javascript
export { add, subtract };
```

```javascript
import { add } from './math.js';
```

---

#### Default Export

```javascript
export default user;
```

```javascript
import user from './user.js';
```

---

#### Import Alias

```javascript
import { add as sum } from './math.js';
```

---

#### Namespace Import

```javascript
import * as MathUtils from './math.js';

MathUtils.add(10, 20);
```

---

### 今日の成果

- ES Modules を理解した
- Named Export を学習した
- Default Export を学習した
- Import Alias を使用した
- Namespace Import を使用した
- モジュール構成を理解した
