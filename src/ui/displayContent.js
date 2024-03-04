import { getFromLocalStorage } from "../localStorage/localStorage";

export default function displayContent(currentProjectId) {
  // DOM selectors
  const projectHeader = document.querySelector('[data-project-header]');
  const projectTasks = document.querySelector('[data-project-tasks]');
  const addTaskBtn = document.querySelector('[data-add-task-btn]');

  const projects = getFromLocalStorage();
  const currentProject = projects.filter(project => {
    return project.id === parseInt(currentProjectId);
  });
  projectHeader.textContent = currentProject[0].title;
  currentProject[0].tasks.forEach(task => {
    const taskUI = document.createElement('li');
    const taskRight = document.createElement('div');
    const taskLeft = document.createElement('div');
    const taskTitle = document.createElement('span');
    const taskDescription = document.createElement('span');
    const taskDueDate = document.createElement('span');
    const taskPriority = document.createElement('span');
    const removeTaskBtn = document.createElement('button');
    taskUI.classList.add('task');
    taskUI.dataset.taskIndex = task.id;
    taskUI.dataset.projectIndex = currentProject[0].id;
    taskRight.classList.add('task-right');
    taskLeft.classList.add('task-left');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.title;
    taskDescription.classList.add('task-description');
    taskDescription.textContent = task.description;
    taskDueDate.classList.add('task-duedate');
    taskDueDate.textContent = task.dueDate;
    taskPriority.classList.add('task-priority');
    taskPriority.textContent = task.priority;
    removeTaskBtn.classList.add('remove-task-btn');
    removeTaskBtn.innerHTML = '<i class="fa fa-xmark"></i>';
    taskLeft.appendChild(taskTitle);
    taskLeft.appendChild(taskDescription);
    taskRight.appendChild(taskDueDate);
    taskRight.appendChild(taskPriority);
    taskRight.appendChild(removeTaskBtn);
    taskUI.appendChild(taskLeft);
    taskUI.appendChild(taskRight);
    projectTasks.appendChild(taskUI);
  });
  addTaskBtn.style.display = 'block';
}
