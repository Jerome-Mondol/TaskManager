let addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  let taskInput = prompt("Enter your task");
  let child = document.createElement("div");
  child.classList.add("task");
  let poorChild = document.createElement("h1");
  child.appendChild(poorChild);
  let parent = document.querySelector(".main-task");
  parent.appendChild(child);
  poorChild.textContent = taskInput;
//   let border = document.createElement("div");
//   border.classList.add("border");
//   child.appendChild(border);

  let icons = document.createElement("div");
  icons.classList.add("task-icons");
  let deleteButton = document.createElement("i");
  let editButton = document.createElement("i");
  deleteButton.classList.add("ri-edit-line", "task-icon");
  icons.appendChild(deleteButton);
  editButton.classList.add("ri-delete-bin-line", "task-icon");
  icons.appendChild(editButton);
  child.appendChild(icons);
});
