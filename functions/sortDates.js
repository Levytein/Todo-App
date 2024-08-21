import { Project, addProject, getProjects } from "./createNewProject.js";
import { displayTasks,createTaskForm} from "./taskForm.js";
const allTasks = [];
const projectArr = getProjects();

export const sortByDate = () => {
  collectAllTasks();
  sortTasksAndAssignIndices();  // Sort tasks and assign indices

  const tasksContainer = document.getElementById("taskSection");

  // Group tasks by date
  const tasksByDate = allTasks.reduce((acc, task) => {
    const taskDate = new Date(task.dueDate).toISOString().split('T')[0]; // Format the date to YYYY-MM-DD
    if (!acc[taskDate]) {
      acc[taskDate] = [];
    }
    acc[taskDate].push(task);
    return acc;
  }, {});

  // Clear existing content
  tasksContainer.innerHTML = `<div id="taskList" class="flex flex-col h-full align-middle mx-auto w-2/3 mt-12">
  </div>`;
  let styleLastGrid = "";
  // Sort the dates before iterating over them
  Object.keys(tasksByDate)
    .sort((a, b) => new Date(a) - new Date(b)) // Sort the dates chronologically
    .forEach((date) => {
      document.getElementById("taskList").insertAdjacentHTML(
        "beforeend",
        `
    
         <h2 id="heading-${date}" class="text-2xl font-bold mb-4">${date}</h2>
          <div id="gridForTasks-${date}" class="${styleLastGrid}"> 
          <table id="tableContainer" class="table-fixed w-full border-separate border-spacing-y-4 relative">
          <thead>
            <tr>
              <th>Mark as done</th>
              <th class="text-left">Title</th>
              <th class="text-left">Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="taskTable-${date}">
            ${tasksByDate[date].map((task) => {
              const projectIndex = projectArr.findIndex(p => p.tasks.includes(task));

              let priorityClass = '';
              if (task.priority === "ASAP") {
                priorityClass = 'border-high';
              } else if (task.priority === "Moderate") {
                priorityClass = 'border-medium';
              } else if (task.priority === "Procrastinate") {
                priorityClass = 'border-low';
              }

              return `
                <tr id="taskRow-${projectIndex}-${task.taskIndex}" class="box-border hover bg-slate-100">
                  <th class="${priorityClass} align-middle">
                    <label>
                      <input type="checkbox" class="checkbox" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}" data-task-date="${date}" />
                    </label>
                  </th>
                  <td>
                    <div class="flex items-center gap-3 max-w-sm">
                      <div>
                        <div class="font-bold">${task.title}</div>
                        <div class="text-sm opacity-50">by ${task.dueDate}</div>
                      </div>
                    </div>
                  </td>
                  <td class="max-w-md">${task.description}</td>
                   <td >
                   <div class="flex gap-2 justify-center">
            <button class="editTaskBtn btn btn-circle btn-md btn-outline" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487a2.25 2.25 0 113.182 3.182L7.5 20.414 3 21l.586-4.5L16.862 4.487z" />
              </svg>
            </button>
            <button class="deleteTaskBtn btn btn-circle btn-md btn-outline" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </td>
          </div>
                </tr>
              `;
            }).join('')}
          </tbody>
        </div>
        </div>
      `);
    });
    const taskListContainer = document.getElementById('taskList');

    // Select all divs that match the pattern for gridForTasks-*
    // Use an attribute starts-with selector to target those divs
    const gridDivs = taskListContainer.querySelectorAll('div[id^="gridForTasks-"]');;
    if (gridDivs.length > 0) {
      const lastGridDiv = gridDivs[gridDivs.length - 1];
      lastGridDiv.style.paddingBottom = "120px"; // Adjust the padding as needed
    }
  // Add click event listeners to all checkboxes
  document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', (event) => {
      const projectIndex = event.target.getAttribute('data-project-index');
      const taskIndex = event.target.getAttribute('data-task-index');
      const taskRow = document.getElementById(`taskRow-${projectIndex}-${taskIndex}`);
      removeTaskWithAnimation(taskRow, projectIndex, taskIndex, "Inbox");
    });
  });
    // Add click event listeners to delete buttons
    document.querySelectorAll('.deleteTaskBtn').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        const taskRow = document.getElementById(`taskRow-${projectIndex}-${taskIndex}`);
        
        // Call the remove function
        removeTaskWithAnimation(taskRow, projectIndex, taskIndex, "Inbox");
      });
    });

    // Add click event listeners to edit buttons
    document.querySelectorAll('.editTaskBtn').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        editTask(projectIndex, taskIndex);
      });
    });
};
const sortTasksAndAssignIndices = () => {
  projectArr.forEach((project) => {
    // Sort tasks within each project by due date (or any other criterion)
    project.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    // Assign a taskIndex based on the position within the project
    project.tasks.forEach((task, index) => {
      task.taskIndex = index;  // Assign a unique taskIndex for each task in the project
    });
  });
};
const collectAllTasks = () => {
  allTasks.length = 0; // Clear previous tasks
  const projectArr = getProjects();
  projectArr.forEach(project => {
    project.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); // Sort tasks by due date
    console.log(project);
    allTasks.push(...project.tasks);
  });
};

