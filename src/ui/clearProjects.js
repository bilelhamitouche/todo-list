
export default function clearProjects() {
  const projectList = document.querySelector('[data-project-list]');
  while (projectList.firstChild) {
    projectList.removeChild(projectList.firstChild);
  }
}
