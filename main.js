"use strict";
(self["webpackChunktodov2"] = self["webpackChunktodov2"] || []).push([["main"],{

/***/ "./functions/createNewProject.js":
/*!***************************************!*\
  !*** ./functions/createNewProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getTasks: () => (/* binding */ getTasks)
/* harmony export */ });
// Define the Project class
class Project {
    constructor(title,tasks = []) {
        this.title = title;

        this.tasks = tasks; // Initialize with an empty array if no tasks are provided
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

// Define the Task class
class Task {
    constructor(project, title, description, dueDate, priority) {
        this.project = project; // Reference to the project this task belongs to
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const groceryShoppingProject = new Project("Grocery Shopping", [
    new Task("Grocery Shopping", "Buy Microwave Pizza", "Purchase fresh vegetables: carrots, spinach, and broccoli.", "2024-08-19", "Moderate"),
    new Task("Grocery Shopping", "Buy Vegetables", "Purchase fresh vegetables: carrots, spinach, and broccoli.", "2024-08-20", "ASAP"),
    new Task("Grocery Shopping", "Get Dairy Products", "Buy milk, cheese, and yogurt.", "2024-08-22", "Moderate"),
    new Task("Grocery Shopping", "Pick Up Meat", "Get chicken breasts and ground beef.", "2024-08-23", "ASAP"),
    new Task("Grocery Shopping", "Buy Snacks", "Get healthy snacks like nuts and granola bars.", "2024-08-25", "Procrastinate"),
    new Task("Grocery Shopping", "Get Cleaning Supplies", "Buy cleaning products: dish soap, sponges, and disinfectant.", "2024-08-27", "ASAP")
]);

const workoutProject = new Project("Workout Routine", [
    new Task("Workout Routine", "Leg Day", "Complete leg workout: squats, lunges, and leg presses.", "2024-08-20", "ASAP"),
    new Task("Workout Routine", "Cardio", "Run for 30 minutes or cycle for 1 hour.", "2024-08-21", "Moderate"),
    new Task("Workout Routine", "Upper Body", "Complete upper body workout: bench press, pull-ups, and shoulder press.", "2024-08-22", "ASAP"),
    new Task("Workout Routine", "Core Strength", "Focus on core exercises: planks, Russian twists, and leg raises.", "2024-08-19", "Moderate"),
    new Task("Workout Routine", "Rest and Recovery", "Take a rest day with stretching and light yoga.", "2024-08-24", "Procrastinate")
]);
// Arrays to store projects and tasks
const projects = [groceryShoppingProject,workoutProject];
const tasks = [...groceryShoppingProject.tasks,workoutProject.tasks]; // Initialize tasks with the project's tasks

// Function to add a new project
const addProject = (project) => {
    projects.push(project);
};

// Function to get all projects
const getProjects = () => {
    return projects;
};

// Function to add a new task
const addTask = (task) => {
    tasks.push(task);
    task.project.addTask(task); // Add task to its project
};

// Function to get all tasks
const getTasks = () => {
    return tasks;
};

// Export classes and functions


/***/ }),

/***/ "./functions/eventListeners.js":
/*!*************************************!*\
  !*** ./functions/eventListeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProjects: () => (/* binding */ createNewProjects)
/* harmony export */ });
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ "./functions/projectForm.js");
/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewProject.js */ "./functions/createNewProject.js");



const createNewProjects = () =>
{
    document.getElementById('addProjectBtn').addEventListener('click', () => {
        if (!document.getElementById('taskFormContainer')) {
            (0,_projectForm__WEBPACK_IMPORTED_MODULE_0__.createProjectForm)();
        } else {
            document.getElementById('taskFormContainer').hidden = false;
        }
    
        const taskForm = document.getElementById('taskForm');
    
        // Remove existing event listener if any
        const newTaskForm = taskForm.cloneNode(true);
        taskForm.parentNode.replaceChild(newTaskForm, taskForm);
    
        newTaskForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the form from submitting in the traditional way
    
            // Capture form data
            const title = document.getElementById('project_name_input').value;
    
            // Create a new Task instance
            const newTask = new _createNewProject_js__WEBPACK_IMPORTED_MODULE_1__.Project(title);
    
            // Add the new task to the projects array
            (0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_1__.addProject)(newTask);
    
            // Display the updated projects list
            (0,_projectForm__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
    
            // Reset the form
            e.target.reset();
    
            // Hide the form after submission
            document.getElementById('taskFormContainer').hidden = true;
        });
    });
};

/***/ }),

/***/ "./functions/firstLoad.js":
/*!********************************!*\
  !*** ./functions/firstLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstLoad: () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject.js */ "./functions/createNewProject.js");
/* harmony import */ var _sortDates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortDates.js */ "./functions/sortDates.js");


const firstLoad = () =>
{
    console.log("first load");
const container = document.createElement('div');
container.id = 'container';
container.classList = ('flex-auto w-full h-full');

const headerDiv = document.createElement('div');
headerDiv.classList = "flex h-16 w-full bg-gray-700	items-center justify-center";
headerDiv.id = "header";
headerDiv.insertAdjacentHTML('beforeend',`
  <div class="text-4xl text-white font-extrabold	 ">The Todoinator</div>`);
container.appendChild(headerDiv);

const taskApp = document.createElement('div');
taskApp.id = 'taskAppContainer';
taskApp.classList = 'flex mx-auto rounded-lg border-2 w-full h-full relative';

const navBar = document.createElement('div');
navBar.id = 'navBar';
navBar.classList = 'flex bg-gray-300 w-72 min-w-72 h-full box-border rounded-lg flex-col';

const sortDates = document.createElement('div');
sortDates.innerHTML = `
<ul class="menu w-full">
  <li><a id="inbox" class="font-medium">Inbox</a></li>
  <li><a id="today" class="font-medium">Today</a></li>
  <li><a id="thisWeek"class="font-medium">This Week</a></li>
</ul>
`;
navBar.appendChild(sortDates);



const taskSection = document.createElement('div');
taskSection.id = 'taskSection';
taskSection.classList = 'flex bg-[#f7f7f7] rounded-lg h-full w-full overflow-auto pb-20 ';
const taskList =document.createElement("div");
taskList.id= "taskList";
taskList.classList = "flex flex-col align-middle mx-auto w-2/3 mt-12 overflow-auto ";
taskSection.appendChild(taskList);
//<div id="taskList" class="flex flex-col align-middle mx-auto w-2/3 mt-12">
//Project Section
const projects = document.createElement("div");
projects.id = 'projects'; // Added ID for projects container
projects.classList =('flex flex-col h-1/3 w-full');
const projectHeaderDiv = document.createElement("div");
projectHeaderDiv.id = "projectHeaderDiv";
projectHeaderDiv.classList= "flex w-full";

const projectTextSpan = document.createElement("span");
projectTextSpan.innerText="Projects";
projectHeaderDiv.appendChild(projectTextSpan);

const projectSpanPlus = document.createElement("div");
projectSpanPlus.id ="createProject";
projectSpanPlus.innerHTML =`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
`;
projectHeaderDiv.appendChild(projectSpanPlus);
projects.appendChild(projectHeaderDiv);

projects.appendChild(projectHeaderDiv);
navBar.appendChild(projects);


taskApp.appendChild(navBar);
taskApp.appendChild(taskSection);
container.appendChild(taskApp);
document.body.appendChild(container);

document.getElementById("inbox").addEventListener("click",()=>
  {
    console.log("inbox");
    (0,_sortDates_js__WEBPACK_IMPORTED_MODULE_1__.sortByDate)();
  }
);
document.getElementById("today").addEventListener("click",()=>
  {
    console.log("inbox");
    (0,_sortDates_js__WEBPACK_IMPORTED_MODULE_1__.displayTasksDueToday)();
  }
);
document.getElementById("thisWeek").addEventListener("click",()=>
  {
    console.log("inbox");
    (0,_sortDates_js__WEBPACK_IMPORTED_MODULE_1__.displayTasksDueThisWeek)();
  }
);
};


   


/***/ }),

/***/ "./functions/projectForm.js":
/*!**********************************!*\
  !*** ./functions/projectForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   selectedProject: () => (/* binding */ selectedProject)
/* harmony export */ });
/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject.js */ "./functions/createNewProject.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm.js */ "./functions/taskForm.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners.js */ "./functions/eventListeners.js");



let selectedProject = null;

const createProjectForm = ()=>
{
        const taskFormContainer = document.createElement('div');
        taskFormContainer.id ='taskFormContainer';
        taskFormContainer.classList = ("bg-[#f7f7f7] max-w-md mx-auto absolute left-0 right-0 top-1/4 border-solid border-2 border-indigo-600 rounded-lg p-10");
        taskFormContainer.innerHTML = `
        <form id="taskForm" class="max-w-md mx-auto ">
        <h2 class="font-sans text-xl">Create a New Project</h2>
         <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="projectName" id="project_name_input" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Name</label>
        </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
        `;  
        document.getElementById('taskAppContainer').appendChild(taskFormContainer);
}

const displayProjects = () => {
    const projectsContainer = document.getElementById('projects');
  
    // Clear the existing content
    projectsContainer.innerHTML = `
        <ul class="menu rounded-box w-full">
            <li>
                <details open>
                    <summary class="w-full h-14 flex justify-between items-center">
                        <span class="text-lg font-bold">Projects</span>
                        <!-- Plus icon button -->
                        <button id="addProjectBtn" class="btn btn-circle btn-outline ml-32">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 32" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </summary>
                    <ul id="subMenuProjects">
                    </ul>
                </details>
            </li>
        </ul>
    `;
  
    (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.createNewProjects)();
    const projects = (0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
  
    projects.forEach((project, index) => {
      document.getElementById("subMenuProjects").insertAdjacentHTML("beforeend", `
        <li id="project${index}" class="flex flex-row justify-between items-center group">
          <div class="flex-1 max-w-md mx-auto flex flex-col items-center space-y-4">
          <span id="projectName-${index}" class="project-name">${project.title}</span>
          <form id="editForm-${index}" class="hidden">
            <input type="text" id="editInput-${index}" value="${project.title}" class="input input-bordered text-center">
            <div class="flex justify-center w-full mt-2">
            <button type="submit" class="btn btn-sm bg-green-600 hover:bg-green-700 border-none text-white ml-2">Save</button>
            <button type="button" id="cancelEdit-${index}" class="btn btn-sm bg-red-500 border-none text-white hover:bg-red-700 ml-2">Cancel</button>
            </div>
          </form>
        </div>
          <!-- Edit icon for editing the project -->
          <button id="editProjectBtn${index}" class="btn btn-circle btn-sm btn-outline mx-2 invisible group-hover:visible">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
          </button>
            <!-- Trash icon for deleting the project -->
          <button id="deleteProjectBtn${index}" class="btn btn-circle btn-sm btn-outline mx-2 invisible group-hover:visible">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

          </button>
        </li>
      `);
  // Event listener for selecting a project
  document.getElementById(`project${index}`).querySelector('.project-name').addEventListener("click", () => {
    selectedProject = project;
    (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();
    console.log(selectedProject);
  });

  // Event listener for deleting a project
  document.getElementById(`deleteProjectBtn${index}`).addEventListener("click", () => {
    projects.splice(index, 1);  // Remove the project from the array
    displayProjects();  // Re-render the project list
  });

  // Event listener for editing a project name
  document.getElementById(`editProjectBtn${index}`).addEventListener("click", () => {
    document.getElementById(`projectName-${index}`).classList.add("hidden");
    document.getElementById(`editForm-${index}`).classList.remove("hidden");
    document.getElementById(`deleteProjectBtn${index}`).classList.add("hidden");
    document.getElementById(`editProjectBtn${index}`).classList.add("hidden");
  });

  // Event listener for submitting the edit form
  document.getElementById(`editForm-${index}`).addEventListener("submit", (e) => {
    e.preventDefault();
    const newProjectName = document.getElementById(`editInput-${index}`).value;
    if (newProjectName) {
      project.title = newProjectName;  
      selectedProject = project; 
      displayProjects();  // Re-render the project list
      (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();
    }
  });

  // Event listener for canceling the edit
  document.getElementById(`cancelEdit-${index}`).addEventListener("click", () => {
    document.getElementById(`editForm-${index}`).classList.add("hidden");
    document.getElementById(`projectName-${index}`).classList.remove("hidden");
    document.getElementById(`deleteProjectBtn${index}`).classList.remove("hidden");
    document.getElementById(`editProjectBtn${index}`).classList.remove("hidden");
  });
});

if (document.getElementById('taskForm')) {
  document.getElementById('taskForm').reset();
  document.getElementById('taskFormContainer').hidden = true;
}
(0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();
};

/***/ }),

/***/ "./functions/sortDates.js":
/*!********************************!*\
  !*** ./functions/sortDates.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTasksDueThisWeek: () => (/* binding */ displayTasksDueThisWeek),
/* harmony export */   displayTasksDueToday: () => (/* binding */ displayTasksDueToday),
/* harmony export */   sortByDate: () => (/* binding */ sortByDate)
/* harmony export */ });
/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject.js */ "./functions/createNewProject.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm.js */ "./functions/taskForm.js");


const allTasks = [];
const projectArr = (0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();

const sortByDate = () => {
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
  const projectArr = (0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
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
const displayTasksDueToday = () => {
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
const displayTasksDueThisWeek = () => {
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
    (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__.createTaskForm)();
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

/***/ }),

/***/ "./functions/taskForm.js":
/*!*******************************!*\
  !*** ./functions/taskForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   submitTaskForm: () => (/* binding */ submitTaskForm)
/* harmony export */ });
/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject.js */ "./functions/createNewProject.js");
/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm.js */ "./functions/projectForm.js");




