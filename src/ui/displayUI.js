import Project from "../classes/Project";
import Task from "../classes/Task";
import { getFromLocalStorage, saveToLocalStorage } from "../localStorage/localStorage";
import clearContent from "./clearContent";
import clearProjects from "./clearProjects";
import displayContent from "./displayContent";
import displayProjects from "./displayProjects";

export default function displayUI() {
  // projectList DOM selector
  const projectList = document.querySelector('[data-project-list]');

  // project DOM selectors
  const addProjectBtn = document.querySelector('[data-add-project-btn]');
  const projectModal = document.querySelector('[data-project-modal]');
  const projectForm = document.querySelector('[data-project-form]');
  const submitProjectForm = document.querySelector('[data-submit-project-form]');
  const closeProjectForm = document.querySelector('[data-close-project-form]');
  const projectTitle = document.querySelector('[data-project-title]');
  const projectTasks = document.querySelector('[data-project-tasks]');

  // task DOM selectors
  const addTaskBtn = document.querySelector('[data-add-task-btn]');
  const taskModal = document.querySelector('[data-task-modal]');
  const taskForm = document.querySelector('[data-task-form]');
  const submitTaskForm = document.querySelector('[data-submit-task-form]');
  const closeTaskForm = document.querySelector('[data-close-task-form]');
  const taskTitle = document.querySelector('[data-task-title]');
  const taskDescription = document.querySelector('[data-task-description]');
  const taskDueDate = document.querySelector('[data-task-dueDate]');
  const taskPriority = document.querySelector('[data-task-priority]');

  if (getFromLocalStorage() == null) {
    saveToLocalStorage([]);
  }
  
  // projects array
  let projects = getFromLocalStorage();

  let lastClickedProject = null;

  // display all projects
  displayProjects();

  // addProject event listener
  addProjectBtn.addEventListener('click', () => {
    projectModal.showModal();
  });

  // addTask event listener
  addTaskBtn.addEventListener('click', () => {
    taskModal.showModal();
  });

  // projectForm event listener
  projectForm.addEventListener('submit', e => {
    e.preventDefault();
  });

  // taskForm event listener
  taskForm.addEventListener('submit', e => {
    e.preventDefault();
  });

  // submitProject event listener
  submitProjectForm.addEventListener('click', () => {
    const newProject = new Project(projectTitle.value);
    projects.push(newProject);
    lastClickedProject = newProject.id;
    saveToLocalStorage(projects);
    projectModal.close();
    clearProjects();
    displayProjects();
  });

  submitTaskForm.addEventListener('click', () => {
    const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value, taskPriority.value);
    projects.map(project => {
      if(project.id == lastClickedProject) {
	return project.tasks.push(newTask);
      }
      return project;
    });
    saveToLocalStorage(projects);
    taskModal.close();
    clearContent();
    displayContent(lastClickedProject);
  });

  closeProjectForm.addEventListener('click', () => {
    projectModal.close();
  });

  closeTaskForm.addEventListener('click', () => {
    taskModal.close();
  });

  projectList.addEventListener('click', (e) => {
    // click on li
    if(e.target.tagName.toLowerCase() === 'li') {
      lastClickedProject = e.target.dataset.index;
      clearContent();
      displayContent(lastClickedProject);
    }
    // click on span
    if(e.target.tagName.toLowerCase() === 'span') {
      lastClickedProject = e.target.parentNode.dataset.index;
      clearContent();
      displayContent(lastClickedProject);
    }
    // click on removeBtn
    if(e.target.tagName.toLowerCase() === 'button') {
      lastClickedProject = e.target.parentNode.dataset.index;
      clearContent();
      clearProjects();
      projects = projects.filter(project => {
	return project.id != lastClickedProject;
      });
      saveToLocalStorage(projects);
      projects = getFromLocalStorage();
      displayProjects();
    }

    // removetask event listener
    projectTasks.addEventListener('click', (e) => {
      if(e.target.tagName.toLowerCase() === 'button') {
	const currentTask = e.target.closest('.task').dataset.taskIndex;
	console.log(currentTask);
	const currentProject = e.target.closest('.task').dataset.projectIndex;
	console.log(currentProject);
	const projectIndex = projects.findIndex(project => {
	  return project.id == currentProject;
	})
	console.log(projectIndex);
	const taskIndex = projects[projectIndex].tasks.findIndex(task => {
	  return task.id == currentTask;
	})
	console.log(taskIndex);
	projects[projectIndex].tasks.splice(taskIndex, 1);
	console.log(projects);
	saveToLocalStorage(projects);
	projects = getFromLocalStorage();
	clearContent();
	displayContent(lastClickedProject);
      }
    });
  });
}
