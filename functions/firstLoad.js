import  Project,{Task,addProject,getProjects,addTask} from './createNewProject.js';
import { sortByDate,displayTasksDueToday,displayTasksDueThisWeek } from './sortDates.js';
export const firstLoad = () =>
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
    sortByDate();
  }
);
document.getElementById("today").addEventListener("click",()=>
  {
    console.log("inbox");
    displayTasksDueToday();
  }
);
document.getElementById("thisWeek").addEventListener("click",()=>
  {
    console.log("inbox");
    displayTasksDueThisWeek();
  }
);
};


   