const createTaskForm = () => {
  const projectTaskFormContainer = document.createElement("div");
  projectTaskFormContainer.id = "projectTaskFormContainer";
  projectTaskFormContainer.classList =
    "bg-[#f7f7f7] max-w-md mx-auto absolute left-0 right-0 top-1/4 border-solid border-2 border-indigo-600 rounded-lg p-10";
  document.getElementById("taskAppContainer").appendChild(projectTaskFormContainer);

  projectTaskFormContainer.insertAdjacentHTML(
    "beforeend",
    `
            <form id="projectTaskForm" class="bg-[#f7f7f7] max-w-md mx-auto ">
            <h2 class="font-sans text-xl mb-3">Create a new Task</h2>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="projectName" id="taskTitle" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="notesProject" id="taskDescription" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div class="flex">
            <div>
            <label for="dueDate" class="block text-sm text-gray-500 dark:text-gray-300">Due Date</label>
    
            <input type="date" id="taskDueDate" placeholder="Due Date" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
    
        <div class="relative inline-block mt-auto  w-full"  x-data="{ isOpen: false, selectedText: 'Priority',selectedColor: '' }">
        <!-- Dropdown toggle button -->
        <button type="button" @click="isOpen = !isOpen" class="relative flex  ml-3 self-center z-10 p-[10.32px] w-full text-gray-700 bg-white border border-gray-200 rounded-lg dark:text-white hover:border-blue-500 hover:ring-opacity-40 dark:hover:ring-opacity-40 hover:ring-blue-300 dark:hover:ring-blue-400 focus:ring dark:bg-gray-800 hover:outline-none">
        <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" stroke="selectedColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
        </g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.5582 3.87329C14.9831 4.44323 16.5513 4.54967 18.0401 4.17746C18.6711 4.01972 19.1778 4.7036 18.8432 5.26132L17.5647 7.39221C17.2232 7.96137 17.0524 8.24595 17.0119 8.55549C16.9951 8.68461 16.9951 8.81539 17.0119 8.94451C17.0524 9.25405 17.2232 9.53863 17.5647 10.1078L19.1253 12.7089C19.4361 13.2269 19.1582 13.898 18.5721 14.0445L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" :fill="selectedColor"></path> </g></svg>        
        <p id="taskPriority" x-text="selectedText"></p>
        </button>
    
        <!-- Dropdown menu -->
        <div x-show="isOpen"
            @click.away="isOpen = false"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="opacity-0 scale-90"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-100"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-90"
            class="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
            <a href="#" @click.prevent="selectedText = 'ASAP', selectedColor = '#FF0000'"; class="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.5582 3.87329C14.9831 4.44323 16.5513 4.54967 18.0401 4.17746C18.6711 4.01972 19.1778 4.7036 18.8432 5.26132L17.5647 7.39221C17.2232 7.96137 17.0524 8.24595 17.0119 8.55549C16.9951 8.68461 16.9951 8.81539 17.0119 8.94451C17.0524 9.25405 17.2232 9.53863 17.5647 10.1078L19.1253 12.7089C19.4361 13.2269 19.1582 13.898 18.5721 14.0445L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#FF0000"></path> </g></svg>
    <span class="mx-1">
                    ASAP
                </span>
            </a>
    
            <a href="#" @click.prevent="selectedText = 'Moderate', selectedColor = '#ffd500'"; class="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" stroke="#ffd500"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.5582 3.87329C14.9831 4.44323 16.5513 4.54967 18.0401 4.17746C18.6711 4.01972 19.1778 4.7036 18.8432 5.26132L17.5647 7.39221C17.2232 7.96137 17.0524 8.24595 17.0119 8.55549C16.9951 8.68461 16.9951 8.81539 17.0119 8.94451C17.0524 9.25405 17.2232 9.53863 17.5647 10.1078L19.1253 12.7089C19.4361 13.2269 19.1582 13.898 18.5721 14.0445L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#ffd500"></path> </g></svg>
                <span class="mx-1">
                    Moderate
                </span>
            </a>
    
            <a href="#" @click.prevent="selectedText = 'Procrastinate' , selectedColor = '#11d432'"; class="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
             <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.5582 3.87329C14.9831 4.44323 16.5513 4.54967 18.0401 4.17746C18.6711 4.01972 19.1778 4.7036 18.8432 5.26132L17.5647 7.39221C17.2232 7.96137 17.0524 8.24595 17.0119 8.55549C16.9951 8.68461 16.9951 8.81539 17.0119 8.94451C17.0524 9.25405 17.2232 9.53863 17.5647 10.1078L19.1253 12.7089C19.4361 13.2269 19.1582 13.898 18.5721 14.0445L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#11d432"></path> </g></svg>
    
                <span class="mx-1">
                    Procrastinate
                </span>
            </a>
    
    
    
        </div>
    </div>
            </div>
            <button type="button" id="submitTask" class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            `
  );
  const submitButton = document.getElementById("submitTask");
  document.getElementById("submitTask").addEventListener("click", () => {
    submitTaskForm();
  });
};
//<div id="createTaskDiv" class="flex cursor-pointer border-t-2 border-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg><p>Add Task</p></div>

const displayTasks = () => {
  if (!_projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject) {
    console.error("No project selected!");
    return;
  }

  const tasksContainer = document.getElementById("taskSection");

  // Clear the existing content
  tasksContainer.innerHTML = `
    <div id="taskList" class="flex flex-col align-middle mx-auto w-2/3 mt-12">
        <h2 class="text-6xl">${_projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.title}</h2>
        <div id="gridForTasks" class="overflow-x-auto"> 
        <table class="table w-full border-separate border-spacing-y-4">
    <thead>
      <tr>
        <th>Mark as done</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th> <!-- Added Actions Column -->
      </tr>
    </thead>
    <tbody id="taskTable">
    </tbody>
        </div>
    </div>
  `;

  const selectedProjectTasks = _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  selectedProjectTasks.forEach((task, index) => {
    let priorityClass = '';
    if (task.priority === "ASAP") {
      priorityClass = 'border-high';
    } else if (task.priority === "Moderate") {
      priorityClass = 'border-medium';
    } else if (task.priority === "Procrastinate") {
      priorityClass = 'border-low';
    }
  
    document.getElementById("taskTable").insertAdjacentHTML(
      "beforeend",
      `<tr id="taskRow-${index}" class="hover bg-slate-100">
        <th class="${priorityClass}">
          <label>
            <input type="checkbox" class="checkbox" data-index="${index}" />
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
        <td class="flex gap-2"> <!-- Action Buttons -->
          <!-- Edit Button -->
          <button class="editTaskBtn btn btn-circle btn-sm btn-outline" data-index="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487a2.25 2.25 0 113.182 3.182L7.5 20.414 3 21l.586-4.5L16.862 4.487z" />
            </svg>
          </button>
          <!-- Delete Button -->
          <button class="deleteTaskBtn btn btn-circle btn-sm btn-outline" data-index="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
      </tr>`
    );
  });

  // Add event listeners for the edit and delete buttons
  document.querySelectorAll('.editTaskBtn').forEach(button => {
    button.addEventListener('click', (event) => {
      const index = event.currentTarget.getAttribute('data-index');
      console.log("Button clicked, data-index:", index);
      editTask(parseInt(index)); // Ensure the index is converted to an integer
    });
  });

  document.querySelectorAll('.deleteTaskBtn').forEach(button => {
    button.addEventListener('click', (event) => {
      console.log("Delete button clicked");
      const index = event.currentTarget.getAttribute('data-index');
      removeTaskWithAnimation(parseInt(index));
    });
  });
  // Insert createTaskDiv after all tasks have been displayed
  document.getElementById("taskList").insertAdjacentHTML(
    "beforeend",
    `
    <div id="createTaskDiv" class="flex cursor-pointer border-t-2 border-indigo-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
      </svg>
      <p>Add Task</p>
    </div>
    `
  );

  document.getElementById("createTaskDiv").addEventListener("click", () => {
    if (!document.getElementById("projectTaskFormContainer")) {
      createTaskForm();
    } else {
      document.getElementById("projectTaskFormContainer").hidden = false;
      document.getElementById("projectTaskForm").reset(); // Clear the form for a new task
    }
  
    // Clear previous event listeners on the submit button
    const submitButton = document.getElementById("submitTask");
    const newSubmitButton = submitButton.cloneNode(true);
    submitButton.parentNode.replaceChild(newSubmitButton, submitButton);
  
    // Add the event listener for creating a new task
    newSubmitButton.addEventListener('click', submitTaskForm);
  });
}
// Edit task function
const editTask = (index) => {
  console.log("Editing task at index:", index);
  console.log("Selected project tasks:", _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.tasks);

  // Validate index
  if (index < 0 || index >= _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.tasks.length) {
    console.error("Invalid task index:", index);
    return;
  }

  const task = _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.tasks[index];
  console.log("Task to edit:", task);

  // Create the task form if it doesn't already exist
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

    // Hide the form and refresh the task list
    document.getElementById("projectTaskFormContainer").hidden = true;
    displayTasks();
  });
};
const submitTaskForm = () => {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  const priority = document.getElementById("taskPriority").textContent;
  
  const task = new _createNewProject_js__WEBPACK_IMPORTED_MODULE_0__.Task(_projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject, title, description, dueDate, priority);
  (0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(task);
  document.getElementById("projectTaskFormContainer").hidden = true;
  document.getElementById("projectTaskForm").reset();
  displayTasks();
};
const removeTaskWithAnimation = (index) => {
  // Validate index
  if (index < 0 || index >= _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.tasks.length) {
    console.error("Invalid task index:", index);
    return;
  }

  const taskRow = document.getElementById(`taskRow-${index}`);
  if (taskRow) {
    // Add the fade-out or slide-up class to trigger the animation
    taskRow.classList.add('fade-out'); // or 'slide-up'

    // Remove the task from the DOM after the animation finishes
    setTimeout(() => {
      taskRow.remove();
      _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.tasks.splice(index, 1);
      displayTasks(); // Optionally re-render the task list
    }, 500); // This duration matches the CSS transition duration
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/output.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/output.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.7 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

:root,
[data-theme] {
  background-color: var(--fallback-b1,oklch(var(--b1)/1));
  color: var(--fallback-bc,oklch(var(--bc)/1));
}

@supports not (color: oklch(0% 0 0)) {
  :root {
    color-scheme: light;
    --fallback-p: #491eff;
    --fallback-pc: #d4dbff;
    --fallback-s: #ff41c7;
    --fallback-sc: #fff9fc;
    --fallback-a: #00cfbd;
    --fallback-ac: #00100d;
    --fallback-n: #2b3440;
    --fallback-nc: #d7dde4;
    --fallback-b1: #ffffff;
    --fallback-b2: #e5e6e6;
    --fallback-b3: #e5e6e6;
    --fallback-bc: #1f2937;
    --fallback-in: #00b3f0;
    --fallback-inc: #000000;
    --fallback-su: #00ca92;
    --fallback-suc: #000000;
    --fallback-wa: #ffc22d;
    --fallback-wac: #000000;
    --fallback-er: #ff6f70;
    --fallback-erc: #000000;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      --fallback-p: #7582ff;
      --fallback-pc: #050617;
      --fallback-s: #ff71cf;
      --fallback-sc: #190211;
      --fallback-a: #00c7b5;
      --fallback-ac: #000e0c;
      --fallback-n: #2a323c;
      --fallback-nc: #a6adbb;
      --fallback-b1: #1d232a;
      --fallback-b2: #191e24;
      --fallback-b3: #15191e;
      --fallback-bc: #a6adbb;
      --fallback-in: #00b3f0;
      --fallback-inc: #000000;
      --fallback-su: #00ca92;
      --fallback-suc: #000000;
      --fallback-wa: #ffc22d;
      --fallback-wac: #000000;
      --fallback-er: #ff6f70;
      --fallback-erc: #000000;
    }
  }
}

html {
  -webkit-tap-highlight-color: transparent;
}

* {
  scrollbar-color: color-mix(in oklch, currentColor 35%, transparent) transparent;
}

*:hover {
  scrollbar-color: color-mix(in oklch, currentColor 60%, transparent) transparent;
}

:root {
  color-scheme: light;
  --in: 72.06% 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 84.71% 0.199 83.87;
  --er: 71.76% 0.221 22.18;
  --pc: 89.824% 0.06192 275.75;
  --ac: 15.352% 0.0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 49.12% 0.3096 275.75;
  --s: 69.71% 0.329 342.55;
  --sc: 98.71% 0.0106 342.55;
  --a: 76.76% 0.184 183.61;
  --n: 32.1785% 0.02476 255.701624;
  --nc: 89.4994% 0.011585 252.096176;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% 0.00108 197.137559;
  --bc: 27.8078% 0.029596 256.847952;
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --in: 72.06% 0.191 231.6;
    --su: 64.8% 0.150 160;
    --wa: 84.71% 0.199 83.87;
    --er: 71.76% 0.221 22.18;
    --pc: 13.138% 0.0392 275.75;
    --sc: 14.96% 0.052 342.55;
    --ac: 14.902% 0.0334 183.61;
    --inc: 0% 0 0;
    --suc: 0% 0 0;
    --wac: 0% 0 0;
    --erc: 0% 0 0;
    --rounded-box: 1rem;
    --rounded-btn: 0.5rem;
    --rounded-badge: 1.9rem;
    --animation-btn: 0.25s;
    --animation-input: .2s;
    --btn-focus-scale: 0.95;
    --border-btn: 1px;
    --tab-border: 1px;
    --tab-radius: 0.5rem;
    --p: 65.69% 0.196 275.75;
    --s: 74.8% 0.26 342.55;
    --a: 74.51% 0.167 183.61;
    --n: 31.3815% 0.021108 254.139175;
    --nc: 74.6477% 0.0216 264.435964;
    --b1: 25.3267% 0.015896 252.417568;
    --b2: 23.2607% 0.013807 253.100675;
    --b3: 21.1484% 0.01165 254.087939;
    --bc: 74.6477% 0.0216 264.435964;
  }
}

[data-theme=light] {
  color-scheme: light;
  --in: 72.06% 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 84.71% 0.199 83.87;
  --er: 71.76% 0.221 22.18;
  --pc: 89.824% 0.06192 275.75;
  --ac: 15.352% 0.0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 49.12% 0.3096 275.75;
  --s: 69.71% 0.329 342.55;
  --sc: 98.71% 0.0106 342.55;
  --a: 76.76% 0.184 183.61;
  --n: 32.1785% 0.02476 255.701624;
  --nc: 89.4994% 0.011585 252.096176;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% 0.00108 197.137559;
  --bc: 27.8078% 0.029596 256.847952;
}

[data-theme=dark] {
  color-scheme: dark;
  --in: 72.06% 0.191 231.6;
  --su: 64.8% 0.150 160;
  --wa: 84.71% 0.199 83.87;
  --er: 71.76% 0.221 22.18;
  --pc: 13.138% 0.0392 275.75;
  --sc: 14.96% 0.052 342.55;
  --ac: 14.902% 0.0334 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --p: 65.69% 0.196 275.75;
  --s: 74.8% 0.26 342.55;
  --a: 74.51% 0.167 183.61;
  --n: 31.3815% 0.021108 254.139175;
  --nc: 74.6477% 0.0216 264.435964;
  --b1: 25.3267% 0.015896 252.417568;
  --b2: 23.2607% 0.013807 253.100675;
  --b3: 21.1484% 0.01165 254.087939;
  --bc: 74.6477% 0.0216 264.435964;
}

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1400px;
  }
}

