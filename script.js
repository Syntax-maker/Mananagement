// Function to create a new task row
function createTaskRow(task) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${task.project}</td>
    <td>${task.taskName}</td>
    <td>${task.startDate}</td>
    <td>${task.dueDate}</td>
    <td>${task.status}</td>
    <td>
      <button class="complete-btn" data-task-id="${task.id}">Complete</button>
      <button class="delete-btn" data-task-id="${task.id}">Delete</button>
    </td>
  `;
  return row;
}

// Function to add a new task
function addTask(project, taskName, startDate, dueDate) {
  const newTask = {
    project: project,
    taskName: taskName,
    startDate: startDate,
    dueDate: dueDate,
    status: "Pending",
    id: tasks.length + 1,
  };

  tasks.push(newTask);

  const newRow = createTaskRow(newTask);
  const taskListBody = document.getElementById("taskList").getElementsByTagName("tbody")[0];
  taskListBody.appendChild(newRow);
}

// Function to handle task form submission
document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const projectInput = document.getElementById("project");
  const taskNameInput = document.getElementById("task-name");
  const startDateInput = document.getElementById("start-date");
  const dueDateInput = document.getElementById("due-date");

  const project = projectInput.value;
  const taskName = taskNameInput.value;
  const startDate = startDateInput.value;
  const dueDate = dueDateInput.value;

  addTask(project, taskName, startDate, dueDate);

  // Clear the form inputs
  projectInput.value = "";
  taskNameInput.value = "";
  startDateInput.value = "";
  dueDateInput.value = "";
});
