import { trackElementVisibility } from '../../../utils/domUtils';
import type { Dispatch, SetStateAction } from 'react';
import type { Project } from '../../../types/data/project';
import { QueryClient } from '@tanstack/react-query';

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

export const addTransitionClassToNavButton = (element: HTMLAnchorElement | null, transformXValue: number) => {
  if (!element) return;

  element.style.transform = `translateX(${transformXValue}px)`;
  setTimeout(() => {
    if (!element) return;

    element.classList.add('Loaded');
  }, 0);
};

export const addHiddenClassToNavButton = (element: HTMLAnchorElement | null, isStaticNavbarInView: boolean) => {
  if (!element) return;

  if (isStaticNavbarInView) {
    element.classList.add('Hidden');
  } else {
    element.classList.remove('Hidden');
  }
};

export const toggleLoadingOnUnloadedProject = (
  queryClient: QueryClient,
  projectId: string | null,
  setIsPageLoading: Dispatch<SetStateAction<boolean>>,
) => {
  if (!projectId) return;
  const cachedProject = queryClient.getQueryData<Project>(['project', projectId]);
  if (cachedProject) return;
  setIsPageLoading(true);
};

export const manageProjectNavbarEventListeners = (
  isTouchDevice: boolean,
  setIsStaticNavbarInView: Dispatch<SetStateAction<boolean>>,
  staticNavbarRef: React.MutableRefObject<HTMLDivElement | null>,
  fixedPrevArrowRef: React.MutableRefObject<HTMLAnchorElement | null>,
  fixedNextArrowRef: React.MutableRefObject<HTMLAnchorElement | null>,
) => {

  const toggleFixedNavbarVisibility = () => {
    if (isTouchDevice) {
      setIsStaticNavbarInView(true);
      return;
    }

    const isInView = trackElementVisibility(staticNavbarRef.current);
    setIsStaticNavbarInView(isInView);
  };

  const toggleFixedNavbarButtonVisibility = (e: MouseEvent) => {
    manageFixedNavbarButtonVisibility(e, fixedPrevArrowRef.current, fixedNextArrowRef.current);
  };

  toggleFixedNavbarVisibility();
  window.addEventListener('scroll', toggleFixedNavbarVisibility);
  window.addEventListener('resize', toggleFixedNavbarVisibility);
  window.addEventListener('mousemove', toggleFixedNavbarButtonVisibility);

  return () => {
    window.removeEventListener('scroll', toggleFixedNavbarVisibility);
    window.removeEventListener('resize', toggleFixedNavbarVisibility);
    window.removeEventListener('mousemove', toggleFixedNavbarButtonVisibility);
  };
};
