const tasks = [];
const addNewTask = (newTaskContent) => {
  tasks.push({ content: newTaskContent 
});
  render();
};

const cleanInput = () => {
    document.querySelectorAll(".js-newTask").value = "";
    document.querySelectorAll(".js-newTask").focus();
}; 

const removeTask = (taskIndex) => {
    task.splice(taskIndex, 1);
    render();
};

const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
};

const bindtoggleDoneEvents = () => {}
const toggleDoneButtons = document.querySelectorAll(".js-toogleDone");

toggleDoneButtons.forEach((toggleDoneButton, index) => {
    toggleDoneButton.addEventListener("click", () => {
       toggleTaskDone(index);
    });
});

const bindRemoteEvents = () => {
const removeButtons = document.querySelectorAll(".js-remove");
    
    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
           removeTask(index);
        });
    });
    };

const render = () => {
    let taskListHTMLContent = "";
    
    for (const task of tasks) {
    taskListHTMLContent +=`
        <li class="task__item">

        <button class="tasks__button--done js-done">
        $task.done ? "✔" : "" }
        </button>

        <p
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
        ${task.content}
        </p>
            
        <button class="tasks__button--remove js-remove">
            🗑
            </button>
         </li>
    `;
    }
    
    document.querySelector(".js-tasks").innerHTML = taskListHTMLContent;
    
bindEvents();
};

    const onFormSubmit = (event) => {
        event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
   
    if (newTaskContent === "") {
            render(); 
        }

            
    addNewTask(newTaskContent);
    cleanInput();
    };

    const init = () => {
        render(); 

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
};

    init();
    
    
    
