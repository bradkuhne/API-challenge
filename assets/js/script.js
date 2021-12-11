var buttonEl = document.querySelector("#start");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    console.log ("button was clicked");
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);