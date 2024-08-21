import { firstLoad } from '../functions/firstLoad.js';
import { Project, addProject, getProjects } from '../functions/createNewProject.js';
import {createProjectForm , displayProjects } from '../functions/projectForm.js';
import './output.css';
firstLoad();



// Initial display of projects (if any)
displayProjects();