.avatar.placeholder > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (hover:hover) {
  .label a:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  }

  .menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
  }

  .table tr.hover:hover,
  .table tr.hover:nth-child(even):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  }

  .table-zebra tr.hover:hover,
  .table-zebra tr.hover:nth-child(even):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
  }
}

.btn {
  display: inline-flex;
  height: 3rem;
  min-height: 3rem;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-btn, 0.5rem);
  border-color: transparent;
  border-color: oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1em;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration-line: none;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  border-width: var(--border-btn, 1px);
  transition-property: color, background-color, border-color, opacity, box-shadow, transform;
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: var(--fallback-bc,oklch(var(--bc)/1));
  background-color: oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));
  --tw-bg-opacity: 1;
  --tw-border-opacity: 1;
}

.btn-disabled,
  .btn[disabled],
  .btn:disabled {
  pointer-events: none;
}

.btn-circle {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}

:where(.btn:is(input[type="checkbox"])),
:where(.btn:is(input[type="radio"])) {
  width: auto;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.btn:is(input[type="checkbox"]):after,
.btn:is(input[type="radio"]):after {
  --tw-content: attr(aria-label);
  content: var(--tw-content);
}

.checkbox {
  flex-shrink: 0;
  --chkbg: var(--fallback-bc,oklch(var(--bc)/1));
  --chkfg: var(--fallback-b1,oklch(var(--b1)/1));
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-radius: var(--rounded-btn, 0.5rem);
  border-width: 1px;
  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));
  --tw-border-opacity: 0.2;
}

@media (hover: hover) {
  .btn:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn:hover {
      background-color: color-mix(
            in oklab,
            oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,
            black
          );
      border-color: color-mix(
            in oklab,
            oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,
            black
          );
    }
  }

  @supports not (color: oklch(0% 0 0)) {
    .btn:hover {
      background-color: var(--btn-color, var(--fallback-b2));
      border-color: var(--btn-color, var(--fallback-b2));
    }
  }

  .btn.glass:hover {
    --glass-opacity: 25%;
    --glass-border-opacity: 15%;
  }

  .btn-outline:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)));
  }

  .btn-outline.btn-primary:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-primary:hover {
      background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
    }
  }

  .btn-outline.btn-secondary:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-secondary:hover {
      background-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);
    }
  }

  .btn-outline.btn-accent:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-accent:hover {
      background-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);
    }
  }

  .btn-outline.btn-success:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-success:hover {
      background-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);
    }
  }

  .btn-outline.btn-info:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-info:hover {
      background-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);
    }
  }

  .btn-outline.btn-warning:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-warning:hover {
      background-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);
    }
  }

  .btn-outline.btn-error:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-error:hover {
      background-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);
    }
  }

  .btn-disabled:hover,
    .btn[disabled]:hover,
    .btn:disabled:hover {
    --tw-border-opacity: 0;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-bg-opacity: 0.2;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
    --tw-text-opacity: 0.2;
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn:is(input[type="checkbox"]:checked):hover, .btn:is(input[type="radio"]:checked):hover {
      background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
    }
  }

  :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @supports (color: oklch(0% 0 0)) {
    :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
      background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
    }
  }
}

.label {
  display: flex;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.input {
  flex-shrink: 1;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 2;
  line-height: 1.5rem;
  border-radius: var(--rounded-btn, 0.5rem);
  border-width: 1px;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}

.input[type="number"]::-webkit-inner-spin-button,
.input-md[type="number"]::-webkit-inner-spin-button {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-inline-end: -1rem;
}

.join {
  display: inline-flex;
  align-items: stretch;
  border-radius: var(--rounded-btn, 0.5rem);
}

.join :where(.join-item) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}

.join .join-item:not(:first-child):not(:last-child),
  .join *:not(:first-child):not(:last-child) .join-item {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}

.join .join-item:first-child:not(:last-child),
  .join *:first-child:not(:last-child) .join-item {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.join .dropdown .join-item:first-child:not(:last-child),
  .join *:first-child:not(:last-child) .dropdown .join-item {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}

.join :where(.join-item:first-child:not(:last-child)),
  .join :where(*:first-child:not(:last-child) .join-item) {
  border-end-start-radius: inherit;
  border-start-start-radius: inherit;
}

.join .join-item:last-child:not(:first-child),
  .join *:last-child:not(:first-child) .join-item {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}

.join :where(.join-item:last-child:not(:first-child)),
  .join :where(*:last-child:not(:first-child) .join-item) {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}

@supports not selector(:has(*)) {
  :where(.join *) {
    border-radius: inherit;
  }
}

@supports selector(:has(*)) {
  :where(.join *:has(.join-item)) {
    border-radius: inherit;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
}

.menu :where(li ul) {
  position: relative;
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: 0.5rem;
}

.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  display: grid;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.menu li.disabled {
  cursor: not-allowed;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  color: var(--fallback-bc,oklch(var(--bc)/0.3));
}

.menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {
  display: none;
}

:where(.menu li) {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}

:where(.menu li) .badge {
  justify-self: end;
}

.table {
  position: relative;
  width: 100%;
  border-radius: var(--rounded-box, 1rem);
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.table :where(.table-pin-rows thead tr) {
  position: sticky;
  top: 0px;
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}

.table :where(.table-pin-rows tfoot tr) {
  position: sticky;
  bottom: 0px;
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}

.table :where(.table-pin-cols tr th) {
  position: sticky;
  left: 0px;
  right: 0px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}

.toggle {
  flex-shrink: 0;
  --tglbg: var(--fallback-b1,oklch(var(--b1)/1));
  --handleoffset: 1.5rem;
  --handleoffsetcalculator: calc(var(--handleoffset) * -1);
  --togglehandleborder: 0 0;
  height: 1.5rem;
  width: 3rem;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-radius: var(--rounded-badge, 1.9rem);
  border-width: 1px;
  border-color: currentColor;
  background-color: currentColor;
  color: var(--fallback-bc,oklch(var(--bc)/0.5));
  transition: background,
    box-shadow var(--animation-input, 0.2s) ease-out;
  box-shadow: var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,
    0 0 0 2px var(--tglbg) inset,
    var(--togglehandleborder);
}

.btm-nav > * .label {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (prefers-reduced-motion: no-preference) {
  .btn {
    animation: button-pop var(--animation-btn, 0.25s) ease-out;
  }
}

.btn:active:hover,
  .btn:active:focus {
  animation: button-pop 0s ease-out;
  transform: scale(var(--btn-focus-scale, 0.97));
}

@supports not (color: oklch(0% 0 0)) {
  .btn {
    background-color: var(--btn-color, var(--fallback-b2));
    border-color: var(--btn-color, var(--fallback-b2));
  }
}

@supports (color: color-mix(in oklab, black, black)) {
  .btn-outline.btn-primary.btn-active {
    background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
  }

  .btn-outline.btn-secondary.btn-active {
    background-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);
  }

  .btn-outline.btn-accent.btn-active {
    background-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);
  }

  .btn-outline.btn-success.btn-active {
    background-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);
  }

  .btn-outline.btn-info.btn-active {
    background-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);
  }

  .btn-outline.btn-warning.btn-active {
    background-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);
  }

  .btn-outline.btn-error.btn-active {
    background-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);
  }
}

.btn:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
}

.btn.glass {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: currentColor;
}

.btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}

.btn-outline {
  border-color: currentColor;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.btn-outline.btn-active {
  --tw-border-opacity: 1;
  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)));
}

.btn-outline.btn-primary {
  --tw-text-opacity: 1;
  color: var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)));
}

.btn-outline.btn-primary.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
}

.btn-outline.btn-secondary {
  --tw-text-opacity: 1;
  color: var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)));
}

.btn-outline.btn-secondary.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)));
}

.btn-outline.btn-accent {
  --tw-text-opacity: 1;
  color: var(--fallback-a,oklch(var(--a)/var(--tw-text-opacity)));
}

.btn-outline.btn-accent.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)));
}

.btn-outline.btn-success {
  --tw-text-opacity: 1;
  color: var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity)));
}

.btn-outline.btn-success.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)));
}

.btn-outline.btn-info {
  --tw-text-opacity: 1;
  color: var(--fallback-in,oklch(var(--in)/var(--tw-text-opacity)));
}

.btn-outline.btn-info.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)));
}

.btn-outline.btn-warning {
  --tw-text-opacity: 1;
  color: var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity)));
}

.btn-outline.btn-warning.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)));
}

.btn-outline.btn-error {
  --tw-text-opacity: 1;
  color: var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)));
}

.btn-outline.btn-error.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)));
}

.btn.btn-disabled,
  .btn[disabled],
  .btn:disabled {
  --tw-border-opacity: 0;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-bg-opacity: 0.2;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-text-opacity: 0.2;
}

.btn:is(input[type="checkbox"]:checked),
.btn:is(input[type="radio"]:checked) {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
}

.btn:is(input[type="checkbox"]:checked):focus-visible, .btn:is(input[type="radio"]:checked):focus-visible {
  outline-color: var(--fallback-p,oklch(var(--p)/1));
}

@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.98));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

.checkbox:focus {
  box-shadow: none;
}

.checkbox:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--fallback-bc,oklch(var(--bc)/1));
}

.checkbox:disabled {
  border-width: 0px;
  cursor: not-allowed;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.2;
}

.checkbox:checked,
  .checkbox[aria-checked="true"] {
  background-repeat: no-repeat;
  animation: checkmark var(--animation-input, 0.2s) ease-out;
  background-color: var(--chkbg);
  background-image: linear-gradient(-45deg, transparent 65%, var(--chkbg) 65.99%),
      linear-gradient(45deg, transparent 75%, var(--chkbg) 75.99%),
      linear-gradient(-45deg, var(--chkbg) 40%, transparent 40.99%),
      linear-gradient(
        45deg,
        var(--chkbg) 30%,
        var(--chkfg) 30.99%,
        var(--chkfg) 40%,
        transparent 40.99%
      ),
      linear-gradient(-45deg, var(--chkfg) 50%, var(--chkbg) 50.99%);
}

.checkbox:indeterminate {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  background-repeat: no-repeat;
  animation: checkmark var(--animation-input, 0.2s) ease-out;
  background-image: linear-gradient(90deg, transparent 80%, var(--chkbg) 80%),
      linear-gradient(-90deg, transparent 80%, var(--chkbg) 80%),
      linear-gradient(0deg, var(--chkbg) 43%, var(--chkfg) 43%, var(--chkfg) 57%, var(--chkbg) 57%);
}

@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }

  50% {
    background-position-y: -2px;
  }

  100% {
    background-position-y: 0;
  }
}

.input input {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
  background-color: transparent;
}

.input input:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.input[list]::-webkit-calendar-picker-indicator {
  line-height: 1em;
}

.input-bordered {
  border-color: var(--fallback-bc,oklch(var(--bc)/0.2));
}

.input:focus,
  .input:focus-within {
  box-shadow: none;
  border-color: var(--fallback-bc,oklch(var(--bc)/0.2));
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--fallback-bc,oklch(var(--bc)/0.2));
}

.input:has(> input[disabled]),
  .input-disabled,
  .input:disabled,
  .input[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  color: var(--fallback-bc,oklch(var(--bc)/0.4));
}

.input:has(> input[disabled])::-moz-placeholder, .input-disabled::-moz-placeholder, .input:disabled::-moz-placeholder, .input[disabled]::-moz-placeholder {
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: 0.2;
}

.input:has(> input[disabled])::placeholder,
  .input-disabled::placeholder,
  .input:disabled::placeholder,
  .input[disabled]::placeholder {
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: 0.2;
}

.input:has(> input[disabled]) > input[disabled] {
  cursor: not-allowed;
}

.input::-webkit-date-and-time-value {
  text-align: inherit;
}

.join > :where(*:not(:first-child)) {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-inline-start: -1px;
}

.join > :where(*:not(:first-child)):is(.btn) {
  margin-inline-start: calc(var(--border-btn) * -1);
}

:where(.menu li:empty) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.1;
  margin: 0.5rem 1rem;
  height: 1px;
}

.menu :where(li ul):before {
  position: absolute;
  bottom: 0.75rem;
  inset-inline-start: 0px;
  top: 0.75rem;
  width: 1px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
  opacity: 0.1;
  content: "";
}

.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, 0.5rem);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: start;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
  text-wrap: balance;
}

:where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):is(summary):not(.active, .btn):focus-visible, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):is(summary):not(.active, .btn):focus-visible {
  cursor: pointer;
  background-color: var(--fallback-bc,oklch(var(--bc)/0.1));
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
}

.menu :where(li > details > summary)::-webkit-details-marker {
  display: none;
}

