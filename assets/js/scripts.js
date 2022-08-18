
// formE1 creates the object for the addEventListener
// at the bottom linking it to the form at the top of the html page
var formEl = document.querySelector("#task-form");
// tasksToDoE1 creates the object for the list, to be called, so the new 
// items can be appended
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) { 
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
}; 
var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + 
    taskDataObj.name + "</h3><span class='task-type'>"
    + taskDataObj.type + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
}
// This will run the function taskFormHandler when you click 
// on the add task or hit enter in the enter while in the
// enter task field
formEl.addEventListener("submit", taskFormHandler);