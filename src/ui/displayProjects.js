import { getFromLocalStorage } from "../localStorage/localStorage";

export default function displayProjects() {
  const projects = getFromLocalStorage();
  const projectList = document.querySelector('[data-project-list]');
  projects.forEach(project => {
    const projectUI = document.createElement('li');
    const projectTitle = document.createElement('span');
    const projectIcon = document.createElement('span');
    const removeProjectBtn = document.createElement('button');
    projectUI.classList.add('project');
    projectUI.dataset.index = project.id;
    projectTitle.textContent = project.title;
    projectIcon.innerHTML = '<i class="fa fa-house"></i>'
    removeProjectBtn.classList.add('remove-project-btn');
    removeProjectBtn.innerHTML = '<i class="fa fa-xmark"></i>';
    projectUI.appendChild(projectIcon);
    projectUI.appendChild(projectTitle);
    projectUI.appendChild(removeProjectBtn);
    projectList.appendChild(projectUI);
  });
}
