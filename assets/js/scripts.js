
// formE1 creates the object for the addEventListener
// at the bottom linking it to the form at the top of the html page
var formEl = document.querySelector("#task-form");
// tasksToDoE1 creates the object for the list, to be called, so the new 
// items can be appended
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() { 
  event.preventDefault();
  // creates the task line item, gives the class it needs to get the 
  // css, for now, it fills in a default text, but should soon fill in the
  // text you enter, and appends the line item to the list.
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 
// This will run the function createTaskHandler when you click 
// on the add task or hit enter in the enter while in the
// enter task field
formEl.addEventListener("submit", createTaskHandler);