document.addEventListener("DOMContentLoaded", () => {
  let date = null;

  const buttons = document.querySelector(".nav-btns").children;
  const timer = document.querySelector(".app-timer");
  const timerButton = document.querySelector(".app-btn");
  const timerInputsContainer = document.querySelector(".timer-selectors");
  const timerInputs = timerInputsContainer.children;

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
    timer.textContent = "";

    if (!date) {
      date = new Date();
      date.setHours(0);
      date.setMinutes(timerInputs[0].value);
      date.setSeconds(timerInputs[1].value);

      let timerInterval = setInterval(() => {
        if (isTimerDone(date)) {
          timerInputsContainer.classList.remove("hidden");
          timerButton.textContent = "Start";
          timer.textContent = "";
          clearInterval(timerInterval);
          date = null;

          createNotif(`Time's up! Time for a break!`);
          return;
        }

        if (!isTimerPaused() && !isTimerDone(date)) {
          tickTimer(date);
        }
      }, 1000);
    }

    if (timerInputs[0].value == 00 && timerInputs[1].value == 0) {
      timer.textContent = "Please choose a valid time.";
      return;
    }

    if (timerButton.textContent === "Start") {
      timer.classList.remove("paused");
      timerButton.textContent = "Stop";
    } else {
      timer.classList.add("paused");
      timerButton.textContent = "Start";
    }

    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    timerInputsContainer.classList.add("hidden");
  });

  function isTimerPaused() {
    return timerButton.textContent == "Start";
  }

  function isTimerDone(date) {
    return (
      date.getHours() == 0 && date.getMinutes() == 0 && date.getSeconds() == 0
    );
  }

  function tickTimer(date) {
    date.setSeconds(date.getSeconds() - 1);
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  function createNotif(text) {
    new Notification("Pomodoro", { body: text });
  }
});
