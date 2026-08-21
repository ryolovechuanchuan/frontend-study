# Day 95 - React Events

## 📚 Overview / 學習概要 / 学習概要

Day 95 focuses on React Event Handling with TypeScript.

This practice covers mouse events, input events, form events, keyboard events, focus events, checkbox events, select events, textarea events, event objects, and combining Events with React State.

Day 95 主要學習 React 搭配 TypeScript 的事件處理，包括滑鼠事件、輸入事件、表單事件、鍵盤事件、Focus Event、Checkbox、Select、Textarea，以及 Event 與 State 的整合。

Day 95では、ReactとTypeScriptを使用したイベント処理について学習しました。マウスイベント、入力イベント、フォームイベント、キーボードイベント、Focus Event、Checkbox、Select、Textarea、EventとStateの連携について練習しました。

---

# 🇹🇼 中文

## 🎯 今日學習目標

- 理解 React Event Handling
- 使用 `onClick`
- 使用 Event Handler Function
- Event Handler 傳遞參數
- 理解 Event Object
- 理解 `target` 與 `currentTarget`
- 使用 `onChange`
- 使用 `onSubmit`
- 使用 `preventDefault()`
- 使用 `onKeyDown`
- 使用 `onMouseEnter` / `onMouseLeave`
- 使用 `onFocus` / `onBlur`
- 使用 `onDoubleClick`
- 處理 Checkbox
- 處理 Select
- 處理 Textarea
- Event 搭配 React State
- 基本表單驗證
- 理解 TypeScript React Event 型別

---

## 1. Click Event

最基本的 Click Event：

```tsx
<button onClick={() => console.log('Clicked')}>Click Me</button>
```

也可以將事件邏輯抽成 Function：

```tsx
function handleClick() {
  console.log('Clicked');
}

<button onClick={handleClick}>Click</button>;
```

---

## 2. Event Handler 傳遞參數

如果 Event Handler 需要自己傳入參數，可以使用箭頭函式：

```tsx
function handleClick(name: string) {
  console.log(name);
}

<button onClick={() => handleClick('John')}>Click</button>;
```

如果沒有額外參數：

```tsx
onClick = { handleClick };
```

如果需要額外參數：

```tsx
onClick={() => handleClick('John')}
```

---

## 3. Mouse Event

TypeScript 中，Button 的 Mouse Event 可以寫成：

```tsx
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e);
}
```

React 會自動將 Event Object 傳入 Event Handler。

```tsx
<button onClick={handleClick}>Click</button>
```

---

## 4. target vs currentTarget

```tsx
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log('target:', e.target);
  console.log('currentTarget:', e.currentTarget);
}
```

差異：

```text
target
→ 實際觸發事件的元素

currentTarget
→ Event Handler 綁定的元素
```

例如：

```tsx
<button onClick={handleClick}>
  <span>Click</span>
</button>
```

如果點擊 `<span>`：

```text
target
→ span

currentTarget
→ button
```

---

## 5. currentTarget

可以從 `currentTarget` 取得目前綁定 Event Handler 的元素。

```tsx
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e.currentTarget);
  console.log(e.currentTarget.textContent);
}
```

---

## 6. Change Event

文字 Input：

```tsx
const [name, setName] = useState<string>('');

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setName(e.target.value);
}
```

JSX：

```tsx
<input type="text" value={name} onChange={handleChange} />
```

資料流程：

```text
使用者輸入
↓
onChange
↓
handleChange(e)
↓
e.target.value
↓
setName()
↓
State 更新
↓
重新 Render
```

---

## 7. Event + 自訂參數

Event 與自己的參數可以同時傳入：

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>, label: string) {
  console.log(label);
  setName(e.target.value);
}
```

JSX：

```tsx
<input value={name} onChange={(e) => handleChange(e, 'username')} />
```

其中：

```text
e
→ React 自動提供

'username'
→ 自己傳入
```

---

## 8. Form Submit Event

表單送出事件應該綁定在 `<form>`：

```tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  console.log('Submit');
}
```

JSX：

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" />

  <button type="submit">Submit</button>
</form>
```

---

## 9. preventDefault()

```tsx
e.preventDefault();
```

可以阻止瀏覽器預設的 Form Submit 行為。

