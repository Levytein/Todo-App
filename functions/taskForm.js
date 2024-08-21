import Project, {
  Task,
  addProject,
  getProjects,
  addTask,
  getTasks,
} from "./createNewProject.js";
import { selectedProject } from "./projectForm.js";


export const createTaskForm = () => {
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

export const displayTasks = () => {
  if (!selectedProject) {
    console.error("No project selected!");
    return;
  }

  const tasksContainer = document.getElementById("taskSection");

  // Clear the existing content
  tasksContainer.innerHTML = `
    <div id="taskList" class="flex flex-col align-middle mx-auto w-2/3 mt-12">
        <h2 class="text-6xl">${selectedProject.title}</h2>
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

  const selectedProjectTasks = selectedProject.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
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
export const editTask = (index) => {
  console.log("Editing task at index:", index);
  console.log("Selected project tasks:", selectedProject.tasks);

  // Validate index
  if (index < 0 || index >= selectedProject.tasks.length) {
    console.error("Invalid task index:", index);
    return;
  }

  const task = selectedProject.tasks[index];
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
export const submitTaskForm = () => {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  const priority = document.getElementById("taskPriority").textContent;
  
  const task = new Task(selectedProject, title, description, dueDate, priority);
  addTask(task);
  document.getElementById("projectTaskFormContainer").hidden = true;
  document.getElementById("projectTaskForm").reset();
  displayTasks();
};
const removeTaskWithAnimation = (index) => {
  // Validate index
  if (index < 0 || index >= selectedProject.tasks.length) {
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
      selectedProject.tasks.splice(index, 1);
      displayTasks(); // Optionally re-render the task list
    }, 500); // This duration matches the CSS transition duration
  }
};