const elAppBtns = document.querySelectorAll(".app__btn");

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

const elAppPlusBtn = document.querySelector(".app__plus-btn");
const elModalCloseBtn = document.querySelector(".form__close-btn");
const elModal = document.querySelector(".modal");

elAppPlusBtn.addEventListener("click", () => {
  elModal.classList.add("active");
});
elModalCloseBtn.addEventListener("click", () => {
  elModal.classList.remove("active");
});

const elItems = document.querySelectorAll(".item");

elItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("finished");
  });
});