React SPA 中通常會自行處理資料：

```text
Submit
↓
onSubmit
↓
handleSubmit
↓
preventDefault()
↓
執行 React / API 邏輯
```

---

## 10. Keyboard Event

```tsx
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  console.log(e.key);
}
```

JSX：

```tsx
<input type="text" onKeyDown={handleKeyDown} />
```

可以取得使用者按下的鍵：

```text
Enter
Escape
Backspace
a
b
c
...
```

---

## 11. 判斷 Enter

```tsx
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
  }
}
```

也可以直接取得 Input 的 Value：

```tsx
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key === 'Enter') {
    console.log(e.currentTarget.value);
  }
}
```

---

## 12. Mouse Enter / Mouse Leave

```tsx
function handleMouseEnter() {
  console.log('Mouse Enter');
}

function handleMouseLeave() {
  console.log('Mouse Leave');
}
```

JSX：

```tsx
<button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  Hover Me
</button>
```

---

## 13. Focus / Blur Event

```tsx
function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  console.log(e.currentTarget.value);
}
```

Blur：

```tsx
function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
  if (e.currentTarget.value.trim() === '') {
    console.log('請輸入內容');
  }
}
```

JSX：

```tsx
<input type="text" onFocus={handleFocus} onBlur={handleBlur} />
```

用途：

```text
onFocus
→ 使用者進入 Input

onBlur
→ 使用者離開 Input
→ 常用於驗證
```

---

## 14. Double Click

```tsx
function handleDoubleClick() {
  console.log('Double Click');
}
```

JSX：

```tsx
<button onDoubleClick={handleDoubleClick}>Double Click Me</button>
```

---

## 15. Event + State

Event 可以直接改變 React State：

```tsx
const [message, setMessage] = useState<string>('');

function handleClick() {
  setMessage('Click');
}

function handleDoubleClick() {
  setMessage('Double Click');
}
```

JSX：

```tsx
<button onClick={handleClick}>
  Click
</button>

<button onDoubleClick={handleDoubleClick}>
  Double Click
</button>

<p>{message}</p>
```

---

## 16. Checkbox Event

Checkbox 不使用：

```tsx
e.target.value;
```

而是：

```tsx
e.target.checked;
```

例如：

```tsx
const [isChecked, setIsChecked] = useState<boolean>(false);

function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
  setIsChecked(e.target.checked);
}
```

JSX：

```tsx
<input
  type="checkbox"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>

<p>
  {isChecked ? 'Checked' : 'Not Checked'}
</p>
```

---

## 17. Select Event

```tsx
const [country, setCountry] = useState<string>('');

function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
  setCountry(e.target.value);
}
```

JSX：

```tsx
<select value={country} onChange={handleCountryChange}>
  <option value="">Select Country</option>
  <option value="Taiwan">Taiwan</option>
  <option value="Japan">Japan</option>
  <option value="USA">USA</option>
</select>
```

---

## 18. Textarea Event

```tsx
const [description, setDescription] = useState<string>('');

function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  setDescription(e.target.value);
}
```

JSX：

```tsx
<textarea value={description} onChange={handleDescriptionChange} />
```

---

## 19. 基本表單驗證

`onChange` 可以進行即時驗證，但應該先更新 State，再驗證。

```tsx
function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;

  setName(value);

  if (value.trim() === '') {
    setNameError('請輸入姓名');
    return;
  }

  setNameError('');
}
```

重要觀念：

```text
onChange
↓
取得 value
↓
更新 State
↓
驗證 value
↓
設定 Error
```

不要在更新 State 前直接 `return`，否則可能造成 Controlled Input 無法正常清空。

---

## 20. React Event Type 對照

```text
Button Click
→ React.MouseEvent<HTMLButtonElement>

Input Change
→ React.ChangeEvent<HTMLInputElement>

Select Change
→ React.ChangeEvent<HTMLSelectElement>

Textarea Change
→ React.ChangeEvent<HTMLTextAreaElement>

Form Submit
→ React.FormEvent<HTMLFormElement>

Keyboard
→ React.KeyboardEvent<HTMLInputElement>

Focus / Blur
→ React.FocusEvent<HTMLInputElement>
```

---

## 💡 中文重點整理

