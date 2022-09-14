let elAppBtns = document.querySelectorAll(".app__btn");

elAppBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    elAppBtns.forEach((r) => {
      r.classList.remove("active");
    });
    if (!btn.classList.contains("active")) {
      btn.classList.add("active");
    }
  });
});
