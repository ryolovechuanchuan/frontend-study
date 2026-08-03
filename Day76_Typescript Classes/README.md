# Day76 - TypeScript Classes

## 🇹🇼 中文

### 📖 專案介紹 (Project Introduction)

今天學習 TypeScript 的 Class（類別）與物件導向（Object-Oriented Programming, OOP）基礎。

本次練習包含 Class、Constructor、Method、Getter / Setter、Access Modifier（public / private）、readonly、Parameter Properties，以及 Inheritance（繼承）與 super() 的使用方式，了解如何建立可維護且容易擴充的程式架構。

---

### 🎯 學習目標 (Learning Objectives)

- 了解 Class 與 Object 的差異
- 學會使用 Constructor 初始化物件
- 理解 this 的用途
- 學會 Method 的設計方式
- 學習 public、private、readonly
- 學會 Getter / Setter
- 理解 Parameter Properties
- 學會使用 extends 建立繼承
- 理解 super() 的用途

---

### 📚 今日學習內容 (What I Learned)

#### ✅ Class

建立物件的設計圖。

```ts
class User {}
```

---

#### ✅ Constructor

初始化物件屬性。

```ts
constructor(
    public name: string,
    public age: number
) {}
```

---

#### ✅ Method

將功能封裝到 Class。

```ts
sayHello() {
    console.log(`Hello I'm ${this.name}`);
}
```

---

#### ✅ this

`this` 代表目前的物件。

```ts
this.name;
this.age;
```

今天也理解：

```
age
```

與

```
this.age
```

最大的不同。

---

#### ✅ Getter / Setter

Getter：

```ts
getAge() {
    return this.age;
}
```

Setter：

```ts
setAge(age:number){
    if(age < 0){
        console.log("Age cannot be negative");
        return;
    }

    this.age = age;
}
```

利用 Setter 可以在修改資料前加入驗證。

---

#### ✅ readonly

```ts
readonly id:number;
```

建立完成後不能再次修改。

---

#### ✅ Parameter Properties

TypeScript 可以直接在 Constructor 宣告屬性。

```ts
constructor(
    public name:string,
    private age:number
){}
```

減少重複程式碼。

---

#### ✅ Inheritance

利用 `extends` 繼承父類別。

```ts
class Employee extends Person {}
```

可以重複利用父類別的屬性與方法。

---

#### ✅ super()

```ts
super(name, age);
```

呼叫父類別 Constructor 初始化父類別屬性。

---

### 💻 本日完成 (Today's Practice)

✔ 建立 User Class

✔ 使用 Constructor 初始化資料

✔ 建立 Method

✔ Getter / Setter

✔ private / public

✔ readonly

✔ Parameter Properties

✔ Person → Employee Inheritance

✔ super()

---

### 🚀 今日收穫 (Summary)

今天正式開始學習 TypeScript 的物件導向程式設計（OOP）。

理解了 Class 與 Object 的差異，也學會使用 Constructor、Getter / Setter、readonly、Parameter Properties，以及 extends 與 super() 建立繼承架構。這些觀念是 React、ASP.NET MVC、Java、Spring Boot 等框架的重要基礎。

---

## 🇺🇸 English

### 📖 Project Introduction

Today I learned the fundamentals of Object-Oriented Programming (OOP) in TypeScript, including Classes, Constructors, Methods, Getter/Setter, Access Modifiers, Parameter Properties, Inheritance, and `super()`.

---

### 🎯 Learning Objectives

- Understand Classes and Objects
- Learn Constructors
- Understand `this`
- Learn Methods
- Learn Getter / Setter
- Learn Access Modifiers
- Learn Parameter Properties
- Learn Inheritance
- Learn `super()`

---

### 📚 What I Learned

- Class
- Constructor
- Method
- this
- Getter / Setter
- public / private
- readonly
- Parameter Properties
- Inheritance
- super()

---

### 💻 Today's Practice

- Built a User class
- Implemented Constructor
- Created Methods
- Used Getter / Setter
- Learned readonly
- Practiced Parameter Properties
- Built Person & Employee inheritance
- Used `super()`

---

### 🚀 Summary

Today I learned the fundamentals of TypeScript OOP and understood how Classes, Constructors, Encapsulation, and Inheritance work together to build maintainable applications.

---

## 🇯🇵 日本語

### 📖 プロジェクト紹介

今日は TypeScript のオブジェクト指向（OOP）の基礎を学びました。

Class、Constructor、Method、Getter / Setter、Access Modifier、Parameter Properties、Inheritance、super() を実装し、クラス設計の基本を理解しました。

---

### 🎯 学習目標

- Class と Object の違いを理解する
- Constructor を学ぶ
- this を理解する
- Method を作成する
- Getter / Setter を学ぶ
- public / private を理解する
- Parameter Properties を学ぶ
- 継承（Inheritance）を学ぶ
- super() を理解する

---

### 📚 学習内容

- Class
- Constructor
- Method
- this
- Getter / Setter
- public / private
- readonly
- Parameter Properties
- Inheritance
- super()

---

### 💻 本日の実装

- User クラス作成
- Constructor
- Method
- Getter / Setter
- readonly
- Parameter Properties
- Person / Employee の継承
- super()

---

### 🚀 今日のまとめ

今日は TypeScript のオブジェクト指向の基礎を学びました。Class、Constructor、Getter / Setter、継承（Inheritance）、super() を理解し、React や ASP.NET MVC、Java、Spring Boot を学ぶための土台を作ることができました。