// Helper function to check if a task is due today
const isToday = (dueDate) => {
  const today = new Date();
  const taskDate = new Date(`${dueDate}T12:00:00`);

  return today.toDateString() === taskDate.toDateString();
};

// Helper function to check if a task is due this week
const isThisWeek = (dueDate) => {
  const today = new Date();
  const taskDate = new Date(`${dueDate}T12:00:00`);

  // Get the start of the current week (Sunday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate());

  // Get the end of the current week (Saturday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  console.log(`Checking if ${taskDate.toDateString()} is between ${startOfWeek.toDateString()} and ${endOfWeek.toDateString()}`);

  return taskDate >= startOfWeek && taskDate <= endOfWeek;
};

// Function to display tasks due today
export const displayTasksDueToday = () => {
  collectAllTasks();
  sortTasksAndAssignIndices();
  const tasksDueToday = allTasks.filter(task => isToday(task.dueDate));
  const tasksContainer = document.getElementById("taskSection");

  // Clear previous content
  tasksContainer.innerHTML = `
    <div id="taskList" class="flex flex-col align-middle mx-auto w-2/3 mt-12">
      <h2 class="text-6xl">Due Today</h2>
      <div id="gridForTasks" class="overflow-x-auto"> 
        <table class="table w-full border-separate border-spacing-y-4">
          <thead>
            <tr>
              <th>Mark as done</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="taskTable"></tbody>
        </table>
      </div>
    </div>
  `;

  if (tasksDueToday.length === 0) {
    tasksContainer.innerHTML = `<p class="text-xl">No tasks due today.</p>`;
  } else {
    tasksDueToday.forEach((task) => {
      const projectIndex = projectArr.findIndex(p => p.tasks.includes(task));

      let priorityClass = '';
      if (task.priority === "ASAP") {
        priorityClass = 'border-high';
      } else if (task.priority === "Moderate") {
        priorityClass = 'border-medium';
      } else if (task.priority === "Procrastinate") {
        priorityClass = 'border-low';
      }

      document.getElementById("taskTable").insertAdjacentHTML("beforeend", `
        <tr id="taskRow-${projectIndex}-${task.taskIndex}" class="hover bg-slate-100">
          <th class="${priorityClass}">
            <label>
              <input type="checkbox" class="checkbox" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div>
                <div class="font-bold">${task.title}</div>
                <div class="text-sm opacity-50">by ${task.dueDate}</div>
              </div>
            </div>
          </td>
          <td>${task.description}</td>
          <td class="flex gap-2">
            <button class="editTaskBtn btn btn-circle btn-sm btn-outline" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487a2.25 2.25 0 113.182 3.182L7.5 20.414 3 21l.586-4.5L16.862 4.487z" />
              </svg>
            </button>
            <button class="deleteTaskBtn btn btn-circle btn-sm btn-outline" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </td>
        </tr>
      `);
    });

    // Add click event listeners to checkboxes
    document.querySelectorAll('.checkbox').forEach(checkbox => {
      checkbox.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        const taskRow = document.getElementById(`taskRow-${projectIndex}-${taskIndex}`);
        removeTaskWithAnimation(taskRow, projectIndex, taskIndex, "Today");
      });
    });

    // Add click event listeners to delete buttons
    document.querySelectorAll('.deleteTaskBtn').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        const taskRow = document.getElementById(`taskRow-${projectIndex}-${taskIndex}`);
        removeTaskWithAnimation(taskRow, projectIndex, taskIndex, "Today");
      });
    });

    // Add click event listeners to edit buttons
    document.querySelectorAll('.editTaskBtn').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        editTask(projectIndex, taskIndex,"Today");
      });
    });
  }
};

