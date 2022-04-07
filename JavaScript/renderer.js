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
    let date = new Date();
    date.setMinutes(20);
    date.setSeconds(0);
    timer.textContent = `${date.getMinutes()}:${date.getSeconds()}`;

    if (timerButton.textContent === "Start") {
      timer.classList.remove("paused");
      timerButton.textContent = "Stop";
    } else {
      timer.classList.add("paused");
      timerButton.textContent = "Start";
    }

    timerRunning = true;
    setInterval(() => {
      if (!isTimerPaused()) tickTimer(date);
    }, 1000);
  });

  function isTimerPaused() {
    timer.textContent === "Start";
  }

  function tickTimer(date) {
    date.setSeconds(date.getSeconds() - 1);

    console.log(`${date.getMinutes()}:${date.getSeconds()}`);

    timer.textContent = `${date.getMinutes()}:${date.getSeconds()}`;
  }
});
