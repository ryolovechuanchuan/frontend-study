# Day77 - TypeScript OOP Practice

## 🇹🇼 中文

### 📖 專案介紹 (Project Introduction)

今天透過多個實作練習，加深 TypeScript 物件導向（OOP）的觀念，包含 Class、Constructor、Method、this、Inheritance，以及陣列操作。透過建立不同的類別（Animal、BankAccount、Employee、ShoppingCart），練習如何將資料與功能封裝在同一個 Class 中。

---

### 🎯 學習目標 (Learning Objectives)

- 熟悉 Class 的撰寫方式
- 熟悉 Constructor 的使用
- 理解 this 的真正用途
- 熟悉 Method 的設計
- 複習 Inheritance（extends）
- 複習 super()
- 練習陣列操作（push、forEach）
- 理解 Scope（作用域）
- 理解 return 的回傳範圍

---

### 📚 今日學習內容 (What I Learned)

#### ✅ Animal Class

建立第一個完整的 Class。

```ts
class Animal {
  constructor(
    public name: string,
    public age: number,
  ) {}

  introduce() {
    return `
My name is ${this.name}
I am ${this.age} years old.
`;
  }
}
```

學會：

- Constructor
- this
- Method

---

#### ✅ BankAccount

建立銀行帳戶。

```ts
class BankAccount {
  constructor(
    public owner: string,
    private balance: number,
  ) {}

  getBalance() {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}
```

學會：

- private
- Getter
- 修改物件狀態
- `this.balance += amount`

---

#### ✅ Employee Inheritance

利用繼承建立 Employee。

```ts
class Employee extends Person {
  constructor(
    name: string,
    age: number,
    public company: string,
    public salary: number,
  ) {
    super(name, age);
  }
}
```

學會：

- extends
- super()
- 繼承父類別屬性

---

#### ✅ ShoppingCart

建立購物車。

```ts
class ShoppingCart {
  constructor(public items: string[]) {}

  addItem(item: string) {
    this.items.push(item);
  }

  showItems() {
    let result = '';

    this.items.forEach((item, index) => {
      result += `${index + 1}. ${item}\n`;
    });

    return result;
  }
}
```

學會：

- string[]
- push()
- forEach()
- 字串累加
- return

---

### 💻 本日完成 (Today's Practice)

✔ Animal Class

✔ BankAccount

✔ Employee Inheritance

✔ ShoppingCart

✔ push()

✔ forEach()

✔ Scope

✔ return

---

### 🚀 今日收穫 (Summary)

今天透過大量實作，真正熟悉了 TypeScript Class 的基本架構，也理解了 Constructor、Method、this、Inheritance 與陣列操作。最大的收穫是理解了 **Scope（作用域）** 以及 **return 的回傳範圍**，知道 `forEach()` 裡面的 `return` 不會回傳整個 Method，也開始能獨立完成 OOP 練習。

---

## 🇺🇸 English

### 📖 Project Introduction

Today I practiced Object-Oriented Programming (OOP) in TypeScript by building several small projects, including Animal, BankAccount, Employee, and ShoppingCart. These exercises helped reinforce Class design, inheritance, and array manipulation.

---

### 🎯 Learning Objectives

- Practice writing Classes
- Understand Constructors
- Master the `this` keyword
- Practice creating Methods
- Review Inheritance (`extends`)
- Review `super()`
- Practice array operations (`push`, `forEach`)
- Understand Scope
- Understand how `return` works

---

### 📚 What I Learned

#### ✅ Animal Class

- Constructor
- Method
- `this`

#### ✅ BankAccount

- Getter
- private property
- Updating object state

#### ✅ Employee

- Inheritance
- `extends`
- `super()`

#### ✅ ShoppingCart

- `string[]`
- `push()`
- `forEach()`
- String concatenation
- `return`

---

### 💻 Today's Practice

- Animal Class
- BankAccount
- Employee Inheritance
- ShoppingCart
- Array operations
- Scope
- Return behavior

---

### 🚀 Summary

Today I became much more comfortable with TypeScript Classes by building several practical examples. I strengthened my understanding of Constructors, Methods, `this`, Inheritance, and array manipulation. I also learned the difference between returning from a callback function and returning from the outer method.

---

## 🇯🇵 日本語

### 📖 プロジェクト紹介

今日は TypeScript のオブジェクト指向（OOP）を実践形式で学習しました。Animal、BankAccount、Employee、ShoppingCart を作成し、Class の設計、継承、配列操作を練習しました。

---

### 🎯 学習目標

- Class の作成に慣れる
- Constructor を理解する
- `this` を理解する
- Method を作成する
- 継承（extends）を復習する
- `super()` を復習する
- 配列操作（push・forEach）を学ぶ
- Scope（スコープ）を理解する
- return の動作を理解する

---

### 📚 学習内容

#### ✅ Animal

- Constructor
- Method
- `this`

#### ✅ BankAccount

- Getter
- private
- オブジェクトの状態を更新する

#### ✅ Employee

- 継承（Inheritance）
- `extends`
- `super()`

#### ✅ ShoppingCart

- `string[]`
- `push()`
- `forEach()`
- 文字列の連結
- `return`

---

### 💻 本日の実装

- Animal Class
- BankAccount
- Employee
- ShoppingCart
- push()
- forEach()
- Scope
- return

---

### 🚀 今日のまとめ

今日は複数の実践問題を通して、TypeScript の Class をより深く理解することができました。Constructor、Method、`this`、継承（Inheritance）、配列操作に加えて、Scope（スコープ）と `return` の動作についても理解が深まりました。昨日よりも自分で Class を組み立てられるようになり、OOP の基礎が身についてきました。
