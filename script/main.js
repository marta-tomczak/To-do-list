let tasks = [];
let isDoneTasksHidden = false;
const form = document.querySelector(".js-form");
const input = form.querySelector(".js-newTask");
const formButton = form.querySelector(".js-formButton");
const jsTasks = document.querySelector(".js-tasks");
const jsDivButton = document.querySelector(".js-divButton");
const jsDivButtonDoneAll = document.querySelector(".js-divButtonDoneAll");

const createTaskElement = (props, index) => {
  const element = document.createElement("div");

  element.innerHTML = `
    <li class="tasks__item">
        <button class="tasks__button ${
          props.done ? `tasks__button--done` : ""
        } js-task-type"></button>
        <p class="tasks__text">${props.text}</p>
        <button class="tasks__button tasks__button--delete js-task-delete">🗑️</button>
    </li>`;

  const li = element.children[0];
  const buttonType = li.querySelector(".js-task-type");
  const buttonDelete = li.querySelector(".js-task-delete");

  buttonDelete.addEventListener("click", () => {
    removeTask(index);
  });

  buttonType.addEventListener("click", () => {
    const isDone = tasks[index].done;
    console.log(isDone);
    tasks[index].done = !isDone;
    render();
  });
  return li;
};

const clearInput = () => {
  input.value = "";
};

const addTask = () => {
  const value = input.value.trim();

  if (!value) return;

  const task = {
    done: undefined,
    text: value,
  };

  tasks = [...tasks, task];

  clearInput();
  render();
};
const removeTask = (index) => {
  console.log(index);
  tasks = [...tasks.filter((task, i) => index != i)];
  render();
};
const completeAllTasks = () => {
  tasks = [
    ...tasks.map((task) => {
      return { ...task, done: true };
    }),
  ];
  render();
};
const hideTasks = () => {
  isDoneTasksHidden = true;
  render();
};
const showTasks = () => {
  isDoneTasksHidden = false;
  render();
};
const render = () => {
  let taskList = [...tasks];
  if (isDoneTasksHidden) taskList = taskList.filter((task) => !task.done);

  jsTasks.innerHTML = "";
  jsTasks.append(
    ...taskList.map((task, index) => createTaskElement(task, index))
  );
};
const jsDivButtonChangeText = () => {
  jsDivButton.innerText = isDoneTasksHidden
    ? "Pokaż ukończone"
    : "Ukryj ukończone";
};
const init = () => {
  jsDivButton.addEventListener("click", () => {
    isDoneTasksHidden ? showTasks() : hideTasks();
    jsDivButtonChangeText();
  });
  jsDivButtonDoneAll.addEventListener("click", () => {
    completeAllTasks();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();
  });
  jsDivButtonChangeText();
};
init();
