import  Project,{addProject,getProjects} from './createNewProject.js';
import { createTaskForm, displayTasks} from './taskForm.js';
import { createNewProjects } from './eventListeners.js';
export let selectedProject = null;

export const createProjectForm = ()=>
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

export const displayProjects = () => {
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
  
    createNewProjects();
    const projects = getProjects();
  
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
    displayTasks();
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
      displayTasks();
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
displayTasks();
};