.menu :where(li > details > summary):after,
.menu :where(li > .menu-dropdown-toggle):after {
  justify-self: end;
  display: block;
  margin-top: -0.5rem;
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(45deg);
  transition-property: transform, margin-top;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  transform-origin: 75% 75%;
  box-shadow: 2px 2px;
  pointer-events: none;
}

.menu :where(li > details[open] > summary):after,
.menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {
  transform: rotate(225deg);
  margin-top: 0;
}

.mockup-phone .display {
  overflow: hidden;
  border-radius: 40px;
  margin-top: -25px;
}

.mockup-browser .mockup-browser-toolbar .input {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 1.75rem;
  width: 24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
  padding-left: 2rem;
  direction: ltr;
}

.mockup-browser .mockup-browser-toolbar .input:before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 50%;
  aspect-ratio: 1 / 1;
  height: 0.75rem;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 9999px;
  border-width: 2px;
  border-color: currentColor;
  opacity: 0.6;
}

.mockup-browser .mockup-browser-toolbar .input:after {
  content: "";
  position: absolute;
  left: 1.25rem;
  top: 50%;
  height: 0.5rem;
  --tw-translate-y: 25%;
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 9999px;
  border-width: 1px;
  border-color: currentColor;
  opacity: 0.6;
}

@keyframes modal-pop {
  0% {
    opacity: 0;
  }
}

@keyframes progress-loading {
  50% {
    background-position-x: -115%;
  }
}

@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }

  50% {
    box-shadow: 0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }

  100% {
    box-shadow: 0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,
      0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }
}

@keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }

  40% {
    transform: translateY(-0.125em);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes skeleton {
  from {
    background-position: 150%;
  }

  to {
    background-position: -50%;
  }
}

.table:where([dir="rtl"], [dir="rtl"] *) {
  text-align: right;
}

.table :where(th, td) {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  vertical-align: middle;
}

.table tr.active,
  .table tr.active:nth-child(even),
  .table-zebra tbody tr:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));
}

.table :where(thead tr, tbody tr:not(:last-child), tbody tr:first-child:last-child) {
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-bottom-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
}

.table :where(thead, tfoot) {
  white-space: nowrap;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: var(--fallback-bc,oklch(var(--bc)/0.6));
}

.table :where(tfoot) {
  border-top-width: 1px;
  --tw-border-opacity: 1;
  border-top-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
}

@keyframes toast-pop {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

[dir="rtl"] .toggle {
  --handleoffsetcalculator: calc(var(--handleoffset) * 1);
}

.toggle:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--fallback-bc,oklch(var(--bc)/0.2));
}

.toggle:hover {
  background-color: currentColor;
}

.toggle:checked,
  .toggle[aria-checked="true"] {
  background-image: none;
  --handleoffsetcalculator: var(--handleoffset);
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
}

[dir="rtl"] .toggle:checked, [dir="rtl"] .toggle[aria-checked="true"] {
  --handleoffsetcalculator: calc(var(--handleoffset) * -1);
}

.toggle:indeterminate {
  --tw-text-opacity: 1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,
      calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,
      0 0 0 2px var(--tglbg) inset;
}

[dir="rtl"] .toggle:indeterminate {
  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,
        calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,
        0 0 0 2px var(--tglbg) inset;
}

.toggle:disabled {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));
  background-color: transparent;
  opacity: 0.3;
  --togglehandleborder: 0 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset,
      var(--handleoffsetcalculator) 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset;
}

.btn-sm {
  height: 2rem;
  min-height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
}

.btn-md {
  height: 3rem;
  min-height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
}

.btn-square:where(.btn-sm) {
  height: 2rem;
  width: 2rem;
  padding: 0px;
}

.btn-square:where(.btn-md) {
  height: 3rem;
  width: 3rem;
  padding: 0px;
}

