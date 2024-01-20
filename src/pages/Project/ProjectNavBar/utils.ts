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


export const manageFixedNavbarButtonVisibility = (
  e: MouseEvent,
  prevButtonEl: HTMLAnchorElement | null,
  nextButtonEl: HTMLAnchorElement | null,
) => {
  const PROXIMITY_FACTOR = 2.5;
  const { clientWidth } = document.body;
  if (nextButtonEl) {
    const shouldDisplayNextButton = (clientWidth - e.clientX) / PROXIMITY_FACTOR - 25 <= nextButtonEl.offsetWidth;
    if (shouldDisplayNextButton) {
      nextButtonEl.style.transform = '';
    } else {
      nextButtonEl.style.transform = `translateX(${Math.max(nextButtonEl.offsetWidth)}px)`;
    }
  }
  if (prevButtonEl) {
    const shouldDisplayPrevButton = e.clientX / PROXIMITY_FACTOR - 25 <= prevButtonEl.offsetWidth;
    if (shouldDisplayPrevButton) {
      prevButtonEl.style.transform = '';
    } else {
      prevButtonEl.style.transform = `translateX(-${Math.max(prevButtonEl.offsetWidth)}px)`;
    }
  }
};

export const addTransitionClassToNavButton = (element: HTMLAnchorElement | null) => {
  if (!element) return;

  element.style.transform = 'translateX(50px)';
  setTimeout(() => {
    if (!element) return;

    element.classList.add('Loaded');
  }, 0);
};
