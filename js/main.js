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

const elTask = document.forms.task;
const elToList = document.querySelector(".toDoList");

const tasks = [];

const render = (array) => {
  elToList.innerHTML = "";
  array.forEach((task, i) => {
    elToList.innerHTML += `
          <li class="toDoList__item item ${task.status}" onclick="changeStatus(${i})">
              <h3 class="item__title">${task.title}</h3>
              <p class="item__text">${task.text}</p>
              <div class="item__info info">
                  <span class="info__date">${task.date}</span>
                  <span class="info__name">${task.partner}</span>
              </div>
            <span class="item__dell" onclick="del(${i})"></span>
          </li>
          `;
  });
};

const del = (i) => {
  tasks.splice(i, 1);
  render(tasks);
  let strTasks = JSON.stringify(tasks);
  localStorage.setItem("tasks", strTasks);
};

const changeStatus = (i) => {
  if (tasks[i].status === false) {
    tasks[i].status = true;
  } else if (tasks[i].status === true) {
    tasks[i].status = false;
  }

  let changedTasks = JSON.stringify(tasks);
  localStorage.setItem("tasks", changedTasks);
  render(tasks);
};

const filterDone = () => {
  let fltTasks = tasks.filter((fltrd) => {
    if (fltrd.status === true) {
      return fltrd;
    }
  });
  render(fltTasks);
};

const filterUndone = () => {
  let fltTasks = tasks.filter((fltrd) => {
    if (fltrd.status === false) {
      return fltrd;
    }
  });
  render(fltTasks);
};

if (localStorage.getItem("tasks")) {
  let prsTasks = localStorage.getItem("tasks");
  prsTasks = JSON.parse(prsTasks);
  prsTasks.forEach((item) => {
    tasks.push(item);
  });
  render(tasks);
}

const elFormAddBtn = document.querySelector(".form__add-btn");

const disable = () => {
  for (let g of elTask) {
    if (g.value == "") {
      elFormAddBtn.classList.add("disabled");
    }
  }

  setTimeout(() => {
    elFormAddBtn.classList.remove("disabled");
  }, 150);
};

elTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = {};
  for (let k of elTask) {
    if (k.getAttribute("name")) {
      task[k.getAttribute("name")] = k.value;
      task["status"] = false;
    }
  }

  if (task.title && task.text && task.date && task.partner) {
    tasks.push(task);
    elTask.reset();
    render(tasks);
    elModal.classList.remove("active");
    let strTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", strTasks);
  }
});
