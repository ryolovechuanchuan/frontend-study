const display = document.getElementById("display");
const timer = document.getElementById("timer");
const count = document.getElementById("count");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let minute = 25;
let second = 0;

let isWorking = true;

let pomodoroCount = 0;

let interval;

function renderTime() {
  const displayMinute = String(minute).padStart(2, "0");

  const displaySecond = String(second).padStart(2, "0");

  timer.innerText =`${displayMinute}:${displaySecond}`;

  count.innerText =`完成番茄鐘：${pomodoroCount} / 4`;
}

function startTimer() {
  clearInterval(interval);

  interval = setInterval(() => {
    if (second === 0) {
      if (minute === 0) {
        switchMode();
        return;
      }
      minute--;
      second = 59;
    } else {
      second--;
    }
    renderTime();
  }, 1000);
}

function switchMode() {
  clearInterval(interval);
  if (isWorking) {
    pomodoroCount++;
    isWorking = false;
    if (pomodoroCount === 4) {
      minute = 20;
      second = 0;
      display.innerText = "長休息時間";
    } else {
      minute = 5;
      second = 0;
      display.innerText = "短休息時間";
    }
  } else {
    isWorking = true;
    minute = 25;
    second = 0;
    display.innerText = "工作時間";
    if (pomodoroCount === 4) {
      pomodoroCount = 0;
    }
  }
  renderTime();
  startTimer();
}

startBtn.addEventListener("click",startTimer);

pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);

  minute = 25;
  second = 0;
  isWorking = true;
  pomodoroCount = 0;

  display.innerText = "工作時間";

  renderTime();
});
