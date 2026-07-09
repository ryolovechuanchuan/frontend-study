const btns = document.getElementById('btns');
const deleteBtn = document.getElementById('deleteBtn');
const allclearBtn = document.getElementById('allclearBtn');
const display = document.getElementById('display');

const operators = ['+', '-', '*', '/'];

const STATE = {
  INPUT: 'input',
  RESULT: 'result',
  ERROR: 'error',
};

let state = STATE.INPUT;

let lastOperator = '';
let lastNumber = '';

function isOperator(value) {
  return operators.includes(value);
}

// 刪除一個字
deleteBtn.addEventListener('click', function () {
  // 如果目前是 Error，按 DEL 直接回到 0
  if (state === STATE.ERROR || display.innerText === 'Error') {
    display.innerText = '0';
    state = STATE.INPUT;
    return;
  }

  // 如果長度大於 1，就刪掉最後一個字
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);

    if (display.innerHTML === '-') //如果刪到最後一個是負數 - 變成 0
    {
      display.innerText = '0';
    }
    state = STATE.INPUT;
    return;
  }

  // 如果只剩一個字，回到 0
  display.innerText = '0';
  state = STATE.INPUT;
});

// 全部清除
allclearBtn.addEventListener('click', function () {
  display.innerText = '0';
  state = STATE.INPUT;
  lastOperator = '';
  lastNumber = '';
});

btns.addEventListener('click', function (event) {
  const value = event.target.innerText;
  const lastChar = display.innerText[display.innerText.length - 1];

  /* ---------------------------------- */
  /* 1. ERROR 狀態 */
  /* ---------------------------------- */
  if (state === STATE.ERROR || display.innerText === 'Error') {
    // Error 狀態下，按運算子或 = 不做事
    if (isOperator(value) || value === '=') {
      return;
    }

    // Error 狀態下，按數字就重新開始
    display.innerText = value;
    state = STATE.INPUT;
    return;
  }

  if (value === '.') {
    const expression = display.innerText; //12.3+4
    const operator = operators.find((op) => expression.includes(op)); //12.3+4  有+-*/  回傳true
    let currentNumber;
    if (operator) // true
    {
      const operatorIndex = expression.indexOf(operator); //index = 4
      currentNumber = expression.slice(operatorIndex + 1); //current = 4
    } else {
      currentNumber = expression; //如果 experssion 沒有+-*/  12.34
    }
    if (currentNumber.includes('.')) // 12.34 不能再加點了
    {
      return;
    }
    display.innerText += '.'; //12.3+4  變成 12.3+4.
    state = STATE.INPUT;
    return;
  }

  /* ---------------------------------- */
  /* 2. RESULT 狀態 */
  /* ---------------------------------- */
  if (state === STATE.RESULT) {
    // 7 + 8 = 15
    // 再按 =，變成 15 + 8 = 23
    if (value === '=') {
      display.innerText = eval(display.innerText + lastOperator + lastNumber);
      return;
    }

    // 15 之後按 +，變成 15+
    if (isOperator(value)) {
      display.innerText += value;
      state = STATE.INPUT;
      return;
    }

    // 15 之後按數字，開始新的計算
    display.innerText = value;
    state = STATE.INPUT;
    return;
  }

  /* ---------------------------------- */
  /* 3. 一般按 = */
  /* ---------------------------------- */
  if (value === '=') {
    const expression = display.innerText;
    const operator = operators.find(function (op) {
      return expression.includes(op);
    });

    // 只有 123，沒有運算子，不計算
    if (!operator) {
      return;
    }

    // 123+，最後一個是運算子，不計算
    if (isOperator(lastChar)) {
      return;
    }

    const operatorIndex = expression.indexOf(operator);

    // 記住最後一次運算
    lastOperator = operator;
    lastNumber = expression.slice(operatorIndex + 1);

    try {
      display.innerText = eval(expression);
      state = STATE.RESULT;
    } catch {
      display.innerText = 'Error';
      state = STATE.ERROR;
    }

    return;
  }

  /* ---------------------------------- */
  /* 4. INPUT 狀態 */
  /* ---------------------------------- */

  // 0 開頭不能直接輸入 + - * /
  if (display.innerText === '0' && isOperator(value)) {
    return;
  }

  // 防止連續運算子，例如 7++
  if (isOperator(lastChar) && isOperator(value)) {
    return;
  }

  // 如果目前是 0，按數字就替換成該數字
  if (display.innerText === '0') {
    display.innerText = value;
    state = STATE.INPUT;
    return;
  }

  // 一般情況：接在後面
  display.innerText += value;
  state = STATE.INPUT;
});
