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
export const addProject = (project) => {
    projects.push(project);
};

// Function to get all projects
export const getProjects = () => {
    return projects;
};

// Function to add a new task
export const addTask = (task) => {
    tasks.push(task);
    task.project.addTask(task); // Add task to its project
};

// Function to get all tasks
export const getTasks = () => {
    return tasks;
};

// Export classes and functions
export { Project, Task };