```text
onClick
→ 點擊事件

onChange
→ 輸入內容改變

onSubmit
→ Form 送出

onKeyDown
→ 鍵盤事件

onFocus
→ 進入欄位

onBlur
→ 離開欄位

onMouseEnter
→ 滑鼠進入

onMouseLeave
→ 滑鼠離開

onDoubleClick
→ 雙擊

e.target.value
→ 取得輸入值

e.target.checked
→ 取得 Checkbox 狀態

e.currentTarget
→ Event Handler 綁定的元素

e.preventDefault()
→ 阻止瀏覽器預設行為
```

---

# 🇺🇸 English

## 🎯 Learning Goals

- Understand React event handling
- Handle click events
- Create event handler functions
- Pass custom arguments to event handlers
- Understand the Event Object
- Understand `target` and `currentTarget`
- Handle input changes
- Handle form submissions
- Use `preventDefault()`
- Handle keyboard events
- Handle focus and blur events
- Handle mouse enter and leave events
- Handle double-click events
- Handle checkboxes
- Handle select elements
- Handle textareas
- Combine Events with React State
- Perform basic form validation
- Understand React Event types in TypeScript

---

## Click Event

```tsx
function handleClick() {
  console.log('Clicked');
}

<button onClick={handleClick}>Click</button>;
```

When custom arguments are required:

```tsx
function handleClick(name: string) {
  console.log(name);
}

<button onClick={() => handleClick('John')}>Click</button>;
```

---

## Mouse Event

```tsx
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e.currentTarget);
}
```

`target` represents the element that originally triggered the event.

`currentTarget` represents the element where the event handler is attached.

---

## Input Change Event

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setName(e.target.value);
}
```

```tsx
<input value={name} onChange={handleChange} />
```

---

## Form Event

```tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  console.log('Submit');
}
```

```tsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

`preventDefault()` prevents the browser's default form submission behavior.

---

## Keyboard Event

```tsx
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key === 'Enter') {
    console.log(e.currentTarget.value);
  }
}
```

---

## Focus Event

```tsx
function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  console.log(e.currentTarget.value);
}
```

Blur can be used for validation:

```tsx
function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
  if (e.currentTarget.value.trim() === '') {
    console.log('Please enter a value');
  }
}
```

---

## Checkbox

```tsx
function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
  setIsChecked(e.target.checked);
}
```

Remember:

```text
Text Input
→ e.target.value

Checkbox
→ e.target.checked
```

---

## Select

```tsx
function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
  setCountry(e.target.value);
}
```

---

## Textarea

```tsx
function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  setDescription(e.target.value);
}
```

---

## Real-time Validation

When validating during `onChange`, update the state before validating the value.

```tsx
function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;

  setName(value);

  if (value.trim() === '') {
    setNameError('Please enter your name');
    return;
  }

  setNameError('');
}
```

This prevents controlled inputs from becoming difficult to edit or clear.

---

## 💡 Key Takeaways

```text
Event Handler
→ Function executed when an event occurs

Event Object
→ Information about the event

target
→ Element that triggered the event

currentTarget
→ Element where the handler is attached

value
→ Input / Select / Textarea value

checked
→ Checkbox state

preventDefault()
→ Prevent default browser behavior

Event + State
→ User interaction updates React State
```

---

# 🇯🇵 日本語

## 🎯 今日の学習目標

- Reactのイベント処理を理解する
- `onClick`を使用する
- Event Handler Functionを作成する
- Event Handlerに引数を渡す
- Event Objectを理解する
- `target`と`currentTarget`の違いを理解する
- `onChange`を使用する
- `onSubmit`を使用する
- `preventDefault()`を使用する
- Keyboard Eventを処理する
- Focus / Blur Eventを処理する
- Mouse Enter / Leave Eventを処理する
- Double Click Eventを処理する
- Checkboxを処理する
- Selectを処理する
- Textareaを処理する
- EventとStateを連携する
- 基本的なフォームバリデーションを行う
- TypeScriptのReact Event型を理解する

---

## Click Event

```tsx
function handleClick() {
  console.log('Clicked');
}

<button onClick={handleClick}>Click</button>;
```

引数を渡す場合：

```tsx
function handleClick(name: string) {
  console.log(name);
}

<button onClick={() => handleClick('John')}>Click</button>;
```

