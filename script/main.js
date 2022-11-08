const task = {
  type: "done",
  text: "Przykładowe zadanie",
};
const tasks = [task];
const form = document.querySelector(".js-form");
const input = form.querySelector(".js-newTask");
const formButton = form.querySelector(".js-formButton");
const jsTasks = document.querySelector(".js-tasks");

const createTaskElement = (props) => {
  const element = document.createElement("div");

  element.innerHTML = `
    <li class="tasks__item">
        <button class="tasks__button ${
          props.type ? `tasks__button--${props.type}` : ""
        } js-task-type"></button>
        <p class="tasks__text">${props.text}</p>
        <button class="tasks__button tasks__button--delete js-task-delete">🗑️</button>
    </li>`;

  const li = element.children[0];
  const buttonType = li.querySelector(".js-task-type");
  const buttonDelete = li.querySelector(".js-task-delete");

  buttonDelete.addEventListener("click", () => {
    li.remove();
  });

  buttonType.addEventListener("click", () => {
    buttonType.classList.toggle("tasks__button--done");
  });

  return li;
};

const clearInput = () => {
  input.value = "";
};

const addTask = () => {
  jsTasks.append(createTaskElement({ type: undefined, text: input.value }));
  clearInput();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});
