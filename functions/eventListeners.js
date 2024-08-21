import { createProjectForm,displayProjects } from "./projectForm";
import  {Project,addProject,getProjects} from './createNewProject.js';

export const createNewProjects = () =>
{
    document.getElementById('addProjectBtn').addEventListener('click', () => {
        if (!document.getElementById('taskFormContainer')) {
            createProjectForm();
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
            const newTask = new Project(title);
    
            // Add the new task to the projects array
            addProject(newTask);
    
            // Display the updated projects list
            displayProjects();
    
            // Reset the form
            e.target.reset();
    
            // Hide the form after submission
            document.getElementById('taskFormContainer').hidden = true;
        });
    });
};