---

## Mouse Event

```tsx
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e.currentTarget);
}
```

```text
target
→ 実際にイベントを発生させた要素

currentTarget
→ Event Handlerが設定されている要素
```

---

## Change Event

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setName(e.target.value);
}
```

```tsx
<input value={name} onChange={handleChange} />
```

---

## Form Event

```tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  console.log('Submit');
}
```

```tsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

`preventDefault()`を使用すると、ブラウザのデフォルトのフォーム送信処理を防ぐことができます。

---

## Keyboard Event

```tsx
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key === 'Enter') {
    console.log(e.currentTarget.value);
  }
}
```

---

## Focus / Blur Event

```tsx
function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  console.log(e.currentTarget.value);
}
```

Blurを利用して入力チェックを行うこともできます。

```tsx
function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
  if (e.currentTarget.value.trim() === '') {
    console.log('入力してください');
  }
}
```

---

## Mouse Enter / Leave

```tsx
function handleMouseEnter() {
  console.log('Mouse Enter');
}

function handleMouseLeave() {
  console.log('Mouse Leave');
}
```

```tsx
<button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  Hover Me
</button>
```

---

## Checkbox

Checkboxの場合は`value`ではなく`checked`を使用します。

```tsx
function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
  setIsChecked(e.target.checked);
}
```

```text
Text Input
→ e.target.value

Checkbox
→ e.target.checked
```

---

## Select

```tsx
function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
  setCountry(e.target.value);
}
```

---

## Textarea

```tsx
function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  setDescription(e.target.value);
}
```

---

## リアルタイムバリデーション

`onChange`でリアルタイムバリデーションを行う場合は、まずStateを更新してから入力値をチェックします。

```tsx
function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;

  setName(value);

  if (value.trim() === '') {
    setNameError('名前を入力してください');
    return;
  }

  setNameError('');
}
```

Stateを更新する前に`return`すると、Controlled Inputの編集や削除が正常にできなくなる可能性があるため注意が必要です。

---

## React Event Type 一覧

```text
Button Click
→ React.MouseEvent<HTMLButtonElement>

Input Change
→ React.ChangeEvent<HTMLInputElement>

Select Change
→ React.ChangeEvent<HTMLSelectElement>

Textarea Change
→ React.ChangeEvent<HTMLTextAreaElement>

Form Submit
→ React.FormEvent<HTMLFormElement>

Keyboard
→ React.KeyboardEvent<HTMLInputElement>

Focus / Blur
→ React.FocusEvent<HTMLInputElement>
```

---

## 💡 今日の重要ポイント

```text
onClick
→ クリック

onChange
→ 入力値の変更

onSubmit
→ フォーム送信

onKeyDown
→ キーボード入力

onFocus
→ フォーカス

onBlur
→ フォーカスが外れる

onMouseEnter
→ マウスが入る

onMouseLeave
→ マウスが離れる

onDoubleClick
→ ダブルクリック

e.target.value
→ 入力値

e.target.checked
→ Checkboxの状態

e.currentTarget
→ Handlerが設定されている要素

e.preventDefault()
→ ブラウザのデフォルト処理を防ぐ
```

---

# 🚀 Day 95 Summary

Today I learned how React handles user interactions through Events and how to combine Events with TypeScript and React State.

今天學習了 React 如何透過 Events 處理使用者操作，並將 Event、TypeScript 與 React State 結合。

今日はReactのEventsを使ってユーザー操作を処理し、TypeScriptとReact Stateを組み合わせる方法を学習しました。

## Core Pattern / 核心模式 / 重要なパターン

```tsx
// Click
onClick = { handleClick };

// Input
onChange = { handleChange };

// Form
onSubmit = { handleSubmit };

// Keyboard
onKeyDown = { handleKeyDown };

// Focus
onFocus = { handleFocus };

// Blur
onBlur = { handleBlur };

// Checkbox
e.target.checked;

// Input / Select / Textarea
e.target.value;

// Prevent default behavior
e.preventDefault();
```

## Event Flow

```text
User Action / 使用者操作 / ユーザー操作
                ↓
              Event
                ↓
          Event Handler
                ↓
          Read Event Data
                ↓
           Update State
                ↓
           React Render
```

**Day 95 Complete ✅**
