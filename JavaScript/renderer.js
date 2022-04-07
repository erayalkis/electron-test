document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelector(".nav-btns").children;
  const span = document.querySelector("#node-version");

  const min = buttons[0];
  const max = buttons[1];
  const close = buttons[2];

  console.log(buttons);

  min.addEventListener("click", () => {
    console.log("Min!");

    window.nav.minimize();
  });

  max.addEventListener("click", () => {
    console.log("Max!");

    window.nav.maximize();
  });

  close.addEventListener("click", () => {
    console.log("Close!");

    window.nav.close();
  });

  span.textContent = "hi!";
});
