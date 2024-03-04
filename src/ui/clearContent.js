

export default function clearContent() {
  const projectHeader = document.querySelector('[data-project-header]');
  const projectTasks = document.querySelector('[data-project-tasks]');
  const addTaskBtn = document.querySelector('[data-add-task-btn]');
  projectHeader.textContent = '';
  while(projectTasks.firstChild) {
    projectTasks.removeChild(projectTasks.firstChild);
  }
  addTaskBtn.style.display = 'none';
}
