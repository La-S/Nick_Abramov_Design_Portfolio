import type { Project } from '../../../types/data/project';

interface NavProjects {
  prev: null | Project;
  next: null | Project;
}

export const getNavProjects = (project: Project, projects: Array<Project>): NavProjects => {
  const navProjects: NavProjects = { prev: null, next: null };
  
  const projectI = projects.findIndex((p) => p.id === project.id);
  if (projectI < projects.length - 1) navProjects.next = projects[projectI + 1];
  if (projectI > 0) navProjects.prev = projects[projectI - 1];

  return navProjects;
};

