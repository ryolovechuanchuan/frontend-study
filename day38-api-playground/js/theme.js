// setupTheme 接收深色模式按鈕 themeBtn
export function setupTheme(themeBtn) {
  // 監聽按鈕點擊事件
  themeBtn.addEventListener("click", function () {
    // toggle 會切換 body 的 dark class
    // 如果沒有 dark 就加上，有 dark 就移除
    document.body.classList.toggle("dark");

    // 判斷 body 是否包含 dark class
    if (document.body.classList.contains("dark")) {
      // 如果是深色模式，按鈕改成太陽，表示可以切回亮色模式
      themeBtn.innerText = "☀️";
    } else {
      // 如果不是深色模式，按鈕改成月亮，表示可以切到深色模式
      themeBtn.innerText = "🌙";
    }
  });
}
