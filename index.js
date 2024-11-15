function taskManaging() {
  let addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", () => {
    let taskInput = prompt("Enter your task");
    if (taskInput === "" || taskInput.prompt == false) {
      return;
    }
    let child = document.createElement("div");
    let poorChild = document.createElement("h1");
    let parent = document.querySelector(".main-task");
    let icons = document.createElement("div");
    let editButton = document.createElement("i");
    let deleteButton = document.createElement("i");

    child.classList.add("task");
    child.appendChild(poorChild);
    parent.appendChild(child);
    poorChild.textContent = taskInput;

    icons.classList.add("task-icons");
    editButton.classList.add("ri-edit-line", "task-icon");
    editButton.addEventListener("click", () => {
        let newTask = prompt("Enter your new task");
        if (newTask === "" || newTask.prompt == false) {
          return;
        }
        poorChild.textContent = newTask;
    })
    icons.appendChild(editButton);

    deleteButton.classList.add("ri-delete-bin-line", "task-icon");
    deleteButton.addEventListener("click", () => {
        child.remove(); 
    });
    icons.appendChild(deleteButton);
    child.appendChild(icons);
  });
}
taskManaging();