// Function to display tasks due this week
export const displayTasksDueThisWeek = () => {
  collectAllTasks();
  sortTasksAndAssignIndices();  // Sort tasks and assign indices

  const tasksDueThisWeek = allTasks.filter(task => isThisWeek(task.dueDate));

  // Clear and render the tasks
  const tasksContainer = document.getElementById("taskSection");
 
  tasksContainer.innerHTML = `
  <div id="taskList" class="flex flex-col align-middle mx-auto w-2/3 mt-12">
      <h2 class="text-6xl">Due this week</h2>
      <div id="gridForTasks" class="overflow-x-auto"> 
      <table class="table w-full border-separate border-spacing-y-4	">
  <thead>
    <tr>
      <th>Mark as done</th>
      <th>Title</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody id="taskTable">
  </tbody>
      </div>
  </div>
`;

  if (tasksDueThisWeek.length === 0) {
    tasksContainer.innerHTML = `<p class="text-xl">No tasks due this week.</p>`;
  } else {
    tasksDueThisWeek.forEach((task) => {
      const projectIndex = projectArr.findIndex(p => p.tasks.includes(task));

      let priorityClass = '';
      if (task.priority === "ASAP") {
        priorityClass = 'border-high';
      } else if (task.priority === "Moderate") {
        priorityClass = 'border-medium';
      } else if (task.priority === "Procrastinate") {
        priorityClass = 'border-low';
      }

      document.getElementById("taskTable").insertAdjacentHTML("beforeend", `
        <tr id="taskRow-${projectIndex}-${task.taskIndex}" class="hover bg-slate-100">
          <th class="${priorityClass}">
            <label>
              <input type="checkbox" class="checkbox" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div>
                <div class="font-bold">${task.title}</div>
                <div class="text-sm opacity-50">by ${task.dueDate}</div>
              </div>
            </div>
          </td>
          <td>${task.description}</td>
             <td class="flex gap-2">
            <button class="editTaskBtn btn btn-circle btn-sm btn-outline" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487a2.25 2.25 0 113.182 3.182L7.5 20.414 3 21l.586-4.5L16.862 4.487z" />
              </svg>
            </button>
            <button class="deleteTaskBtn btn btn-circle btn-sm btn-outline" data-project-index="${projectIndex}" data-task-index="${task.taskIndex}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </td>
        </tr>
      `);
    });

    // Add click event listeners to all checkboxes
    document.querySelectorAll('.checkbox').forEach(checkbox => {
      checkbox.addEventListener('click', (event) => {
        const projectIndex = event.target.getAttribute('data-project-index');
        const taskIndex = event.target.getAttribute('data-task-index');
        const taskRow = document.getElementById(`taskRow-${projectIndex}-${taskIndex}`);
        removeTaskWithAnimation(taskRow, projectIndex, taskIndex,"Week");
      });
    });
    document.querySelectorAll('.deleteTaskBtn').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        const taskRow = document.getElementById(`taskRow-${projectIndex}-${taskIndex}`);
        removeTaskWithAnimation(taskRow, projectIndex, taskIndex, "Week");
      });
    });

    // Add click event listeners to edit buttons
    document.querySelectorAll('.editTaskBtn').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectIndex = event.currentTarget.getAttribute('data-project-index');
        const taskIndex = event.currentTarget.getAttribute('data-task-index');
        editTask(projectIndex, taskIndex,"Week");
      });
    });
  }
};
const editTask = (projectIndex, taskIndex, viewType) => {
  const task = projectArr[projectIndex].tasks[taskIndex];
  console.log(projectIndex,taskIndex);
  // Create or show the task form
  if (!document.getElementById("projectTaskFormContainer")) {
    createTaskForm();
  } else {
    document.getElementById("projectTaskFormContainer").hidden = false;
  }

  // Populate the form with the current task data
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskDueDate").value = task.dueDate;
  document.getElementById("taskPriority").textContent = task.priority;

  // Clear any previous event listeners on the submit button
  const submitButton = document.getElementById("submitTask");
  const newSubmitButton = submitButton.cloneNode(true); // Clone the button to remove old event listeners
  submitButton.parentNode.replaceChild(newSubmitButton, submitButton);

  // Add the event listener for submitting the edited task
  newSubmitButton.addEventListener('click', () => {
    task.title = document.getElementById("taskTitle").value;
    task.description = document.getElementById("taskDescription").value;
    task.dueDate = document.getElementById("taskDueDate").value;
    task.priority = document.getElementById("taskPriority").textContent;

    // Hide the form and refresh the appropriate task list
    document.getElementById("projectTaskFormContainer").hidden = true;
    document.getElementById("projectTaskForm").reset(); // Reset the form after editing

    // Re-index tasks after editing
    reIndexTasksForProject(projectIndex);

    // Re-render the correct view based on the viewType
    if (viewType === "Today") {
      displayTasksDueToday();
    } else if (viewType === "Week") {
      displayTasksDueThisWeek();
    } else {
      sortByDate(); // Default to "Inbox" view
    }
  });
};

