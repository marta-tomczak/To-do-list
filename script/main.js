const tasks = [];
const form = document.querySelector(".js-form");
const input = form.querySelector(".js-newTask");
const formButton = form.querySelector(".js-formButton");
const jsTasks = document.querySelector(".js-tasks");

const createTaskElement = (props) => {
  const html = `
    <li class="tasks__item">
        <button class="tasks__button ${
          props.done ? `tasks__button--${props.done}` : ""
        } js-task-type"></button>
        <p class="tasks__text">${props.text}</p>
        <button class="tasks__button tasks__button--delete js-task-delete">🗑️</button>
    </li>`;

  // const li = element.children[0];
  // const buttonType = li.querySelector(".js-task-type");
  // const buttonDelete = li.querySelector(".js-task-delete");

  // buttonDelete.addEventListener("click", () => {
  //   li.remove();
  // });

  // buttonType.addEventListener("click", () => {
  //   buttonType.classList.toggle("tasks__button--done");
  // });

  return html;
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

  tasks.push(task);

  clearInput();
  render();
};

const clearTask = () => {
  while (jsTasks.firstElementChild) jsTasks.firstElementChild.remove();
};

const render = () => {
  clearTask();

  tasks.forEach((task) => jsTasks.append(createTaskElement(task)));
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});
