document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelector(".nav-btns").children;

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
});