.btn-circle:where(.btn-xs) {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn-circle:where(.btn-sm) {
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn-circle:where(.btn-md) {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn-circle:where(.btn-lg) {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  padding: 0px;
}

.join.join-vertical {
  flex-direction: column;
}

.join.join-vertical .join-item:first-child:not(:last-child),
  .join.join-vertical *:first-child:not(:last-child) .join-item {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
  border-start-start-radius: inherit;
  border-start-end-radius: inherit;
}

.join.join-vertical .join-item:last-child:not(:first-child),
  .join.join-vertical *:last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: inherit;
  border-end-end-radius: inherit;
}

.join.join-horizontal {
  flex-direction: row;
}

.join.join-horizontal .join-item:first-child:not(:last-child),
  .join.join-horizontal *:first-child:not(:last-child) .join-item {
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: inherit;
  border-start-start-radius: inherit;
}

.join.join-horizontal .join-item:last-child:not(:first-child),
  .join.join-horizontal *:last-child:not(:first-child) .join-item {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
  border-end-end-radius: inherit;
  border-start-end-radius: inherit;
}

.join.join-vertical > :where(*:not(:first-child)) {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: -1px;
}

.join.join-vertical > :where(*:not(:first-child)):is(.btn) {
  margin-top: calc(var(--border-btn) * -1);
}

.join.join-horizontal > :where(*:not(:first-child)) {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-inline-start: -1px;
}

.join.join-horizontal > :where(*:not(:first-child)):is(.btn) {
  margin-inline-start: calc(var(--border-btn) * -1);
}

.invisible {
  visibility: hidden;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.left-0 {
  left: 0px;
}

.right-0 {
  right: 0px;
}

.top-1\\/4 {
  top: 25%;
}

.top-3 {
  top: 0.75rem;
}

.bottom-1\\/2 {
  bottom: 50%;
}

.top-1\\/2 {
  top: 50%;
}

.-z-10 {
  z-index: -10;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-32 {
  margin-left: 8rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-auto {
  margin-top: auto;
}

.mb-auto {
  margin-bottom: auto;
}

.box-border {
  box-sizing: border-box;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.table {
  display: table;
}

.hidden {
  display: none;
}

.size-6 {
  width: 1.5rem;
  height: 1.5rem;
}

.h-1\\/3 {
  height: 33.333333%;
}

.h-14 {
  height: 3.5rem;
}

.h-16 {
  height: 4rem;
}

.h-3 {
  height: 0.75rem;
}

.h-4 {
  height: 1rem;
}

.h-5 {
  height: 1.25rem;
}

.h-6 {
  height: 1.5rem;
}

.h-full {
  height: 100%;
}

.w-2\\/3 {
  width: 66.666667%;
}

.w-3 {
  width: 0.75rem;
}

.w-4 {
  width: 1rem;
}

.w-48 {
  width: 12rem;
}

.w-5 {
  width: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.w-72 {
  width: 18rem;
}

.w-full {
  width: 100%;
}

.min-w-72 {
  min-width: 18rem;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-sm {
  max-width: 24rem;
}

.max-w-xs {
  max-width: 20rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.table-fixed {
  table-layout: fixed;
}

.border-separate {
  border-collapse: separate;
}

.border-spacing-y-4 {
  --tw-border-spacing-y: 1rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}

.origin-\\[0\\] {
  transform-origin: 0;
}

.origin-top-right {
  transform-origin: top right;
}

.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-90 {
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-pointer {
  cursor: pointer;
}

.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.self-center {
  align-self: center;
}

.overflow-auto {
  overflow: auto;
}

.overflow-x-auto {
  overflow-x: auto;
}

.rounded-box {
  border-radius: var(--rounded-box, 1rem);
}

.rounded-lg {
  border-radius: var(--radius);
}

.rounded-md {
  border-radius: calc(var(--radius) - 2px);
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-t-2 {
  border-top-width: 2px;
}

.border-solid {
  border-style: solid;
}

.border-none {
  border-style: none;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.bg-\\[\\#f7f7f7\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(247 247 247 / var(--tw-bg-opacity));
}

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.p-10 {
  padding: 2.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-\\[10\\.32px\\] {
  padding: 10.32px;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.pb-20 {
  padding-bottom: 5rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.align-middle {
  vertical-align: middle;
}

.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.font-extrabold {
  font-weight: 800;
}

.font-medium {
  font-weight: 500;
}

.capitalize {
  text-transform: capitalize;
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.placeholder-gray-400\\/70::-moz-placeholder {
  color: rgb(156 163 175 / 0.7);
}

.placeholder-gray-400\\/70::placeholder {
  color: rgb(156 163 175 / 0.7);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-50 {
  opacity: 0.5;
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}

@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}

.fade-out {
  --tw-exit-opacity: 0;
}

.duration-100 {
  animation-duration: 100ms;
}

.duration-300 {
  animation-duration: 300ms;
}

.ease-in {
  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

html,body {
  height:100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#container{
  display:flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.border-high {
  border-left: 4px solid red;
}

.border-medium {
  border-left: 4px solid orange;
}

.border-low {
  border-left: 4px solid green;
}

.btn
{
  min-height: 0;
}

.btn-circle
{
  height:20px;
  width:20px;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.slide-up {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.5s ease-out;
}

.hover\\:border-blue-500:hover {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}

.hover\\:outline-none:hover {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.hover\\:ring-blue-300:hover {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.hover\\:ring-opacity-40:hover {
  --tw-ring-opacity: 0.4;
}

.focus\\:border-blue-400:focus {
  --tw-border-opacity: 1;
  border-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.focus\\:ring-opacity-40:focus {
  --tw-ring-opacity: 0.4;
}

.group:hover .group-hover\\:visible {
  visibility: visible;
}

.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:start-0 {
  inset-inline-start: 0px;
}

.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:font-medium {
  font-weight: 500;
}

.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

.dark\\:border-gray-600:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.dark\\:bg-blue-600:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.dark\\:bg-gray-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.dark\\:bg-gray-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.dark\\:text-gray-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.dark\\:text-gray-400:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.dark\\:text-white:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:placeholder-gray-500:is(.dark *)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 114 128 / var(--tw-placeholder-opacity));
}

.dark\\:placeholder-gray-500:is(.dark *)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 114 128 / var(--tw-placeholder-opacity));
}

.dark\\:hover\\:bg-blue-700:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-gray-700:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.dark\\:hover\\:text-white:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:hover\\:ring-blue-400:hover:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity));
}

.dark\\:hover\\:ring-opacity-40:hover:is(.dark *) {
  --tw-ring-opacity: 0.4;
}

.dark\\:focus\\:border-blue-300:focus:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.dark\\:focus\\:border-blue-500:focus:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.dark\\:focus\\:ring-blue-800:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));
}

.peer:focus ~ .peer-focus\\:dark\\:text-blue-500:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

@media (min-width: 640px) {
  .sm\\:w-auto {
    width: auto;
  }
}

.peer:focus ~ .rtl\\:peer-focus\\:left-auto:where([dir="rtl"], [dir="rtl"] *) {
  left: auto;
}

.peer:focus ~ .rtl\\:peer-focus\\:translate-x-1\\/4:where([dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: 25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
`, "",{"version":3,"sources":["webpack://./src/output.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;;;CAGC;;AAED;;;EAGE,sBAAsB;EACtB,MAAM;EACN,eAAe;EACf,MAAM;EACN,mBAAmB;EACnB,MAAM;EACN,qBAAqB;EACrB,MAAM;AACR;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;;;;;;;CAQC;;AAED;;EAEE,gBAAgB;EAChB,MAAM;EACN,8BAA8B;EAC9B,MAAM;EACN,gBAAgB;EAChB,MAAM;EACN,cAAc;KACX,WAAW;EACd,MAAM;EACN,+HAA+H;EAC/H,MAAM;EACN,6BAA6B;EAC7B,MAAM;EACN,+BAA+B;EAC/B,MAAM;EACN,wCAAwC;EACxC,MAAM;AACR;;AAEA;;;CAGC;;AAED;EACE,SAAS;EACT,MAAM;EACN,oBAAoB;EACpB,MAAM;AACR;;AAEA;;;;CAIC;;AAED;EACE,SAAS;EACT,MAAM;EACN,cAAc;EACd,MAAM;EACN,qBAAqB;EACrB,MAAM;AACR;;AAEA;;CAEC;;AAED;EACE,yCAAyC;UACjC,iCAAiC;AAC3C;;AAEA;;CAEC;;AAED;;;;;;EAME,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;CAEC;;AAED;EACE,cAAc;EACd,wBAAwB;AAC1B;;AAEA;;CAEC;;AAED;;EAEE,mBAAmB;AACrB;;AAEA;;;;;CAKC;;AAED;;;;EAIE,+GAA+G;EAC/G,MAAM;EACN,6BAA6B;EAC7B,MAAM;EACN,+BAA+B;EAC/B,MAAM;EACN,cAAc;EACd,MAAM;AACR;;AAEA;;CAEC;;AAED;EACE,cAAc;AAChB;;AAEA;;CAEC;;AAED;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;;;;CAIC;;AAED;EACE,cAAc;EACd,MAAM;EACN,qBAAqB;EACrB,MAAM;EACN,yBAAyB;EACzB,MAAM;AACR;;AAEA;;;;CAIC;;AAED;;;;;EAKE,oBAAoB;EACpB,MAAM;EACN,8BAA8B;EAC9B,MAAM;EACN,gCAAgC;EAChC,MAAM;EACN,eAAe;EACf,MAAM;EACN,oBAAoB;EACpB,MAAM;EACN,oBAAoB;EACpB,MAAM;EACN,uBAAuB;EACvB,MAAM;EACN,cAAc;EACd,MAAM;EACN,SAAS;EACT,MAAM;EACN,UAAU;EACV,MAAM;AACR;;AAEA;;CAEC;;AAED;;EAEE,oBAAoB;AACtB;;AAEA;;;CAGC;;AAED;;;;EAIE,0BAA0B;EAC1B,MAAM;EACN,6BAA6B;EAC7B,MAAM;EACN,sBAAsB;EACtB,MAAM;AACR;;AAEA;;CAEC;;AAED;EACE,aAAa;AACf;;AAEA;;CAEC;;AAED;EACE,gBAAgB;AAClB;;AAEA;;CAEC;;AAED;EACE,wBAAwB;AAC1B;;AAEA;;CAEC;;AAED;;EAEE,YAAY;AACd;;AAEA;;;CAGC;;AAED;EACE,6BAA6B;EAC7B,MAAM;EACN,oBAAoB;EACpB,MAAM;AACR;;AAEA;;CAEC;;AAED;EACE,wBAAwB;AAC1B;;AAEA;;;CAGC;;AAED;EACE,0BAA0B;EAC1B,MAAM;EACN,aAAa;EACb,MAAM;AACR;;AAEA;;CAEC;;AAED;EACE,kBAAkB;AACpB;;AAEA;;CAEC;;AAED;;;;;;;;;;;;;EAaE,SAAS;AACX;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;;;EAGE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;CAEC;;AAED;EACE,UAAU;AACZ;;AAEA;;CAEC;;AAED;EACE,gBAAgB;AAClB;;AAEA;;;CAGC;;AAED;EACE,UAAU;EACV,MAAM;EACN,cAAc;EACd,MAAM;AACR;;AAEA;;EAEE,UAAU;EACV,MAAM;EACN,cAAc;EACd,MAAM;AACR;;AAEA;;CAEC;;AAED;;EAEE,eAAe;AACjB;;AAEA;;CAEC;;AAED;EACE,eAAe;AACjB;;AAEA;;;;CAIC;;AAED;;;;;;;;EAQE,cAAc;EACd,MAAM;EACN,sBAAsB;EACtB,MAAM;AACR;;AAEA;;CAEC;;AAED;;EAEE,eAAe;EACf,YAAY;AACd;;AAEA,wEAAwE;;AAExE;EACE,aAAa;AACf;;AAEA;;EAEE,uDAAuD;EACvD,4CAA4C;AAC9C;;AAEA;EACE;IACE,mBAAmB;IACnB,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE;MACE,kBAAkB;MAClB,qBAAqB;MACrB,sBAAsB;MACtB,qBAAqB;MACrB,sBAAsB;MACtB,qBAAqB;MACrB,sBAAsB;MACtB,qBAAqB;MACrB,sBAAsB;MACtB,sBAAsB;MACtB,sBAAsB;MACtB,sBAAsB;MACtB,sBAAsB;MACtB,sBAAsB;MACtB,uBAAuB;MACvB,sBAAsB;MACtB,uBAAuB;MACvB,sBAAsB;MACtB,uBAAuB;MACvB,sBAAsB;MACtB,uBAAuB;IACzB;EACF;AACF;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,+EAA+E;AACjF;;AAEA;EACE,+EAA+E;AACjF;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,qBAAqB;EACrB,wBAAwB;EACxB,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,gCAAgC;EAChC,kCAAkC;EAClC,cAAc;EACd,kBAAkB;EAClB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE;IACE,kBAAkB;IAClB,wBAAwB;IACxB,qBAAqB;IACrB,wBAAwB;IACxB,wBAAwB;IACxB,2BAA2B;IAC3B,yBAAyB;IACzB,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,wBAAwB;IACxB,sBAAsB;IACtB,wBAAwB;IACxB,iCAAiC;IACjC,gCAAgC;IAChC,kCAAkC;IAClC,kCAAkC;IAClC,iCAAiC;IACjC,gCAAgC;EAClC;AACF;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,qBAAqB;EACrB,wBAAwB;EACxB,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,gCAAgC;EAChC,kCAAkC;EAClC,cAAc;EACd,kBAAkB;EAClB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,qBAAqB;EACrB,wBAAwB;EACxB,wBAAwB;EACxB,2BAA2B;EAC3B,yBAAyB;EACzB,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;EACtB,wBAAwB;EACxB,iCAAiC;EACjC,gCAAgC;EAChC,kCAAkC;EAClC,kCAAkC;EAClC,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,iBAAiB;EACjB,iCAAiC;EACjC,oBAAoB;EACpB,oCAAoC;EACpC,4BAA4B;EAC5B,iCAAiC;EACjC,0BAA0B;EAC1B,yCAAyC;EACzC,sBAAsB;EACtB,qCAAqC;EACrC,uBAAuB;EACvB,sCAAsC;EACtC,4BAA4B;EAC5B,qCAAqC;EACrC,2BAA2B;EAC3B,0BAA0B;EAC1B,sBAAsB;EACtB,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,wCAAwC;EACxC,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,wBAAwB;EACxB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,cAAc;EACd,cAAc;EACd,eAAe;EACf,eAAe;EACf,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,sCAAsC;EACtC,8BAA8B;EAC9B,6BAA6B;EAC7B,4BAA4B;EAC5B,eAAe;EACf,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,kBAAkB;EAClB,2BAA2B;EAC3B,4BAA4B;EAC5B,sCAAsC;EACtC,kCAAkC;EAClC,2BAA2B;EAC3B,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,2BAA2B;EAC3B,yBAAyB;EACzB,0BAA0B;EAC1B,2BAA2B;EAC3B,uBAAuB;EACvB,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;EACtB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,wBAAwB;EACxB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,cAAc;EACd,cAAc;EACd,eAAe;EACf,eAAe;EACf,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,sCAAsC;EACtC,8BAA8B;EAC9B,6BAA6B;EAC7B,4BAA4B;EAC5B,eAAe;EACf,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,kBAAkB;EAClB,2BAA2B;EAC3B,4BAA4B;EAC5B,sCAAsC;EACtC,kCAAkC;EAClC,2BAA2B;EAC3B,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,2BAA2B;EAC3B,yBAAyB;EACzB,0BAA0B;EAC1B,2BAA2B;EAC3B,uBAAuB;EACvB,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;EACtB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE;IACE,oBAAoB;IACpB,iEAAiE;EACnE;;EAEA;;;IAGE,kBAAkB;IAClB,wEAAwE;IACxE,oBAAoB;IACpB,iEAAiE;EACnE;;EAEA;;IAEE,kBAAkB;IAClB,0EAA0E;EAC5E;;EAEA;;IAEE,kBAAkB;IAClB,0EAA0E;EAC5E;AACF;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,yBAAyB;KACtB,sBAAsB;UACjB,iBAAiB;EACzB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;EACzC,yBAAyB;EACzB,2EAA2E;EAC3E,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,0BAA0B;EAC1B,0BAA0B;EAC1B,sDAAsD;EACtD,oCAAoC;EACpC,0FAA0F;EAC1F,oBAAoB;EACpB,iEAAiE;EACjE,0CAA0C;EAC1C,uDAAuD;EACvD,uGAAuG;EACvG,oDAAoD;EACpD,2EAA2E;EAC3E,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;;;EAGE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;AAC1B;;AAEA;;EAEE,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,8CAA8C;EAC9C,8CAA8C;EAC9C,cAAc;EACd,aAAa;EACb,eAAe;EACf,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,yCAAyC;EACzC,iBAAiB;EACjB,0EAA0E;EAC1E,wBAAwB;AAC1B;;AAEA;EACE;IACE,sBAAsB;IACtB,0EAA0E;IAC1E,kBAAkB;IAClB,0EAA0E;EAC5E;;EAEA;IACE;MACE;;;;WAIK;MACL;;;;WAIK;IACP;EACF;;EAEA;IACE;MACE,sDAAsD;MACtD,kDAAkD;IACpD;EACF;;EAEA;IACE,oBAAoB;IACpB,2BAA2B;EAC7B;;EAEA;IACE,sBAAsB;IACtB,0EAA0E;IAC1E,kBAAkB;IAClB,0EAA0E;IAC1E,oBAAoB;IACpB,iEAAiE;EACnE;;EAEA;IACE,oBAAoB;IACpB,iEAAiE;EACnE;;EAEA;IACE;MACE,qFAAqF;MACrF,iFAAiF;IACnF;EACF;;EAEA;IACE,oBAAoB;IACpB,iEAAiE;EACnE;;EAEA;IACE;MACE,qFAAqF;MACrF,iFAAiF;IACnF;EACF;;EAEA;IACE,oBAAoB;IACpB,iEAAiE;EACnE;;EAEA;IACE;MACE,qFAAqF;MACrF,iFAAiF;IACnF;EACF;;EAEA;IACE,oBAAoB;IACpB,mEAAmE;EACrE;;EAEA;IACE;MACE,uFAAuF;MACvF,mFAAmF;IACrF;EACF;;EAEA;IACE,oBAAoB;IACpB,mEAAmE;EACrE;;EAEA;IACE;MACE,uFAAuF;MACvF,mFAAmF;IACrF;EACF;;EAEA;IACE,oBAAoB;IACpB,mEAAmE;EACrE;;EAEA;IACE;MACE,uFAAuF;MACvF,mFAAmF;IACrF;EACF;;EAEA;IACE,oBAAoB;IACpB,mEAAmE;EACrE;;EAEA;IACE;MACE,uFAAuF;MACvF,mFAAmF;IACrF;EACF;;EAEA;;;IAGE,sBAAsB;IACtB,wEAAwE;IACxE,oBAAoB;IACpB,iEAAiE;IACjE,sBAAsB;EACxB;;EAEA;IACE;MACE,qFAAqF;MACrF,iFAAiF;IACnF;EACF;;EAEA;IACE,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE;MACE,yDAAyD;IAC3D;EACF;AACF;;AAEA;EACE,aAAa;EACb,yBAAyB;KACtB,sBAAsB;UACjB,iBAAiB;EACzB,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,yCAAyC;EACzC,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,0EAA0E;AAC5E;;AAEA;;EAEE,iBAAiB;EACjB,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;;EAEE,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;;EAEE,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;;EAEE,gCAAgC;EAChC,8BAA8B;AAChC;;AAEA;;EAEE,gCAAgC;EAChC,kCAAkC;AACpC;;AAEA;;EAEE,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;;EAEE,gCAAgC;EAChC,8BAA8B;AAChC;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,6DAA6D;EAC7D,yBAAyB;KACtB,sBAAsB;UACjB,iBAAiB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;KACtB,sBAAsB;UACjB,iBAAiB;EACzB,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,uCAAuC;EACvC,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,QAAQ;EACR,UAAU;EACV,kBAAkB;EAClB,0EAA0E;AAC5E;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,0EAA0E;AAC5E;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,0EAA0E;AAC5E;;AAEA;EACE,cAAc;EACd,8CAA8C;EAC9C,sBAAsB;EACtB,wDAAwD;EACxD,yBAAyB;EACzB,cAAc;EACd,WAAW;EACX,eAAe;EACf,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,2CAA2C;EAC3C,iBAAiB;EACjB,0BAA0B;EAC1B,8BAA8B;EAC9B,8CAA8C;EAC9C;oDACkD;EAClD;;6BAE2B;AAC7B;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE;IACE,0DAA0D;EAC5D;AACF;;AAEA;;EAEE,iCAAiC;EACjC,8CAA8C;AAChD;;AAEA;EACE;IACE,sDAAsD;IACtD,kDAAkD;EACpD;AACF;;AAEA;EACE;IACE,qFAAqF;IACrF,iFAAiF;EACnF;;EAEA;IACE,qFAAqF;IACrF,iFAAiF;EACnF;;EAEA;IACE,qFAAqF;IACrF,iFAAiF;EACnF;;EAEA;IACE,uFAAuF;IACvF,mFAAmF;EACrF;;EAEA;IACE,uFAAuF;IACvF,mFAAmF;EACrF;;EAEA;IACE,uFAAuF;IACvF,mFAAmF;EACrF;;EAEA;IACE,uFAAuF;IACvF,mFAAmF;EACrF;AACF;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;EAC9B,uGAAuG;EACvG,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,oBAAoB;EACpB,iEAAiE;EACjE,sBAAsB;EACtB,8BAA8B;EAC9B,uGAAuG;AACzG;;AAEA;EACE,sBAAsB;EACtB,0EAA0E;EAC1E,kBAAkB;EAClB,0EAA0E;EAC1E,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,+DAA+D;AACjE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,+DAA+D;AACjE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,+DAA+D;AACjE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,mEAAmE;AACrE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,mEAAmE;AACrE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,mEAAmE;AACrE;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,oBAAoB;EACpB,mEAAmE;AACrE;;AAEA;;;EAGE,sBAAsB;EACtB,wEAAwE;EACxE,oBAAoB;EACpB,iEAAiE;EACjE,sBAAsB;AACxB;;AAEA;;EAEE,sBAAsB;EACtB,wEAAwE;EACxE,kBAAkB;EAClB,wEAAwE;EACxE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE;IACE,8CAA8C;EAChD;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,oDAAoD;AACtD;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,0EAA0E;EAC1E,YAAY;AACd;;AAEA;;EAEE,4BAA4B;EAC5B,0DAA0D;EAC1D,8BAA8B;EAC9B;;;;;;;;;;oEAUkE;AACpE;;AAEA;EACE,kBAAkB;EAClB,0EAA0E;EAC1E,4BAA4B;EAC5B,0DAA0D;EAC1D;;mGAEiG;AACnG;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,kBAAkB;EAClB,wEAAwE;EACxE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qDAAqD;AACvD;;AAEA;;EAEE,gBAAgB;EAChB,qDAAqD;EACrD,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;;;;EAIE,mBAAmB;EACnB,sBAAsB;EACtB,0EAA0E;EAC1E,kBAAkB;EAClB,0EAA0E;EAC1E,8CAA8C;AAChD;;AAEA;EACE,wEAAwE;EACxE,6BAA6B;AAC/B;;AAEA;;;;EAIE,wEAAwE;EACxE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,kBAAkB;EAClB,0EAA0E;EAC1E,YAAY;EACZ,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,0EAA0E;EAC1E,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,yCAAyC;EACzC,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,gKAAgK;EAChK,wJAAwJ;EACxJ,iLAAiL;EACjL,wDAAwD;EACxD,sDAAsD;EACtD,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yDAAyD;EACzD,oBAAoB;EACpB,iEAAiE;EACjE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;;EAGE,kBAAkB;EAClB,wEAAwE;EACxE,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,wBAAwB;EACxB,0CAA0C;EAC1C,yBAAyB;EACzB,wDAAwD;EACxD,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,0EAA0E;EAC1E,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,+LAA+L;EAC/L,qBAAqB;EACrB,iBAAiB;EACjB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,cAAc;EACd,qBAAqB;EACrB,mBAAmB;EACnB,+LAA+L;EAC/L,qBAAqB;EACrB,iBAAiB;EACjB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE;4DACwD;EAC1D;;EAEA;IACE;2DACuD;EACzD;;EAEA;IACE;2DACuD;EACzD;AACF;;AAEA;EACE;IACE,+BAA+B;EACjC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;;EAGE,kBAAkB;EAClB,0EAA0E;AAC5E;;AAEA;EACE,wBAAwB;EACxB,sBAAsB;EACtB,iFAAiF;AACnF;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,8CAA8C;AAChD;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,8EAA8E;AAChF;;AAEA;EACE;IACE,qBAAqB;IACrB,UAAU;EACZ;;EAEA;IACE,mBAAmB;IACnB,UAAU;EACZ;AACF;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;EAEE,sBAAsB;EACtB,6CAA6C;EAC7C,oBAAoB;EACpB,iEAAiE;AACnE;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,oBAAoB;EACpB,iEAAiE;EACjE;;kCAEgC;AAClC;;AAEA;EACE;;oCAEkC;AACpC;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,0EAA0E;EAC1E,6BAA6B;EAC7B,YAAY;EACZ;uFACqF;AACvF;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,0BAA0B;EAC1B,wBAAwB;EACxB,kCAAkC;EAClC,gCAAgC;AAClC;;AAEA;;EAEE,4BAA4B;EAC5B,0BAA0B;EAC1B,gCAAgC;EAChC,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,wBAAwB;EACxB,0BAA0B;EAC1B,gCAAgC;EAChC,kCAAkC;AACpC;;AAEA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,qEAAqE;AACvE;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,+LAA+L;AACjM;;AAEA;EACE,eAAe;EACf,eAAe;EACf,+LAA+L;AACjM;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,+LAA+L;AACjM;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,+LAA+L;AACjM;;AAEA;EACE,+LAA+L;AACjM;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,4DAA4D;EAC5D,qDAAqD;AACvD;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,yDAAyD;AAC3D;;AAEA;EACE,sBAAsB;EACtB,yDAAyD;AAC3D;;AAEA;EACE,sBAAsB;EACtB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,yDAAyD;AAC3D;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,yDAAyD;AAC3D;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,+HAA+H;AACjI;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,6CAA6C;AAC/C;;AAEA;EACE,oBAAoB;EACpB,6CAA6C;AAC/C;;AAEA;EACE,oBAAoB;EACpB,6CAA6C;AAC/C;;AAEA;EACE,oBAAoB;EACpB,gDAAgD;AAClD;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gFAAgF;EAChF,oGAAoG;EACpG,uGAAuG;AACzG;;AAEA;EACE,iLAAiL;AACnL;;AAEA;EACE,gKAAgK;EAChK,wJAAwJ;EACxJ,iLAAiL;EACjL,wDAAwD;EACxD,0BAA0B;AAC5B;;AAEA;EACE,+FAA+F;EAC/F,wDAAwD;EACxD,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE;IACE,mCAAmC;IACnC,iNAAiN;EACnN;AACF;;AAEA;EACE;IACE,kCAAkC;IAClC,2MAA2M;EAC7M;AACF;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,WAAW;EACX,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,wDAAwD;AAC1D;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,0DAA0D;AAC5D;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,wDAAwD;AAC1D;;AAEA;EACE,sBAAsB;EACtB,uDAAuD;AACzD;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,2GAA2G;EAC3G,yGAAyG;EACzG,4FAA4F;AAC9F;;AAEA;EACE,2GAA2G;EAC3G,yGAAyG;EACzG,4FAA4F;AAC9F;;AAEA;EACE,2GAA2G;EAC3G,yGAAyG;EACzG,4FAA4F;AAC9F;;AAEA;EACE,oBAAoB;EACpB,0DAA0D;AAC5D;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,+LAA+L;AACjM;;AAEA;EACE,qBAAqB;EACrB,+LAA+L;AACjM;;AAEA;EACE,eAAe;EACf,eAAe;EACf,+LAA+L;AACjM;;AAEA;EACE,eAAe;EACf,eAAe;EACf,+LAA+L;AACjM;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,+LAA+L;AACjM;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,+LAA+L;AACjM;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,8CAA8C;AAChD;;AAEA;EACE,sBAAsB;EACtB,sDAAsD;AACxD;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,oBAAoB;EACpB,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,gDAAgD;AAClD;;AAEA;EACE,2BAA2B;EAC3B,uDAAuD;AACzD;;AAEA;EACE,2BAA2B;EAC3B,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,oBAAoB;EACpB,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,yDAAyD;AAC3D;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,yDAAyD;AAC3D;;AAEA;EACE,sBAAsB;EACtB,wDAAwD;AAC1D;;AAEA;EACE,oBAAoB;EACpB,wDAAwD;AAC1D;;AAEA;EACE,oBAAoB;EACpB,+CAA+C;AACjD;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,+LAA+L;AACjM","sourcesContent":["/*\n! tailwindcss v3.4.7 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  letter-spacing: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n:root,\n[data-theme] {\n  background-color: var(--fallback-b1,oklch(var(--b1)/1));\n  color: var(--fallback-bc,oklch(var(--bc)/1));\n}\n\n@supports not (color: oklch(0% 0 0)) {\n  :root {\n    color-scheme: light;\n    --fallback-p: #491eff;\n    --fallback-pc: #d4dbff;\n    --fallback-s: #ff41c7;\n    --fallback-sc: #fff9fc;\n    --fallback-a: #00cfbd;\n    --fallback-ac: #00100d;\n    --fallback-n: #2b3440;\n    --fallback-nc: #d7dde4;\n    --fallback-b1: #ffffff;\n    --fallback-b2: #e5e6e6;\n    --fallback-b3: #e5e6e6;\n    --fallback-bc: #1f2937;\n    --fallback-in: #00b3f0;\n    --fallback-inc: #000000;\n    --fallback-su: #00ca92;\n    --fallback-suc: #000000;\n    --fallback-wa: #ffc22d;\n    --fallback-wac: #000000;\n    --fallback-er: #ff6f70;\n    --fallback-erc: #000000;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      color-scheme: dark;\n      --fallback-p: #7582ff;\n      --fallback-pc: #050617;\n      --fallback-s: #ff71cf;\n      --fallback-sc: #190211;\n      --fallback-a: #00c7b5;\n      --fallback-ac: #000e0c;\n      --fallback-n: #2a323c;\n      --fallback-nc: #a6adbb;\n      --fallback-b1: #1d232a;\n      --fallback-b2: #191e24;\n      --fallback-b3: #15191e;\n      --fallback-bc: #a6adbb;\n      --fallback-in: #00b3f0;\n      --fallback-inc: #000000;\n      --fallback-su: #00ca92;\n      --fallback-suc: #000000;\n      --fallback-wa: #ffc22d;\n      --fallback-wac: #000000;\n      --fallback-er: #ff6f70;\n      --fallback-erc: #000000;\n    }\n  }\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n* {\n  scrollbar-color: color-mix(in oklch, currentColor 35%, transparent) transparent;\n}\n\n*:hover {\n  scrollbar-color: color-mix(in oklch, currentColor 60%, transparent) transparent;\n}\n\n:root {\n  color-scheme: light;\n  --in: 72.06% 0.191 231.6;\n  --su: 64.8% 0.150 160;\n  --wa: 84.71% 0.199 83.87;\n  --er: 71.76% 0.221 22.18;\n  --pc: 89.824% 0.06192 275.75;\n  --ac: 15.352% 0.0368 183.61;\n  --inc: 0% 0 0;\n  --suc: 0% 0 0;\n  --wac: 0% 0 0;\n  --erc: 0% 0 0;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 49.12% 0.3096 275.75;\n  --s: 69.71% 0.329 342.55;\n  --sc: 98.71% 0.0106 342.55;\n  --a: 76.76% 0.184 183.61;\n  --n: 32.1785% 0.02476 255.701624;\n  --nc: 89.4994% 0.011585 252.096176;\n  --b1: 100% 0 0;\n  --b2: 96.1151% 0 0;\n  --b3: 92.4169% 0.00108 197.137559;\n  --bc: 27.8078% 0.029596 256.847952;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    color-scheme: dark;\n    --in: 72.06% 0.191 231.6;\n    --su: 64.8% 0.150 160;\n    --wa: 84.71% 0.199 83.87;\n    --er: 71.76% 0.221 22.18;\n    --pc: 13.138% 0.0392 275.75;\n    --sc: 14.96% 0.052 342.55;\n    --ac: 14.902% 0.0334 183.61;\n    --inc: 0% 0 0;\n    --suc: 0% 0 0;\n    --wac: 0% 0 0;\n    --erc: 0% 0 0;\n    --rounded-box: 1rem;\n    --rounded-btn: 0.5rem;\n    --rounded-badge: 1.9rem;\n    --animation-btn: 0.25s;\n    --animation-input: .2s;\n    --btn-focus-scale: 0.95;\n    --border-btn: 1px;\n    --tab-border: 1px;\n    --tab-radius: 0.5rem;\n    --p: 65.69% 0.196 275.75;\n    --s: 74.8% 0.26 342.55;\n    --a: 74.51% 0.167 183.61;\n    --n: 31.3815% 0.021108 254.139175;\n    --nc: 74.6477% 0.0216 264.435964;\n    --b1: 25.3267% 0.015896 252.417568;\n    --b2: 23.2607% 0.013807 253.100675;\n    --b3: 21.1484% 0.01165 254.087939;\n    --bc: 74.6477% 0.0216 264.435964;\n  }\n}\n\n[data-theme=light] {\n  color-scheme: light;\n  --in: 72.06% 0.191 231.6;\n  --su: 64.8% 0.150 160;\n  --wa: 84.71% 0.199 83.87;\n  --er: 71.76% 0.221 22.18;\n  --pc: 89.824% 0.06192 275.75;\n  --ac: 15.352% 0.0368 183.61;\n  --inc: 0% 0 0;\n  --suc: 0% 0 0;\n  --wac: 0% 0 0;\n  --erc: 0% 0 0;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 49.12% 0.3096 275.75;\n  --s: 69.71% 0.329 342.55;\n  --sc: 98.71% 0.0106 342.55;\n  --a: 76.76% 0.184 183.61;\n  --n: 32.1785% 0.02476 255.701624;\n  --nc: 89.4994% 0.011585 252.096176;\n  --b1: 100% 0 0;\n  --b2: 96.1151% 0 0;\n  --b3: 92.4169% 0.00108 197.137559;\n  --bc: 27.8078% 0.029596 256.847952;\n}\n\n[data-theme=dark] {\n  color-scheme: dark;\n  --in: 72.06% 0.191 231.6;\n  --su: 64.8% 0.150 160;\n  --wa: 84.71% 0.199 83.87;\n  --er: 71.76% 0.221 22.18;\n  --pc: 13.138% 0.0392 275.75;\n  --sc: 14.96% 0.052 342.55;\n  --ac: 14.902% 0.0334 183.61;\n  --inc: 0% 0 0;\n  --suc: 0% 0 0;\n  --wac: 0% 0 0;\n  --erc: 0% 0 0;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 65.69% 0.196 275.75;\n  --s: 74.8% 0.26 342.55;\n  --a: 74.51% 0.167 183.61;\n  --n: 31.3815% 0.021108 254.139175;\n  --nc: 74.6477% 0.0216 264.435964;\n  --b1: 25.3267% 0.015896 252.417568;\n  --b2: 23.2607% 0.013807 253.100675;\n  --b3: 21.1484% 0.01165 254.087939;\n  --bc: 74.6477% 0.0216 264.435964;\n}\n\n:root {\n  --background: 0 0% 100%;\n  --foreground: 222.2 84% 4.9%;\n  --card: 0 0% 100%;\n  --card-foreground: 222.2 84% 4.9%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 222.2 84% 4.9%;\n  --primary: 222.2 47.4% 11.2%;\n  --primary-foreground: 210 40% 98%;\n  --secondary: 210 40% 96.1%;\n  --secondary-foreground: 222.2 47.4% 11.2%;\n  --muted: 210 40% 96.1%;\n  --muted-foreground: 215.4 16.3% 46.9%;\n  --accent: 210 40% 96.1%;\n  --accent-foreground: 222.2 47.4% 11.2%;\n  --destructive: 0 84.2% 60.2%;\n  --destructive-foreground: 210 40% 98%;\n  --border: 214.3 31.8% 91.4%;\n  --input: 214.3 31.8% 91.4%;\n  --ring: 222.2 84% 4.9%;\n  --radius: 0.5rem;\n  --chart-1: 12 76% 61%;\n  --chart-2: 173 58% 39%;\n  --chart-3: 197 37% 24%;\n  --chart-4: 43 74% 66%;\n  --chart-5: 27 87% 67%;\n}\n\n* {\n  border-color: hsl(var(--border));\n}\n\nbody {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n@media (min-width: 1400px) {\n  .container {\n    max-width: 1400px;\n  }\n}\n\n.avatar.placeholder > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (hover:hover) {\n  .label a:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n  }\n\n  .menu li > *:not(ul, .menu-title, details, .btn):active,\n.menu li > *:not(ul, .menu-title, details, .btn).active,\n.menu li > details > summary:active {\n    --tw-bg-opacity: 1;\n    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));\n    --tw-text-opacity: 1;\n    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));\n  }\n\n  .table tr.hover:hover,\n  .table tr.hover:nth-child(even):hover {\n    --tw-bg-opacity: 1;\n    background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));\n  }\n\n  .table-zebra tr.hover:hover,\n  .table-zebra tr.hover:nth-child(even):hover {\n    --tw-bg-opacity: 1;\n    background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));\n  }\n}\n\n.btn {\n  display: inline-flex;\n  height: 3rem;\n  min-height: 3rem;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--rounded-btn, 0.5rem);\n  border-color: transparent;\n  border-color: oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1em;\n  gap: 0.5rem;\n  font-weight: 600;\n  text-decoration-line: none;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  border-width: var(--border-btn, 1px);\n  transition-property: color, background-color, border-color, opacity, box-shadow, transform;\n  --tw-text-opacity: 1;\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: var(--fallback-bc,oklch(var(--bc)/1));\n  background-color: oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 1;\n  --tw-border-opacity: 1;\n}\n\n.btn-disabled,\n  .btn[disabled],\n  .btn:disabled {\n  pointer-events: none;\n}\n\n.btn-circle {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\n\n:where(.btn:is(input[type=\"checkbox\"])),\n:where(.btn:is(input[type=\"radio\"])) {\n  width: auto;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.btn:is(input[type=\"checkbox\"]):after,\n.btn:is(input[type=\"radio\"]):after {\n  --tw-content: attr(aria-label);\n  content: var(--tw-content);\n}\n\n.checkbox {\n  flex-shrink: 0;\n  --chkbg: var(--fallback-bc,oklch(var(--bc)/1));\n  --chkfg: var(--fallback-b1,oklch(var(--b1)/1));\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: var(--rounded-btn, 0.5rem);\n  border-width: 1px;\n  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));\n  --tw-border-opacity: 0.2;\n}\n\n@media (hover: hover) {\n  .btn:hover {\n    --tw-border-opacity: 1;\n    border-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));\n    --tw-bg-opacity: 1;\n    background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn:hover {\n      background-color: color-mix(\n            in oklab,\n            oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,\n            black\n          );\n      border-color: color-mix(\n            in oklab,\n            oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,\n            black\n          );\n    }\n  }\n\n  @supports not (color: oklch(0% 0 0)) {\n    .btn:hover {\n      background-color: var(--btn-color, var(--fallback-b2));\n      border-color: var(--btn-color, var(--fallback-b2));\n    }\n  }\n\n  .btn.glass:hover {\n    --glass-opacity: 25%;\n    --glass-border-opacity: 15%;\n  }\n\n  .btn-outline:hover {\n    --tw-border-opacity: 1;\n    border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));\n    --tw-bg-opacity: 1;\n    background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));\n    --tw-text-opacity: 1;\n    color: var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)));\n  }\n\n  .btn-outline.btn-primary:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-primary:hover {\n      background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);\n    }\n  }\n\n  .btn-outline.btn-secondary:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-secondary:hover {\n      background-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);\n    }\n  }\n\n  .btn-outline.btn-accent:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-accent:hover {\n      background-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);\n    }\n  }\n\n  .btn-outline.btn-success:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-success:hover {\n      background-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);\n    }\n  }\n\n  .btn-outline.btn-info:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-info:hover {\n      background-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);\n    }\n  }\n\n  .btn-outline.btn-warning:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-warning:hover {\n      background-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);\n    }\n  }\n\n  .btn-outline.btn-error:hover {\n    --tw-text-opacity: 1;\n    color: var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)));\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn-outline.btn-error:hover {\n      background-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);\n    }\n  }\n\n  .btn-disabled:hover,\n    .btn[disabled]:hover,\n    .btn:disabled:hover {\n    --tw-border-opacity: 0;\n    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));\n    --tw-bg-opacity: 0.2;\n    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n    --tw-text-opacity: 0.2;\n  }\n\n  @supports (color: color-mix(in oklab, black, black)) {\n    .btn:is(input[type=\"checkbox\"]:checked):hover, .btn:is(input[type=\"radio\"]:checked):hover {\n      background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);\n      border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);\n    }\n  }\n\n  :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {\n    cursor: pointer;\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n  }\n\n  @supports (color: oklch(0% 0 0)) {\n    :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {\n      background-color: var(--fallback-bc,oklch(var(--bc)/0.1));\n    }\n  }\n}\n\n.label {\n  display: flex;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.input {\n  flex-shrink: 1;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1rem;\n  line-height: 2;\n  line-height: 1.5rem;\n  border-radius: var(--rounded-btn, 0.5rem);\n  border-width: 1px;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));\n}\n\n.input[type=\"number\"]::-webkit-inner-spin-button,\n.input-md[type=\"number\"]::-webkit-inner-spin-button {\n  margin-top: -1rem;\n  margin-bottom: -1rem;\n  margin-inline-end: -1rem;\n}\n\n.join {\n  display: inline-flex;\n  align-items: stretch;\n  border-radius: var(--rounded-btn, 0.5rem);\n}\n\n.join :where(.join-item) {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}\n\n.join .join-item:not(:first-child):not(:last-child),\n  .join *:not(:first-child):not(:last-child) .join-item {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}\n\n.join .join-item:first-child:not(:last-child),\n  .join *:first-child:not(:last-child) .join-item {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}\n\n.join .dropdown .join-item:first-child:not(:last-child),\n  .join *:first-child:not(:last-child) .dropdown .join-item {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}\n\n.join :where(.join-item:first-child:not(:last-child)),\n  .join :where(*:first-child:not(:last-child) .join-item) {\n  border-end-start-radius: inherit;\n  border-start-start-radius: inherit;\n}\n\n.join .join-item:last-child:not(:first-child),\n  .join *:last-child:not(:first-child) .join-item {\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n}\n\n.join :where(.join-item:last-child:not(:first-child)),\n  .join :where(*:last-child:not(:first-child) .join-item) {\n  border-start-end-radius: inherit;\n  border-end-end-radius: inherit;\n}\n\n@supports not selector(:has(*)) {\n  :where(.join *) {\n    border-radius: inherit;\n  }\n}\n\n@supports selector(:has(*)) {\n  :where(.join *:has(.join-item)) {\n    border-radius: inherit;\n  }\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  padding: 0.5rem;\n}\n\n.menu :where(li ul) {\n  position: relative;\n  white-space: nowrap;\n  margin-inline-start: 1rem;\n  padding-inline-start: 0.5rem;\n}\n\n.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {\n  display: grid;\n  grid-auto-flow: column;\n  align-content: flex-start;\n  align-items: center;\n  gap: 0.5rem;\n  grid-auto-columns: minmax(auto, max-content) auto max-content;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.menu li.disabled {\n  cursor: not-allowed;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  color: var(--fallback-bc,oklch(var(--bc)/0.3));\n}\n\n.menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {\n  display: none;\n}\n\n:where(.menu li) {\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n\n:where(.menu li) .badge {\n  justify-self: end;\n}\n\n.table {\n  position: relative;\n  width: 100%;\n  border-radius: var(--rounded-box, 1rem);\n  text-align: left;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.table :where(.table-pin-rows thead tr) {\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));\n}\n\n.table :where(.table-pin-rows tfoot tr) {\n  position: sticky;\n  bottom: 0px;\n  z-index: 1;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));\n}\n\n.table :where(.table-pin-cols tr th) {\n  position: sticky;\n  left: 0px;\n  right: 0px;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));\n}\n\n.toggle {\n  flex-shrink: 0;\n  --tglbg: var(--fallback-b1,oklch(var(--b1)/1));\n  --handleoffset: 1.5rem;\n  --handleoffsetcalculator: calc(var(--handleoffset) * -1);\n  --togglehandleborder: 0 0;\n  height: 1.5rem;\n  width: 3rem;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: var(--rounded-badge, 1.9rem);\n  border-width: 1px;\n  border-color: currentColor;\n  background-color: currentColor;\n  color: var(--fallback-bc,oklch(var(--bc)/0.5));\n  transition: background,\n    box-shadow var(--animation-input, 0.2s) ease-out;\n  box-shadow: var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,\n    0 0 0 2px var(--tglbg) inset,\n    var(--togglehandleborder);\n}\n\n.btm-nav > * .label {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .btn {\n    animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  }\n}\n\n.btn:active:hover,\n  .btn:active:focus {\n  animation: button-pop 0s ease-out;\n  transform: scale(var(--btn-focus-scale, 0.97));\n}\n\n@supports not (color: oklch(0% 0 0)) {\n  .btn {\n    background-color: var(--btn-color, var(--fallback-b2));\n    border-color: var(--btn-color, var(--fallback-b2));\n  }\n}\n\n@supports (color: color-mix(in oklab, black, black)) {\n  .btn-outline.btn-primary.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);\n  }\n\n  .btn-outline.btn-secondary.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-s,oklch(var(--s)/1)) 90%, black);\n  }\n\n  .btn-outline.btn-accent.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-a,oklch(var(--a)/1)) 90%, black);\n  }\n\n  .btn-outline.btn-success.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-su,oklch(var(--su)/1)) 90%, black);\n  }\n\n  .btn-outline.btn-info.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black);\n  }\n\n  .btn-outline.btn-warning.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-wa,oklch(var(--wa)/1)) 90%, black);\n  }\n\n  .btn-outline.btn-error.btn-active {\n    background-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);\n    border-color: color-mix(in oklab, var(--fallback-er,oklch(var(--er)/1)) 90%, black);\n  }\n}\n\n.btn:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n}\n\n.btn.glass {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline-color: currentColor;\n}\n\n.btn.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}\n\n.btn-outline {\n  border-color: currentColor;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.btn-outline.btn-active {\n  --tw-border-opacity: 1;\n  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));\n  --tw-text-opacity: 1;\n  color: var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-primary {\n  --tw-text-opacity: 1;\n  color: var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-primary.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-secondary {\n  --tw-text-opacity: 1;\n  color: var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-secondary.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-accent {\n  --tw-text-opacity: 1;\n  color: var(--fallback-a,oklch(var(--a)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-accent.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-success {\n  --tw-text-opacity: 1;\n  color: var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-success.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-info {\n  --tw-text-opacity: 1;\n  color: var(--fallback-in,oklch(var(--in)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-info.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-warning {\n  --tw-text-opacity: 1;\n  color: var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-warning.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-error {\n  --tw-text-opacity: 1;\n  color: var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)));\n}\n\n.btn-outline.btn-error.btn-active {\n  --tw-text-opacity: 1;\n  color: var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)));\n}\n\n.btn.btn-disabled,\n  .btn[disabled],\n  .btn:disabled {\n  --tw-border-opacity: 0;\n  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));\n  --tw-bg-opacity: 0.2;\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n  --tw-text-opacity: 0.2;\n}\n\n.btn:is(input[type=\"checkbox\"]:checked),\n.btn:is(input[type=\"radio\"]:checked) {\n  --tw-border-opacity: 1;\n  border-color: var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));\n  --tw-text-opacity: 1;\n  color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));\n}\n\n.btn:is(input[type=\"checkbox\"]:checked):focus-visible, .btn:is(input[type=\"radio\"]:checked):focus-visible {\n  outline-color: var(--fallback-p,oklch(var(--p)/1));\n}\n\n@keyframes button-pop {\n  0% {\n    transform: scale(var(--btn-focus-scale, 0.98));\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.checkbox:focus {\n  box-shadow: none;\n}\n\n.checkbox:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: var(--fallback-bc,oklch(var(--bc)/1));\n}\n\n.checkbox:disabled {\n  border-width: 0px;\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));\n  opacity: 0.2;\n}\n\n.checkbox:checked,\n  .checkbox[aria-checked=\"true\"] {\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-color: var(--chkbg);\n  background-image: linear-gradient(-45deg, transparent 65%, var(--chkbg) 65.99%),\n      linear-gradient(45deg, transparent 75%, var(--chkbg) 75.99%),\n      linear-gradient(-45deg, var(--chkbg) 40%, transparent 40.99%),\n      linear-gradient(\n        45deg,\n        var(--chkbg) 30%,\n        var(--chkfg) 30.99%,\n        var(--chkfg) 40%,\n        transparent 40.99%\n      ),\n      linear-gradient(-45deg, var(--chkfg) 50%, var(--chkbg) 50.99%);\n}\n\n.checkbox:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-out;\n  background-image: linear-gradient(90deg, transparent 80%, var(--chkbg) 80%),\n      linear-gradient(-90deg, transparent 80%, var(--chkbg) 80%),\n      linear-gradient(0deg, var(--chkbg) 43%, var(--chkfg) 43%, var(--chkfg) 57%, var(--chkbg) 57%);\n}\n\n@keyframes checkmark {\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  100% {\n    background-position-y: 0;\n  }\n}\n\n.input input {\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));\n  background-color: transparent;\n}\n\n.input input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.input[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}\n\n.input-bordered {\n  border-color: var(--fallback-bc,oklch(var(--bc)/0.2));\n}\n\n.input:focus,\n  .input:focus-within {\n  box-shadow: none;\n  border-color: var(--fallback-bc,oklch(var(--bc)/0.2));\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: var(--fallback-bc,oklch(var(--bc)/0.2));\n}\n\n.input:has(> input[disabled]),\n  .input-disabled,\n  .input:disabled,\n  .input[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));\n  color: var(--fallback-bc,oklch(var(--bc)/0.4));\n}\n\n.input:has(> input[disabled])::-moz-placeholder, .input-disabled::-moz-placeholder, .input:disabled::-moz-placeholder, .input[disabled]::-moz-placeholder {\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));\n  --tw-placeholder-opacity: 0.2;\n}\n\n.input:has(> input[disabled])::placeholder,\n  .input-disabled::placeholder,\n  .input:disabled::placeholder,\n  .input[disabled]::placeholder {\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)));\n  --tw-placeholder-opacity: 0.2;\n}\n\n.input:has(> input[disabled]) > input[disabled] {\n  cursor: not-allowed;\n}\n\n.input::-webkit-date-and-time-value {\n  text-align: inherit;\n}\n\n.join > :where(*:not(:first-child)) {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-inline-start: -1px;\n}\n\n.join > :where(*:not(:first-child)):is(.btn) {\n  margin-inline-start: calc(var(--border-btn) * -1);\n}\n\n:where(.menu li:empty) {\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));\n  opacity: 0.1;\n  margin: 0.5rem 1rem;\n  height: 1px;\n}\n\n.menu :where(li ul):before {\n  position: absolute;\n  bottom: 0.75rem;\n  inset-inline-start: 0px;\n  top: 0.75rem;\n  width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));\n  opacity: 0.1;\n  content: \"\";\n}\n\n.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)),\n.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {\n  border-radius: var(--rounded-btn, 0.5rem);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  text-align: start;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-duration: 200ms;\n  text-wrap: balance;\n}\n\n:where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):is(summary):not(.active, .btn):focus-visible, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):is(summary):not(.active, .btn):focus-visible {\n  cursor: pointer;\n  background-color: var(--fallback-bc,oklch(var(--bc)/0.1));\n  --tw-text-opacity: 1;\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.menu li > *:not(ul, .menu-title, details, .btn):active,\n.menu li > *:not(ul, .menu-title, details, .btn).active,\n.menu li > details > summary:active {\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));\n  --tw-text-opacity: 1;\n  color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));\n}\n\n.menu :where(li > details > summary)::-webkit-details-marker {\n  display: none;\n}\n\n.menu :where(li > details > summary):after,\n.menu :where(li > .menu-dropdown-toggle):after {\n  justify-self: end;\n  display: block;\n  margin-top: -0.5rem;\n  height: 0.5rem;\n  width: 0.5rem;\n  transform: rotate(45deg);\n  transition-property: transform, margin-top;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  content: \"\";\n  transform-origin: 75% 75%;\n  box-shadow: 2px 2px;\n  pointer-events: none;\n}\n\n.menu :where(li > details[open] > summary):after,\n.menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {\n  transform: rotate(225deg);\n  margin-top: 0;\n}\n\n.mockup-phone .display {\n  overflow: hidden;\n  border-radius: 40px;\n  margin-top: -25px;\n}\n\n.mockup-browser .mockup-browser-toolbar .input {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  height: 1.75rem;\n  width: 24rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));\n  padding-left: 2rem;\n  direction: ltr;\n}\n\n.mockup-browser .mockup-browser-toolbar .input:before {\n  content: \"\";\n  position: absolute;\n  left: 0.5rem;\n  top: 50%;\n  aspect-ratio: 1 / 1;\n  height: 0.75rem;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 2px;\n  border-color: currentColor;\n  opacity: 0.6;\n}\n\n.mockup-browser .mockup-browser-toolbar .input:after {\n  content: \"\";\n  position: absolute;\n  left: 1.25rem;\n  top: 50%;\n  height: 0.5rem;\n  --tw-translate-y: 25%;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: currentColor;\n  opacity: 0.6;\n}\n\n@keyframes modal-pop {\n  0% {\n    opacity: 0;\n  }\n}\n\n@keyframes progress-loading {\n  50% {\n    background-position-x: -115%;\n  }\n}\n\n@keyframes radiomark {\n  0% {\n    box-shadow: 0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,\n      0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset;\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,\n      0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset;\n  }\n\n  100% {\n    box-shadow: 0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,\n      0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset;\n  }\n}\n\n@keyframes rating-pop {\n  0% {\n    transform: translateY(-0.125em);\n  }\n\n  40% {\n    transform: translateY(-0.125em);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes skeleton {\n  from {\n    background-position: 150%;\n  }\n\n  to {\n    background-position: -50%;\n  }\n}\n\n.table:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  text-align: right;\n}\n\n.table :where(th, td) {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  vertical-align: middle;\n}\n\n.table tr.active,\n  .table tr.active:nth-child(even),\n  .table-zebra tbody tr:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));\n}\n\n.table :where(thead tr, tbody tr:not(:last-child), tbody tr:first-child:last-child) {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-bottom-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));\n}\n\n.table :where(thead, tfoot) {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 700;\n  color: var(--fallback-bc,oklch(var(--bc)/0.6));\n}\n\n.table :where(tfoot) {\n  border-top-width: 1px;\n  --tw-border-opacity: 1;\n  border-top-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));\n}\n\n@keyframes toast-pop {\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n[dir=\"rtl\"] .toggle {\n  --handleoffsetcalculator: calc(var(--handleoffset) * 1);\n}\n\n.toggle:focus-visible {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-color: var(--fallback-bc,oklch(var(--bc)/0.2));\n}\n\n.toggle:hover {\n  background-color: currentColor;\n}\n\n.toggle:checked,\n  .toggle[aria-checked=\"true\"] {\n  background-image: none;\n  --handleoffsetcalculator: var(--handleoffset);\n  --tw-text-opacity: 1;\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n}\n\n[dir=\"rtl\"] .toggle:checked, [dir=\"rtl\"] .toggle[aria-checked=\"true\"] {\n  --handleoffsetcalculator: calc(var(--handleoffset) * -1);\n}\n\n.toggle:indeterminate {\n  --tw-text-opacity: 1;\n  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));\n  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,\n      calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,\n      0 0 0 2px var(--tglbg) inset;\n}\n\n[dir=\"rtl\"] .toggle:indeterminate {\n  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset,\n        calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset,\n        0 0 0 2px var(--tglbg) inset;\n}\n\n.toggle:disabled {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));\n  background-color: transparent;\n  opacity: 0.3;\n  --togglehandleborder: 0 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset,\n      var(--handleoffsetcalculator) 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset;\n}\n\n.btn-sm {\n  height: 2rem;\n  min-height: 2rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  font-size: 0.875rem;\n}\n\n.btn-md {\n  height: 3rem;\n  min-height: 3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 0.875rem;\n}\n\n.btn-square:where(.btn-sm) {\n  height: 2rem;\n  width: 2rem;\n  padding: 0px;\n}\n\n.btn-square:where(.btn-md) {\n  height: 3rem;\n  width: 3rem;\n  padding: 0px;\n}\n\n.btn-circle:where(.btn-xs) {\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\n\n.btn-circle:where(.btn-sm) {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\n\n.btn-circle:where(.btn-md) {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\n\n.btn-circle:where(.btn-lg) {\n  height: 4rem;\n  width: 4rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\n\n.join.join-vertical {\n  flex-direction: column;\n}\n\n.join.join-vertical .join-item:first-child:not(:last-child),\n  .join.join-vertical *:first-child:not(:last-child) .join-item {\n  border-end-start-radius: 0;\n  border-end-end-radius: 0;\n  border-start-start-radius: inherit;\n  border-start-end-radius: inherit;\n}\n\n.join.join-vertical .join-item:last-child:not(:first-child),\n  .join.join-vertical *:last-child:not(:first-child) .join-item {\n  border-start-start-radius: 0;\n  border-start-end-radius: 0;\n  border-end-start-radius: inherit;\n  border-end-end-radius: inherit;\n}\n\n.join.join-horizontal {\n  flex-direction: row;\n}\n\n.join.join-horizontal .join-item:first-child:not(:last-child),\n  .join.join-horizontal *:first-child:not(:last-child) .join-item {\n  border-end-end-radius: 0;\n  border-start-end-radius: 0;\n  border-end-start-radius: inherit;\n  border-start-start-radius: inherit;\n}\n\n.join.join-horizontal .join-item:last-child:not(:first-child),\n  .join.join-horizontal *:last-child:not(:first-child) .join-item {\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n  border-end-end-radius: inherit;\n  border-start-end-radius: inherit;\n}\n\n.join.join-vertical > :where(*:not(:first-child)) {\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: -1px;\n}\n\n.join.join-vertical > :where(*:not(:first-child)):is(.btn) {\n  margin-top: calc(var(--border-btn) * -1);\n}\n\n.join.join-horizontal > :where(*:not(:first-child)) {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-inline-start: -1px;\n}\n\n.join.join-horizontal > :where(*:not(:first-child)):is(.btn) {\n  margin-inline-start: calc(var(--border-btn) * -1);\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.top-1\\/4 {\n  top: 25%;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.bottom-1\\/2 {\n  bottom: 50%;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.-z-10 {\n  z-index: -10;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n\n.ml-2 {\n  margin-left: 0.5rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.ml-32 {\n  margin-left: 8rem;\n}\n\n.mt-12 {\n  margin-top: 3rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.box-border {\n  box-sizing: border-box;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.table {\n  display: table;\n}\n\n.hidden {\n  display: none;\n}\n\n.size-6 {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.h-1\\/3 {\n  height: 33.333333%;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.w-2\\/3 {\n  width: 66.666667%;\n}\n\n.w-3 {\n  width: 0.75rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-48 {\n  width: 12rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.min-w-72 {\n  min-width: 18rem;\n}\n\n.max-w-md {\n  max-width: 28rem;\n}\n\n.max-w-sm {\n  max-width: 24rem;\n}\n\n.max-w-xs {\n  max-width: 20rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.flex-auto {\n  flex: 1 1 auto;\n}\n\n.table-fixed {\n  table-layout: fixed;\n}\n\n.border-separate {\n  border-collapse: separate;\n}\n\n.border-spacing-y-4 {\n  --tw-border-spacing-y: 1rem;\n  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);\n}\n\n.origin-\\[0\\] {\n  transform-origin: 0;\n}\n\n.origin-top-right {\n  transform-origin: top right;\n}\n\n.-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-90 {\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n\n.self-center {\n  align-self: center;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.overflow-x-auto {\n  overflow-x: auto;\n}\n\n.rounded-box {\n  border-radius: var(--rounded-box, 1rem);\n}\n\n.rounded-lg {\n  border-radius: var(--radius);\n}\n\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-0 {\n  border-width: 0px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-t-2 {\n  border-top-width: 2px;\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n.border-indigo-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(79 70 229 / var(--tw-border-opacity));\n}\n\n.bg-\\[\\#f7f7f7\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(247 247 247 / var(--tw-bg-opacity));\n}\n\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.p-10 {\n  padding: 2.5rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-\\[10\\.32px\\] {\n  padding: 10.32px;\n}\n\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.pb-20 {\n  padding-bottom: 5rem;\n}\n\n.pt-3 {\n  padding-top: 0.75rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.font-sans {\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.placeholder-gray-400\\/70::-moz-placeholder {\n  color: rgb(156 163 175 / 0.7);\n}\n\n.placeholder-gray-400\\/70::placeholder {\n  color: rgb(156 163 175 / 0.7);\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n@keyframes enter {\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n\n@keyframes exit {\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n\n.fade-out {\n  --tw-exit-opacity: 0;\n}\n\n.duration-100 {\n  animation-duration: 100ms;\n}\n\n.duration-300 {\n  animation-duration: 300ms;\n}\n\n.ease-in {\n  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-out {\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\nhtml,body {\n  height:100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n#container{\n  display:flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n.border-high {\n  border-left: 4px solid red;\n}\n\n.border-medium {\n  border-left: 4px solid orange;\n}\n\n.border-low {\n  border-left: 4px solid green;\n}\n\n.btn\n{\n  min-height: 0;\n}\n\n.btn-circle\n{\n  height:20px;\n  width:20px;\n}\n\n.fade-out {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n\n.slide-up {\n  transform: translateY(-20px);\n  opacity: 0;\n  transition: all 0.5s ease-out;\n}\n\n.hover\\:border-blue-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.hover\\:bg-blue-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n\n.hover\\:outline-none:hover {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.hover\\:ring-blue-300:hover {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n\n.hover\\:ring-opacity-40:hover {\n  --tw-ring-opacity: 0.4;\n}\n\n.focus\\:border-blue-400:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n\n.focus\\:border-blue-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-blue-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-opacity-40:focus {\n  --tw-ring-opacity: 0.4;\n}\n\n.group:hover .group-hover\\:visible {\n  visibility: visible;\n}\n\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.peer:focus ~ .peer-focus\\:start-0 {\n  inset-inline-start: 0px;\n}\n\n.peer:focus ~ .peer-focus\\:-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.peer:focus ~ .peer-focus\\:scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.peer:focus ~ .peer-focus\\:font-medium {\n  font-weight: 500;\n}\n\n.peer:focus ~ .peer-focus\\:text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n\n.dark\\:border-gray-600:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n\n.dark\\:bg-blue-600:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-gray-800:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.dark\\:bg-gray-900:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n\n.dark\\:text-gray-300:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n\n.dark\\:text-gray-400:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.dark\\:text-white:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.dark\\:placeholder-gray-500:is(.dark *)::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n\n.dark\\:placeholder-gray-500:is(.dark *)::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n\n.dark\\:hover\\:bg-blue-700:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.dark\\:hover\\:bg-gray-700:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n\n.dark\\:hover\\:text-white:hover:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.dark\\:hover\\:ring-blue-400:hover:is(.dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity));\n}\n\n.dark\\:hover\\:ring-opacity-40:hover:is(.dark *) {\n  --tw-ring-opacity: 0.4;\n}\n\n.dark\\:focus\\:border-blue-300:focus:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\n}\n\n.dark\\:focus\\:border-blue-500:focus:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.dark\\:focus\\:ring-blue-800:focus:is(.dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));\n}\n\n.peer:focus ~ .peer-focus\\:dark\\:text-blue-500:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n\n@media (min-width: 640px) {\n  .sm\\:w-auto {\n    width: auto;\n  }\n}\n\n.peer:focus ~ .rtl\\:peer-focus\\:left-auto:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  left: auto;\n}\n\n.peer:focus ~ .rtl\\:peer-focus\\:translate-x-1\\/4:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  --tw-translate-x: 25%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/output.css":
/*!************************!*\
  !*** ./src/output.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./output.css */ "./node_modules/css-loader/dist/cjs.js!./src/output.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_firstLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/firstLoad.js */ "./functions/firstLoad.js");
/* harmony import */ var _functions_createNewProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/createNewProject.js */ "./functions/createNewProject.js");
/* harmony import */ var _functions_projectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/projectForm.js */ "./functions/projectForm.js");
/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output.css */ "./src/output.css");




(0,_functions_firstLoad_js__WEBPACK_IMPORTED_MODULE_0__.firstLoad)();



// Initial display of projects (if any)
(0,_functions_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map