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

// const elItems = document.querySelectorAll(".toDoList .item");

// elItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("finished");
//   });
// });

const elTask = document.forms.task;
const elToList = document.querySelector(".toDoList");

const tasks = [];

const render = () => {
  elToList.innerHTML = "";
  tasks.forEach((task) => {
    elToList.innerHTML += `
          <li class="toDoList__item item">

              <h3 class="item__title">${task.title}</h3>
              <p class="item__text">${task.text}</p>
              <div class="item__info info">
                  <span class="info__date">${task.date}</span>
                  <span class="info__name">${task.partner}</span>
              </div>

          </li>
          `;
  });
};

if (localStorage.getItem("tasks")) {
  let prsTasks = localStorage.getItem("tasks");
  prsTasks = JSON.parse(prsTasks);
  prsTasks.forEach((item) => {
    tasks.push(item);
  });
  render();
}

elTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = {};
  for (let k of elTask) {
    if (k.getAttribute("name")) {
      task[k.getAttribute("name")] = k.value;
    }
  }
  tasks.push(task);
  elTask.reset();
  render();
  elModal.classList.remove("active");
  let strTasks = JSON.stringify(tasks);
  localStorage.setItem("tasks", strTasks);
});
