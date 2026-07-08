const btns = document.getElementById("btns");
const deleteBtn = document.getElementById("deleteBtn");
const allclearBtn = document.getElementById("allclearBtn");
const display = document.getElementById("display");

const operators = ["+", "-", "*", "/"];

const state = {
  INPUT: "input",
  RESULT: "result",
  ERROR: "error",
};

function isOperator(value) {
  return operators.includes(value);
}

deleteBtn.addEventListener("click", function () {
  if (display.innerText === "Error") {
    display.innerText = "0";
    return;
  } else if (display.innerText.length >= 2) {
    display.innerText = display.innerText.slice(0, -1);
    return;
  }
  display.innerText = "0";
});

allclearBtn.addEventListener("click", function () {
  display.innerText = "0";
});

btns.addEventListener("click", function (event) {
  const value = event.target.innerText;
  const lastChar = display.innerText[display.innerText.length - 1];

  if (display.innerText === "Error") {
    if (isOperator(value) || value === "=") {
      display.innerText = "0";
      return;
    }

    display.innerText = value;
    return;
  }

  if (value === "=" && !isOperator(lastChar)) {
    try {
      display.innerText = eval(display.innerText);
    } catch {
      display.innerText = "Error";
    }

    return;
  }

  if (display.innerText === "0" && isOperator(value)) {
    return;
  }

  if (isOperator(lastChar) && isOperator(value)) {
    return;
  }

  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
});
