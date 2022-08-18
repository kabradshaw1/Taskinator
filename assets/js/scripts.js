
// formE1 creates the object for the addEventListener
// at the bottom linking it to the form at the top of the html page
var formEl = document.querySelector("#task-form");
// tasksToDoE1 creates the object for the list, to be called, so the new 
// items can be appended
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() { 
  // preventDefault was used to turn off the refresh page
  // when this function runs
  event.preventDefault();
  // stores in information typed in the input html element with the name
  // of task=name.  We found that the input was stored in value property,
  // by doing a console.dir("taskNameInput")
  var taskTypeInput = document.querySelector("select[name='task-type']")
    .value;
  var taskNameInput = document.querySelector("input[name='task-name']")
    .value;
  
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + 
    "</h3><span class='task-type'>" + taskTypeInput + 
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl);
}; 
// This will run the function createTaskHandler when you click 
// on the add task or hit enter in the enter while in the
// enter task field
formEl.addEventListener("submit", createTaskHandler);