const removeTaskWithAnimation = (taskRow, projectIndex, taskIndex, typeSort) => {
  // Validate the task index
  if (taskIndex < 0 || taskIndex >= projectArr[projectIndex].tasks.length) {
    console.error("Invalid task index:", taskIndex);
    return;
  }

  if (taskRow) {
    // Add the fade-out or slide-up class to trigger the animation
    taskRow.classList.add('fade-out'); // Or use 'slide-up' for a different animation

    // Remove the task from the DOM after the animation finishes
    setTimeout(() => {
      taskRow.remove();

      // Remove the task from the correct project array
      projectArr[projectIndex].tasks.splice(taskIndex, 1);

      // Re-index tasks after removal
      reIndexTasksForProject(projectIndex);

      // Re-render the task list to ensure DOM and projectArr are in sync
      if (typeSort === "Inbox") {
        sortByDate();
      } else if (typeSort === "Today") {
        displayTasksDueToday();
      } else {
        displayTasksDueThisWeek();
      }
    }, 500); // This duration should match the CSS transition duration
  }
};

// Function to re-index tasks for a project
const reIndexTasksForProject = (projectIndex) => {
  const projectTasks = projectArr[projectIndex].tasks;

  // Find all task rows in the DOM for this project
  const taskRows = document.querySelectorAll(`[id^="taskRow-${projectIndex}-"]`);

  taskRows.forEach((row, newIndex) => {
    // Update the taskRow ID and data-task-index attributes
    row.id = `taskRow-${projectIndex}-${newIndex}`;
    const checkbox = row.querySelector('.checkbox');
    if (checkbox) {
      checkbox.setAttribute('data-task-index', newIndex);
    }
    const editButton = row.querySelector('.editTaskBtn');
    if (editButton) {
      editButton.setAttribute('data-task-index', newIndex);
    }
    const deleteButton = row.querySelector('.deleteTaskBtn');
    if (deleteButton) {
      deleteButton.setAttribute('data-task-index', newIndex);
    }
  });
};