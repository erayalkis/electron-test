document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelector(".nav-btns").children;
  const timer = document.querySelector(".app-timer");
  const timerButton = document.querySelector(".app-btn");

  const min = buttons[0];
  const max = buttons[1];
  const close = buttons[2];

  min.addEventListener("click", () => {
    window.nav.minimize();
  });

  max.addEventListener("click", () => {
    window.nav.maximize();
  });

  close.addEventListener("click", () => {
    window.nav.close();
  });

  timerButton.addEventListener("click", () => {
    if (timerButton.textContent === "Start") {
      timer.classList.remove("paused");

      timerButton.textContent = "Stop";
      startTimer();
    } else {
      timerButton.textContent = "Start";
      stopTimer();
    }
  });

  function startTimer() {
    timer.textContent = "20:00";
  }

  function stopTimer() {
    timer.classList.add("paused");
  }
});
